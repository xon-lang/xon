import { Nothing, nothing } from '../../lib/core';
import { IdNode } from '../../syntax/node/id/id-node';
import { $Node, Node } from '../../syntax/node/node';
import { is } from '../../syntax/util/is';
import { ModelSemantic } from '../model/model-semantic';
import { $Semantic, semanticIs } from '../semantic';
import { SemanticContext } from '../semantic-context';
import { UsageSemantic, usageSemantic } from './usage-semantic';

export function parseUsageSemantic(context: SemanticContext, node: Node | Nothing): UsageSemantic | Nothing {
  if (is<IdNode>(node, $Node.ID)) {
    const declarations = context.findDeclarations(node.text);

    if (declarations.length !== 1) {
      throw new Error('Not implemented');
    }

    const declaration = declarations[0];

    if (semanticIs<ModelSemantic>(declaration, $Semantic.MODEL)) {
      const reference = context.createReference(node);
      const semantic = usageSemantic(reference, declaration, [], []);
      node.semantic = semantic;

      return semantic;
    }

    return nothing;
  }

  return nothing;
}
