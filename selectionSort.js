/**
 * Implement the selection sort algorithm to sort the array in ascending order.
 *
 * @param {number[]} arr - The array of numbers to sort.
 */
function selectionSort(arr) {
    // TODO: Implement the selection sort algorithm.
    // Hints:
    // - Use a loop to iterate over each element in the array.
    // - Within this loop, assume the current position is the minimum.
    // - Use an inner loop to find the actual minimum element in the remaining unsorted portion.
    // - Swap the found minimum element with the element at the current position.
}

// Test cases
let testArray1 = [64, 25, 12, 22, 11, 75, 43, 58, 19];
selectionSort(testArray1);
console.log("Sorted Array 1:", testArray1);

let testArray2 = [29, 10, 14, 37, 13, 48, 76, 5, 33];
selectionSort(testArray2);
console.log("Sorted Array 2:", testArray2);

let testArray3 = [90, 70, 50, 80, 60, 85, 65, 55, 75];
selectionSort(testArray3);
console.log("Sorted Array 3:", testArray3);
