class Dog{
	constructor(Breed, Age, Color){
		this.Breed = Breed;
		this.Age = Age;
		this.Color = Color;
	}

	Eat(){
		return (`${this.Breed} is eating.`);
	}

	Sleep(){
		return (`${this.Breed} is sleeping.`);
	}

	Sit(){
		return (`${this.Breed} is sitting.`);
	}

	Run(){
		return (`${this.Breed} is running.`);
	}
}

const dog1 = new Dog('Pug', 2, 'Black');
const dog2 = new Dog('Boxer', 2, 'White');
const dog3 = new Dog('Poodle', 2, 'Brown');

console.log('Dog 1 Breed : ' + dog1.Breed);
console.log('Dog 1 : ' + dog1.Eat() + '\n');

console.log('Dog 2 Age : ' + dog2.Age);
console.log('Dog 2 : ' + dog2.Sleep() + '\n');

console.log('Dog 3 Color : ' + dog3.Color);
console.log('Dog 3 : ' + dog1.Sit() + '\n');



