//PriorityQueues are the same as queues but they have a "priority" attribute that dictates what position in the queue each element is
export default class PriorityQueue {
  constructor() {
    //beginning of queue at index 0
    this.collection = [];
  }
  //add item to end of queue, item is an array with two values [descriptor, priority]. items with higher priority will come first in the queue
  enqueue(item) {
    if (this.isEmpty()) {
      this.collection.push(item);
      return;
    }
    for (let i = 0; i < this.collection.length; i++) {
      if (item[1] > this.collection[i][1]) {
        this.collection.splice(i, 0, item);
        return;
      }
    } /*  */
    this.collection.push(item);
  }
  //remove and return  item from front of queue
  dequeue() {
    return this.isEmpty() ? false : this.collection.shift();
  }
  //returns front of queue without modifying
  front() {
    return this.isEmpty() ? null : this.collection[0];
  }
  //checks if queue is empty
  isEmpty() {
    return this.collection.length == 0;
  }
  //length of queue
  length() {
    return this.collection.length;
  }
  //print all items in queue
  printQueue() {
    for (const item of this.collection) console.log(item);
  }
  //find maximum priority element in queue and return it
  findMaximum() {
    if (this.isEmpty()) return false;
    return this.collection[0];
  }
  //find minimum priority element in queue and return it
  findMinimum() {
    if (this.isEmpty()) return false;
    return this.collection[this.collection.length - 1];
  }
  //delete maximum priority element in queue
  deleteMaximum() {
    if (this.isEmpty()) return false;
    this.collection.splice(0, 1);
  }
  //delete minimum priority element in queue
  deleteMinimum() {
    if (this.isEmpty()) return false;
    this.collection.splice(this.collection.length - 1, 1);
  }
}
