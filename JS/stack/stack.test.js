import Stack from "./stack.js"

describe("Testing stack methods",()=>{
    let s = new Stack();

    test("Size of empty stack",()=>{
        expect(s.size()).toBe(0);
    });

    test("Push, pop, and peek",()=>{
        s.push(1);
        expect(s.peek()).toBe(1);
        s.push(2);
        expect(s.peek()).toBe(2);
        s.pop();
        expect(s.peek()).toBe(1);
        s.push(3);
        expect(s.peek()).toBe(3);
    });

    test("Size of non-empty stack",()=>{
        expect(s.size()).toBe(2);
        s.push(5);
        s.push(6);
        expect(s.size()).toBe(4);
    });

    test("if stack isEmpty before and after clearing items",()=>{
        expect(s.isEmpty()).toBe(false);
        s.clear();
        expect(s.size()).toBe(0);
        expect(s.isEmpty()).toBe(true);
    });
})