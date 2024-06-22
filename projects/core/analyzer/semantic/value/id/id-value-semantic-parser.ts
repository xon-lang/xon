import {Nothing, nothing} from '../../../../../lib/types';
import {ISSUE_MESSAGE} from '../../../../issue/issue-message';
import {IdNode} from '../../../lexical/node/id/id-node';
import {$Node, Node, is} from '../../../syntax/node';
import {isTypeDeclarationSemantic, isValueDeclarationSemantic} from '../../declaration/declaration-semantic';
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

  // todo review condition and another one below
  if (isValueDeclarationSemantic(declaration)) {
    return idValueSemantic(context.createReference(node), declaration);
  }

  if (isTypeDeclarationSemantic(declaration)) {
    context.issueManager.addError(node.range, ISSUE_MESSAGE.notImplemented());
  }

  return nothing;
}
