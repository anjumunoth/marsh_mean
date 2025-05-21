import { Products } from "./Products";
import { Cart } from "./Cart";
/*
major problems with js
    -- weakly typed
    -- compile in browser -- syntax error -- browser

typescript -- strongly typed language
convert this ts to js -- embed the js in a html page
compilation of ts -- syntax errors
transpilation -- translation + compilation
tsc compiler -- transpilation

*/
console.log("Typescript examples");
var i: number = 10;
i = 23.45;
//i = true;

// data types in ts: number, string,Date, boolean,object,array, any

var j: any = 10;
j = true;
j = "hello";

var product1 = new Products(101, "airpods", "", "Apple airpods ", 15000, 10);

console.log(product1);

var cart: Cart = new Cart(222, "iphone", "", "Iphone 14 ", 75000, 12, 3);
console.log(cart);// product details + qunatity selected

// destructuring an object
// use cases -- pass some data from one module to another
var obj = { empId: 101, empName: "sara", salary: 67 };
var { empId, salary } = obj;// destructuring 
console.log(empId);

// destructuring an array -- based on position
var arr = [10, 20, 30, 40, 50];
var [first, second, third] = arr;
console.log(first);//10

var [zero, , two] = arr;
console.log(zero);
console.log(two);

// copy and reference
var obj = { empId: 101, empName: "sara", salary: 67 };
var obj2 = obj;// reference 
obj2.empId = 999;
console.log("Original obj", obj);//{ empId: 999, empName: "sara", salary: 67 };
console.log("Obj2:", obj2);//{ empId: 999, empName: "sara", salary: 67 };

// how to create a copy of an object -- Object.assign() ; In ES6 -- spread operator
var obj = { empId: 101, empName: "sara", salary: 67 };
var obj3 = { ...obj };// create a copy of obj by spreading the fields in obj and creating a new object
obj3.empName = "tara"
console.log("Original obj", obj);//{ empId: 101, empName: "sara", salary: 67 };
console.log("Obj3:", obj3);//{ empId: 101, empName: "tara", salary: 67 };

var obj = { empId: 101, empName: "sara", salary: 67 };
var obj4 = { ...obj, deptId: "D1" };
console.log("Original obj", obj);//{ empId: 101, empName: "sara", salary: 67 };
console.log("Obj4:", obj4);//{ empId: 101, empName: "sara", salary: 67 ,deptId:"D1"};

var obj = { empId: 101, empName: "sara", salary: 67 };
var obj5 = { ...obj, empId: 555 };
console.log("Original obj", obj);//{ empId: 101, empName: "sara", salary: 67 };
console.log("Obj5:", obj5);//{ empId: 555, empName: "sara", salary: 67 };

// var obj = { empId: 101, empName: "sara", salary: 67 };
// var obj6 = { empId: 555, ...obj };
// console.log("Original obj", obj);//{ empId: 101, empName: "sara", salary: 67 };
// console.log("Obj6:", obj6);//{ empId: 101, empName: "sara", salary: 67 };

var obj = { empId: 101, empName: "sara", salary: 67 };
var dept = { deptId: "d1", loc: "CHN" };
var obj7 = { ...dept, ...obj };
console.log("Original obj", obj);//{ empId: 101, empName: "sara", salary: 67 };
console.log("Obj7:", obj7);//{ empId: 101, empName: "sara", salary: 67,deptId:"d1",loc:"CHN" };

var obj8 = { empId: 101, empName: "sara", salary: 67, address: { streetNo: 67, city: "CHN" } };
var obj9 = { ...obj8 };
obj9.address.streetNo = 100;
console.log("Original obj", obj8);//{ empId: 101, empName: "sara", salary: 67 ,address:{streetNo:100,city:"CHN"}};


// shallow copy and deep copy
// shallow copy -- root level copy ; inner object -- reference -- spread operator
// deep copy -- object and inners objects are copied

var obj10 = { empId: 101, empName: "sara", salary: 67, address: { streetNo: 67, city: "CHN" } };
var obj11 = { ...obj10, ...obj10.address };
obj11.address.streetNo = 100;
console.log("Original obj", obj10);//{ empId: 101, empName: "sara", salary: 67 ,address:{streetNo:67,city:"CHN"}};
console.log("Obj11", obj11);

