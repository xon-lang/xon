import {Nothing, nothing} from '../../../../../../lib/types';
import {$Node, Node, is} from '../../../../node';
import {
  DeclarationNode,
  getDeclarationGenerics,
  getDeclarationParameters,
} from '../../../../syntax/node/declaration/declaration-node';
import {LambdaNode} from '../../../../syntax/node/lambda/lambda-node';
import {SemanticAnalyzer} from '../../../semantic-analyzer';
import {declarationsParse} from '../../declaration/declaration-semantic-parser';
import {typeSemanticParse} from '../type-semantic-parser';
import {FunctionTypeSemantic, functionTypeSemantic} from './function-type-semantic';

export function functionTypeSemanticTryParse(
  analyzer: SemanticAnalyzer,
  node: Node,
): FunctionTypeSemantic | Nothing {
  if (
    (!is<DeclarationNode>(node, $Node.DECLARATION) && !is<LambdaNode>(node, $Node.LAMBDA)) ||
    !node.parameters
  ) {
    return nothing;
  }

  const reference = analyzer.createReference(node);
  const syntaxGenerics = getDeclarationGenerics(node);
  const generics = syntaxGenerics.map((x) => typeSemanticParse(analyzer, x));
  const syntaxParameters = getDeclarationParameters(node);
  const parameters = declarationsParse(analyzer, syntaxParameters);
  const result = typeSemanticParse(analyzer, node.type?.value);
  const semantic = functionTypeSemantic(reference, generics, parameters, result);

  return semantic;
}
