import { Scanner } from '~/compiler/scanner/scanner';
import { Source } from '~/compiler/source/source';
import { NodeType } from '~/node/node';

test('line joining', () => {
  const text = 'abc\\  .def';
  const source = Source.fromText(text, null);
  const lexer = new Scanner(source.text);
  const tokens = lexer.nodes();

  expect(tokens.length).toBe(4);
  expect(tokens[0].text).toBe('abc');
  expect(tokens[0].type).toBe(NodeType.ID);

  expect(tokens[1].type).toBe(NodeType.JOINING);

  expect(tokens[2].text).toBe('.');
  expect(tokens[2].type).toBe(NodeType.OPERATOR);

  expect(tokens[3].text).toBe('def');
  expect(tokens[3].type).toBe(NodeType.ID);
});
