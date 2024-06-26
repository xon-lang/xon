import {nothing} from '../../../../../lib/types';
import {evaluate} from '../../../../util/evaluate';
import {textResourceFrom} from '../../../../util/resource/text/text-resource';
import {IdNode} from '../../../lexical/node/id/id-node';
import {$Node} from '../../../node';
import {syntaxParse} from '../../../syntax-analyzer';
import {DeclarationNode} from '../declaration/declaration-node';
import {LambdaNode} from './lambda-node';

test('function with no parameters', () => {
  const text = '(): Integer';
  const resource = textResourceFrom(nothing, text);
  const syntax = syntaxParse(resource);
  const statements = syntax.statements;
  const node = statements[0].value as LambdaNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($Node.LAMBDA);
  expect(node.generics).toBeFalsy();
  expect(node.parameters?.items.length).toBe(0);
  expect((node.type?.value as IdNode).text).toBe('Integer');
});

test('function with generic', () => {
  const text = '{T}(): T';
  const resource = textResourceFrom(nothing, text);
  const syntax = syntaxParse(resource);
  const statements = syntax.statements;
  const node = statements[0].value as LambdaNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($Node.LAMBDA);
  expect(node.generics?.items.length).toBe(1);
  expect((node.generics?.items[0].value as DeclarationNode).id.text).toBe('T');
  expect(node.parameters.items.length).toBe(0);
  expect((node.type?.value as IdNode).text).toBe('T');
});

test('function with generic and parameter', () => {
  const text = '{T}(a: T): T';
  const resource = textResourceFrom(nothing, text);
  const syntax = syntaxParse(resource);
  const statements = syntax.statements;
  const node = statements[0].value as LambdaNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($Node.LAMBDA);
  expect(node.generics?.items.length).toBe(1);
  expect((node.generics?.items[0].value as DeclarationNode).id.text).toBe('T');
  expect(node.parameters.items.length).toBe(1);
  expect((node.parameters?.items[0].value as DeclarationNode).id.text).toBe('a');
  expect(((node.parameters?.items[0].value as DeclarationNode).type?.value as IdNode).text).toBe('T');
  expect((node.type?.value as IdNode).text).toBe('T');
});

test('has argument and value', () => {
  const text = '(x) = x + 42';
  const resource = textResourceFrom(nothing, text);
  const syntax = syntaxParse(resource);
  const statements = syntax.statements;
  const node = statements[0].value as LambdaNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($Node.LAMBDA);
  expect(node.parameters?.items.length).toBe(1);
  expect((node.parameters?.items[0].value as DeclarationNode).id.text).toBe('x');

  expect(
    evaluate(node.assign?.value, {
      x: 37,
    }),
  ).toBe(37 + 42);
});

test('two parameter', () => {
  const text = '(a, b) = a+b';
  const resource = textResourceFrom(nothing, text);
  const syntax = syntaxParse(resource);
  const statements = syntax.statements;
  const node = statements[0].value as LambdaNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($Node.LAMBDA);
  expect(node.parameters?.items.length).toBe(2);
  expect((node.parameters?.items[0].value as DeclarationNode).id?.text).toBe('a');
  expect((node.parameters?.items[1].value as DeclarationNode).id?.text).toBe('b');
});
