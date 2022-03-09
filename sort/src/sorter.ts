interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void;
}

export abstract class Sorter {
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void;
  abstract length: number;

  sort(): void {
    // Only for array of numbers.
    // string are immutable --> can't change --> so we cant use swap logic above.
    const { length } = this;
    for (let x = 0; x < length; x++) {
      for (let y = 0; y < length - x - 1; y++) {
        // this logic for array of numbers
        if (this.compare(y, y + 1)) {
          this.swap(y, y + 1);
        }
      }
    }
  }
}
