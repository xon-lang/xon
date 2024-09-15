import {$} from '../../../../$';
import {nothing} from '../../../../../../lib/types';
import {evaluate} from '../../../../util/evaluate';
import {textResourceFromData} from '../../../../util/resource/text/text-resource';
import {IdNode} from '../../../lexical/node/id/id-node';
import {syntaxFromResource} from '../../syntax-analyzer';
import {DeclarationNode} from '../declaration/declaration-node';
import {LambdaNode} from './lambda-node';

test('function with no parameters', () => {
  const text = '(): Integer';
  const resource = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(resource);
  const statements = syntax.statements;
  const node = statements[0].value as LambdaNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($.LambdaNode);
  expect(node.generics).toBeFalsy();
  expect(node.parameters?.items.length).toBe(0);
  expect((node.type?.value as IdNode).text.toString()).toBe('Integer');
});

test('function with generic', () => {
  const text = '{T}(): T';
  const resource = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(resource);
  const statements = syntax.statements;
  const node = statements[0].value as LambdaNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($.LambdaNode);
  expect(node.generics?.items.length).toBe(1);
  expect((node.generics?.items[0].value as DeclarationNode).id.text.toString()).toBe('T');
  expect(node.parameters.items.length).toBe(0);
  expect((node.type?.value as IdNode).text.toString()).toBe('T');
});

test('function with generic and parameter', () => {
  const text = '{T}(a: T): T';
  const resource = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(resource);
  const statements = syntax.statements;
  const node = statements[0].value as LambdaNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($.LambdaNode);
  expect(node.generics?.items.length).toBe(1);
  expect((node.generics?.items[0].value as DeclarationNode).id.text.toString()).toBe('T');
  expect(node.parameters.items.length).toBe(1);
  expect((node.parameters?.items[0].value as DeclarationNode).id.text.toString()).toBe('a');
  expect(((node.parameters?.items[0].value as DeclarationNode).type?.value as IdNode).text.toString()).toBe(
    'T',
  );
  expect((node.type?.value as IdNode).text.toString()).toBe('T');
});

test('has argument and value', () => {
  const text = '(x) = x + 42';
  const resource = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(resource);
  const statements = syntax.statements;
  const node = statements[0].value as LambdaNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($.LambdaNode);
  expect(node.parameters?.items.length).toBe(1);
  expect((node.parameters?.items[0].value as DeclarationNode).id.text.toString()).toBe('x');

  expect(
    evaluate(node.assign?.value, {
      x: 37,
    }),
  ).toBe(37 + 42);
});

test('two parameter', () => {
  const text = '(a, b) = a+b';
  const resource = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(resource);
  const statements = syntax.statements;
  const node = statements[0].value as LambdaNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($.LambdaNode);
  expect(node.parameters?.items.length).toBe(2);
  expect((node.parameters?.items[0].value as DeclarationNode).id?.text.toString()).toBe('a');
  expect((node.parameters?.items[1].value as DeclarationNode).id?.text.toString()).toBe('b');
});
