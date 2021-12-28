import Set from "./set.js"

describe("Test basic set methods on current set",()=>{
    let curr = new Set();
    test("Size of empty set",()=>{
        expect(curr.size()).toBe(0);
    });
    test("Adding unique elements to empty set and size",()=>{
       curr.add(1);
       curr.add(2); 
       curr.add(3);
       expect(curr.size()).toBe(3);
    });
    test("Adding duplicate elements to empty set and  size",()=>{
        curr.add(3);
        curr.add(3);
        curr.add(2);
        expect(curr.size()).toBe(3);
    });
    test("Clearing set and size",()=>{
        curr.clear();
        expect(curr.size()).toBe(0);
    });
    test(".has function and listing values",()=>{
        curr.add(1);
        curr.add(5);
        curr.add(6);
        curr.add(1);
        curr.add(7);
        expect(curr.has(1)).toBe(true);
        expect(curr.has(7)).toBe(true);
        expect(curr.has(4)).toBe(false);
        expect(curr.listValues()).toContain(1);
        expect(curr.listValues()).toContain(5);
        expect(curr.listValues()).toContain(6);
        expect(curr.listValues()).toContain(7);
        expect(curr.listValues()).toHaveLength(4);
    });
    test("Removing values from set",()=>{
        expect(curr.remove(1)).toBe(true);
        expect(curr.size()).toBe(3);
        expect(curr.remove(10)).toBe(false);
        expect(curr.remove(2)).toBe(false);
        curr.add(1);
        curr.add(5);
        curr.add(8);
        curr.remove(1);
        curr.remove(5);
        expect(curr.size()).toBe(3);
        curr.clear();
    });
});

describe("Test set comparison methods",()=>{
    let curr = new Set();
    let other = new Set();

    test("Union of two sets",()=>{
        curr.add(1);
        curr.add(2);
        curr.add(5);
        curr.add(3);
        //[1,2,5,3];
        other.add(9);
        other.add(6);
        other.add(10);
        other.add(15);
        other.add(3);
        other.add(1);
        //[9,6,10,15,3,1];
        //union should be [1,2,3,5,6,9,10,15];
        expect(curr.union(other).listValues()).toHaveLength(8);
        expect(curr.union(other).listValues()).toContain(1);
        expect(curr.union(other).listValues()).toContain(5);
        expect(curr.union(other).listValues()).toContain(15);
        expect(curr.union(other).listValues()).toContain(10);
        expect(curr.union(other).listValues()).not.toContain(100);
    });
    test("Intersection of two sets",()=>{
        //[1,2,5,3]; [9,6,10,15,3,1];
        //intersect = [1,3]
        expect(curr.intersection(other).listValues()).toHaveLength(2);
        expect(curr.intersection(other).listValues()).toContain(1);
        expect(curr.intersection(other).listValues()).toContain(3);
    });
    test("Difference of two sets",()=>{
        //[2,5]
        expect(curr.difference(other).listValues()).toHaveLength(2);
        expect(curr.difference(other).listValues()).toContain(2);
        expect(curr.difference(other).listValues()).toContain(5);
        //[9,6,10,15];
        expect(other.difference(curr).listValues()).toHaveLength(4);
        expect(other.difference(curr).listValues()).toContain(9);
        expect(other.difference(curr).listValues()).toContain(10);
        expect(other.difference(curr).listValues()).toContain(6);
        expect(other.difference(curr).listValues()).toContain(15);
    });
    test("Symmetric difference of two sets",()=>{
        //[2,5,9,6,10,15];
        expect(curr.symmetricDifference(other).listValues()).toHaveLength(6);
        expect(curr.symmetricDifference(other).listValues()).toContain(2);
        expect(curr.symmetricDifference(other).listValues()).toContain(6);
        expect(curr.symmetricDifference(other).listValues()).toContain(15);
    });
    test("Subsets and Supersets",()=>{
        curr.clear();
        other.clear();
        curr.add(1);
        curr.add(2);
        curr.add(3);
        other.add(1);
        other.add(2);
        other.add(3);
        curr.add(4);
        expect(curr.isSubset(other)).toBe(false);
        expect(curr.isSuperset(other)).toBe(true);
        other.add(4);
        other.add(5);
        other.add(9);
        expect(curr.isSubset(other)).toBe(true);
        expect(other.isSuperset(curr)).toBe(true);
    })
})