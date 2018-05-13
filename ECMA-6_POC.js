- ECMA-6 is the JAvascript implemenation
- ES-6 => Babel (transpile)  => ES-5 (safely to run in the browser)

Array helper Methods in ES-6 :: 

- forEach
- find
- reduce
- map
- filter
- every
- some


a) forEach ::

var colors = [ "red", "green", "blue" ]

for(var i=0;i < colors.length; i++){
  console.log(colors[i]);
}

colors.forEach(function(color){
  console.log(color);
})

var numbers = [1,2,3,4,5];
var sum = 0;

numbers.forEach(function(number){
  //sum +=number
})
function addUp(number){
  sum +=number
}
numbers.forEach(addUp);
sum;


b) map Helper ::

- This should always return some value, make sure to have "return"

var numbers = [1,2,3];

var doubledNumbers = [];

for(var i=0;i<numbers.length;i++){
	doubledNumbers(numbers[i] *2);
}

c) filter Helper ::

var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

var filteredNumbers = numbers.filter(function(number){
    return number > 50;
})
filteredNumbers//[55,65,75,85,95]


var users = [
 { id: 1, admin: false },  
 { id: 2, admin: false },
 { id: 3, admin: false },
 { id: 4, admin: false },
 { id: 5, admin: true },
];

var filteredUsers = users.filter(function(user){
    return user.admin;
})

filteredUsers //[{"id":5,"admin":true}]
Third one we need to check again

d) Find Helper :: 
- This will return the first occurence of the matching crieteria, it'll skip the subsequent 
var users = [
  { id: 1, admin: false },
  { id: 2, admin: false },
  { id: 3, admin: true }
];

var admin = users.find(function(user){
    return user.admin;
});
admin //{ id: 3, admin: true }

var accounts = [
  { balance: -10 },
  { balance: 12 },
  { balance: 0 }
];

var account = accounts.find(function(account){
    return account.balance === 12
});
account  // {"balance":12}

Third one we need to check again
e) every and some ::

- every is "AND" operator //returns true / false, used in login form / account creation form to ensure all the required fields are filled
- some is "OR" Operator //returns true / false, atleast one condition is true


f) Reduce :: 

- Condensing the entire array to a single value

var numbers = [10,20,30];
var sum =0;
for(var i=0;i<numbers.length;i++){
  sum +=numbers[i];
}

'---'
numbers.reduce(function(sum,number){
  return sum + number;
},0);

'-----'

var colors =[
  {color:"red"},
  {color:"green"},
  {color:"yellow"}
]

colors.reduce(function(acc, onlyColor){
  acc.push(onlyColor.color);
  return acc
},[]);


Balanced paranthesis ::

ffunction balparan(str){
  //first step to convert the string into array and use reduce to compute the counter
  
  return !str.split('').reduce(function(acc, charac){
    if(acc < 0) { return acc;}
    if(charac === '('){ return ++acc;}
    if(charac === ')'){ return --acc;}
    return acc;
  },0)
}

balparan("((((((())");

var desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
];

var deskTypes = desks.reduce(function({sitting,standing},{type}) {
    if(type === "sitting"){ sitting++;}
    if(type === "standing"){standing++;}
    return {sitting,standing};
    
}, { sitting: 0, standing: 0 });
deskTypes


g) includes ::

locate if there are unique elements in an array
eg : [1,2,3].includes(1) // Returns true
     [1,2,3,3].includes(3)//returns false, since 3 is repeated 

 function unique(array) {
      return array.reduce(function(accum,elm){
          if(!accum.includes(elm)){
              accum.push(elm);
          }
          return accum;
      },[]);
}

var numbers = [1,1,2,3,4,4];
unique(numbers);


h) Const, let 

const => never changes (immutable)
let => will change(mutable)  similar to var


i) template and string (template literals, back-tick, $)

function getMessage(){
  //uses back ticks `, and to access any javascript variables just use ${<<JS variable>>}
  return `current year is ${new Date().getFullYear()}`;
}
getMessage();

function doubleMessage(number) {
  return `Your number doubled is ${2 * number}`;
}

function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

j) arrow functions ::


const sum = (a,b) =>{
  return a+b;
}

const sum = (a,b) =>  a+b //if we have single javascript expressions 
sum(1,2)




