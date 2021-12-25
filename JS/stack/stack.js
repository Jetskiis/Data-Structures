export default class Stack{
    constructor(){
        //items is an object in this case, not an array since stacks can be implemented using arrays normally without creating a class
        this.items = {}
        this.key = 0;
    }

    //push a item onto stack
    push(item){
        this.items[this.key] = item;
        this.key++;
    }

    //pop a item off stack, return item
    pop(){
        let popped = this.items[this.key - 1];
        this.key--;
        return popped;
    }

    //return top item of stack
    peek(){
        return this.items[this.key - 1];
    }

    //true if stack empty, false otherwise
    isEmpty(){
        if(this.key != 0)
            return false
        else
            return true
    }

    //size of stack
    size(){
        return this.key;
    }

    //remove all items on stack
    clear(){
        let i = this.key;
        while(i > 0){
            this.pop();
            i--;
        }
    }

}