import {Node, LinkedList} from "../code/singlyLinkedList.js";

describe("Testing Linked List main methods on an empty linked list",()=>{
    let list = new LinkedList();

    test("Inserting a value into an empty list",()=>{
        list.insert(100);
        expect(list.head.data).toBe(100);
    });
    test("Inserting a value into a list with existing values",()=>{
        // 100 -> 50
        list.insert(50);
        expect(list.head.next.data).toBe(50);
        // 100 -> 50 -> 5
        list.insert(5);
        expect(list.head.next.next.data).toBe(5);
    });
    test("Search for values",()=>{
        expect(list.search(5)).toBe(true);
        expect(list.search(100)).toBe(true);
        expect(list.search(200)).toBe(false);
        expect(list.search(50)).toBe(true);
    });
    test("Delete values",()=>{
        // 50 -> 5
        list.delete(100);
        expect(list.delete(24)).toBe(false);
        expect(list.head.data).toBe(50);
        expect(list.head.next.data).toBe(5);
        // 50 -> null
        list.delete(5)
        expect(list.head.next).toBeNull();
    });
    test("Updating values",()=>{
        list.insert(200);
        list.insert(68);
        list.insert(42);
        list.insert(1);

        list.update(69,1);
        list.update(420,2);
        list.update(100,3);
        list.update(50,4);

        expect(list.head.next.data).toBe(69);
        expect(list.head.next.next.data).toBe(420);
        expect(list.head.next.next.next.data).toBe(100);
    });
});

describe("Testing Linked List main methods on a linked list with a head",()=>{
    let head = new Node(50,null);
    let list = new LinkedList(head);

    test("Checking to see if head is in linked list",()=>{
        expect(list.head.data).toBe(50);
    });
    test("Inserting a value into a list with existing values",()=>{
        // 50 -> 25
        list.insert(25);
        expect(list.head.next.data).toBe(25);
    });
    test("Search for values",()=>{
        expect(list.search(25)).toBe(true);
        expect(list.search(20)).toBe(false);
        expect(list.search(50)).toBe(true);
    });
    test("Delete values",()=>{
        // 25
        list.delete(50);
        expect(list.head.data).toBe(25);
        expect(list.head.next).toBeNull();
        expect(list.delete(69)).toBe(false);
        // 25
        list.delete(25)
        expect(list.head).toBeNull();
    });
    test("Updating values",()=>{
        list.insert(200);
        list.insert(1);

        list.update(420,0);
        list.update(100,1);
        list.update(200,10);

        expect(list.head.data).toBe(420);
        expect(list.head.next.data).toBe(100);
    });
})


describe("Testing Linked List extra methods",()=>{
    let list = new LinkedList();
    let list2 = new LinkedList();
    list.insert(100);
    list.insert(200);
    list.insert(500);
    list.insert(700);

    test("Maximum and minimum",()=>{
        expect(list.max()).toBe(700);
        expect(list.min()).toBe(100);
        list.delete(100);
        expect(list.min()).toBe(200);
        //200 - 500 - 700
    });

    test("Predecessor and successor",()=>{
        expect(list.predecessor(200)).toBeNull();
        expect(list.predecessor(500).data).toBe(200);
        expect(list.predecessor(700).data).toBe(500);
        expect(list.predecessor(1000)).toBe(false);
        expect(list.successor(200).data).toBe(500);
        expect(list.successor(500).data).toBe(700);
        expect(list.successor(1000)).toBe(false);
        expect(list.successor(700)).toBeNull();
    });

    test("Merging two linked lists",()=>{
        //L1 200 - 500 - 700
        //L2 600 - 220 - 320
        list2.insert(600);
        list2.insert(220);
        list2.insert(320);
        list.merge(list2);
        list.printListData();
        console.log("-----------");
        expect(list.size()).toBe(6);
    })


});



describe("Testing Linked List helper methods",()=>{
    let list = new LinkedList();
    list.insert(100);
    list.insert(200);
    list.insert(500);
    list.insert(700);


    test("Testing size",()=>{
        expect(list.size()).toBe(4);
        list.delete(100);
        // 200 -> 500 -> 700
        expect(list.size()).toBe(3);
        list.delete(700);
        // 200 -> 500
        expect(list.size()).toBe(2);
    });

    test("Get first and last elements",()=>{
        expect(list.getFirst()).toBe(200);
        expect(list.getLast()).toBe(500);
        list.insert(100);
        //200 -> 500 -> 100
        expect(list.getLast()).toBe(100);
        list.delete(100);
        //200 -> 500
        expect(list.getFirst()).toBe(200);
        list.delete(200);
        //500
        expect(list.getFirst()).toBe(500);
        list.delete(500);
        expect(list.getFirst()).toBeNull();
        expect(list.getLast()).toBeNull();
    })

    test("Clearing and printing",()=>{
        list.insert(1);
        list.insert(250);
        list.insert(350);
        list.insert(460);
        //1 - 250 - 350 - 460
        list.delete(250);
        // 1- 350 - 460
        list.insert(900);
        // 1 - 350 - 460 - 900
        list.update(690,3);
        // 1 - 350 - 460 - 690
        list.printListData();
        console.log("-----------");
        list.clear();
        expect(list.head).toBeNull();
    })


});