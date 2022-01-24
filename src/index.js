import {choice, remove} from './helpers';
import fruits from './foods';

const pickedFruit = choice(fruits);
console.log(`I'd like one ${pickedFruit}, please.`);
console.log(`Here you go: ${pickedFruit}`);
console.log(`Delicious! May I have another?`);
const rest = remove(fruits,pickedFruit);
console.log(`I'm sorry, we're all out. We have ${rest.length} left`);