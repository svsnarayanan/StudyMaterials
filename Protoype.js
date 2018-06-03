var emp1 ={
	"fname" : "Ashton",
	"lastname" "kinley"
}

var emp2 = {
	"fname" : "Debra",
	"lastname" "Lopez"
}


function createEmpObj(fname,lastname){
	var empObj = {};
	empObj.fname = fname;
	empObj.lastname = lastname;
	return empObj
}

function createEmpObjthis(fname,lastname){
	this.fname = fname;
	this.lastname = lastname;
	this.age = 30;
	this.incrementAge = function(){
		this.age +=5;
	}
}

var emp3 = createEmpObj("Eliza","bell");
/* new keyword is used to specify the function as constructor */
var emp4 = new createEmpObjthis("Delta", "Airlines");
console.log(emp1);
console.log(emp2);
console.log(emp3);
console.log(emp4);
//We can call a non-constructor function with a new keyword, which eventually retins valye to us, however we CANNOT call a constructor function wihtout "new" keyword. It'll return 'undefined'

function Mcons(name){
	this.name = name;
}

function fnSample(){
	console.log('inside fnSample');
}

//Method-1
fnSample();


//Method-2 
var objFnSample = {};
objFnSample.fnSample = function(){
	console.log('inside Object fnSample');

}

objFnSample.fnSample();

//Method -3 , using constructor
new fnSample();

//Method-4, 

var m = new Mcons("sathya");
m.age = emp4.incrementAge;
m.age.call(emp)



function myproto(){
	alert("prototype");
}

var objMyproto = new myproto();

myproto.prototype.test= "this is the first prototype element";

objMyproto.__proto__.test;
myproto.prototype === objMyproto.__proto__ //(both are pointing to same reference)

var objMyproto2= new myproto();
objMyproto2.test="object value";
objMyproto2.__proto__.test = "proto value"; //Dunder proto
delete objMyproto2.test //This will delete the objects value
objMyproto2.test // This will return the prototype objects value 

myproto.prototype.times = function(){
	alert('printing times');
}
objMyproto2.times();

//ways to javascript object

var a={};
var b = new Object();

a.__proto__ === b.__proto__ //returns true

function Emp(){}
var emp = new Emp();
emp.prop="current employee";
emp.__proto__.parentProp ="parent employee";
emp.__proto__.__proto__===Object.prototype // returns true

Object.prototype.grandParent = "im grand parent";
emp.grandParent; //returns im grand parent


//inheritance concept in javascript 

function Employee(name){
	this.name = name;
}

Employee.prototype.getName = function(){return this.name;}

var emp1 = new Employee("Sathya");

function Designation(name,role){
	this.name=name;
	this.role=role;
}


Designation.prototype.getDepartment = function(){ return this.role;}
var emp2 = new Designation("Dhoni","captain");
emp2.getDepartment();

//Now how to get name as well as department?

emp2.__proto__.__proto__=Employee.prototype; //We are just pointing the parent prototype of emp2 to the global Object
emp2.getName();

//Like wise, we can inherit emp3 from emp2, which implicitly inherits emp-1. 

//This was my interview questions at visa

"hello".times(3) //==> print the console log hello hello hello 

String.prototype = "hello";
"hello".__proto__.times = function(n) {
	for (var i=0;i<n ; i++){
		console.log(this);
	}
}


- "use strict"; = get into strict mode 

- cant declare the variable global
- cannot delete variable / function
- we cant use let,eval as a variable name (which are reserved for js notations)
- We cant declare a primitive types without having any default value
- Primitive data types => boolean, number, string, null, undefined
typeof(true) =>boolean
typeof(1) => number
typeof('x') => string
typeof(undefined) => undefined, value of the variable is NOT set / variable itself not defined, then js engine returns undefined
typeof(null) => object, programmer explicitly set a value as null 

null == undefined or undefined == null ==> true

- Non primitive data types => object ({} / new Object())

typeof({}) => object

==(only valye) vs === (value + type)

'' == '0' ==> false
'0' =='' ==> true
0 =='0'  ==> true => String (0) => '0' == '0' (type coercion)
0 === '' ==> false
0 === '0' ==> false
0 === 0 ==> true

variable hoisting ::

console.log(a);
var a=1;

here in js, it just moves the function and variable declaration at the top

var a;
console.log(a);
a=1;

foo();

function foo(){
	console.log('foo');
}


here it'll console the statements, becuase in JS it pushes the function to the top
iife :: immediately invoke function 


function closurePOC(t){
    var y = "hello  " + t;
   return function(){ console.log(y);}
}
//closurePOC('sathya is here')();
var cf = closurePOC('abc');
cf

function xx(){
    var t=10;
    return function(){
        console.log('prinx' + t);
    }
}
xx()()

var foo = [];
for(var ii=0;ii<10;ii++){
    foo[ii]=function(){ return ii };
}
console.log(foo[1]());
console.log(foo[3]());
console.log(foo[5]());


