import {swap} from "./utils"

const insertionSort = (getArr: number[]):(number | number[] | null)[][]=> {
    let arr = [...getArr]
    const generator = []

    for (let i = 0; i < arr.length; i += 1) {
        let value = i
        while (value > 0 && arr[value] < arr[value - 1]){
            arr = swap(arr, value, value - 1)
            generator.push([value, value - 1, null, null])
            generator.push([value, value - 1, [...arr], null])
            value -= 1
        }
    }
    for (let i = 0; i < arr.length; i += 1){
        generator.push([null, null, null, i])
    }
    
    return generator

}

export default insertionSort