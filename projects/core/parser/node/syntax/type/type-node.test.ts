import {nothing} from '../../../../lib/core';
import {textResourceFrom} from '../../../../util/resource/text/text-resource';
import {TYPE} from '../../../parser-config';
import {parseSyntax} from '../../../syntax';
import {$Node} from '../../node';
import {IdNode} from '../../token/id/id-node';
import {DeclarationNode} from '../declaration/declaration-node';

test('a is B', () => {
  const text = 'a: B';
  const source = textResourceFrom(nothing, text);
  const syntax = parseSyntax(source);
  const statements = syntax.statements;
  const node = statements[0].item as DeclarationNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($Node.DECLARATION);
  expect(node.typeOperator?.text).toBe(TYPE);
  expect(node.id?.text).toBe('a');
  expect((node.type as IdNode).text).toBe('B');
});

test('a has no type', () => {
  const text = 'a: ';
  const source = textResourceFrom(nothing, text);
  const syntax = parseSyntax(source);
  const statements = syntax.statements;
  const node = statements[0].item as DeclarationNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($Node.DECLARATION);
  expect(node.typeOperator?.text).toBe(TYPE);
  expect(node.id?.text).toBe('a');
  expect(node.type).toBe(nothing);
});
