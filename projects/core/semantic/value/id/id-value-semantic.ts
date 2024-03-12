import {Nothing, nothing} from '../../../lib/core';
import {$Node, Node, is} from '../../../parser/node/node';
import {IdNode} from '../../../parser/node/token/id/id-node';
import {DeclarationSemantic} from '../../declaration/declaration-semantic';
import {$Semantic} from '../../semantic';
import {SemanticContext} from '../../semantic-context';
import {ValueSemantic} from '../value-semantic';

export interface IdValueSemantic extends ValueSemantic {
  $: $Semantic.ID_VALUE;
  // todo remove and use declaration from type ???
  declaration: DeclarationSemantic | Nothing;
}

export function idValueSemantic(context: SemanticContext, node: IdNode): IdValueSemantic {
  const reference = context.createReference(node);
  const declaration = context.declarationManager.findSingle(node, 0);

  const semantic: IdValueSemantic = {
    $: $Semantic.ID_VALUE,
    reference,
    declaration,
    type: declaration?.type,
  };

  if (declaration) {
    declaration.usages.push(semantic);
  }

  return semantic;
}

export function idValueSemanticParse(context: SemanticContext, node: Node): IdValueSemantic | Nothing {
  if (is<IdNode>(node, $Node.ID)) {
    return idValueSemantic(context, node);
  }

  return nothing;
}
