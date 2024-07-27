import {$, is} from '../../../../../$';
import {Array2, Nothing, nothing} from '../../../../../../lib/types';
import {Node} from '../../../../node';
import {DeclarationNode} from '../../../../syntax/node/declaration/declaration-node';
import {LambdaNode} from '../../../../syntax/node/lambda/lambda-node';
import {SemanticAnalyzer} from '../../../semantic-analyzer';
import {DeclarationSemantic} from '../../declaration/declaration-semantic';
import {declarationsParse} from '../../declaration/declaration-semantic-parser';
import {itemNodeType} from '../array/array-type-semantic-parser';
import {nothingTypeFromNode} from '../id/nothing/nothing-id-type-semantic';
import {TypeSemantic} from '../type-semantic';
import {typeSemanticParse} from '../type-semantic-parser';
import {FunctionTypeSemantic, functionTypeSemantic} from './function-type-semantic';

export function functionTypeSemanticTryParse(
  analyzer: SemanticAnalyzer,
  node: Node,
): FunctionTypeSemantic | Nothing {
  if ((!is(node, $.DeclarationNode) && !is(node, $.LambdaNode)) || !node.parameters) {
    return nothing;
  }

  const reference = analyzer.createReference(node);
  const generics = getGenerics(analyzer, node);
  const parameters = getParameters(analyzer, node);
  const result = node.type
    ? typeSemanticParse(analyzer, node.type.value)
    : // todo user another range than 'node'
      nothingTypeFromNode(analyzer, node);
  const semantic = functionTypeSemantic(reference, generics, parameters, result);

  return semantic;
}

function getGenerics(analyzer: SemanticAnalyzer, node: DeclarationNode | LambdaNode): Array2<TypeSemantic> {
  const items = node.generics?.items ?? [];

  return items.map((x) => itemNodeType(analyzer, x));
}

function getParameters(
  analyzer: SemanticAnalyzer,
  node: DeclarationNode | LambdaNode,
): Array2<DeclarationSemantic | Nothing> {
  const items = node.parameters?.items.map((x) => (is(x.value, $.DeclarationNode) ? x.value : nothing)) ?? [];

  return declarationsParse(analyzer, items);
}
