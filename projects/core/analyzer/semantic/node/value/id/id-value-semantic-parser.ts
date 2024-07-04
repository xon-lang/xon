import {$, is} from '../../../../../$';
import {Nothing, nothing} from '../../../../../../lib/types';
import {DIAGNOSTIC_MESSAGE} from '../../../../../diagnostic/analyzer-diagnostic-message';
import {Node} from '../../../../node';
import {SemanticAnalyzer} from '../../../semantic-analyzer';
import {isTypeDeclarationSemantic, isValueDeclarationSemantic} from '../../declaration/declaration-semantic';

import {IdValueSemantic, idValueSemantic} from './id-value-semantic';

export function idValueSemanticTryParse(analyzer: SemanticAnalyzer, node: Node): IdValueSemantic | Nothing {
  if (!is(node, $.IdNode)) {
    return nothing;
  }

  const declaration = analyzer.declarationManager.single(nothing, node.text, nothing, nothing);

  if (!declaration) {
    return nothing;
  }

  // todo review condition and another one below
  if (isValueDeclarationSemantic(declaration)) {
    return idValueSemantic(analyzer.createReference(node), declaration);
  }

  if (isTypeDeclarationSemantic(declaration)) {
    analyzer.diagnosticManager.addError(node.range, DIAGNOSTIC_MESSAGE.notImplemented());
  }

  return nothing;
}
