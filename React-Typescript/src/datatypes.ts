let text: string = "TypeScript";
console.log(`Hello from ${text}`);

let age: number;
age = 3;
console.log(`Hello from ${age}`);

let isAdult: boolean;
isAdult = true;
console.log(`Hello from ${isAdult}`);

let names: string[];
names = ["Alice", "Bob", "Charlie"];
console.log(`Hello from ${names}`);

let mixed: (string | number | boolean)[];
mixed = ["Alice", 3, true];
console.log(`Hello from ${mixed}`);

let dual: string | number;
dual = "Bob";
console.log(`Hello from ${dual}`);

type Person = {
  name: string;
  age?: number;
};

let person: Person;
person = { name: "Alice" };
console.log(`Hello from ${person}`);

interface Animal {
  name: string;
  age?: number;
}

let animal: Animal;
animal = { name: "Bob" };
console.log(`Hello from ${animal}`);

interface Human extends Person {
  job: string;
}

let human: Human;
human = { name: "Charlie", job: "Developer" };
console.log(`Hello from ${human}`);

type Dog = Animal & {
  breed: string;
};

let dog: Dog;
dog = { name: "Dog", breed: "Golden Retriever" };
console.log(`Hello from ${dog}`);
