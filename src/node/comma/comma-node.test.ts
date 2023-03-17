import { Scanner } from '~/compiler/lexical/lexical';
import { NodeType } from '~/node/node';
import { Source } from '~/source/source';

test('comma', () => {
  const code = ',';
  const source = Source.fromText(code);
  const scanner = new Scanner(source.text);
  const tokens = scanner.nodes();

  expect(tokens.length).toBe(1);
  expect(tokens[0].type).toBe(NodeType.COMMA);
  expect(tokens[0].text).toBe(',');
});
