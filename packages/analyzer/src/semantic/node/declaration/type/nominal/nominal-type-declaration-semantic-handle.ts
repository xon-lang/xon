// import {
//   $AttributeDeclarationSemantic,
//   DeclarationNode,
//   newFunctionTypeSemantic,
//   newIdTypeSemantic,
//   NominalTypeDeclarationSemantic,
//   parametersParse,
//   SemanticAnalyzer,
//   statementDeclarationsParse,
//   typeSemanticParse,
// } from '#analyzer';
// import {is} from '#typing';

// export function nominalTypeDeclarationSemanticHandle(
//   analyzer: SemanticAnalyzer,
//   semantic: NominalTypeDeclarationSemantic,
//   node: DeclarationNode,
// ): void {
//   // todo use 'unknownType' type instead of 'nothing' ???
//   // todo use 'Something' type instead of 'nothing' ???
//   if (node.type) {
//     semantic.extendsType = typeSemanticParse(analyzer, node.type.value);
//     for (const attribute of semantic.extendsType.attributes().all()) {
//       semantic.attributes.add(attribute);
//     }
//   }

//   const resultType = newIdTypeSemantic(analyzer, node.id, node.id.text, semantic);

//   if (node.generics) {
//     const generics = parametersParse(analyzer, node, node.generics);
//     semantic.type = newFunctionTypeSemantic(analyzer, node.generics, generics, resultType);

//     return;
//   }

//   semantic.type = resultType;

//   if (node.attributes) {
//     const attributes = statementDeclarationsParse(analyzer, node.attributes).filter((x) =>
//       is(x, $AttributeDeclarationSemantic()),
//     );

//     for (const attribute of attributes) {
//       semantic.attributes.add(attribute);
//     }
//   }

//   if (node.parameters) {
//     throw new Error('Not implemented');
//   }
// }
