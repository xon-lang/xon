import {$Node} from '../../../../$';
import {nothing} from '../../../../../lib/types';
import {textResourceFrom} from '../../../../util/resource/text/text-resource';
import {GroupNode} from '../../../syntax/group/group-node';
import {syntaxFromResource} from '../../../syntax/syntax-analyzer';

test('open paren', () => {
  const text = '(';
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as GroupNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($Node.GroupNode);
  expect(node.open.$).toBe($Node.OpenNode);
  expect(node.open.text).toBe('(');
  expect(node.close).toBe(nothing);
});

test('open bracket', () => {
  const text = '[';
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as GroupNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($Node.ArrayNode);
  expect(node.open.$).toBe($Node.OpenNode);
  expect(node.open.text).toBe('[');
  expect(node.close).toBe(nothing);
});

test('open brace', () => {
  const text = '{';
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as GroupNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($Node.ObjectNode);
  expect((node as GroupNode).open.$).toBe($Node.OpenNode);
  expect((node as GroupNode).open.text).toBe('{');
  expect((node as GroupNode).close).toBe(nothing);
});
