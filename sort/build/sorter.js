"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
class Sorter {
    sort() {
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
exports.Sorter = Sorter;
