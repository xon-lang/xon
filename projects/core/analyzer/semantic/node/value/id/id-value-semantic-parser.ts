import {Nothing, nothing} from '../../../../../../lib/types';
import {DIAGNOSTIC_MESSAGE} from '../../../../../diagnostic/analyzer-diagnostic-message';
import {IdNode} from '../../../../lexical/node/id/id-node';
import {$Node, Node, is} from '../../../../syntax/node';
import {SemanticAnalyzerContext} from '../../../semantic-analyzer-context';
import {isTypeDeclarationSemantic, isValueDeclarationSemantic} from '../../declaration/declaration-semantic';

import {IdValueSemantic, idValueSemantic} from './id-value-semantic';

export function idValueSemanticTryParse(
  context: SemanticAnalyzerContext,
  node: Node,
): IdValueSemantic | Nothing {
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
    context.issueManager.addError(node.range, DIAGNOSTIC_MESSAGE.notImplemented());
  }

  return nothing;
}
