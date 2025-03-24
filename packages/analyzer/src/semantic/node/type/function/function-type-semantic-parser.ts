// import {
//   $LambdaNode,
//   DeclarationStatementNode,
//   DeclarationSemantic,
//   documentationIdSemantic,
//   DocumentationNode,
//   FunctionTypeSemantic,
//   GroupNode,
//   newFunctionTypeSemantic,
//   newUnknownTypeSemantic,
//   Node,
//   parameterDeclarationsParse,
//   ParameterTypeDeclarationSemantic,
//   ParameterValueDeclarationSemantic,
//   SemanticAnalyzer,
//   typeSemanticParse,
// } from '#analyzer';
// import {ArrayData, newArrayData, Nothing, nothing} from '#common';
// import {is} from '#typing';

// export function functionTypeSemanticTryParse(
//   analyzer: SemanticAnalyzer,
//   node: Node,
// ): FunctionTypeSemantic | Nothing {
//   if (!is(node, $LambdaNode())) {
//     return nothing;
//   }

//   const parameters = node.parameters
//     ? parameterDeclarationsParse(analyzer, node.parameters)
//     : newArrayData<ParameterTypeDeclarationSemantic | ParameterValueDeclarationSemantic>();

//   const result = node.type
//     ? typeSemanticParse(analyzer, node.type.value)
//     : // todo use another range than 'node'
//       newUnknownTypeSemantic(analyzer, node);

//   const semantic = newFunctionTypeSemantic(analyzer, node, parameters, result);

//   return semantic;
// }

// export function parametersParse(
//   analyzer: SemanticAnalyzer,
//   node: DeclarationStatementNode,
//   group: GroupNode,
//   // todo return single type not union
// ): ArrayData<ParameterTypeDeclarationSemantic | ParameterValueDeclarationSemantic> {
//   const parameters = parameterDeclarationsParse(analyzer, group);

//   if (node.documentation) {
//     for (const parameter of parameters.filter((x) => !!x)) {
//       parameterDocumentationHandle(analyzer, node.documentation, parameter);
//     }
//   }

//   return parameters;
// }

// function parameterDocumentationHandle(
//   analyzer: SemanticAnalyzer,
//   documentation: DocumentationNode,
//   parameter: DeclarationSemantic,
// ): void {
//   const filteredItems = documentation.items.filter((x) => x.id.text.equals(parameter.name));

//   for (const item of filteredItems) {
//     parameter.usages.addLastItem(item.id.reference);
//     item.id.semantic = documentationIdSemantic(analyzer, item.id, parameter);
//   }

//   parameter.documentation = filteredItems.first()?.description?.text.setPadding(0).trim();
// }
