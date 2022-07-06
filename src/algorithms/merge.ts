let generator: (number | number[] | null)[][] = []


const mergesort = (getArr: number[]):(number | number[] | null)[][]=> {
    
    const arr = [...getArr]
    generator = []
    
    mergesortAlgo(arr, 0, arr.length - 1)
    
    for (let i = 0; i < arr.length; i += 1){
        generator.push([null, null, null, i])
    }
    
    return generator
}

const mergesortAlgo = (arr: number[], left: number, right: number) =>{ 
    
    if (left >= right) {
        return 
    }

    const middle = Math.floor((left + right)/2)
    
    mergesortAlgo(arr, left, middle)
    mergesortAlgo(arr, middle + 1, right)
    
    merge(arr, left, middle, right)
}

const merge = (arr: number[], left:number, middle:number, right :number) => {
    
    
    let i = left
    let j = middle + 1
    console.log(arr, left, middle, right) // 0, 0, 1
    const auxArr = []

    while (i < middle + 1 && j < right + 1) {
        generator.push([i , j, null, null])
        if (arr[i] < arr[j]) {
            auxArr.push(arr[i])
            i += 1
        } else {
            auxArr.push(arr[j])
            j += 1
        }
    }
    
    while (i < middle + 1) {
        generator.push([i, null, null, null])
        auxArr.push(arr[i])
        i += 1
    }
    
    while (j < right + 1) {
        generator.push([null, j, null, null])
        auxArr.push(arr[j])
        j += 1
    }
    
    for (i = 0; i <= right - left ; i +=1) {
        arr[i + left] = auxArr[i]
        generator.push([i + left, null, [...arr], null])
    }
   
}


export default mergesort