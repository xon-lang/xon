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
      const token = this.nextToken(i);

      if (token) {
        tokens.push(token);
        i = token.stopIndex;
        continue;
      }

      const last = tokens[tokens.length - 1];
      if (last?.type === NodeType.UNEXPECTED) {
        last.stopIndex = i;
        continue;
      }

      const unexpected = unexpectedNode(i, i);
      tokens.push(unexpected);
    }

    return tokens;
  }

  nextToken(index: Integer): Node | null {
    for (const tokenScan of tokenScanFunctions) {
      const token = tokenScan(this.source, index, this.stopIndex);
      if (token) {
        return token;
      }
    }
    return null;
  }
}
