import { Parser } from '~/parser/parser';

test('whitespace', () => {
  const text = '    ';
  const parser = new Parser(text);
  const statements = parser.parse();

  expect(statements.length).toBe(0);
  // expect(statements[0].hidden.length).toBe(1);
  // expect(statements[0].hidden[0].text).toBe('    ');
  // expect(statements[0].hidden[0].$).toBe(NodeType.WHITESPACE);
});
