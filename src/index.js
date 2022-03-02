const person = {
    name: 'Gouse',
    age: 24,
    description: () => {
        console.log(`My name is ${this.name}, I'm ${this.age} years old`);
    }
};

console.log(person);