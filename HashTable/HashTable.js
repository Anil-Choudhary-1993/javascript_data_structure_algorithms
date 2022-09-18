class HashTable {
  constructor(size = 10) {
    this.table = new Array(size);
  }

  hashKey(key) {
    let hash = 0;
    const WEIRD_NO = 31;
    const limit = Math.min(key.length, this.table.length);
    for (let i = 0; i < limit; i++) {
      hash = (hash * WEIRD_NO + key.charCodeAt(i) - 96) % this.table.length;
    }
    return hash;
  }

  set(key, value) {
    const hash = this.hashKey(key);
    if (this.table[hash]) {
      this.table[hash].push([key, value]);
    } else {
      this.table[hash] = [[key, value]];
    }
  }

  get(key) {
    const hash = this.hashKey(key);
    if (this.table[hash]) {
      for (let index = 0; index < this.table[hash].length; index++) {
        if (key === this.table[hash][index][0]) {
          return this.table[hash][index][1];
        }
      }
    }
    return undefined;
  }

  getKeys() {
    const keys = [];
    for (let i = 0; i < this.table.length; i++) {
      for (let j = 0; j < this.table[i]?.length; j++) {
        keys.push(this.table[i][j][0]);
      }
    }
    return keys;
  }

  getValues() {
    const values = [];
    for (let i = 0; i < this.table.length; i++) {
      for (let j = 0; j < this.table[i]?.length; j++) {
        values.push(this.table[i][j][1]);
      }
    }
    return values;
  }
}

const hashTable = new HashTable(10);
hashTable.set("cricket", "bat & ball");
hashTable.set("javelin", "stick throw");
hashTable.set("soccerr", "ball");
hashTable.set("horse riding", "race");

hashTable.get("soccerr");
hashTable.get("cricket");

hashTable.getValues();
hashTable.getKeys();
