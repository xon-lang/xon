// this code was generated

import { Issue } from '../issue/issue';
import { Unknown } from '../lib/core';
import { ArrayExpressionTree } from '../tree/expression/array/array-expression-tree';
import { ExpressionTree } from '../tree/expression/expression-tree';
import { GroupExpressionTree } from '../tree/expression/group/group-expression-tree';
import { IdExpressionTree } from '../tree/expression/id/id-expression-tree';
import { InfixExpressionTree } from '../tree/expression/infix/infix-expression-tree';
import { LiteralExpressionTree } from '../tree/expression/literal/literal-expression-tree';
import { PrefixExpressionTree } from '../tree/expression/prefix/prefix-expression-tree';

function _escapeIfString(s: Unknown) {
  return (typeof s === 'string' && `\`${s}\``) || s;
}

export function evaluate(tree: ExpressionTree | null, argsMap = {}): Unknown {
  let a, b, o;
  if (!tree) {
    return null;
  }
  if (tree instanceof ArrayExpressionTree) {
    return tree.arguments.map((x) => evaluate(x.value));
  }
  if (tree instanceof LiteralExpressionTree) {
    return tree.literal.value;
  }
  if (tree instanceof GroupExpressionTree) {
    return evaluate(tree.expression);
  }
  if (tree instanceof InfixExpressionTree) {
    a = evaluate(tree.left, argsMap);
    b = evaluate(tree.right, argsMap);
    o = (tree.name.text === '^' && '**') || tree.name.text;
    return eval(`${_escapeIfString(a)} ${o} ${_escapeIfString(b)}`);
  }
  if (tree instanceof PrefixExpressionTree) {
    a = evaluate(tree.value, argsMap);
    return eval(`${tree.name.text}${_escapeIfString(a)}`);
  }
  if (tree instanceof IdExpressionTree) {
    if (tree.name.text in argsMap) {
      return argsMap[tree.name.text];
    }
    Issue.errorFromTree(tree, `Undefined key '${tree.name}'`);
  }
  Issue.errorFromTree(tree, 'Unsupported operation');
}

// this code was generated
