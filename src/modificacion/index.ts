import {AddReduce} from "./addReduce";
import {Reduce} from "./reduce";
/**
 * Client code
 */
function clientCode(reduceOperation: Reduce) {
  reduceOperation.run();
}

// const r = new AddReduce([1, 4, 10]);
clientCode(new AddReduce([1, 4, 10]));
// console.log(r);
