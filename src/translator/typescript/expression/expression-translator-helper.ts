import { Issue } from '../../../issue-service/issue';
import { none } from '../../../lib/core';
import { ArrayExpressionTree } from '../../../tree/expression/array/array-expression-tree';
import { ExpressionTree } from '../../../tree/expression/expression-tree';
import { GenericsExpressionTree } from '../../../tree/expression/generics/generics-expression-tree';
import { IdExpressionTree } from '../../../tree/expression/id/id-expression-tree';
import { IndexExpressionTree } from '../../../tree/expression/index/index-expression-tree';
import { InfixExpressionTree } from '../../../tree/expression/infix/infix-expression-tree';
import { InvokeExpressionTree } from '../../../tree/expression/invoke/invoke-expression-tree';
import { LiteralExpressionTree } from '../../../tree/expression/literal/literal-expression-tree';
import { MemberExpressionTree } from '../../../tree/expression/member/member-expression-tree';
import { MethodExpressionTree } from '../../../tree/expression/method/method-expression-tree';
import { NullableExpressionTree } from '../../../tree/expression/nullable/nullable-expression-tree';
import { ParenthesizedExpressionTree } from '../../../tree/expression/parenthesized/parenthesized-expression-tree';
import { PrefixExpressionTree } from '../../../tree/expression/prefix/prefix-expression-tree';
import { ArrayExpressionTranslator } from './array/array-expression-translator';
import { ExpressionTranslator } from './expression-translator';
import { GenericsExpressionTranslator } from './generics/generics-expression-translator';
import { IdExpressionTranslator } from './id/id-expression-translator';
import { IndexExpressionTranslator } from './index/index-expression-translator';
import { InfixExpressionTranslator } from './infix/infix-expression-translator';
import { InvokeExpressionTranslator } from './invoke/invoke-expression-translator';
import { LiteralExpressionTranslator } from './literal/literal-expression-translator';
import { MemberExpressionTranslator } from './member/member-expression-translator';
import { MethodExpressionTranslator } from './method/method-expression-translator';
import { NullableExpressionTranslator } from './nullable/nullable-expression-translator';
import { ParenthesizedExpressionTranslator } from './parenthesized/parenthesized-expression-translator';
import { PrefixExpressionTranslator } from './prefix/prefix-expression-translator';

export function getExpressionTranslator(
  tree: ExpressionTree,
  isType: boolean,
): ExpressionTranslator {
  if (!tree) return none;
  try {
    if (tree instanceof ArrayExpressionTree) return new ArrayExpressionTranslator(tree, isType);
    if (tree instanceof GenericsExpressionTree)
      return new GenericsExpressionTranslator(tree, isType);
    if (tree instanceof IdExpressionTree) return new IdExpressionTranslator(tree, isType);
    if (tree instanceof InfixExpressionTree) return new InfixExpressionTranslator(tree, isType);
    if (tree instanceof InvokeExpressionTree) return new InvokeExpressionTranslator(tree, isType);
    if (tree instanceof LiteralExpressionTree) return new LiteralExpressionTranslator(tree, isType);
    if (tree instanceof MemberExpressionTree) return new MemberExpressionTranslator(tree, isType);
    if (tree instanceof MethodExpressionTree) return new MethodExpressionTranslator(tree, isType);
    if (tree instanceof PrefixExpressionTree) return new PrefixExpressionTranslator(tree, isType);
    if (tree instanceof IndexExpressionTree) return new IndexExpressionTranslator(tree, isType);
    if (tree instanceof ParenthesizedExpressionTree)
      return new ParenthesizedExpressionTranslator(tree, isType);
    if (tree instanceof NullableExpressionTree)
      return new NullableExpressionTranslator(tree, isType);
  } catch (error) {
    Issue.errorFromTree(tree, error.toString());
  }
}

export const getExpressionTranslators = (
  trees: ExpressionTree[],
  isType: boolean,
): ExpressionTranslator[] => {
  return trees?.map((x) => getExpressionTranslator(x, isType)) || [];
};
