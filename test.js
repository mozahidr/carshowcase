const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'];
// modify an array without changing the original array
const modify = months.with(3, 'April');
// toSpliced() safely splicing an arry without changing the original array.
const spliced = months.toSpliced(1, 3);
// toSorted sorting an array without modifying the original arry
const sorted = months.toSorted();
// reverse 
const reverse = months.reverse();

const num = [1, 2, 3, 4, 5, 6, 7, 8];
// find last
let lastNum = num.findLast((x) => x > 6);
// find index
let indx = num.findIndex((x) => x > 6);

console.log(modify);