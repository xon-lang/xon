/* eslint-disable @typescript-eslint/no-use-before-define */
import { ArrayExpressionTree } from '../../tree/expression/array-expression/array-expression.tree';
import { ExpressionTree } from '../../tree/expression/expression.tree';
import { IdExpressionTree } from '../../tree/expression/id-expression/id-expression.tree';
import { IndexExpressionTree } from '../../tree/expression/index-expression/index-expression.tree';
import { InstanceExpressionTree } from '../../tree/expression/instance-expression/instance-expression.tree';
import { LambdaExpressionTree } from '../../tree/expression/lambda-expression/lambda-expression.tree';
import { LiteralExpressionTree } from '../../tree/expression/literal-expression/literal-expression.tree';
import { MemberExpressionTree } from '../../tree/expression/member-expression/member-expression.tree';
import { MethodExpressionTree } from '../../tree/expression/method-expression/method-expression.tree';
import { OperatorExpressionTree } from '../../tree/expression/operator-expression/operator-expression.tree';
import { ParenthesizedExpressionTree } from '../../tree/expression/parenthesized-expression/parenthesized-expression.tree';
import { BooleanLiteralTree } from '../../tree/literal/boolean-literal/boolean-literal.tree';
import { CharLiteralTree } from '../../tree/literal/char-literal/char-literal.tree';
import { FloatLiteralTree } from '../../tree/literal/float-literal/float-literal.tree';
import { IntegerLiteralTree } from '../../tree/literal/integer-literal/integer-literal.tree';
import { StringLiteralTree } from '../../tree/literal/string-literal/string-literal.tree';
import { ActionTypeTree } from '../../tree/type/action-type/action-type.tree';
import { ArrayTypeTree } from '../../tree/type/array-type/array-type.tree';
import { FunctionTypeTree } from '../../tree/type/function-type/function-type.tree';
import {
  createArrayType,
  createFunctionType,
  createPlainType,
  createUnionType,
} from '../../tree/type/type-helper';
import { TypeTree } from '../../tree/type/type.tree';
import { findMember, findOperatorMember } from '../find-type-member';
import { find } from '../id-scope';

export type GenericsMap = Map<string, TypeTree>;

export function getArrayExpressionType(
  tree: ArrayExpressionTree,
  genericsMap: GenericsMap,
): TypeTree {
  if (!tree.items.length) return createArrayType(createPlainType('Any'));

  const itemsTypes = tree.items.map((x) => getExpressionType(x, genericsMap));
  if (itemsTypes.every((x) => x.equals(itemsTypes[0]))) return createArrayType(itemsTypes[0]);

  return createArrayType(createUnionType(itemsTypes));
}

export function getIdExpressionType(tree: IdExpressionTree): TypeTree {
  return find(tree.name);
}

export function getIndexExpressionType(
  tree: IndexExpressionTree,
  genericsMap: GenericsMap,
): TypeTree {
  const objectType = getExpressionType(tree.object, genericsMap);
  if (!(objectType instanceof ArrayTypeTree)) throw new Error('Object is not array');

  // const indexType = getExpressionType(tree.index);
  // if (indexType.name !== 'Integer') throw new Error('Index must be Integer type');

  return objectType.itemType;
}

export function getInstanceExpressionType(tree: InstanceExpressionTree): TypeTree {
  return find(tree.name);
}

export function getLambdaExpressionType(
  tree: LambdaExpressionTree,
  genericsMap: GenericsMap,
): TypeTree {
  const parametersTypes = tree.parameters.map(
    (x) => x.typeTree.fromExplicitTypes(genericsMap) || createPlainType('Any'),
  );
  const returnType = getExpressionType(tree.expression, genericsMap);
  return createFunctionType(parametersTypes, returnType);
}

export function getLiteralExpressionType(tree: LiteralExpressionTree): TypeTree {
  if (tree.literal instanceof BooleanLiteralTree) return createPlainType('Boolean');
  if (tree.literal instanceof IntegerLiteralTree) return createPlainType('Integer');
  if (tree.literal instanceof FloatLiteralTree) return createPlainType('Float');
  if (tree.literal instanceof CharLiteralTree) return createPlainType('Char');
  if (tree.literal instanceof StringLiteralTree) return createPlainType('String');

  return null;
}

export function getMemberExpressionType(
  tree: MemberExpressionTree,
  genericsMap: GenericsMap,
): TypeTree {
  const objectType = getExpressionType(tree.object, genericsMap);
  return findMember(objectType, tree.name);
}

export function getMethodExpressionType(
  tree: MethodExpressionTree,
  genericsMap: GenericsMap,
): TypeTree {
  const objectType = getExpressionType(tree.object, genericsMap);
  if (objectType instanceof ActionTypeTree) return null;
  if (!(objectType instanceof FunctionTypeTree))
    throw new Error('Object is not a function and not an action');

  const argumentsTypes = tree.arguments.map((x) => getExpressionType(x.value, genericsMap));

  const argumentsGenericsEntries = argumentsTypes
    .map((x) => x.getGenericsMap(x).entries())
    .map((x) => Array.from(x))
    .flat();
  const argumentsGenerics = new Map(argumentsGenericsEntries);
  return objectType.returnType.fromExplicitTypes(argumentsGenerics);
}

export function getOperatorExpressionType(
  tree: OperatorExpressionTree,
  genericsMap: GenericsMap,
): TypeTree {
  const leftType = getExpressionType(tree.left, genericsMap);
  const rightType = getExpressionType(tree.left, genericsMap);
  return findOperatorMember(leftType, tree.operator, rightType);
}

export function getParenthesizedExpressionType(
  tree: ParenthesizedExpressionTree,
  genericsMap: GenericsMap,
): TypeTree {
  return getExpressionType(tree.value, genericsMap);
}

export function getExpressionType(
  tree: ExpressionTree,
  genericsMap: GenericsMap = new Map(),
): TypeTree {
  if (tree instanceof ArrayExpressionTree) return getArrayExpressionType(tree, genericsMap);
  if (tree instanceof IdExpressionTree) return getIdExpressionType(tree);
  if (tree instanceof IndexExpressionTree) return getIndexExpressionType(tree, genericsMap);
  if (tree instanceof InstanceExpressionTree) return getInstanceExpressionType(tree);
  if (tree instanceof LambdaExpressionTree) return getLambdaExpressionType(tree, genericsMap);
  if (tree instanceof LiteralExpressionTree) return getLiteralExpressionType(tree);
  if (tree instanceof MemberExpressionTree) return getMemberExpressionType(tree, genericsMap);
  if (tree instanceof MethodExpressionTree) return getMethodExpressionType(tree, genericsMap);
  if (tree instanceof OperatorExpressionTree) return getOperatorExpressionType(tree, genericsMap);

  if (tree instanceof ParenthesizedExpressionTree)
    return getParenthesizedExpressionType(tree, genericsMap);

  throw new Error(`${tree.constructor.name} not found`);
}
