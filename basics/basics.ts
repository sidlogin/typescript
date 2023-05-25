let userName: string = "Sid";
let isLoggedIn: boolean = true;
let myNumber: number = 100;
let regEx: RegExp = /Sid/;

userName += " Gupta";

console.log(userName);

const names: string[] = userName.split(" ");

const myNumbers1: Array<number> = [1, 2, 4];

// const myNumbers2: Array<number> = ["a", "b", "c"];
// Type Error: Type 'string' is not assignable to type 'number'.

interface Person {
  firstName: string;
  lastName: string;
};

const myObj: Person = {
  firstName: 'Sid',
  lastName: 'Gupta',
};

// const myObj2: Person = {
//   firstName: 'Sid',
//   lastName: 'Gupta',
//   Cool: true,
// };
// Type Error: Object literal may only specify known properties, and 'Cool' does not exist in type Person

const ids: Record<number, string> = {
  10: 'A',
  20: 'B'
};

ids[30] = 'C';

const out1: number[] = [1, 2, 3].map((v) => v * 10);

// const out2: number[] = [1, 2, 3].map((v) => `${v * 10}`);
// Type Error: Type string[] is not assignable to type number[];