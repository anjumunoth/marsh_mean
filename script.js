
//alert("Welcome to javascript");

// declaration of var -- var, let, const
var i = 10; // data type of i -- number ; type inference 
i = true;//data type of i -- boolean
i = new Date();// data type of i -- Date
i = "hello";//data type of i -- string
i = 'a';//data type of i -- string 
var i = 'a';// var -- redeclare it within its scope ; scope of a variable declared with a var -- functional scope
var i = [10, 20, 30];//data type of i -- array object
i = [10, true, 30];// array -- same type, different type

i = {
    empId: 101,
    empName: "sara",
    salary: 123.67
};//data type of i -- object

//hoisting of declarations(not initialisations); declaration will be hoisted to top of the scope in which they are declared
j = 100;
console.log("J:" + j);// 100
var j;


console.log("K:" + k);// declared; undefined; 
var k = 300;// var k; k=300;

// let -- block scope ; redclaration within the scope -- error
var sum = 0;
for (let a = 0; a < 10; a++) {

    // let b = 10;
    // var b = 20;// syntax error -- have the same var declared using both var and let; ambiguity -- scope 
    // console.log("Inside the for loop B=", b);//;
    sum += a;
}
console.log("Sum:" + sum);
//console.log("A:", a);// Reference Error exception(during runtime)

// const -- constant ; once assigned, cant change its value; declaration and initialisation is mandatory; best practice -- all caps
const PI = 3.14;
//PI = 3.142;// throw me an exception
const emp = {
    empId: 101,
    empName: "sara",
    salary: 123.67
}
console.log("Emp details", emp);
/* emp = {
    empId: 999,
    empName: "sara",
    salary: 123.67
};
console.log("Emp details after replacement", emp);//exception
 */

emp.empId = 999;
emp.deptId = "D1";
console.log("Emp details after replacement", emp);

function myFunc(p1, p2) {
    console.log(p1 + p2);
}

myFunc(10, 20);//30
myFunc(10, "20");//"1020"; 
myFunc(10, true);//11
myFunc("10", "20");//"1020"
myFunc(true, true);//2

myFunc();//NaN; p1-Ud; p2-UD; 
myFunc(1);//1+UD=NaN
myFunc(1, 2);//3
myFunc(1, 2, 3);//3; ignore the other params

// any number of params -- sum of all params
sum = 0;
function sumOfAllParams() {
    for (i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    console.log("Sum : " + sum);
}

sumOfAllParams(0);//0
sumOfAllParams(1, 2, 3);//6
sumOfAllParams(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);//61

// In ES6 -- rest parameters -- only one rest parameter; rest param should be the last param in the param list; use it when not sure about the number of arguments
sum = 0;
function sumOfAllParamsWithRestParam(...p1) {
    for (i = 0; i < p1.length; i++) {
        sum += p1[i]
    }
    console.log("Sum : " + sum);
}

sumOfAllParamsWithRestParam(0);//0
sumOfAllParamsWithRestParam(1, 2, 3);//6
sumOfAllParamsWithRestParam(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);//61

/* sum = 0;
function sumOfAllParamsWith2RestParams(...p1,...p2) {
        for (i = 0; i < p1.length; i++) {
        sum += p1[i]
    }
    console.log("Sum : " + sum);
}

sumOfAllParamsWith2RestParams(1, 2, 3);//6
 */

function sumOfAllParams2(p1, ...p2) {
    sum = p1;
    for (i = 0; i < p2.length; i++) {
        sum += p2[i]
    }
    console.log("Sum : " + sum);
}

sumOfAllParams2(0);//p1=0;p2=empty array;0
sumOfAllParams2(0, 1, 2, 3);//p1=0;p2=[1,2,3];6
sumOfAllParams2();//p1=ud;p2=empty; sum=UD;

/* function sumOfAllParams3(...p1, p2) {
    sum = p2;
    for (i = 0; i < p1.length; i++) {
        sum += p1[i]
    }
    console.log("Sum : " + sum);
} */

// sumOfAllParams3(1, 2, 3, 4);//p1=[1,2,3,4]; p2 will always be UD; p2 -- unreachable code

function modifyArr(arr, startPos, deleteCount, ...insertElements) {

}
var fruits = ["apple", "pineapple", "banana", "guavas", "mango"];
modifyArr(fruits, 2, 1);//["apple","pineapple","guavas","mango"]

var fruits = ["apple", "pineapple", "banana", "guavas", "mango"];
modifyArr(fruits, 1, 1, "jackfruit");//["apple","banana","guavas","mango","jackfruit"]

var fruits = ["apple", "pineapple", "banana", "guavas", "mango"];
modifyArr(fruits, 1, 1, "jackfruit", "dragon fruit", "kiwi");
//["apple","banana","guavas","mango","jackfruit","dragon fruit","kiwi"]

var fruits = ["apple", "pineapple", "banana", "guavas", "mango"];
modifyArr(fruits, 0, 0, "jackfruit", "dragon fruit", "kiwi");
//["apple","pineapple","banana","guavas","mango","jackfruit","dragon fruit","kiwi"];

var fruits = ["apple", "pineapple", "banana", "guavas", "mango"];
fruits.splice(1, 1, "jackfruit", "dragon fruit", "kiwi");
console.log(fruits);
//["apple","banana","guavas","mango","jackfruit","dragon fruit","kiwi"];

// function literal;

var myFunc3 = function divideTwoNums(p1, p2) {
    return p1 / p2;
}
// var result = divideTwoNums(10, 2);// error -- Reference error 
// console.log("Result of divide two nums", result);//5
var result = myFunc3(10, 2);//5
console.log("Result of divide two nums", result);//5

// Anonymous function -- function without a name

var myFunc4 = function (p1, p2) {
    return p1 * p2;
}
var result = myFunc4(10, 2);//20
console.log("Result of Multiply two nums", result);//20

var myFunc5 = function divideTwoNums(p1, p2) {
    return p1 % p2;
}

// IIFE -- immediately invoked function expression -- function will be called only once and immediately
// usages of anonymous function -- best prcatice
// 1. in objects
// 2. pass a function as a parameter to another function
var empObj = {
    empId: 101, empName: "sara", salary: 111.11,
    // display: function showDetails () {
    display: function () {

        console.log("Emp Id:", this.empId);
        console.log("Emp Name:", this.empName);
        console.log("Emp Salary:", this.salary);
    }
}

empObj.empId = 999;
// empObj.sara="tara";//to change sara to tara --  access the field using the field name
empObj.display();
//empObj.showDetails();//TypeError 

function myFunc6(p1) {
    var fruits = ["apple", "pineapple", "banana", "guavas", "mango"];
    for (let i = 0; i < fruits.length; i++) {
        fruits[i] = p1(fruits[i], i);
        //fruits[i] = trimString(fruits[i], i);// Type error

    }
    console.log(fruits);//["", "p", "ba", "gua", "mang"];
}

// p1 -- number,boolean, array, Date, object, function
myFunc6(
    function (str, size) {
        return str.slice(0, size);
    }
);

// lambda function
// -- special type of anonymous function ; lambda operator =>
// -- scope of "this" operator -- lexical scope 
// param list => body of function
// why lambdas -- compact, pass a function as param to another function
//Examples
var lf1 = (p1, p2) => { return p1 + p2 };
console.log(lf1(10, 20));//30

var lf2 = p1 => { return p1 * p1 };
console.log(lf2(10));//100
console.log(lf2(10, 20));//100

var lf3 = () => { console.log("Hello Marsh"); }
lf3();

var lf4 = (p1, p2) => p1 * p2;
console.log(lf4(10, 20));//200

myFunc6(
    function (str, size) {
        return str.slice(0, size);
    }
);
myFunc6(
    (str, size) => str.slice(0, size)
);

var empId = 123;
var empName = "ram";
var salary = 145;

var empObj = {
    empId: 101, empName: "sara", salary: 111.11,
    // display: function showDetails () {
    display: function () {

        console.log("Emp Id:", this.empId);// this refers to the object on which the function is called
        console.log("Emp Name:", this.empName);
        console.log("Emp Salary:", this.salary);
    },
    visualise: () => {
        console.log("Emp Id:", this.empId);// this -- lexical scope (parent scope)
        console.log("Emp Name:", this.empName);
        console.log("Emp Salary:", this.salary);

    },
    visualiseWithParams: (obj) => {
        // no reference to the obj on which it is called 
        console.log("Emp Id:", obj.empId);// this -- object scope empObj
        console.log("Emp Name:", obj.empName);
        console.log("Emp Salary:", obj.salary);
    }
}
empObj.display();
empObj.visualise();
empObj.visualiseWithParams(empObj);

// closures -- function inside another functions


function myFunc8(p2) {
    var p1 = 100;
    p1++;
    p2++;
    console.log(p1);
}

myFunc8(1);
// console.log("P1 "+p1);//Reference error p1 is local to myFunc8
// console.log("P2 "+p2);//Reference error p2 is local to myFunc8

function myFunc7() {
    var ctr = 0;
    return function myFunc8() {
        ctr++;
        console.log("Ctr:" + ctr);
    }
}

// In lambda
function myFunc7() {
    var ctr = 0;
    return () => {
        ctr++;
        console.log("Ctr:" + ctr);
    }
}

var rf = myFunc7();// data type of rf=function
rf();//Ctr : 1
rf();//Ctr : 2
rf();//Ctr : 3

/*closure : Function should return a function. Inner function should access outer function var. Freeze the memory of outer function var
*/

function myFunc9(ctr) {

    return function (p1) {
        p1 += ctr
        console.log("P1:" + p1);
        return p1;
    }
}

var rf = myFunc9(100);// data type of rf=function
rf(10);//P1 : 110
rf(20);//P1 : 120
rf(30);//P1 : 130

rf = myFunc9(1000);
rf(2000);//P1: 3000

var result = myFunc9(100)(200);
console.log("Result" + result);//300

var empObj = {
    empId: 101, empName: "sara", salary: 111.11, ctrOfObjects: 0,
    visualise: () => {
        console.log(this);
        console.log("Emp Id:", this.empId);
        console.log("Emp Name:", this.empName);
        console.log("Emp Salary:", this.salary);

    },
    // display: function showDetails () {
    display: function () {

        console.log("Emp Id:", this.empId);
        console.log("Emp Name:", this.empName);
        console.log("Emp Salary:", this.salary);
    },
    countOfObjects: () => {
        return () => {
            console.log("CtrOfObjects:" + this.ctrOfObjects);
            this.ctrOfObjects++;
            console.log("CtrOfObjects:" + this.ctrOfObjects);

        }
    },
    countOfObjects2: (obj1) => {
        return () => {
            console.log(this);
            console.log("CtrOfObjects:" + this.ctrOfObjects);
            this.ctrOfObjects++;
            console.log("CtrOfObjects:" + this.ctrOfObjects);

        }
    },

};
var innerFunc = empObj.countOfObjects()
innerFunc();//UD; ++;NaN

var innerFunc2 = empObj.countOfObjects2();
innerFunc2 = innerFunc2.bind(empObj);

innerFunc2.call(empObj);

//bind, call, apply
empObj.visualise();
// empObj.visualise.bind(empObj).call();// assignment and this=empObj;
empObj.visualise.apply(empObj);

//








































