// import {
//   $InfixNode,
//   AND,
//   IntersectionTypeSemantic,
//   intersectionTypeSemantic,
//   Node,
//   SemanticAnalyzer,
//   typeSemanticParse,
// } from '#analyzer';
// import {Nothing, nothing} from '#common';
// import {is} from '#typing';

// export function intersectionTypeSemanticTryParse(
//   analyzer: SemanticAnalyzer,
//   node: Node,
// ): IntersectionTypeSemantic | Nothing {
//   if (is(node, $InfixNode()) && node.operator.text.equals(AND)) {
//     const left = typeSemanticParse(analyzer, node.left);
//     const right = typeSemanticParse(analyzer, node.right);

//     if (left && right) {
//       return intersectionTypeSemantic(node, left, right);
//     }
//   }

//   return nothing;
// }
