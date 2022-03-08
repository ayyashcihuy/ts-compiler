class Sorter {
  constructor(public collection: number[]) {}

  sort(): void {
    const { length } = this.collection;
    for (let x = 0; x < length; x++) {
      for (let y = 0; y < length - x - 1; y++) {}
    }
  }
}

const sorter = new Sorter([10, 3, -5, 0]);

sorter.sort();
console.log(sorter.collection);
