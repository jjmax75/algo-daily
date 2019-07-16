// hash map implementation using es6 class

/* jshint esversion: 6 */

class Hashmap {
  constructor() {
    this.storage = [];
  }

  set(key, val) {
    const index = this.hashStr[key];
    
    if (!this.storage[index]) {
      this.storage[index] = [];
    }
    
    this.storage[index].push([key, val]);
  }

  get(key) {
    const index = this.hashStr[key];
    
    if(!this.storage[index]) {
      return undefined;
    }
    
    for (let item of this.storage[index]) {
      if (item[0] === key) {
        return item[1];
      }
    }
  }

  hashStr(str) {
    let finalHash = 0;
    for (let i = 0; i < str.length; i++) {
      const charCode = str.charCodeAt(i);
      finalHash += charCode;
    }
    return finalHash;
  }
}

const m = new Hashmap();
m.set('name', 'Jake');
console.log(m.get('name'));
