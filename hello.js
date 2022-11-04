// function greet(person: string, date: Date) {
//   console.log(`Hello ${person}, today is ${date.toDateString()}!`);
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// greet("Maddison", new Date());
// const names = ["Alice", "Bob", "Eve"];
// // Contextual typing for function
// names.forEach(function (s) {
//   console.log(s.toUpperCase());
// });
// // Contextual typing also applies to arrow functions
// names.forEach((s) => {
//   console.log(s.toUpperCase());
// });
// function printCoord(pt: { x: number; y: number }) {
//   console.log("The coordinate's x value is " + pt.x);
//   console.log("The coordinate's y value is " + pt.y);
// }
// printCoord({ x: 3, y: 7 });
// function printName(obj: { first: string; last?: string }) {
//   // Error - might crash if 'obj.last' wasn't provided!
//   if (obj.last !== undefined) {
//     // OK
//     console.log(obj.last.toUpperCase());
//   }
//   // A safe alternative using modern JavaScript syntax:
//   console.log(obj.last?.toUpperCase());
// }
// printName({ first: "Alice", last: "Alisson" });
// //    function printId(id: number | string) {
// //     console.log("Your ID is: " + id);
// //    }
// //    // OK
// //    printId(101);
// //    // OK
// //    printId("202");
// function printId(id: number | string) {
//   if (typeof id === "string") {
//     // In this branch, id is of type 'string'
//     console.log(id.toUpperCase());
//   } else {
//     // Here, id is of type 'number'
//     console.log(id);
//   }
// }
// type Point = {
//   x: number;
//   y: number;
// };
// function printssss(pt: Point) {
//   console.log("The coordinate's x value is " + pt.x);
//   console.log("The coordinate's y value is " + pt.y);
// }
// printssss({ x: 100, y: 100 });
// //  Type Assertions
// let typeSccript;
// typeSccript = "hello world";
// console.log((<string>typeSccript).length, "length");
// //or with below method //
// console.log((typeSccript as string).length, "length");
// //Literal Types //
// function printText(s: string, alignment: "left" | "right" | "center") {
//   console.log(`${s} i am ${alignment}`);
// }
// printText("Hello, world", "left");
// printText("G'day, mate", "center");
// //enms //
// //set of values //
// enum UserResponse {
//   No = 0,
//   Yes = 1,
// }
// function respond(recipient: string, message: UserResponse): void {
//   console.log(`${recipient} i am ${message}`);
// }
// respond("Princess Caroline", UserResponse.Yes);
// // narrowing //
// // function printAll(strs: string | string[] | null) {
// //   if ( strs!=null) {
// //   for (const s of strs) {
// //   console.log(s);
// //   }
// //   } else if (typeof strs === "string") {
// //   console.log(strs);
// //   } else {
// //   // do nothing
// //   }
// //  }
// //  printAll("sanjana")
// function getUsersOnlineMessage(numUsersOnline: number) {
//   if (numUsersOnline) {
//     console.log(`There are ${numUsersOnline} online now!`);
//   }
// }
// getUsersOnlineMessage(7);
// //  Truthiness narrowing
// function multiplyAll(values: number[] | undefined, factor: number): void {
//   if (!values) {
//     console.log(values);
//   } else {
//     console.log(values.map((x) => x * factor));
//   }
// }
// multiplyAll([2, 3, 4], 6);
// // Equality narrowing
// function example(x: string | number, y: string | boolean) {
//   if (x === y) {
//     console.log(x.toUpperCase());
//     console.log(y.toLowerCase());
//   } else {
//     console.log(x);
//     console.log(y);
//   }
// }
// example("hello", "hello");
// function printAll(strs: string | string[] | null) {
//   if (strs !== null) {
//   if (typeof strs === "object") {
//   for (const s of strs) {
//   console.log(s);
//   }
//   } else if (typeof strs === "string") {
//   console.log(strs);
//   }
//   }
//  }
//  printAll(["sanjana","pranav"])
// //in operator //
// type Fish = { swim: () => void };
// type Bird = { fly: () => void };
// function move(animal: Fish | Bird) {
//  if ("swim" in animal) {
//  console.log(animal.swim());
//  }
// }
// // instanceof narrowing
// function logValue(x: Date | string) {
//   if (x instanceof Date) {
//   console.log(x.toUTCString());
//   } else {
//   console.log(x.toUpperCase());
//   }
//  }
//  logValue("welcome")
//  // Assignments //
//  let x = Math.random() < 0.5 ? 10 : "hello world!";
// x = 1;
// console.log(x);
// x = "goodbye!";
// console.log(x);
// ////
// function padLeft(padding: number | string, input: string) {
//   if (typeof padding === "number") {
//   console.log( padding + input);
//   }
//   console.log( padding + input);
//  }
//  padLeft(4,"sanjana")
//  // functions //
//  function greeter(fn: (a: string) => void) {
//   fn("Hello, World");
//  }
//  function printToConsole(s: string) {
//   console.log(s);
//  }
//  greeter(printToConsole);
//  type DescribableFunction = {
//   description: string;
//   (someArg: number): boolean;
//  };
//  function doSomething(fn: DescribableFunction) {
//   console.log(fn.description + " returned " + fn(6));
//  }
//  //Generic Functions
//  function merge<T,U>(objA: T,objB:U){
//   return Object.assign(objA, objB);
//  }
//  const data = merge({name :"hello"},{age:30});
//  console.log(data.age)
//  //optional parameters //
//  function iterateValues(s:string[],callback:(value:string ,imdex?:number)=>void){
//   for (let i=0; i<s.length;i++){
//     callback(s[i]);
//   }
// }
// iterateValues(["hello","world"],(v,i)=>{
//   console.log(v)
//   console.log(i)
// })
// function multiply(n: number, ...m: number[]) {
//   console.log( m.map((x) => n * x));
//  }
//  // 'a' gets value [10, 20, 30, 40]
//  multiply(10, 1, 2, 3, 4);
//  interface Person  {
//   name: string;
//   age: number;
//  };
//  function hello(person: Person) {
//   console.log( "Hello " + person.name);
//  }
//  hello({name:"sanjana",age:30})
//  //read only properties //
//  interface SomeType {
//   readonly prop: string;
//  }
//  function doSomethingg(obj: SomeType) {
//   // We can read from 'obj.prop'.
//   console.log(`prop has the value '${obj.prop}'.`);
//   // But we can't re-assign it.
//   obj.prop = "hello";
//  }
//  interface Profile {
// 	name: string;
// 	social: string;
// }
// function hellosss (params: Profile) {
// 	console.log( "Find " + params.name + " here " + params.social)
// }
//  hellosss({name:"sanjana",social:"patel"})
//  // function overload //
//  function makeDate(timestamp: number): Date;
// function makeDate(m: number, d: number, y: number): Date;
// function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
//  if (d !== undefined && y !== undefined) {
//  console.log( new Date(y, mOrTimestamp, d));
//  } else {
//  console.log( new Date(mOrTimestamp));
//  }
// }
//  makeDate(12345678);
//  makeDate(5, 5, 5);
// //  makeDate(1, 3);
// function sum({ a, b, c }: { a: number; b: number; c: number }) {
//   console.log(a + b + c);
//  }
//  sum({a:3,b:4,c:6})
//  function greetings(person: { name: string; age: number }) {
//   console.log( "Hello " + person.name);
//  }
//  greetings({ name: "heyyyyyyy", age: 50 })
//  interface Colorful {
//   color: string;
//  }
//  interface Circle {
//   radius: number;
//  }
//  type ColorfulCircle = Colorful & Circle;
//  function draw(circle: Colorful & Circle) {
//   console.log(`Color was ${circle.color}`);
//   console.log(`Radius was ${circle.radius}`);
//  }
//  // okay
//  draw({ color: "blue", radius: 42 });
//  function doSomethin(pair: [string, number]) {
//  console.log(`sanjana ${pair[0]}`)
//  }
//  doSomethin(["hello", 42]);
//  // generics //
//  function makeFunctions<T>(data:T){
//   console.log(`you are ${data}`)
//  }
//  makeFunctions(4)
//  interface GenericIdentityFn {
//   <Type>(arg: Type): Type;
//  }
//  function identity<Type>(arg: Type): any {
//   console.log( arg);
//  }
//  let myIdentity: GenericIdentityFn = identity;
//  identity(6+7)
//  // generic class //
//  class GenericNumber<NumType> {
//   zeroValue: NumType;
//   add: (x: NumType, y: NumType) => NumType;
//  }
//  let myGenericNumber = new GenericNumber<number>();
//  myGenericNumber.zeroValue = 0;
//  myGenericNumber.add = function (x, y) {
//   return x + y;
//  };
//  let stringNumeric = new GenericNumber<string>();
// stringNumeric.zeroValue = "hello";
// stringNumeric.add = function (x, y) {
//  return x + y;
// };
// console.log(stringNumeric.add("hey","saa"));
// // generic class //
// class keyValue<keyType,valueType>{
//   key:keyType;
//   value:valueType;
//   constructor(key:keyType,value:valueType){
//     this.key= key;
//     this.value = value;
//   }
// }
// const{key,value} = new keyValue<string,number>("age",49)
// console.log(key,value)
// // generic constraint //
// interface property{
//   length:number;
//   value:number;
// }
// function prop<T extends property>(data:T):void{
//   console.log(data.value , data.length)
// }
// prop({length:6 ,value: 3})
// // key of operator //
// interface pizzaMenu{
//   starter:string,
//   lunch:string,
//   dessert:string
// }
// const menu:pizzaMenu={
//   starter:'salad',
//   lunch:'nothing',
//   dessert:'no'
// }
// function youEat(
//   mainMenu:pizzaMenu,
//   menuEntry : keyof pizzaMenu,
//   change:string
// ){
//   mainMenu[menuEntry]=change;
// }
// youEat(menu,'lunch','tasty');
// console.log(menu)
// type Persons = { age: number; name: string; alive: boolean };
// type Age = Persons["age"];
// type I1 = Person["age" | "name"];
// const MyArray = [
//   { name: "Alice", age: 15 },
//   { name: "Bob", age: 23 },
//   { name: "Eve", age: 38 },
//  ];
//  type test = typeof MyArray[number];
//  //conditional types //
//  interface Animal {
//   live(): void;
// }
// interface Dog extends Animal {
//   woof(): void;
// }
// type Example1 = Dog extends Animal ? number : string;
// type Example2 = RegExp extends Animal ? number : string;
// interface IdLabel {
//   id: number /* some fields */;
//  }
//  interface NameLabel {
//   name: string /* other fields */;
//  }
//  function createLabel(id: number): IdLabel;
//  function createLabel(name: string): NameLabel;
//  function createLabel(nameOrId: string | number): IdLabel | NameLabel;
//  function createLabel(nameOrId: string | number): IdLabel | NameLabel {
//   console.log(nameOrId)
//   throw "unimplemented";
//  }
//  createLabel("good morning")
//  // Distributive Conditional Types
//  //type Exclude<t,U>=T extends U? never: T;
//  type resultType = Exclude<'a'|'b'|'c','a'|'b'>;
//  // 'a' extends 'a' |'b'? never:T=> never
//  // 'b' extends 'a' |'b'? never:T=> never
// // 'c' extends 'a' |'b'? never:T=> 'c'
//  type OptionsFlags<Type> = {
//   [Property in keyof Type]: boolean;
//  };
//  type FeatureFlags = {
//   darkMode: () => void;
//   newUserProfile: () => void;
//  };
//  type FeatureOptions = OptionsFlags<FeatureFlags>;
// //  Template Literal Types
// type hello = "world"
// type world = `hello ${hello}`
// type EmailLocaleIDs = "welcome_email" | "email_heading";
// type FooterLocaleIDs = "footer_title" | "footer_sendoff";
// type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`;
// type Lang = "en" | "ja" | "pt";
// type LocaleMessageIDs = `${Lang}_${AllLocaleIDs}`;
// class //
var student = /** @class */ (function () {
    function student(name) {
        this.name = name;
    }
    student.prototype.display = function () {
        console.log(this.name);
    };
    return student;
}());
var stu = new student("who are you");
stu.display();
var Greeter = /** @class */ (function () {
    function Greeter() {
    }
    Greeter.prototype.greet = function () {
        console.log("Hello, " + this.getName());
    };
    Greeter.prototype.getName = function () {
        return "hi";
    };
    return Greeter;
}());
var SpecialGreeter = /** @class */ (function (_super) {
    __extends(SpecialGreeter, _super);
    function SpecialGreeter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpecialGreeter.prototype.howdy = function () {
        // OK to access protected member here
        console.log("Howdy, " + this.getName());
    };
    return SpecialGreeter;
}(Greeter));
var g = new SpecialGreeter();
g.greet(); // OK
