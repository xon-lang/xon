import {DeclarationNode} from '../../../../../syntax/node/declaration/declaration-node';
import {SemanticAnalyzer} from '../../../../semantic-analyzer';
import {functionTypeSemantic} from '../../../type/function/function-type-semantic';
import {parametersOrGenericsParse} from '../../../type/function/function-type-semantic-parser';
import {typeSemanticParse} from '../../../type/type-semantic-parser';
import {unknownTypeFromNode} from '../../../type/unknown/unknown-type-semantic';
import {AttributeValueDeclarationSemantic} from './attribute-value-declaration-semantic';

export function attributeValueDeclarationSemanticHandle(
  analyzer: SemanticAnalyzer,
  semantic: AttributeValueDeclarationSemantic,
  node: DeclarationNode,
): void {
  const valueType = node.assign
    ? typeSemanticParse(analyzer, node.assign.value)
    : unknownTypeFromNode(analyzer, node);

  let type = node.type ? typeSemanticParse(analyzer, node.type.value) : valueType;

  if (node.assign?.value && !valueType.is(type)) {
    analyzer.diagnosticManager.addPredefinedDiagnostic(node.assign.value.range, (x) => x.wrongType());
  }

  if (node.parameters) {
    const parameters = parametersOrGenericsParse(analyzer, node, node.parameters);
    type = functionTypeSemantic(analyzer.reference(node.parameters), parameters, type);
  }

  if (node.generics) {
    const generics = parametersOrGenericsParse(analyzer, node, node.generics);
    type = functionTypeSemantic(analyzer.reference(node.generics), generics, type);
  }

  semantic.type = type;
}
