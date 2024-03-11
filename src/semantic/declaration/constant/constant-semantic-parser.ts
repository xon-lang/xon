import {Nothing, nothing} from '../../../lib/core';
import {DeclarationNode} from '../../../parser/node/syntax/declaration/declaration-node';
import {CONSTANT_MODIFIER} from '../../../parser/syntax-config';
import {$Semantic, semanticIs} from '../../semantic';
import {SemanticContext} from '../../semantic-context';
import {typeSemanticParse} from '../../type/type-semantic-parser';
import {genericsParse} from '../generic/generic-semantic-parser';
import {parametersParse} from '../parameter/parameter-semantic-parser';
import {ConstantSemantic, constantSemantic} from './constant-semantic';

export function constantShallowParse(context: SemanticContext, node: DeclarationNode): ConstantSemantic | Nothing {
  if (node.modifier?.text !== CONSTANT_MODIFIER) {
    return nothing;
  }

  const reference = context.createReference(node.id);
  const name = node.id.text;

  const declaration = constantSemantic(reference, name);
  node.id.semantic = declaration;
  context.declarationManager.add(declaration);

  return declaration;
}

export function constantDeepParse(context: SemanticContext, node: DeclarationNode): void {
  if (semanticIs<ConstantSemantic>(node.id.semantic, $Semantic.CONSTANT)) {
    const childContext = context.createChildContext();

    if (node.generics) {
      node.id.semantic.generics = genericsParse(childContext, node.generics);
    }

    if (node.parameters) {
      node.id.semantic.parameters = parametersParse(childContext, node.parameters);
    }

    if (node.type) {
      node.id.semantic.type = typeSemanticParse(childContext, node.type);
    }

    if (node.attributes.length > 0) {
      // todo
    }
  }
}
