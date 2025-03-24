// import {
//   DeclarationStatementNode,
//   newUnknownTypeSemantic,
//   ParameterTypeDeclarationSemantic,
//   SemanticAnalyzer,
//   typeSemanticParse,
// } from '#analyzer';
// import {nothing} from '#common';

// export function parameterTypeDeclarationSemanticHandle(
//   analyzer: SemanticAnalyzer,
//   semantic: ParameterTypeDeclarationSemantic,
//   node: DeclarationStatementNode,
// ): void {
//   semantic.defaultType = node.assign ? typeSemanticParse(analyzer, node.assign.value) : nothing;

//   semantic.type = node.type
//     ? typeSemanticParse(analyzer, node.type.value)
//     : semantic.defaultType ?? newUnknownTypeSemantic(analyzer, node);

//   if (node.generics || node.parameters) {
//     throw new Error('Not implemented');
//   }
// }
