import { LiteralExpressionTree } from './tree/expression/literal-expression/literal-expression.tree';
import { BooleanLiteralTree } from './tree/literal/boolean-literal/boolean-literal.tree';
import { NullLiteralTree } from './tree/literal/null-literal/null-literal.tree';
import { NumberLiteralTree } from './tree/literal/number-literal/number-literal.tree';
import { StringLiteralTree } from './tree/literal/string-literal/string-literal.tree';
import { BoolType } from './tree/type/primitive/bool-type';
import { NullType } from './tree/type/primitive/null-type';
import { NumType } from './tree/type/primitive/num-type';
import { StrType } from './tree/type/primitive/str-type';
import { SimpleTypeTree } from './tree/type/simple-type/simple-type.tree';
import { TypeTree } from './tree/type/type.tree';

// export function getAddExpressionType(tree: LiteralExpressionTree): TypeTree {}

// export function getLiteralExpressionType(tree: LiteralExpressionTree): TypeTree {
//     if (tree instanceof NullLiteralTree) return undefined;
//     if (tree instanceof BooleanLiteralTree) return BoolType;
//     if (tree instanceof NumberLiteralTree) return NumType;
//     if (tree instanceof StringLiteralTree) return StrType;
// }

// export function getPrimitiveOperationType(
//     left: SimpleTypeTree,
//     right: SimpleTypeTree
// ): SimpleTypeTree {
//     const types = ['bool', 'num', 'str'];
//     if (!types.includes(left.name) || !types.includes(right.name)) return undefined;

//     if (left.name == 'str' || right.name == 'str') return PrimitiveTypes.Str;
//     return PrimitiveTypes.Num;
// }
