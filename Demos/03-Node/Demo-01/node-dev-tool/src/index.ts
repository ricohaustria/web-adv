import { FoodService } from './food-service';
import { Car } from './car';

console.log(`Manually init util`);

let util = new FoodService('http://localhost:3000/food');
util.log();

util.getFoodFetch().then((data) => console.log(`current food: ${data}`));

console.log(`Init State`);

let food = { name: 'Langos' };

util.addFood(food).then((resp) => console.log('new food added:', resp));

function driveCar() {
    let porsche = new Car();
    porsche.drive();
}

driveCar();

// //export method to global namespace - otherwise is is not available for function call
// (<any>window).drive = driveCar;

// //export class to global namespace
// (<any>window).state = new State();
