import {Nothing, nothing} from '../../../../lib/types';
import {ISSUE_MESSAGE} from '../../../issue/issue-message';
import {$Node, Node, is} from '../../../parser/node/node';
import {IdNode} from '../../../parser/node/token/id/id-node';
import {TypeDeclarationSemantic} from '../../declaration/type/type-declaration-semantic';
import {ValueDeclarationSemantic} from '../../declaration/value/value-declaration-semantic';
import {$Semantic, semanticIs} from '../../semantic';
import {SemanticContext} from '../../semantic-context';
import {TypeSemantic} from '../../type/type-semantic';

export function declarationValueTypeTryParse(context: SemanticContext, node: Node): TypeSemantic | Nothing {
  if (is<IdNode>(node, $Node.ID)) {
    return idNodeTryParse(context, node);
  }

  return nothing;
}

function idNodeTryParse(context: SemanticContext, node: IdNode): TypeSemantic | Nothing {
  const declaration = context.declarationManager.single(nothing, node.text, nothing, nothing);

  if (!declaration) {
    return nothing;
  }

  if (semanticIs<ValueDeclarationSemantic>(declaration, $Semantic.VALUE_DECLARATION)) {
    return declaration.type;
  }

  if (semanticIs<TypeDeclarationSemantic>(declaration, $Semantic.TYPE_DECLARATION)) {
    context.issueManager.addError(node.range, ISSUE_MESSAGE.notImplemented());
  }

  return nothing;
}
