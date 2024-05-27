import {Nothing, nothing} from '../../../../lib/types';
import {ISSUE_MESSAGE} from '../../../issue/issue-message';
import {$Node, Node, is} from '../../../parser/node/node';
import {IdNode} from '../../../parser/node/token/id/id-node';
import {TypeDeclarationSemantic} from '../../declaration/type/type-declaration-semantic';
import {ValueDeclarationSemantic} from '../../declaration/value/value-declaration-semantic';
import {$Semantic, semanticIs} from '../../semantic';
import {SemanticContext} from '../../semantic-context';

import {IdValueSemantic, idValueSemantic} from './id-value-semantic';

export function idValueSemanticTryParse(context: SemanticContext, node: Node): IdValueSemantic | Nothing {
  if (!is<IdNode>(node, $Node.ID)) {
    return nothing;
  }

  const declaration = context.declarationManager.single(nothing, node.text, nothing, nothing);

  if (!declaration) {
    return nothing;
  }

  if (semanticIs<ValueDeclarationSemantic>(declaration, $Semantic.VALUE_DECLARATION)) {
    return idValueSemantic(context.createReference(node), declaration);
  }

  if (semanticIs<TypeDeclarationSemantic>(declaration, $Semantic.TYPE_DECLARATION)) {
    context.issueManager.addError(node.range, ISSUE_MESSAGE.notImplemented());
  }

  return nothing;
}
