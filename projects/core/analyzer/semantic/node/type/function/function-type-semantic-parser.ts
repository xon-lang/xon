import {$, is} from '../../../../../$';
import {Nothing, nothing} from '../../../../../../lib/types';
import {Node} from '../../../../node';
import {SemanticAnalyzer} from '../../../semantic-analyzer';
import {declarationsParse} from '../../declaration/declaration-semantic-parser';
import {itemNodeType} from '../array/array-type-semantic-parser';
import {typeSemanticParse} from '../type-semantic-parser';
import {nothingTypeFromNode} from '../unknown/unknown-type-semantic';
import {FunctionTypeSemantic, functionTypeSemantic} from './function-type-semantic';

export function functionTypeSemanticTryParse(
  analyzer: SemanticAnalyzer,
  node: Node,
): FunctionTypeSemantic | Nothing {
  if ((!is(node, $.DeclarationNode) && !is(node, $.LambdaNode)) || !node.parameters) {
    return nothing;
  }

  const reference = analyzer.createReference(node);

  // todo remove and add 'usingDeclarationScope' to 'declarationsParse'
  const generics = analyzer.usingDeclarationScope(() => {
    return node.generics?.items.map((x) => itemNodeType(analyzer, x));
  });

  // todo remove and add 'usingDeclarationScope' to 'declarationsParse'
  const parameters = analyzer.usingDeclarationScope(() => {
    return node.parameters ? declarationsParse(analyzer, node.parameters.items) : [];
  });

  const result = node.type
    ? typeSemanticParse(analyzer, node.type.value)
    : // todo user another range than 'node'
      nothingTypeFromNode(analyzer, node);
  const semantic = functionTypeSemantic(reference, generics, parameters, result);

  return semantic;
}
