export const swap = (arr: number[], i: number, j: number): number[] => {
    const helper = arr[i]
    arr[i] = arr[j]
    arr[j] = helper
    return arr
}

  