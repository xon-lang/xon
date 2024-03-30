// import {nothing} from '../../../../lib/core';
// import {textResourceFrom} from '../../../../util/resource/text/text-resource';
// import {parseSyntax} from '../../../syntax';
// import {$Node} from '../../node';
// import {CharNode} from '../../token/char/char-node';
// import {IdNode} from '../../token/id/id-node';
// import {IntegerNode} from '../../token/integer/integer-node';
// import {DeclarationNode} from './declaration-node';

import {nothing} from '../../../../lib/core';
import {evaluate} from '../../../../util/evaluate';
import {textResourceFrom} from '../../../../util/resource/text/text-resource';
import {parseSyntax} from '../../../syntax';
import {$Node} from '../../node';
import {IdNode} from '../../token/id/id-node';
import {AssignNode} from '../assign/assign-node';
import {GroupNode} from '../group/group-node';

// test('model a', () => {
//   const text = 'model A';
//   const source = textResourceFrom(nothing, text);
//   const syntax = parseSyntax(source);
//   const statements = syntax.statements;
//   const node = statements[0].item as DeclarationNode;

//   expect(statements.length).toBe(1);
//   expect(node).toBeTruthy();
//   expect(node.modifier?.text).toBe('model');
//   expect(node.id?.text).toBe('A');
// });

// test('model a extends b', () => {
//   const text = 'model A: B';
//   const source = textResourceFrom(nothing, text);
//   const syntax = parseSyntax(source);
//   const statements = syntax.statements;
//   const node = statements[0].item as DeclarationNode;

//   expect(statements.length).toBe(1);
//   expect(node.modifier?.text).toBe('model');
//   expect(node.id?.text).toBe('A');
//   expect(node.type?.value?.$).toBe($Node.ID);
//   expect((node.type?.value as IdNode).text).toBe('B');
// });

// test('model a with generics extends b', () => {
//   const text = 'model A{T: Array = String, U}: B';
//   const source = textResourceFrom(nothing, text);
//   const syntax = parseSyntax(source);
//   const statements = syntax.statements;
//   const node = statements[0].item as DeclarationNode;

//   expect(statements.length).toBe(1);
//   expect(node.modifier?.text).toBe('model');
//   expect(node.id?.text).toBe('A');
//   expect(node.generics?.items.length).toBe(2);
//   expect(node.generics?.items.at(0)?.id?.text).toBe('T');
//   expect((node.generics?.items.at(0)?.type?.value as IdNode)?.text).toBe('Array');
//   expect((node.generics?.items.at(0)?.assign?.value as IdNode)?.text).toBe('String');
//   expect(node.type?.value?.$).toBe($Node.ID);
//   expect((node.type?.value as IdNode).text).toBe('B');
// });

// test('model a with parameters extends b', () => {
//   const text = "model A(a: Integer = 123, b: Boolean, c = 'C'): B";
//   const source = textResourceFrom(nothing, text);
//   const syntax = parseSyntax(source);
//   const statements = syntax.statements;
//   const node = statements[0].item as DeclarationNode;

//   expect(statements.length).toBe(1);
//   expect(node.modifier?.text).toBe('model');
//   expect(node.id?.text).toBe('A');

//   expect(node.parameters?.items.length).toBe(3);
//   expect(node.parameters?.items.at(0)?.id?.text).toBe('a');
//   expect((node.parameters?.items.at(0)?.type?.value as IdNode)?.text).toBe('Integer');
//   expect((node.parameters?.items.at(0)?.assign?.value as IntegerNode)?.text).toBe('123');

//   expect(node.parameters?.items.at(1)?.id?.text).toBe('b');
//   expect((node.parameters?.items.at(1)?.type?.value as IdNode)?.text).toBe('Boolean');
//   expect(node.parameters?.items.at(1)?.assign?.value).toBeFalsy();

//   expect(node.parameters?.items.at(2)?.id?.text).toBe('c');
//   expect(node.parameters?.items.at(2)?.type).toBeFalsy();
//   expect((node.parameters?.items.at(2)?.assign?.value as CharNode)?.text).toBe("'C'");

//   expect(node.type?.value?.$).toBe($Node.ID);
//   expect((node.type?.value as IdNode).text).toBe('B');
// });

// test('model a with generics and parameters extends b', () => {
//   const text = "model A{T: Array = String, U}(a: Integer = 123, b: Boolean, c = 'C'): B";
//   const source = textResourceFrom(nothing, text);
//   const syntax = parseSyntax(source);
//   const statements = syntax.statements;
//   const node = statements[0].item as DeclarationNode;

//   expect(statements.length).toBe(1);
//   expect(node.modifier?.text).toBe('model');
//   expect(node.id?.text).toBe('A');

//   expect(node.generics?.items.length).toBe(2);
//   expect(node.generics?.items.at(0)?.id?.text).toBe('T');
//   expect((node.generics?.items.at(0)?.type?.value as IdNode)?.text).toBe('Array');
//   expect((node.generics?.items.at(0)?.assign?.value as IdNode)?.text).toBe('String');

//   expect(node.parameters?.items.length).toBe(3);
//   expect(node.parameters?.items.at(0)?.id?.text).toBe('a');
//   expect((node.parameters?.items.at(0)?.type?.value as IdNode)?.text).toBe('Integer');
//   expect((node.parameters?.items.at(0)?.assign?.value as IntegerNode)?.text).toBe('123');

//   expect(node.parameters?.items.at(1)?.id?.text).toBe('b');
//   expect((node.parameters?.items.at(1)?.type?.value as IdNode)?.text).toBe('Boolean');
//   expect(node.parameters?.items.at(1)?.assign?.value).toBeFalsy();

//   expect(node.parameters?.items.at(2)?.id?.text).toBe('c');
//   expect(node.parameters?.items.at(2)?.type).toBeFalsy();
//   expect((node.parameters?.items.at(2)?.assign?.value as CharNode)?.text).toBe("'C'");

//   expect(node.type?.value?.$).toBe($Node.ID);
//   expect((node.type?.value as IdNode).text).toBe('B');
// });

// test('model a has attributes', () => {
//   const text = `model A
//   a
//   b: Boolean
//   c: Char = 'C'
//   d = 1
//   e(a, b, c: Char, d = 2): Nothing
//   f{T, U, V}(a, b, c: Char, d = 2) = a + b + d
//   `;
//   const source = textResourceFrom(nothing, text);
//   const syntax = parseSyntax(source);
//   const statements = syntax.statements;
//   const node = statements[0].item as DeclarationNode;

//   expect(statements.length).toBe(1);
//   expect(node.modifier?.text).toBe('model');
//   expect(node.id?.text).toBe('A');
//   expect(node.type).toBeFalsy();
//   expect(node.attributes.length).toBe(6);
// });

// // test('empty group', () => {
// //   const text = '()';
// //   const source = textResourceFrom(nothing, text);
// //   const syntax = parseSyntax(source);
// //   const statements = syntax.statements;
// //   const node = statements[0].item as GroupNode;

// //   expect(statements.length).toBe(1);
// //   expect(node.$).toBe($Node.GROUP);
// // });

// // test('a in group', () => {
// //   const text = '(a)';
// //   const source = textResourceFrom(nothing, text);
// //   const syntax = parseSyntax(source);
// //   const statements = syntax.statements;
// //   const node = statements[0].item as GroupNode;

// //   expect(statements.length).toBe(1);
// //   expect(node.$).toBe($Node.GROUP);
// // });

// // test('function with no parameters', () => {
// //   const text = '(): Integer';
// //   const source = textResourceFrom(nothing, text);
// //   const syntax = parseSyntax(source);
// //   const statements = syntax.statements;
// //   const node = statements[0].item as FunctionNode;

// //   expect(statements.length).toBe(1);
// //   expect(node.$).toBe($Node.FUNCTION);
// //   expect(node.generics).toBeFalsy();
// //   expect(node.parameters.items.length).toBe(0);
// //   expect((node.type?.value as IdNode).text).toBe('Integer');
// // });

// // test('function with generic', () => {
// //   const text = '{T}(): T';
// //   const source = textResourceFrom(nothing, text);
// //   const syntax = parseSyntax(source);
// //   const statements = syntax.statements;
// //   const node = statements[0].item as FunctionNode;

// //   expect(statements.length).toBe(1);
// //   expect(node.$).toBe($Node.FUNCTION);
// //   expect(node.generics).toBeFalsy();
// //   expect(node.generics?.items.length).toBe(1);
// //   expect((node.generics?.items[0] as IdNode).text).toBe(1);
// //   expect(node.parameters.items.length).toBe(0);
// //   expect((node.type?.value as IdNode).text).toBe('T');
// // });

// // test('function with generic and parameter', () => {
// //   const text = '{T}(a: T): T';
// //   const source = textResourceFrom(nothing, text);
// //   const syntax = parseSyntax(source);
// //   const statements = syntax.statements;
// //   const node = statements[0].item as FunctionNode;

// //   expect(statements.length).toBe(1);
// //   expect(node.$).toBe($Node.FUNCTION);
// //   expect(node.generics).toBeFalsy();
// //   expect(node.generics?.items.length).toBe(1);
// //   expect((node.generics?.items[0] as IdNode).text).toBe(1);
// //   expect(node.parameters.items.length).toBe(0);
// //   expect((node.parameters?.items[0] as DeclarationNode).text).toBe('a');
// //   expect((node.type as IdNode).text).toBe('T');
// // });

// test('model string', () => {
//   const text = 'model String';
//   const source = textResourceFrom(nothing, text);
//   const syntax = parseSyntax(source);
//   const statements = syntax.statements;
//   const node = statements[0].item as DeclarationNode;

//   expect(statements.length).toBe(1);
//   expect(node.$).toBe($Node.DECLARATION);
//   expect(node.modifier?.text).toBe('model');
// });

// test('model string with base class', () => {
//   const text = 'model Array\nmodel String: Array';
//   const source = textResourceFrom(nothing, text);
//   const syntax = parseSyntax(source);
//   const statements = syntax.statements;
//   const node = statements[1].item as DeclarationNode;

//   expect(statements.length).toBe(2);
//   expect(node.$).toBe($Node.DECLARATION);

//   expect(node.modifier?.$).toBe($Node.OPERATOR);
//   expect(node.modifier?.text).toBe('model');
// });

test('has argument', () => {
  const text = '(x) = x + 42';
  const source = textResourceFrom(nothing, text);
  const syntax = parseSyntax(source);
  const statements = syntax.statements;
  const node = statements[0].item as AssignNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($Node.ASSIGN);
  expect((node.left as GroupNode).items.length).toBe(1);
  expect(((node.left as GroupNode).items[0].value as IdNode).text).toBe('x');

  expect(
    evaluate(node.right, {
      x: 37,
    }),
  ).toBe(37 + 42);
});

test('two parameter', () => {
  const text = '(a, b) = a+b';
  const source = textResourceFrom(nothing, text);
  const syntax = parseSyntax(source);
  const statements = syntax.statements;
  const node = statements[0].item as AssignNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($Node.ASSIGN);
  expect((node.left as GroupNode).items.length).toBe(2);
  expect(((node.left as GroupNode).items[0].value as IdNode).text).toBe('a');
  expect(((node.left as GroupNode).items[1].value as IdNode).text).toBe('b');
});
