class Sorter {
  constructor(elements) {
     if(elements){
     this.elementsArray = elements;
     }
     else {
        this.elementsArray = [];
     }
     this.isComparator = false;
  }

  add(element) {
    this.elementsArray.push(element);
  }

  at(index) {
    return this.elementsArray[index];
  }

  get length() {
    return this.elementsArray.length;
  }

  toArray() {
    return this.elementsArray;
  }

  sort(indices) {
     let sortedIndex = [];

     indices.sort((a, b) => a - b);

     for (let i = 0; i < indices.length; i++){
        sortedIndex[i]=this.elementsArray[indices[i]];
     }
      if (this.isComparator){
         sortedIndex.sort(this.compareFunction);
      } else {
          sortedIndex.sort(this.compareNumbers);
      }
      for (let i = 0; i < indices.length; i++){
         this.elementsArray[indices[i]] = sortedIndex[i];
      }
  }

  compareNumbers(a, b) {
   return a - b;
}

  setComparator(compareFunction) {
     if (compareFunction){
        this.isComparator = true;
        this.compareFunction = compareFunction;
     }
  }
}

module.exports = Sorter;