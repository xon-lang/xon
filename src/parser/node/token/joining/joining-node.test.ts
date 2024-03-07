import {sourceFromText} from '../../../../source/source';
import {parseSyntax} from '../../../syntax';
import {$Node} from '../../node';
import {InfixNode} from '../../syntax/infix/infix-node';
import {IdNode} from '../id/id-node';
import {OperatorNode} from '../operator/operator-node';

test('no space', () => {
  const text = 'abc\\.def';
  const source = sourceFromText(text);
  const syntax = parseSyntax(source);
  const statements = syntax.statements;
  const node = statements[0].item as InfixNode;

  expect(statements.length).toBe(1);
  expect(node.left?.$).toBe($Node.ID);
  expect((node.left as IdNode).text).toBe('abc');
  expect((node.operator as OperatorNode).text).toBe('.');
  expect(node.right?.$).toBe($Node.ID);
  expect((node.right as IdNode).text).toBe('def');
});

test('spaces', () => {
  const text = 'abc\\  .def';
  const source = sourceFromText(text);
  const syntax = parseSyntax(source);
  const statements = syntax.statements;
  const node = statements[0].item as InfixNode;

  expect(statements.length).toBe(1);
  expect(node.left?.$).toBe($Node.ID);
  expect((node.left as IdNode).text).toBe('abc');
  expect((node.operator as OperatorNode).text).toBe('.');
  expect(node.right?.$).toBe($Node.ID);
  expect((node.right as IdNode).text).toBe('def');
});

test('with new line', () => {
  const text = 'abc\\   \n  .def';
  const source = sourceFromText(text);
  const syntax = parseSyntax(source);
  const statements = syntax.statements;
  const node = statements[0].item as InfixNode;

  expect(statements.length).toBe(1);
  expect(node.left.hiddenNodes[0].text).toBe('\\   \n');
  expect(node.left?.$).toBe($Node.ID);
  expect((node.left as IdNode).text).toBe('abc');
  expect((node.operator as OperatorNode).text).toBe('.');
  expect(node.right?.$).toBe($Node.ID);
  expect((node.right as IdNode).text).toBe('def');
});
