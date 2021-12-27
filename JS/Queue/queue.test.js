import Queue from "./queue.js";

let q = new Queue();

describe("Testing queue class functions", () => {
  q.enqueue("Tom");
  test("Dequeueing a queue with one item", () => {
    expect(q.dequeue()).toBe("Tom");
  });
  test("if queue is empty", () => {
    expect(q.isEmpty()).toBe(true);
  });
  test("Dequeueing a queue with no items", () => {
    expect(q.dequeue()).toBe(false);
  });
  test("if queue is empty", () => {
    expect(q.isEmpty()).toBe(true);
  });
  test("if queue is empty", () => {
    q.enqueue("Brian");
    q.enqueue("Joe");
    q.enqueue("Chris");
    expect(q.isEmpty()).toBe(false);
  });
  test("Dequeueing a queue with three items", () => {
    expect(q.dequeue()).toBe("Brian");
    expect(q.dequeue()).toBe("Joe");
  });
  test("Front of queue", () => {
    q.enqueue("Henry");
    q.enqueue("Christina");
    expect(q.front()).toBe("Chris");
    q.dequeue();
    q.dequeue();
    expect(q.front()).toBe("Christina");
    q.dequeue();
    expect(q.front()).toBeNull();
  });
  test("Length of queue", () => {
    expect(q.length()).toBe(0);
    q.enqueue("Juan");
    expect(q.length()).toBe(1);
    q.enqueue("Jessica");
    expect(q.length()).toBe(2);
    q.printQueue();
  });
});
