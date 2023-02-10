// 59. Creating a First Class
// 61. Constructor Functions & The "this" Keyword

class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
  }

  // this: Department => when "describe()" is called it will always refer to the original ".this"
  // Whenever "describe()" is called, it expects a "name:"
  describe(this: Department) {
    console.log("Department: " + this.name);
  }
}

const accounting = new Department("Accounting");

accounting.describe();

const accountingCopy = { name: "Yo", describe: accounting.describe };

accountingCopy.describe();
