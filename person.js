class Person {
    constructor(mohammed, 22, male) {
      this.name = mohammed;
      this.age = 22;
      this.gender = male;
    }
  
    // Method to display information about the person
    displayInfo() {
      console.log(`Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`);
    }
  
    // Method to greet the person
    greet() {
      console.log(`Hello, I'm ${this.name}!`);
    }
  }
  
  // Create an instance of the Person class with the provided details
  const person1 = new Person("Mohammed", 22, "Male");
  
  // Display information about the person
  person1.displayInfo();
  
  // Greet the person
  person1.greet();
  