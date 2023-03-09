import { String2 } from '~/lib/core';
import { parserFromCode, parserFromFile } from '~/parser/parser';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { SourceTree } from '~/tree/source/source-tree';

export function parseSourceFile(location: String2): SourceTree {
  return parserFromFile(location).source();
}

export function parseSource(code: String2): SourceTree {
  return parserFromCode(code).source();
}

export function parseExpression(code: String2): ExpressionTree {
  return parserFromCode(code).expression();
}
