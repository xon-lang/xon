import { Integer, String2 } from '~/lib/core';
import { Source } from '~/source/source';

export class SourcePosition {
  public line: Integer;
  public column: Integer;

  constructor(public source: Source, public index: Integer, public lineIndex: Integer, public columnIndex: Integer) {
    this.line = lineIndex + 1;
    this.column = columnIndex + 1;
  }

  static fromIndex = fromIndex;
  static fromLineColumn = fromLineColumn;
}

function fromIndex(source: Source, index: Integer): SourcePosition {
  const linesIndex = getLinesIndex(source.text);
  const lineIndex = findLowerIndexInRangeArray(index, linesIndex);
  const columnIndex = index - linesIndex[lineIndex];

  return new SourcePosition(source, index, lineIndex, columnIndex);
}

function fromLineColumn(source: Source, lineIndex: Integer, columnIndex: Integer): SourcePosition {
  const linesIndex = getLinesIndex(source.text);
  const storedLineIndex = linesIndex[lineIndex];
  const index = storedLineIndex + columnIndex;

  return new SourcePosition(source, index, lineIndex, columnIndex);
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
