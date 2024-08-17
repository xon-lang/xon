import {$, is} from '../../../../../$';
import {Nothing, nothing} from '../../../../../../lib/types';
import {Node} from '../../../../node';
import {CharNode} from '../../../../syntax/node/char/char-node';
import {SemanticAnalyzer} from '../../../semantic-analyzer';
import {charTypeSemantic, CharTypeSemantic} from './char-type-semantic';

export function charTypeSemanticTryParse(analyzer: SemanticAnalyzer, node: Node): CharTypeSemantic | Nothing {
  if (!is(node, $.CharNode)) {
    return nothing;
  }

  return charTypeSemanticParse(analyzer, node);
}

export function charTypeSemanticParse(analyzer: SemanticAnalyzer, node: CharNode): CharTypeSemantic {
  return charTypeSemantic(analyzer, node, node.value);
}
