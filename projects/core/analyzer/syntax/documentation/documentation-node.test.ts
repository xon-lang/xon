import {nothing} from '../../../../lib/types';
import {textResourceFrom} from '../../../util/resource/text/text-resource';
import {$Node} from '../../node';
import {syntaxParse} from '../syntax-analyzer';
import {DocumentationNode} from './documentation-node';

test('documentation', () => {
  const text = '===a===';
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxParse(source);
  const statements = syntax.statements;
  const hiddenNodes = syntax.hiddenNodes;

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
  const hiddenNodes = syntax.hiddenNodes;

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
  const hiddenNodes = syntax.hiddenNodes;

  expect(statements.length).toBe(0);
  expect(hiddenNodes.length).toBe(1);

  const node = hiddenNodes[0] as DocumentationNode;
  expect(node.$).toBe($Node.DOCUMENTATION);
  expect(node.description?.text).toBe(' abc\n\n\n def ');
  expect(node.items?.length).toBe(2);

  expect(node.items?.at(0)?.operator.text).toBe('@');
  expect(node.items?.at(0)?.id.text).toBe('in');
  expect(node.items?.at(0)?.description?.text).toBe(' a1 b2 c 3     ');

  expect(node.items?.at(1)?.operator.text).toBe('@');
  expect(node.items?.at(1)?.id.text).toBe('return');
  expect(node.items?.at(1)?.description?.text).toBe(' _123 _ ');
});

test('documentation operator id', () => {
  const text = '===@abc desc===';
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxParse(source);
  const statements = syntax.statements;
  const hiddenNodes = syntax.hiddenNodes;

  expect(statements.length).toBe(0);
  expect(hiddenNodes.length).toBe(1);

  const node = hiddenNodes[0] as DocumentationNode;
  expect(node.$).toBe($Node.DOCUMENTATION);
  expect(node.description).toBeFalsy();
  expect(node.items?.length).toBe(1);

  expect(node.items?.at(0)?.operator.text).toBe('@');
  expect(node.items?.at(0)?.operator.range.start.index).toBe(3);
  expect(node.items?.at(0)?.operator.range.start.line).toBe(0);
  expect(node.items?.at(0)?.operator.range.start.column).toBe(3);
  expect(node.items?.at(0)?.operator.range.stop.index).toBe(4);
  expect(node.items?.at(0)?.operator.range.stop.line).toBe(0);
  expect(node.items?.at(0)?.operator.range.stop.column).toBe(4);

  expect(node.items?.at(0)?.id.range.start.index).toBe(4);
  expect(node.items?.at(0)?.id.range.start.line).toBe(0);
  expect(node.items?.at(0)?.id.range.start.column).toBe(4);
  expect(node.items?.at(0)?.id.range.stop.index).toBe(7);
  expect(node.items?.at(0)?.id.range.stop.line).toBe(0);
  expect(node.items?.at(0)?.id.range.stop.column).toBe(7);

  expect(node.items?.at(0)?.description?.text).toBe(' desc');
});
