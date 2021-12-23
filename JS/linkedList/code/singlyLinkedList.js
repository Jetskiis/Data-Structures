export class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

export class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  /* MAIN METHODS
    
    */

  //search list by value and returns true if found, false if not
  search(value) {
    let head = this.head;

    if (!head) {
      return false;
    } else {
      while (head) {
        if (head.data == value) return true;
        else head = head.next;
      }
    }
    return false;
  }

  //insert node with data at the end of the list
  insert(data) {
    let head = this.head;
    const node = new Node(data, null);

    //list is empty
    if (!head) {
      this.head = node;
    } else {
      while (head.next) {
        head = head.next;
      }
      head.next = node;
    }
  }

  //delete first node with value from linked list
  delete(value) {
    let head = this.head;

    //first element is deleted
    if (head.data === value) {
      this.head = head.next;
      return;
    }

    if (!head) return;
    else {
      while (head.next) {
        if (head.next.data === value) {
          head.next = head.next.next;
          return;
        }
        head = head.next;
      }
    }
    return false;
  }

  //update value at index i
  update(value, i) {
    //head is updated
    if (i === 0) this.head.data = value;
    //index out of bounds
    else if (this.size() <= i){
        return false
    }
    else {
        let x = 0;
        let head = this.head;
        while(x < i){
            head = head.next;
            x++;
        }
        head.data = value;
    }
  }

  /* EXTRA METHODS

    */

  //get largest value from list
  max() {
    let largest = Number.MIN_SAFE_INTEGER;
    let head = this.head;

    if(!head)return null;

    while(head){
        if(head.data > largest){
            largest = head.data;
        }
        head = head.next;
    }
    return largest;
  }

  //get smallest value from list
  min() {
      let smallest = Number.MAX_SAFE_INTEGER;
      let head = this.head;

      if(!head)return null;
      while(head){
          if(head.data < smallest){
              smallest = head.data;
          }
          head = head.next;
      }
      return smallest;
  }

  //returns the node before the node containing value
  predecessor(value) {
      let head = this.head;

      if(!head)return null;
      else if(head.data === value){
        //head has no predecessor so return null
        return null;
      }
      else{
        while(head.next){
            if(head.next.data === value){
                return head;
            }
            head = head.next;
        }
      }

      return false
  }

  //returns the node after the node containing value
  successor(value) {
      let head = this.head;
      if(!head)return null
      else{
          while(head){
              if(head.data === value && head.next === null){
                  //successor of last node of list, return null
                  return null;
              }
              else if(head.data === value){
                  return head.next;
              }
              head = head.next;
          }
      }
      return false
  }

  //merges parent list with another list, unsorted or sorted
  merge(list) {
      let head = this.head;
      if(!head)head=list;
      else{
        while (head.next) {
            head = head.next;
          }
          head.next = list.head;
      }
  }

  /* HELPER METHODS
    
    */

  //get size of list
  size() {
      let head = this.head;

      if(!head) return 0;
      else if (!head.next) return 1;
      else{
          let i = 0;
          while(head){
            head = head.next;
            i+=1;
          }
          return i;
      }
  }

  //clear list
  clear() {
      this.head = null;
  }

  //return last value of list
  getLast() {
      let head = this.head;
      if(!head)return null
      else if(head.next === null)return head.data;
      else{
        while(head.next){
            head = head.next;
        }
      }
      return head.data;
  }

  //get first value of list
  getFirst() {
      return this.head ? this.head.data : null
  }

  //print all data in list
  printListData() {
      let head = this.head;
      while(head){
          console.log(head.data);
          head = head.next;
      }
  }
}
