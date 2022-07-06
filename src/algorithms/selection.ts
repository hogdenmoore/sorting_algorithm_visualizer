import {swap} from "./utils"

const selectionSort = (getArr: number[]): (number | number[] | null)[][] => {
    let arr = [...getArr]
    const generator = []

    for (let i = 0; i < arr.length; i += 1) {
        let minI = i
        for (let j = i + 1; j < arr.length; j += 1) {
            generator.push([minI, j, null, null])
            if (arr[j] < arr[minI]) {
                minI = j
            }
        }
        arr = swap(arr, i, minI)
        
        generator.push([i, minI, [...arr], null])
        generator.push([null, null, null, i])
    }
    
    return generator
    
    
}

export default selectionSort