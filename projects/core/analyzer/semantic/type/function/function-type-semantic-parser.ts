import {Nothing, nothing} from '../../../../../lib/types';
import {$Node, Node, is} from '../../../node/node';
import {
  DeclarationNode,
  getDeclarationGenerics,
  getDeclarationParameters,
} from '../../../node/syntax/declaration/declaration-node';
import {LambdaNode} from '../../../node/syntax/lambda/lambda-node';
import {declarationsParse} from '../../declaration/declaration-semantic-parser';
import {SemanticContext} from '../../semantic-context';
import {typeSemanticParse} from '../type-semantic-parser';
import {FunctionTypeSemantic, functionTypeSemantic} from './function-type-semantic';

export function functionTypeSemanticTryParse(
  context: SemanticContext,
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
