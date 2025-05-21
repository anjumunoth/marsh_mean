arr = [10, 20, 30, 43, 57, 23, 60];
// get all even numbers in the array into another array;

var resArr = arr.filter((item) => item % 2 == 0);
console.log(resArr);//[10,20,30,60];

/* function filter(innerFunc)
{   resArr=[];
    for(var i=0;i<this.length;i++)
    {
        if (innerFunc(this[i]))
        {
            resArr.push(this[i]);
        }
        
    }
    return resArr;
}
 */
arr = [10, 20, 30, 43, 57, 23, 60];
// find -- get the first element which satisfies the predicate function
var data = arr.find(item => item > 35);
console.log("Data", data);//43

var dataArr = arr.filter(item => item > 35);
console.log("Data", dataArr);//[43,57,60]

var data = arr.find(item => item > 105);
console.log("Data", data);//UD

var dataArr = arr.filter(item => item > 105);
console.log("Data", dataArr);//[]

// findIndex -- get the index of the first element which satisfies the predicate function
arr = [10, 20, 30, 43, 57, 23, 60];
var pos = arr.findIndex(item => item > 35);
console.log("Pos", pos);//3
var pos = arr.findIndex(item => item > 105);
console.log("Pos", pos);//-1

// filterIndex -- no method

/*map -- 
    -- works only on arrays
    -- return an array of same size as the array on which the map is applied
    -- map's lambda -- how to transform the array elements
    -- return a new array with the transformed elements
*/

var fruits = ["apple", "pineapple", "banana", "guavas", "mango"];
var resArr = fruits.map(item => item.toUpperCase());// size of resArr=5
console.log(resArr);//array in upper case

//map array elements to UI elements 
var resArr = fruits.map(item => {
    if (item.length > 6) {
        return item.toUpperCase();
    }
    else {
        return item.toLowerCase();
    }
});// size of resArr=5
console.log(resArr);//["apple",'PINEAPPLE"..]

var fruits = ["apple", "pineapple", "banana", "guavas", "mango"];
var resArr = fruits.map(item => {
    if (item.length > 6) {
        return item.toUpperCase();
    }

});// size of resArr=5
console.log(resArr);//[UD,"PINEAPPLE",Ud,ud,ud]

