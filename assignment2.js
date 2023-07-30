//------2 no answer------


function filterEvenNum(arr) {
    const result = arr.filter(a => a % 2 == 0)
    return result;
}
const evenNum = filterEvenNum([12, 34, 45, 23, 6, 78, 54, 90])
console.log(evenNum)