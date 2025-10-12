// import {
//   $BracketGroupNode,
//   ArrayTypeSemantic,
//   arrayTypeSemantic,
//   BracketGroupNode,
//   newUnknownTypeSemantic,
//   Node,
//   SemanticAnalyzer,
//   typeSemanticParse,
// } from '#analyzer';
// import {Nothing, nothing} from '#common';
// import {is} from '#typing';

// export function arrayTypeSemanticTryParse(
//   analyzer: SemanticAnalyzer,
//   node: Node,
// ): ArrayTypeSemantic | Nothing {
//   if (!is(node, $BracketGroupNode())) {
//     return nothing;
//   }

//   return arrayTypeSemanticParse(analyzer, node);
// }

// export function arrayTypeSemanticParse(
//   analyzer: SemanticAnalyzer,
//   node: BracketGroupNode,
// ): ArrayTypeSemantic {
//   const items = node.items.map((x) =>
//     x.value ? typeSemanticParse(analyzer, x.value) : newUnknownTypeSemantic(analyzer, x),
//   );
//   const semantic = arrayTypeSemantic(analyzer, node, items);

//   return semantic;
// }
