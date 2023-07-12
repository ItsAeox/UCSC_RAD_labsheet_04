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

const dog1 = new Dog('Pug', 3, 'Black');
const dog2 = new Dog('Boxer', 2, 'White');
const dog3 = new Dog('Poodle', 1, 'Brown');

console.log('Dog 1 Age : ' + dog1.Age);
console.log('Dog 1 : ' + dog1.Sit() + '\n');

console.log('Dog 2 Color : ' + dog2.Color);
console.log('Dog 2 : ' + dog2.Eat() + '\n');

console.log('Dog 3 Breed : ' + dog3.Breed);
console.log('Dog 3 : ' + dog1.Run() + '\n');



