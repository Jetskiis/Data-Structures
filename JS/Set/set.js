//Sets store only UNIQUE values in ANY order unlike arrays,
export default class Set {
  constructor() {
    this.collection = [];
  }
  //BASIC SET METHODS

  //checks if set has an element, return true or false
  has(element) {
    if (this.collection.indexOf(element) != -1) return true;
    else return false;
  }
  //returns set
  listValues() {
    return this.collection;
  }
  //adds element to set
  add(element) {
    if (this.has(element)) return;
    else this.collection.push(element);
  }
  //removes element from set and return true, return false if element not found
  remove(element) {
    if (!this.has(element)) return false;
    else {
      this.collection.splice(this.collection.indexOf(element), 1);
      return true;
    }
  }
  //empties the set
  clear() {
    this.collection = [];
  }
  //returns size of set
  size() {
    return this.collection.length;
  }

  //SET COMPARISON METHODS

  //returns union of two sets as a new set
  union(otherSet) {
    let newSet = new Set();
    for (const i of this.collection) {
      newSet.add(i);
    }
    for (const j of otherSet.listValues()) {
      newSet.add(j);
    }
    return newSet;
  }
  //returns intersection of two sets as a new set
  intersection(otherSet) {
    let newSet = new Set();
    if (otherSet.size() >= this.size()) {
      for (const i of this.listValues()) {
        if (otherSet.has(i)) newSet.add(i);
      }
    } else {
      for (const i of otherSet.listValues()) {
        if (this.has(i)) newSet.add(i);
      }
    }
    return newSet;
  }
  //returns elements from current set that are not in other set as a new set
  difference(otherSet) {
    let newSet = new Set();
    for (const element of this.listValues()) {
      if (!otherSet.has(element)) newSet.add(element);
    }
    return newSet;
  }
  //returns new set of elements from current set that are not in other set and elements from other set that are not in current set as a new set
  //this function essentially calls diff() twice with different arguments: currentSet.diff(otherSet) + otherSet.diff(currentSet) and returns the new combined set
  symmetricDifference(otherSet) {
    let thisDiff = this.difference(otherSet);
    let otherDiff = otherSet.difference(this);
    return thisDiff.union(otherDiff);
  }
  //checks if current set is a subset of other set and returns true, false otherwise
  isSubset(otherSet) {
    if (otherSet.size() < this.size()) return false;
    const isIn = (element) => otherSet.has(element);
    return this.listValues().every(isIn);
  }
  //checks if current set is a superset of other set and returns true, false otherwise
  isSuperset(otherSet) {
    if (this.size() < otherSet.size()) return false;
    const isIn = (element) => this.has(element);
    return otherSet.listValues().every(isIn);
  }
}
