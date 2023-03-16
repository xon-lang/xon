import { Scanner } from '~/compiler/scanner/scanner';
import { Source } from '~/compiler/source/source';
import { NodeType } from '~/node/node';

test('comma', () => {
  const code = ',';
  const source = Source.fromText(code);
  const scanner = new Scanner(source.text);
  const tokens = scanner.nodes();

  expect(tokens.length).toBe(1);
  expect(tokens[0].type).toBe(NodeType.COMMA);
  expect(tokens[0].text).toBe(',');
});
