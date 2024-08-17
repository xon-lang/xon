import {DeclarationNode} from '../../../../../syntax/node/declaration/declaration-node';
import {SemanticAnalyzer} from '../../../../semantic-analyzer';
import {functionTypeSemantic} from '../../../type/function/function-type-semantic';
import {parametersParse} from '../../../type/function/function-type-semantic-parser';
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
    analyzer.diagnosticManager.addPredefinedDiagnostic(node.assign.value.reference, (x) => x.wrongType());
  }

  if (node.parameters) {
    const parameters = parametersParse(analyzer, node, node.parameters);
    type = functionTypeSemantic(node.parameters, parameters, type);
  }

  if (node.generics) {
    const generics = parametersParse(analyzer, node, node.generics);
    type = functionTypeSemantic(node.generics, generics, type);
  }

  semantic.type = type;
}
