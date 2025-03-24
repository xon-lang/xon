// import {
//   DeclarationStatementNode,
//   newFunctionTypeSemantic,
//   newUnknownTypeSemantic,
//   parametersParse,
//   SemanticAnalyzer,
//   StructuralTypeDeclarationSemantic,
//   typeSemanticParse,
// } from '#analyzer';

// export function structuralTypeDeclarationSemanticHandle(
//   analyzer: SemanticAnalyzer,
//   semantic: StructuralTypeDeclarationSemantic,
//   node: DeclarationStatementNode,
// ): void {
//   const resultType = node.assign
//     ? typeSemanticParse(analyzer, node.assign.value)
//     : newUnknownTypeSemantic(analyzer, node);

//   if (node.generics) {
//     const generics = parametersParse(analyzer, node, node.generics);
//     semantic.type = newFunctionTypeSemantic(analyzer, node.generics, generics, resultType);

//     return;
//   }

//   semantic.type = resultType;

//   if (node.parameters) {
//     throw new Error('Not implemented');
//   }
// }
