import PriorityQueue from "./priorityQueue.js";

let pq = new PriorityQueue();

describe("Testing priority queue functions", () => {
  test("Test queueing and dequeueing in a priority queue", () => {
    pq.enqueue(["Joe", 12]);
    pq.enqueue(["Biden", 80]);
    pq.enqueue(["Hao", 22]);
    pq.printQueue();
    expect(pq.dequeue()[0]).toBe("Biden");
    expect(pq.dequeue()[0]).toBe("Hao");
  });

  test("Finding maximum and minimum element in a priority queue", () => {
    pq.enqueue(["Thomas",64]);
    pq.enqueue(["James",52]);
    pq.enqueue(["Zoe",8]);
    pq.enqueue(["Emma",28]);
    pq.enqueue(["Arthur",35]);
    pq.enqueue(["Erin",19]);
    expect(pq.findMaximum()[1]).toBe(64);
    expect(pq.findMinimum()[1]).toBe(8);
  });

  test("Deleting the maximum and minimum element from a priority queue", () => {
    //Joe 12 Thomas 64 James 52 Zoe 8 Emma 28 Arthur 35 Erin 19
    pq.deleteMaximum();
    pq.deleteMinimum();
    //Joe 12 James 52 Emma 28 Arthur 35 Erin 19
    expect(pq.findMaximum()[1]).toBe(52);
    expect(pq.findMinimum()[1]).toBe(12);
    pq.dequeue();
    //Joe 12 Emma 28 Arthur 35 Erin 19
    expect(pq.findMinimum()[1]).toBe(12);
    expect(pq.findMaximum()[1]).toBe(35);
    pq.dequeue();
    pq.deleteMaximum();
    pq.deleteMinimum();
    //Erin 19
    expect(pq.front()[1]).toBe(19);
    expect(pq.findMinimum()[1]).toBe(19);
    expect(pq.findMaximum()[1]).toBe(19);
    pq.dequeue();
    expect(pq.isEmpty()).toBe(true);
    expect(pq.findMaximum()).toBe(false);
    expect(pq.findMinimum()).toBe(false);
    expect(pq.deleteMinimum()).toBe(false);
    expect(pq.deleteMaximum()).toBe(false);
  });
});
