import { Nothing, nothing } from '../../lib/core';
import { sourceReference } from '../../source/source-reference';
import { IdNode } from '../../syntax/node/id/id-node';
import { InfixNode } from '../../syntax/node/infix/infix-node';
import { InvokeNode } from '../../syntax/node/invoke/invoke-node';
import { $Node, Node } from '../../syntax/node/node';
import { PrefixNode } from '../../syntax/node/prefix/prefix-node';
import { StatementNode } from '../../syntax/node/statement/statement-node';
import { MODEL_MODIFIER, TYPE_TOKEN } from '../../syntax/syntax-config';
import { is } from '../../syntax/util/is';
import { $Semantic, DeclarationSemantic, ValueSemantic, semanticIs } from '../semantic';
import { SemanticContext } from '../semantic-context';
import { ModelDeclarationSemantic, modelDeclarationSemantic, modelValueSemantic } from './model-semantic';

export function parseModelDeclaration(
  context: SemanticContext,
  statement: StatementNode,
): DeclarationSemantic | Nothing {
  const node = statement.item;

  if (is<PrefixNode>(node, $Node.PREFIX) && node.operator.text === MODEL_MODIFIER) {
    const declaration = parseModelPrefix(context, node, nothing);

    if (declaration) {
      node.semantic = declaration;
      context.addDeclaration(declaration);

      return declaration;
    }

    return nothing;
  }

  if (is<InfixNode>(node, $Node.INFIX) && node.operator.text === TYPE_TOKEN) {
    if (is<PrefixNode>(node.left, $Node.PREFIX) && node.left.operator.text === MODEL_MODIFIER) {
      const base = parseValueSemantic(context, node.right);
      const declaration = parseModelPrefix(context, node.left, base);

      if (declaration) {
        node.semantic = declaration;
        context.addDeclaration(declaration);

        return declaration;
      }

      return nothing;
    }
  }

  return nothing;
}

function parseModelPrefix(
  context: SemanticContext,
  node: PrefixNode,
  base: ValueSemantic | Nothing,
): ModelDeclarationSemantic | Nothing {
  if (is<IdNode>(node.value, $Node.ID)) {
    const reference = sourceReference(context.source, node.value.range.start);
    const name = node.value.text;
    const generics = [];
    const attributes = {};

    return modelDeclarationSemantic(reference, name, generics, base, attributes);
  }

  if (is<InvokeNode>(node.value, $Node.INVOKE) && is<IdNode>(node.value.instance, $Node.ID)) {
    const reference = sourceReference(context.source, node.value.range.start);
    const name = node.value.instance.text;
    const generics = [];
    const base = nothing;
    const attributes = {};

    return modelDeclarationSemantic(reference, name, generics, base, attributes);
  }

  return nothing;
}

export function parseValueSemantic(context: SemanticContext, node: Node | Nothing): ValueSemantic | Nothing {
  if (is<IdNode>(node, $Node.ID)) {
    const declarations = context.findDeclarations(node.text);

    if (declarations.length !== 1) {
      throw new Error('Not implemented');
    }

    const declaration = declarations[0];
    const reference = context.createReference(node);

    if (semanticIs<ModelDeclarationSemantic>(declaration, $Semantic.MODEL_DECLARATION)) {
      const semantic = modelValueSemantic(reference, declaration, []);
      node.semantic = semantic;

      return semantic;
    }

    return nothing;
  }

  return nothing;
}
