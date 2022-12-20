import { Integer, String2 } from '~/lib/core';
import { Source } from '~/source/source';

export class SourcePosition {
  constructor(public source: Source, public index: Integer, public line: Integer, public column: Integer) {}

  static fromIndex = fromIndex;
  static fromLineColumn = fromLineColumn;
}

function fromIndex(source: Source, index: Integer): SourcePosition {
  const linesIndex = getLinesIndex(source.text);
  const line = findLowerIndexInRangeArray(index, linesIndex);
  const column = index - linesIndex[line];

  return {
    source,
    index,
    line,
    column,
  };
}

function fromLineColumn(source: Source, line: Integer, column: Integer): SourcePosition {
  const linesIndex = getLinesIndex(source.text);

  // if (line >= 0 && column >= 0 && line < linesIndex.length) {
  const lineIndex = linesIndex[line];
  // const nextIndex = (line === linesIndex.length - 1 && source.text.length) || linesIndex[line + 1];

  // if (column < nextIndex - lineIndex) {
  // return lineIndex + column;
  // }

  const index = lineIndex + column;

  return {
    source,
    index,
    line,
    column,
  };
  // }
}

function getLinesIndex(str: String2): Integer[] {
  const lines = str.split('\n');
  const linesIndex = new Array(lines.length);

  for (let i = 0, index = 0; i < lines.length; i++) {
    linesIndex[i] = index;
    index += lines[i].length + 1;
  }

  return linesIndex;
}

function findLowerIndexInRangeArray(value: Integer, linesIndex: Integer[]): Integer {
  if (value >= linesIndex[linesIndex.length - 1]) {
    return linesIndex.length - 1;
  }

  let min = 0;
  let max = linesIndex.length - 2;
  let mid;
  while (min < max) {
    // eslint-disable-next-line no-bitwise
    mid = min + ((max - min) >> 1);

    if (value < linesIndex[mid]) {
      max = mid - 1;
    } else if (value >= linesIndex[mid + 1]) {
      min = mid + 1;
    } else {
      min = mid;
      break;
    }
  }

  return min;
}
