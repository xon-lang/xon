import { Scanner } from '~/compiler/scanner/scanner';
import { NodeType } from '~/node/node';
import { Source } from '~/source/source';

test('id', () => {
  const code = '\n';
  const source = Source.fromText(code);
  const scanner = new Scanner(source.text);
  const tokens = scanner.nodes();

  expect(tokens.length).toBe(1);
  expect(tokens[0].type).toBe(NodeType.NL);
  expect(tokens[0].text).toBe('\n');
});
