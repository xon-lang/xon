import { TypeNode, parseTypeNode } from '~/node/semantic/type/type-node';
import { GroupNode } from '~/node/syntactic/group/group-node';

export function parseGroupTypeNode({ bodies }: GroupNode): TypeNode | null {
  if (bodies.length > 2) {
    throw new Error('Not implemented');
  }

  if (bodies.length === 2) {
    const { statements } = bodies[1];

    if (statements.length > 1 || statements[0].nodes.length > 1) {
      throw new Error('Not implemented');
    }
  }

  if (bodies[0].statements.length > 1 || bodies[0].statements[0].nodes.length > 1) {
    throw new Error('Not implemented');
  }

  const node = bodies[0].statements[0].nodes[0];

  return parseTypeNode(node);
}
