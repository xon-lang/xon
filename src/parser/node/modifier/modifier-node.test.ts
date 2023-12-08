import { DeclarationNode } from '../../../parser/node/declaration/declaration-node';
import { parse } from '../../../parser/parser';
import { NodeType } from '../node-type';

test('infix modifier', () => {
  const text = 'infix';
  const ast = parse(text);
  const nodes = ast.root.children;
  const declaration = nodes[0] as DeclarationNode;

  expect(nodes.length).toBe(1);
  expect(declaration.$).toBe(NodeType.DECLARATION);
  expect(declaration.modifier?.$).toBe(NodeType.MODIFIER);
  expect(declaration.modifier?.text).toBe('infix');
});
