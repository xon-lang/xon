import { String2 } from '~/lib/core';
import { Node } from '~/parser/lexer/node';
import { parserFromCode, parserFromFile } from '~/parser/parser';
import { SourceNode } from '~/tree/source/source-tree';

export function parseSourceFile(location: String2): SourceNode {
  return parserFromFile(location).source();
}

export function parseSource(code: String2): SourceNode {
  return parserFromCode(code).source();
}

export function parseExpression(code: String2): Node {
  return parserFromCode(code).expression();
}
