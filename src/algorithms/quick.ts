import {swap} from "./utils"
let generator: (number | number[] | null)[][] = []


const quicksort = (getArr: number[]):(number | number[] | null)[][]  =>{
    const arr = [...getArr]
    generator = []

    quickHelper(arr, 0 , arr.length - 1)

    return generator
}

const quickHelper = (arr: number[], left: number, right: number) =>{
    if(left >= right) {
        if(left === right) generator.push([null, null, null, left])
        return
    } 
    const pivot = left + Math.floor(Math.random() * (right - left))

    swap(arr, left, pivot)
    generator.push([left, pivot, [...arr], null])

    const mid = partition(arr, left, right)

    quickHelper(arr, left, mid - 1)
    quickHelper(arr, mid + 1, right)

    return
}

const partition = (arr: number[], left: number, right: number): number => {
    const pivot = left
    let j = left

    for(let i = left + 1; i <= right; i += 1){
        generator.push([i, pivot, null, null])
        if (arr[i] <= arr[pivot]) {
            j += 1
            swap(arr, i, j )
            generator.push([i, j, [...arr], null])
        }
    }
    swap(arr, pivot, j)
    generator.push([pivot, j, [...arr], null])
    generator.push([null, null, null, j])
    return j
}

export default quicksort