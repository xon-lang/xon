import {$MinMax, Boolean2, Integer, MinMax} from '#core';

export function newMinMax(min: Integer, max: Integer): MinMax {
  return {
    $: $MinMax(),
    min,
    max,

    equals(other: MinMax): Boolean2 {
      return this.min === other.min && this.max === other.max;
    },

    clone(): MinMax {
      return newMinMax(this.min, this.max);
    },
  };
}
