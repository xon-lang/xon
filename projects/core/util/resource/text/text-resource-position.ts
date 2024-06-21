import {Boolean2, Integer, String2} from '../../../../lib/types';
import {NL} from '../../../analyzer/lexical/lexical-config';
import {TextPosition, textPosition} from './text-position';
import {TextRange, textRange} from './text-range';
import {TextResource} from './text-resource';

export interface TextResourcePosition {
  resource: TextResource;
  position: TextPosition;

  getRange(length: Integer): TextRange;
  getRangeWithNL(length: Integer): TextRange;
  checkTextAtPosition(text: String2): Boolean2;
}

export function textResourcePosition(
  resource: TextResourcePosition['resource'],
  position: TextResourcePosition['position'],
): TextResourcePosition {
  return {
    resource,
    position,

    getRange(length: Integer): TextRange {
      return textRange(
        textPosition(this.position.index, this.position.line, this.position.column),
        textPosition(this.position.index + length, this.position.line, this.position.column + length),
      );
    },

    getRangeWithNL(length: Integer): TextRange {
      let nlCount = this.position.line;
      let columnIndent = this.position.column;

      for (let i = this.position.index; i < this.position.index + length; i++) {
        const char = this.resource.data[i];

        if (char === NL) {
          nlCount += 1;
          columnIndent = 0;

          continue;
        }

        columnIndent += 1;
      }

      return textRange(
        textPosition(this.position.index, this.position.line, this.position.column),
        textPosition(this.position.index + length, nlCount, columnIndent),
      );
    },

    checkTextAtPosition(text: String2): Boolean2 {
      return this.resource.data.take(text.length, this.position.index) === text;
    },
  };
}
