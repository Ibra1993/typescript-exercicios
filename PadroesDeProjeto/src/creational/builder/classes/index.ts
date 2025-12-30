
import { MainDishBuilder } from "./main-dish-builder";



const mainBuilder = new MainDishBuilder();
mainBuilder.makeMeal();

console.log(mainBuilder.getMeal());
console.log(mainBuilder.getPrice())

