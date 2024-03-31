import {Nothing, nothing} from '../../../lib/core';
import {$Node, Node, is} from '../../../parser/node/node';
import {DeclarationNode} from '../../../parser/node/syntax/declaration/declaration-node';
import {declarationsParse} from '../../declaration/declaration-semantic-parser';
import {SemanticContext} from '../../semantic-context';
import {typeSemanticParse} from '../type-semantic-parser';
import {FunctionTypeSemantic, functionTypeSemantic} from './function-type-semantic';

export function functionTypeSemanticTryParse(context: SemanticContext, node: Node): FunctionTypeSemantic | Nothing {
  if (!is<DeclarationNode>(node, $Node.DECLARATION) || !node.parameters) {
    return nothing;
  }

  const reference = context.createReference(node);
  const generics = node.generics?.items.map((x) => typeSemanticParse(context, x));
  const parameters = declarationsParse(context, node.parameters.items);
  const result = typeSemanticParse(context, node.type);
  const semantic = functionTypeSemantic(reference, generics, parameters, result);

  return semantic;
}
