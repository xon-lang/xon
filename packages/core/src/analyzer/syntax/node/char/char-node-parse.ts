import {$, is} from '../../../../$';
import {nothing, Nothing} from '../../../../../../lib/src/types';
import {charLexicalParsers} from '../../../lexical/char-lexical-analyzer';
import {CharContentNode} from '../../../lexical/node/char-content/char-content-node';
import {CharCloseNode} from '../../../lexical/node/close/char-close/char-close-node';
import {CharOpenNode} from '../../../lexical/node/open/char-open/char-open-node';
import {SyntaxAnalyzer} from '../../syntax-analyzer';
import {charNode, CharNode} from './char-node';

export function charNodeParse(analyzer: SyntaxAnalyzer, openNode: CharOpenNode): CharNode {
  const iterator = analyzer.lexicalAnalyzer.iterator(charLexicalParsers);
  let content: CharContentNode | Nothing = nothing;
  let closeNode: CharCloseNode | Nothing = nothing;

  for (const node of iterator) {
    if (is(node, $.CharContentNode)) {
      content = node;

      continue;
    }

    if (is(node, $.CharCloseNode)) {
      closeNode = node;

      break;
    }
  }

  return charNode(analyzer, openNode, content, closeNode);
}
