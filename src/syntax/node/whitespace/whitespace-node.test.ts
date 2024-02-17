import { parse } from '../../syntax';

test('whitespace', () => {
  const text = '    ';
  const nodes = parse(text).root.children;

  expect(nodes.length).toBe(0);
  // expect(statements[0].hidden.length).toBe(1);
  // expect(statements[0].hidden[0].text).toBe('    ');
  // expect(statements[0].hidden[0].$).toBe(NodeType.WHITESPACE);
});
