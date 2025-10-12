// import {
//   $AngleGroupNode,
//   $InvokeNode,
//   InvokeTypeSemantic,
//   newInvokeTypeSemantic,
//   newUnknownTypeSemantic,
//   Node,
//   SemanticAnalyzer,
//   typeSemanticParse,
// } from '#analyzer';
// import {Nothing, nothing} from '#common';
// import {is} from '#typing';

// export function invokeTypeSemanticTryParse(
//   analyzer: SemanticAnalyzer,
//   node: Node,
// ): InvokeTypeSemantic | Nothing {
//   if (!is(node, $InvokeNode())) {
//     return nothing;
//   }

//   if (!is(node.group, $AngleGroupNode())) {
//     analyzer.diagnosticManager.addPredefinedDiagnostic(node.group.open.reference, (x) => x.notImplemented());

//     return nothing;
//   }

//   const args = node.group.items.map((x) =>
//     x.value ? typeSemanticParse(analyzer, x.value) : newUnknownTypeSemantic(analyzer, x),
//   );
//   const instance = typeSemanticParse(analyzer, node.instance);

//   if (args.isEmpty()) {
//     analyzer.diagnosticManager.addPredefinedDiagnostic(node.instance.reference, (x) => x.notImplemented());
//   }

//   return newInvokeTypeSemantic(analyzer, node, instance, args);
// }
