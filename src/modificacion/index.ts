import {AddReduce} from "./addReduce";
import {SubReduce} from "./subReduce";
import {Reduce} from "./reduce";
/**
 * Client code
 */
function clientCode(reduceOperation: Reduce) {
  reduceOperation.run();
}

clientCode(new AddReduce([1, 4, 10]));
clientCode(new SubReduce([10, 8]));

