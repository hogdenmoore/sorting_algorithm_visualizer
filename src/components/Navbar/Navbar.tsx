import React, {ChangeEvent, ChangeEventHandler, MouseEvent} from 'react'
import './Navbar.css'
import {Algos} from "../../constantsAndTypes/types"


interface NavProps {
    handleStart: () => void,
    handleLength: (event: ChangeEvent<HTMLInputElement>) => void,
    handleNew: (event: MouseEvent<HTMLButtonElement>) => void,
    handleAlgo: (e: ChangeEvent<HTMLSelectElement>) => void,
    speed: number,
    len: number,
    algo: Algos,
    isSorting: boolean,
    handleSpeed: (event: ChangeEvent<HTMLInputElement>) => void
  }

const Navbar = ({handleStart, 
    handleLength,
    handleNew,
    handleAlgo, 
    speed, 
    len,
    handleSpeed,
    algo
    }: NavProps) => {
    

    const boxes = algo !== "merge" ? (
        <div className="flex2">
        <div className="yellow">
            <div className="yellowbox"></div>
            <div className="compare">Comparing</div>
        </div>
        <div className="red">
            <div className="redbox"></div>
            <div className="swap">Swapping</div>
        </div>
        <div className="green">
            <div className="greenbox"></div>
            <div className="sort">Sorted</div>
        </div>
    </div>
          ) : <div className="flex2">
          <div className="yellow">
              <div className="yellowbox"></div>
              <div className="compare">Comparing</div>
          </div>
          <div className="red">
              <div className="redbox"></div>
              <div className="swap">Taking From Aux Array</div>
          </div>
          <div className="green">
              <div className="greenbox"></div>
              <div className="sort">Sorted</div>
          </div>
      </div>;


    return (
        <nav>
            {boxes}
            <div className="flex">
                <div className="sliderName">
                    <div>Speed</div>
                    <input type="range" min="1" max="100" defaultValue={speed} className="speed" onChange={(event: ChangeEvent<HTMLInputElement>) => {handleSpeed(event)}}></input>
                </div>
                <div className="sliderName">
                    <div>Length</div>
                    <input type="range" min="10" max="250" defaultValue={len} className="length" onChange={(event: ChangeEvent<HTMLInputElement>) => {handleLength(event)}}></input>
                </div>
                <button className="button" onClick={(event: MouseEvent<HTMLButtonElement>): void => {handleStart()}}>Sort</button>
                <button onClick={(event: MouseEvent<HTMLButtonElement>): void => {handleNew(event)}}>New</button>
                <select defaultValue={algo} onChange={(e: ChangeEvent<HTMLSelectElement>) => handleAlgo(e)} className="algorithm">
                    <option value="merge">Merge Sort</option>
                    <option  value="selection">Selection Sort</option>
                    <option value="insertion">Insertion Sort</option>
                    <option value="quick">Quicksort</option>
                </select>
            </div>


        </nav>
    )
}

export default Navbar