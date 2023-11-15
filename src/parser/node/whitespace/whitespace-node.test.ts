import { Parser } from '~/parser/parser';
import { Source } from '~/source/source';

test('whitespace', () => {
  const text = '    ';
  const source = Source.fromText(text, null);
  const parser = new Parser(source.text);
  const statements = parser.parse();

  expect(statements.length).toBe(0);
  // expect(statements[0].hidden.length).toBe(1);
  // expect(statements[0].hidden[0].text).toBe('    ');
  // expect(statements[0].hidden[0].$).toBe(NodeType.WHITESPACE);
});
