import {$, is} from '../../../../$';
import {Nothing, nothing} from '../../../../../../lib/types';
import {StringCloseNode} from '../../../lexical/node/close/string-close/string-close-node';
import {StringOpenNode} from '../../../lexical/node/open/string-open/string-open-node';
import {StringContentNode} from '../../../lexical/node/string-content/string-content-node';
import {stringLexicalParsers} from '../../../lexical/string-lexical-analyzer';
import {SyntaxAnalyzer} from '../../syntax-analyzer';
import {StringNode, stringNode} from './string-node';

export function stringNodeParse(analyzer: SyntaxAnalyzer, openNode: StringOpenNode): StringNode {
  const iterator = analyzer.lexicalAnalyzer.iterator(stringLexicalParsers);
  let content: StringContentNode | Nothing = nothing;
  let closeNode: StringCloseNode | Nothing = nothing;

  for (const node of iterator) {
    if (is(node, $.StringContentNode)) {
      content = node;

      continue;
    }

    if (is(node, $.StringCloseNode)) {
      closeNode = node;

      break;
    }
  }

  return stringNode(analyzer, openNode, content, closeNode);
}
