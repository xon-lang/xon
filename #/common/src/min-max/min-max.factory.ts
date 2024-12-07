import {$MinMax, Boolean2, Integer, MinMax, String2} from '#common';

export function newMinMax(min: Integer, max: Integer): MinMax {
  return {
    $: $MinMax,
    min,
    max,

    equals(other: MinMax): Boolean2 {
      return this.min === other.min && this.max === other.max;
    },

    clone(): MinMax {
      return newMinMax(this.min, this.max);
    },

    toString(): String2 {
      return `{min: ${this.min}, max: ${this.max}}`;
    },
  };
}
