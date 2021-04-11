/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable no-param-reassign */
import { ArrayExpressionTree } from '../tree/expression/array-expression/array-expression.tree';
import { ExpressionTree } from '../tree/expression/expression.tree';
import { IdExpressionTree } from '../tree/expression/id-expression/id-expression.tree';
import { IndexExpressionTree } from '../tree/expression/index-expression/index-expression.tree';
import { InstanceExpressionTree } from '../tree/expression/instance-expression/instance-expression.tree';
import { LambdaExpressionTree } from '../tree/expression/lambda-expression/lambda-expression.tree';
import { LiteralExpressionTree } from '../tree/expression/literal-expression/literal-expression.tree';
import { MemberExpressionTree } from '../tree/expression/member-expression/member-expression.tree';
import { BooleanLiteralTree } from '../tree/literal/boolean-literal/boolean-literal.tree';
import { CharLiteralTree } from '../tree/literal/char-literal/char-literal.tree';
import { FloatLiteralTree } from '../tree/literal/float-literal/float-literal.tree';
import { IntegerLiteralTree } from '../tree/literal/integer-literal/integer-literal.tree';
import { StringLiteralTree } from '../tree/literal/string-literal/string-literal.tree';
import { DataType } from './data-type';
import { processStatement } from './statement-typing';
import { addToScope, findInScopes, popScope, pushScope } from './typing';

export function processArrayExpression(tree: ArrayExpressionTree): void {
  if (tree.items.length) {
    const firstItemDataType = tree.items[0].dataType;
    if (tree.items.every((x) => x.dataType.equals(firstItemDataType)))
      tree.dataType = new DataType('Array', [firstItemDataType]);
    else
      tree.dataType = new DataType(
        'Array',
        tree.items.map((x) => x.dataType),
      );
  }
  tree.dataType.isArray = true;
}

export function processIdExpression(tree: IdExpressionTree): void {
  if (tree.name.startsWith(tree.name[0].toUpperCase()))
    tree.dataType = new DataType('Function', [new DataType(tree.name)]);
  else tree.dataType = findInScopes(tree.name).dataType;
}

export function processIndexExpression(tree: IndexExpressionTree): void {
  processExpression(tree.object);
  processExpression(tree.index);

  if (!tree.object.dataType.isArray) throw new Error('Object must be Array type');
  if (tree.object.dataType.generics.length === 0) throw new Error('Generics not found for Array');
  if (tree.index.dataType.name !== 'Integer') throw new Error('Index must be Integer type');

  if (tree.dataType.generics.length > 1 && tree.index instanceof LiteralExpressionTree) {
    tree.dataType = tree.object.dataType.generics[tree.index.literal.value as number];
  } else {
    [tree.dataType] = tree.dataType.generics;
  }
}

export function processInstanceExpression(tree: InstanceExpressionTree): void {
  tree.dataType = findInScopes(tree.name).dataType;
}

export function processLambdaExpression(
  tree: LambdaExpressionTree,
  parametersTypes: DataType[],
): void {
  pushScope();
  if (tree.parameters.length !== parametersTypes.length) throw new Error('Wrong parameters count');
  if (tree.parameters.some((x) => x.typeTree))
    throw new Error('Lambda parameters must be without types');
  if (tree.parameters.some((x) => x.value))
    throw new Error('Lambda parameters must be without value');

  tree.parameters.forEach((x, i) => {
    x.dataType = parametersTypes[i];
  });

  tree.parameters.forEach((x) => addToScope(x.name, x.dataType));
  processStatement(tree.statement);
  popScope();
  tree.dataType = new DataType('Function', parametersTypes);
}

export function processLiteralExpression(tree: LiteralExpressionTree): void {
  if (tree.literal instanceof BooleanLiteralTree) tree.dataType = new DataType('Boolean');
  if (tree.literal instanceof IntegerLiteralTree) tree.dataType = new DataType('Integer');
  if (tree.literal instanceof FloatLiteralTree) tree.dataType = new DataType('Float');
  if (tree.literal instanceof CharLiteralTree) tree.dataType = new DataType('Char');
  if (tree.literal instanceof StringLiteralTree) tree.dataType = new DataType('String');
  tree.dataType.isLiteral = true;
}

export function processMemberExpression(tree: MemberExpressionTree): void {
  processExpression(tree.object);
  tree.dataType = tree.object.dataType.getMemberType(tree.name);
}

export function processExpression(tree: ExpressionTree): void {
  if (tree instanceof ArrayExpressionTree) processArrayExpression(tree);
  if (tree instanceof IdExpressionTree) processIdExpression(tree);
  if (tree instanceof LiteralExpressionTree) processLiteralExpression(tree);
}
