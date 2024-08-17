import {$, is} from '../../../../../$';
import {Array2, Nothing, nothing} from '../../../../../../lib/types';
import {Node} from '../../../../node';
import {DocumentationNode} from '../../../../syntax/documentation/documentation-node';
import {GroupNode} from '../../../../syntax/group/group-node';
import {DeclarationNode} from '../../../../syntax/node/declaration/declaration-node';
import {SemanticAnalyzer} from '../../../semantic-analyzer';
import {DeclarationSemantic} from '../../declaration/declaration-semantic';
import {parameterDeclarationsParse} from '../../declaration/declaration-semantic-parser';
import {documentationIdSemantic} from '../../documentation/documentation-id-semantic';
import {typeSemanticParse} from '../type-semantic-parser';
import {unknownTypeSemantic} from '../unknown/unknown-type-semantic';
import {FunctionTypeSemantic, functionTypeSemantic} from './function-type-semantic';

export function functionTypeSemanticTryParse(
  analyzer: SemanticAnalyzer,
  node: Node,
): FunctionTypeSemantic | Nothing {
  if (!is(node, $.LambdaNode)) {
    return nothing;
  }

  const parameters = node.parameters ? parameterDeclarationsParse(analyzer, node.parameters) : [];

  const result = node.type
    ? typeSemanticParse(analyzer, node.type.value)
    : // todo user another range than 'node'
      unknownTypeSemantic(analyzer, node);

  const semantic = functionTypeSemantic(analyzer, node, parameters, result);

  return semantic;
}

export function parametersParse(
  analyzer: SemanticAnalyzer,
  node: DeclarationNode,
  group: GroupNode,
): Array2<DeclarationSemantic> {
  const generics = parameterDeclarationsParse(analyzer, group);

  if (node.documentation) {
    for (const generic of generics.filter((x) => !!x)) {
      parameterDocumentationHandle(analyzer, node.documentation, generic);
    }
  }

  return generics;
}

function parameterDocumentationHandle(
  analyzer: SemanticAnalyzer,
  documentation: DocumentationNode,
  parameter: DeclarationSemantic,
): void {
  const filteredItems = documentation.items.filter((x) => x.id.text.equals(parameter.name));

  for (const item of filteredItems) {
    parameter.usages.push(item.id.reference);
    item.id.semantic = documentationIdSemantic(analyzer, item.id, parameter);
  }

  parameter.documentation = filteredItems.first()?.description?.text.toString().setPadding(0).trim();
}
