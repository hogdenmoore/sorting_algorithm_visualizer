import './App.css';
import React, { useState, useEffect, ChangeEvent} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignal } from '@fortawesome/free-solid-svg-icons'
import Navbar from './components/Navbar/Navbar';
import Blocks from "./components/Blocks/Blocks"
import {Algos} from "./constantsAndTypes/types"
import selectionSort from "./algorithms/selection"
import insertionSort from './algorithms/insertion';
import mergesort from './algorithms/merge';
import quicksort from "./algorithms/quick"



const App = () => {
  const [algo, setAlgo] = useState<Algos>("selection")
  const [speed, setSpeed] = useState<number>(10)
  const [isSorting, setIsSorting] = useState<boolean>(false)
  const [blocks, setBlocks] = useState<number[]>([])
  const [len, setLen] = useState<number>(20)
  const [completed, setCompleted] = useState<boolean>(true)
  const [swaps, setSwap] = useState<(number|null)[]>([])
  const [compares, setCompare] = useState<(number|null)[]>([])
  const [sorted, setSorted] = useState<number[]>([])


  const generateRandomArray = (len: number) => {
    
    const shuffle = (array: number[]): void => {
      array.sort(() => Math.random() - .5)
    }
    const randomArray : Array<number> = Array.from(Array(len + 1).keys()).slice(1)
    shuffle(randomArray)
    const currentBlocks : number[] = []
    for(let i = 0; i < randomArray.length; i++){
      currentBlocks.push(randomArray[i])
    }
    setBlocks(currentBlocks)
  }

  useEffect((): void => {
		generateRandomArray(len)
	}, [len, algo])
  

  const handleStart =  () => {
    setIsSorting(true)
    const visualizeAlgo = (generator: (number | number[] | null)[][]) => {
      (function loop(i:number){
        setTimeout(() => {
          const [j, k, array, index] = generator[i]
          setCompare([j as (number|null), k as (number|null)])
					setSwap([])
          if(index !== null){
						setSorted((prevState) => (
							[...prevState, index as number]
						))
					}

          if (array) {
            setBlocks(array as number[])
						setSwap([j as (number|null), k as (number|null)])
          }
          if (++i < generator.length){
						loop(i)
          } else {
            setIsSorting(false)
          }
        }, 1000/speed)
      })(0)
    }

		if (algo === 'selection'){
       visualizeAlgo(selectionSort(blocks))
      } else if (algo === "insertion") {
        visualizeAlgo(insertionSort(blocks))
      } else if (algo == "merge") {
        visualizeAlgo(mergesort(blocks))
      } else if (algo == "quick") {
        visualizeAlgo(quicksort(blocks))
      }
    
  }
  const handleLength = (event: ChangeEvent<HTMLInputElement>): void => {
    if(isSorting){
      return
    }
    setSorted([])
    setLen(Number(event.target.value))
  }
  const handleNew = (): void => {
    if(isSorting){
      return
    }
    setSorted([])
    generateRandomArray(len)
  }
  const handleAlgo = (event: ChangeEvent<HTMLSelectElement>) => {
    if(isSorting){
      return
    }
    setSorted([])
    const value = event.target.value as Algos
    setAlgo(value)
  }

  const handleSpeed = (event: ChangeEvent<HTMLInputElement>): void => {
    if(isSorting){
      return
    }
    setSpeed(Number(event.target.value))
  }
  

  return (
    <div className="App">
      <div className="header">Sorting Visualizer  <FontAwesomeIcon icon={faSignal} /></div>
      
      <Blocks blocks={blocks} 
              swaps={swaps} 
              compares={compares} 
              sorted={sorted}
              />
      <Navbar handleStart={handleStart}
              handleLength={handleLength}
              handleNew={handleNew}
              handleAlgo={handleAlgo} 
              handleSpeed={handleSpeed}
              speed={speed}
              len={len}
              algo={algo}
              isSorting={isSorting}
               />
    </div>
  );
}

export default App;
