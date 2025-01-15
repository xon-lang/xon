import {$ParenOpenNode, PAREN_OPEN, ParenOpenNode} from '#analyzer';
import {CharStream, Nothing} from '#common';

export function parseParenOpenNode(source: CharStream): ParenOpenNode | Nothing {
  return source.takeWhile($ParenOpenNode, (x, i) => PAREN_OPEN.at2(i).equals(x), PAREN_OPEN.count());
}
