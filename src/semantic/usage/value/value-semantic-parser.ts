import { ISSUE_MESSAGE } from '../../../issue/issue-message';
import { Nothing, nothing } from '../../../lib/core';
import { IdNode } from '../../../syntax/node/id/id-node';
import { $Node, Node } from '../../../syntax/node/node';
import { is } from '../../../syntax/util/is';
import { ModelSemantic } from '../../declaration/model/model-semantic';
import { $Semantic, semanticIs } from '../../semantic';
import { SemanticContext } from '../../semantic-context';
import { ValueSemantic, valueSemantic } from './value-semantic';

export function valueSemanticParse(context: SemanticContext, node: Node | Nothing): ValueSemantic | Nothing {
  if (!node) {
    return nothing;
  }

  if (is<IdNode>(node, $Node.ID)) {
    const declarations = context.findDeclarations(node.text);

    if (declarations.length === 0) {
      context.issueManager.addError(node, ISSUE_MESSAGE.declarationNotFound(node.text));
      return nothing;
    }

    if (declarations.length !== 1) {
      throw new Error('Not implemented');
    }

    const declaration = declarations[0];

    if (semanticIs<ModelSemantic>(declaration, $Semantic.MODEL)) {
      const reference = context.createReference(node);
      const semantic = valueSemantic(reference, declaration, nothing, nothing);
      node.semantic = semantic;

      return semantic;
    }

    return nothing;
  }

  return nothing;
}
