import {nothing} from '../../../../lib/types';
import {textResourceFrom} from '../../../util/resource/text/text-resource';
import {syntaxParse} from '../../syntax-analyzer';
import {$Node} from '../node';
import {DocumentationNode} from './documentation-node';

test('documentation', () => {
  const text = '===a===';
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxParse(source);
  const statements = syntax.statements;
  const hiddenNodes = syntax.syntaxContext.hiddenNodes;

  expect(statements.length).toBe(0);
  expect(hiddenNodes.length).toBe(1);

  const node = hiddenNodes[0] as DocumentationNode;
  expect(node.$).toBe($Node.DOCUMENTATION);
  expect(node.description?.text).toBe('a');
});

test('documentation 2', () => {
  const text = '=== abc\n\n\n def==';
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxParse(source);
  const statements = syntax.statements;
  const hiddenNodes = syntax.syntaxContext.hiddenNodes;

  expect(statements.length).toBe(0);
  expect(hiddenNodes.length).toBe(1);

  const node = hiddenNodes[0] as DocumentationNode;
  expect(node.$).toBe($Node.DOCUMENTATION);
  expect(node.description?.text).toBe(' abc\n\n\n def==');
});

test('documentation labels', () => {
  const text = '=== abc\n\n\n def @in a1 b2 c 3     @return _123 _ ===';
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxParse(source);
  const statements = syntax.statements;
  const hiddenNodes = syntax.syntaxContext.hiddenNodes;

  expect(statements.length).toBe(0);
  expect(hiddenNodes.length).toBe(1);

  const node = hiddenNodes[0] as DocumentationNode;
  expect(node.$).toBe($Node.DOCUMENTATION);
  expect(node.description?.text).toBe(' abc\n\n\n def ');
  expect(node.items?.length).toBe(2);

  expect(node.items?.at(0)?.label.text).toBe('@in');
  expect(node.items?.at(0)?.label.name).toBe('in');
  expect(node.items?.at(0)?.description?.text).toBe(' a1 b2 c 3     ');

  expect(node.items?.at(1)?.label.text).toBe('@return');
  expect(node.items?.at(1)?.label.name).toBe('return');
  expect(node.items?.at(1)?.description?.text).toBe(' _123 _ ');
});
