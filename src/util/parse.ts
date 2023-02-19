import { String2 } from '~/lib/core';
import { parserFromCode, parserFromFile } from '~/parser/parser';
import { ArgumentTree } from '~/tree/argument/argument-tree';
import { DeclarationTree } from '~/tree/declaration/declaration-tree';
import { ExpressionTree } from '~/tree/expression/expression-tree';
import { SourceTree } from '~/tree/source/source-tree';
import { StatementTree } from '~/tree/statement/statement-tree';

export function parseSourceFile(location: String2): SourceTree {
  return parserFromFile(location).source();
}

export function parseSource(code: String2): SourceTree {
  return parserFromCode(code).source();
}

export function parseExpression(code: String2): ExpressionTree {
  return parserFromCode(code).expression();
}

export function parseStatement(code: String2): StatementTree {
  return parserFromCode(code).statement();
}

export function parseDeclaration(code: String2): DeclarationTree {
  return parserFromCode(code).declaration();
}

export function parseArgument(code: String2): ArgumentTree {
  return parserFromCode(code).argument();
}
