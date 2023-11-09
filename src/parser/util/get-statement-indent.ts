import { Integer } from '~/lib/core';
import { NonHiddenLexicalNode } from '~/parser/node/lexical-node';
import { NodeType, is } from '~/parser/node/node';

export function getStatementIndent(nodes: NonHiddenLexicalNode[]): Integer | null {
  const whitespaceTokens = nodes
    .firstOrNull()
    ?.hidden.takeWhile((x) => is(x, NodeType.WHITESPACE) || is(x, NodeType.COMMENT))
    .filter((x) => is(x, NodeType.WHITESPACE));

  return whitespaceTokens?.sum((x) => x.stop - x.start + 1) ?? null;
}
