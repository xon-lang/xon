import { Integer } from '~/lib/core';
import { scanIdToken } from '~/node/id/id-node';
import { scanIntegerToken } from '~/node/integer/integer-node';
import { scanJoiningToken } from '~/node/joining/joining-node';
import { Node, NodeType } from '~/node/node';
import { scanOperatorToken } from '~/node/operator/operator-node';
import { scanStringToken } from '~/node/string/string-node';
import { unexpectedNode } from '~/node/unexpected/unexpected-node';
import { scanWhitespaceToken } from '~/node/whitespace/whitespace-node';
import { Source } from '~/parser/source/source';

type TokenScanFunction = (source: Source, startIndex: Integer, stopIndex: Integer) => Node | null;

const tokenScanFunctions: TokenScanFunction[] = [
  scanStringToken,
  scanJoiningToken,
  scanWhitespaceToken,
  scanOperatorToken,
  scanIdToken,
  scanIntegerToken,
];

export class Lexer {
  public startIndex: Integer;
  public stopIndex: Integer;

  public constructor(public source: Source, startIndex: Integer | null = null, stopIndex: Integer | null = null) {
    this.startIndex = startIndex ?? 0;
    this.stopIndex = stopIndex ?? source.text.length - 1;
  }

  public getTokens(): Node[] {
    const tokens: Node[] = [];

    for (let i = this.startIndex; i <= this.stopIndex; i++) {
      let token: Node | null = null;

      for (const tokenScan of tokenScanFunctions) {
        token = tokenScan(this.source, i, this.stopIndex);
        if (token) {
          tokens.push(token);
          i = token.stopIndex;
          break;
        }
      }

      if (token) {
        continue;
      }

      const last = tokens[tokens.length - 1];

      if (last?.type === NodeType.UNEXPECTED) {
        const lastStartIndex = last.startIndex;
        const unexpected = unexpectedNode(lastStartIndex, i);
        tokens.splice(-1);
        tokens.push(unexpected);
      } else {
        const unexpected = unexpectedNode(i, i);
        tokens.push(unexpected);
      }
    }

    return tokens;
  }
}
