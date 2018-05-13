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










