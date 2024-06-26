import {Nothing, nothing} from '../../../../../../lib/types';
import {$Node, Node, is} from '../../../../node';
import {
  DeclarationNode,
  getDeclarationGenerics,
  getDeclarationParameters,
} from '../../../../syntax/node/declaration/declaration-node';
import {LambdaNode} from '../../../../syntax/node/lambda/lambda-node';
import {SemanticAnalyzerContext} from '../../../semantic-analyzer-context';
import {declarationsParse} from '../../declaration/declaration-semantic-parser';
import {typeSemanticParse} from '../type-semantic-parser';
import {FunctionTypeSemantic, functionTypeSemantic} from './function-type-semantic';

export function functionTypeSemanticTryParse(
  context: SemanticAnalyzerContext,
  node: Node,
): FunctionTypeSemantic | Nothing {
  if (
    (!is<DeclarationNode>(node, $Node.DECLARATION) && !is<LambdaNode>(node, $Node.LAMBDA)) ||
    !node.parameters
  ) {
    return nothing;
  }

  const reference = context.createReference(node);
  const syntaxGenerics = getDeclarationGenerics(node);
  const generics = syntaxGenerics.map((x) => typeSemanticParse(context, x));
  const syntaxParameters = getDeclarationParameters(node);
  const parameters = declarationsParse(context, syntaxParameters);
  const result = typeSemanticParse(context, node.type?.value);
  const semantic = functionTypeSemantic(reference, generics, parameters, result);

  return semantic;
}
