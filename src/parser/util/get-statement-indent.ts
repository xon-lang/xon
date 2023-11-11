import { Integer } from '~/lib/core';
import { Node } from '~/parser/node/node';

export function getStatementIndent(nodes: Node[]): Integer | null {
  return nodes.firstOrNull()?.start.column ?? null;
}
