
// Write 5 object literals, have them named person1-person5. Give each a name property and have this be a name of a friend or family member. Then give each one a second property, sayHello, which is a function that will console log the string “Hello! My name is ________”.


// let person1 = {

//     name: {
//         first: 'Simon',
//         last: 'Cheam'
//     },
//     city: 'St. Pete',
//     age: 36,
//     sayHello: function (){
//         console.log(`hello my name is ${this.name.first}.`);
//     }
// };
//console.log(person1.name.first);
// person1.sayHello();

// let person2 = {

//     name: {
//         first: 'Vishal',
//         last: 'A'
//     },
//     city: 'Safety Harbor',
//     age: 35,
//     sayHello: function (){
//         console.log(`hello my name is ${this.name.first}.`);
//     }
// };
// //console.log(person2.name.first);
// person2.sayHello();

// let person3 = {

//     name: {
//         first: 'Lee',
//         last: 'Cheam'
//     },
//     city: 'St. Pete',
//     age: 70,
//     sayHello: function (){
//         console.log(`hello my name is ${this.name.first}.`);
//     }
// };
// //console.log(person3.name.first);
// person3.sayHello();

// let person4 = {

//     name: {
//         first: 'Suyin',
//         last: 'Cheam'
//     },
//     city: 'St. Pete',
//     age: 35,
//     sayHello: function (){
//         console.log(`hello my name is ${this.name.first}.`);
//     }
// };
// //console.log(person4.name.first);
// person4.sayHello();

// let person5 = {

//     name: {
//         first: 'Nitro',
//         last: 'Cheam'
//     },
//     city: 'St. Pete',
//     age: 1,
//     sayHello: function (){
//         console.log(`hello my name is ${this.name.first}.`);
//     }
// };
// //console.log(person5.name.first);
// person5.sayHello();


// 2 Call the sayHello function on each object and check the console for a response. This seems kind of repetitive doesn't it? Yeah, let’s practice some pseudo classes. Create a constructor function that will take a name, city, and age. (Remember, pseudo classes look like functions but are named with starting with a capital letter ex: function Example() null).




class People {


    constructor(name, city, age) {

        this.name = name;
        this.city = city;
        this.age = age;
        this.gold = 10;

    }

    describe ( ) {
        console.log(`Hi My name is ${this.name}, I am ${this.age} years old and live in ${this.city}.`);
    }


}

class Person extends People {

    constructor (name, city, age) {
        super(name, city, age);
        
    }

    sayHello2(name, city, age){

        console.log(`Hi My name is ${this.name}, I am ${this.age} years old and live in ${this.city}.`);

    }

}


const person1 = new Person ('Simon!', 'St. Pete', 36);
const person2 = new Person ('Vishal!', 'Safety Harbor', 35);
const person3 = new Person ('Lee!', 'St. Pete', 70);
const person4 = new Person ('Suyin!', 'St. Pete', 35);
const person5 = new Person ('Nitro!', 'my dog house', 1);



person1.sayHello2();
person2.sayHello2();
person3.sayHello2();
person4.sayHello2();
person5.sayHello2();


/// Inheritance

//1 Create a class called vehicle, not every vehicle is a truck, nor is it a sedan, motorcycle, or coupe.

class Vehicle {


    constructor(manufacturer, numWheels, type) {

        this.manufacturer = manufacturer;
        this.numWheels = numWheels;
        this.type = type;
     

    }

    aboutVehicle ( ) {
        console.log(`Hi I am a ${this.type} made by ${this.manufacturer} and I have ${this.numWheels} wheels.`);
    }


}


// 3 Trucks are vehicles, they have wheels. 

// So let’s create a vehicle class that inherits the property of wheels from vehicle, but trucks have doors (unlike motorcycles) and they have a truck bed. So let’s add a number of doors property to this object as well as a boolean they it is true, it has a truck bed.


class Truck extends Vehicle {

    constructor (manufacturer, numWheels) {
        super(manufacturer, numWheels, 'Truck');
        this.truckbed = true;
        
    }

    aboutVehicle ( ) {
        console.log(`Hi I am a ${this.type} made by ${this.manufacturer} and I have ${this.numWheels} wheels. It's ${this.truckbed} that I have a truckbed`);
    }

}

class Sedan extends Vehicle {
    constructor (manufacturer, numWheels, mpg) {
        super(manufacturer, numWheels, 'Sedan');
        this.mpg = mpg;
    }
    aboutVehicle ( ) {
        console.log(`Hi I am a ${this.type} made by ${this.manufacturer} and I have ${this.numWheels} wheels. I get ${this.mpg} miles per gallon:) `);
    }
}


//Motorcycles are also vehicles, but they don’t have doors, or 4 wheels, or go in reverse (technically). So create a class motorcycle that extends vehicle, have it include a property to determine that it has handlebars and not a steering wheel, as well as another property to show it has no doors.


class Motorcycle extends Vehicle {
    constructor (manufacturer, numWheels, numDoors, steering) {
        super(manufacturer, numWheels, 'Motorcycle');
        this.numDoors = numDoors;
        this.steering = steering;
    }
    aboutVehicle ( ) {
        console.log(`Hi I am a ${this.type} made by ${this.manufacturer} and I have ${this.numWheels} wheels. I have ${this.numDoors} doors and you can stand on my ${this.steering}, WOOHOO!`);
    }
}





/// TRUCK

const Truck1 = new Truck ('Toyota', 4);
Truck1.aboutVehicle();

/// SEDAN

const Sedan1 = new Sedan ('Tesla', 4, Infinity);
Sedan1.aboutVehicle();

/// BIKE

const Bike1 = new Motorcycle ('BMW', 2, 0, 'handlebars');
Bike1.aboutVehicle();