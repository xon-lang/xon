import {nothing} from '../../../../lib/core';
import {textResourceFrom} from '../../../../util/resource/text/text-resource';
import {syntaxParse} from '../../../syntax-parser';
import {$Node} from '../../node';
import {IdNode} from '../../token/id/id-node';
import { DeclarationNode } from '../declaration/declaration-node';
import {LambdaNode} from './lambda-node';

test('function with no parameters', () => {
  const text = '(): Integer';
  const resource = textResourceFrom(nothing, text);
  const syntax = syntaxParse(resource);
  const statements = syntax.statements;
  const node = statements[0].item as LambdaNode;

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
  const node = statements[0].item as LambdaNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($Node.LAMBDA);
  expect(node.generics?.items.length).toBe(1);
  expect((node.generics?.items[0].value as DeclarationNode).id.text).toBe('T');
  expect(node.parameters.items.length).toBe(0);
  expect((node.type?.value as IdNode).text).toBe('T');
});

// // test('function with generic and parameter', () => {
// //   const text = '{T}(a: T): T';
// //   const resource = textResourceFrom(nothing, text);
// //   const syntax = syntaxParse(resource);
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

// test('has argument', () => {
//   const text = '(x) = x + 42';
//   const resource = textResourceFrom(nothing, text);
//   const syntax = syntaxParse(resource);
//   const statements = syntax.statements;
//   const node = statements[0].item as DeclarationNode;

//   expect(statements.length).toBe(1);
//   expect(node.$).toBe($Node.DECLARATION);
//   expect(node.parameters?.items.length).toBe(1);
//   expect(node.parameters?.items[0]?.id?.text).toBe('x');

//   expect(
//     evaluate(node.assign, {
//       x: 37,
//     }),
//   ).toBe(37 + 42);
// });

// test('two parameter', () => {
//   const text = '(a, b) = a+b';
//   const resource = textResourceFrom(nothing, text);
//   const syntax = syntaxParse(resource);
//   const statements = syntax.statements;
//   const node = statements[0].item as DeclarationNode;

//   expect(statements.length).toBe(1);
//   expect(node.$).toBe($Node.DECLARATION);
//   expect(node.parameters?.items.length).toBe(2);
//   expect(node.parameters?.items[0]?.id?.text).toBe('a');
//   expect(node.parameters?.items[1]?.id?.text).toBe('b');
// });
