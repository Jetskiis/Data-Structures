//Queues are FIFO, think of lining up for something
export default class Queue {
  constructor() {
    //beginning of queue at index 0
    this.collection = [];
  }
  //add item to end of queue
  enqueue(item) {
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
    for (const item of this.collection) {
      console.log(item);
    }
  }
}
