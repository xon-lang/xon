import {$, is} from '../../../$';
import {nothing} from '../../../../../lib/types';
import {predefinedDiagnostics} from '../../../diagnostic/analyzer-diagnostic-message';
import {textResourceFromData} from '../../../util/resource/text/text-resource';
import {InfixNode} from '../node/infix/infix-node';
import {IntegerNode} from '../node/integer/integer-node';
import {syntaxFromResource} from '../syntax-analyzer';
import {BraceGroupNode} from './brace/brace-group-node';
import {BracketGroupNode} from './bracket/bracket-group-node';
import {ParenGroupNode} from './paren/paren-group-node';

test('empty closed', () => {
  const text = '()';
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as ParenGroupNode;

  expect(statements.length).toBe(1);
  expect(is(node, $.ParenGroupNode)).toBe(true);
  expect(is(node.open, $.ParenOpenNode)).toBe(true);
  expect(is(node.close, $.ParenCloseNode)).toBe(true);
  expect(node.items.length).toBe(0);
});

test('validate close pair', () => {
  const text = '(';
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as ParenGroupNode;

  expect(statements.length).toBe(1);
  expect(is(node, $.ParenGroupNode)).toBe(true);
  expect(is(node.open, $.ParenOpenNode)).toBe(true);
  expect(node.close).toBe(nothing);
  expect(node.items.length).toBe(0);
  expect(syntax.diagnosticManager.diagnostics.length).toBe(1);

  const diagnosticMessage = predefinedDiagnostics(node.reference).expectCloseToken(
    node.open.text.toString(),
  ).message;

  expect(syntax.diagnosticManager.diagnostics[0].message.actual).toBe(diagnosticMessage.actual);
  expect(syntax.diagnosticManager.diagnostics[0].message.expect).toBe(diagnosticMessage.expect);
});

test('a in group', () => {
  const text = '(a)';
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as ParenGroupNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($.ParenGroupNode);
});

test('empty object', () => {
  const text = '{}';
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as BraceGroupNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($.BraceGroupNode);
  expect(node.items.length).toBe(0);
});

test('single item', () => {
  const text = '[123 456]';
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as BracketGroupNode;

  expect(statements.length).toBe(1);
  expect(is(node, $.BracketGroupNode)).toBe(true);
  expect(node.items.length).toBe(1);
  expect((node.items[0]?.value as IntegerNode).content.text.toString()).toBe('123');
});

test('single comma', () => {
  const text = '[,]';
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as BracketGroupNode;

  expect(statements.length).toBe(1);
  expect(node.items.length).toBe(2);
  expect(is(node, $.BracketGroupNode)).toBe(true);
  expect(is(node.open, $.BracketOpenNode)).toBe(true);
  expect(is(node.close, $.BracketCloseNode)).toBe(true);
});

test('empty not closed', () => {
  const text = '[';
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as BracketGroupNode;

  expect(statements.length).toBe(1);
  expect(is(node, $.BracketGroupNode)).toBe(true);
  expect(is(node.open, $.BracketOpenNode)).toBe(true);
  expect(node.close).toBe(nothing);
  expect(node.items.length).toBe(0);
});

test('inner group', () => {
  const text = '[()]';
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as BracketGroupNode;

  expect(statements.length).toBe(1);
  expect(is(node, $.BracketGroupNode)).toBe(true);
  expect(node.items.length).toBe(1);

  const innerGroup = node.items[0]?.value as ParenGroupNode;
  expect(is(innerGroup, $.ParenGroupNode)).toBe(true);
  expect(innerGroup.items.length).toBe(0);
});

test('inner empty group', () => {
  const text = '[[[]]]';
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as BracketGroupNode;

  expect(statements.length).toBe(1);
  expect(is(node, $.BracketGroupNode)).toBe(true);
  expect(node.items.length).toBe(1);

  const innerGroup = node.items[0]?.value as ParenGroupNode;
  expect(is(innerGroup, $.BracketGroupNode)).toBe(true);
  expect(innerGroup.items.length).toBe(1);

  const innerInnerGroup = innerGroup.items[0]?.value as ParenGroupNode;
  expect(is(innerInnerGroup, $.BracketGroupNode)).toBe(true);
  expect(innerInnerGroup.items.length).toBe(0);
});

test('two integers no comma and ws at the end', () => {
  const text = '[1, 2]';
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as BracketGroupNode;

  expect(statements.length).toBe(1);
  expect(is(node, $.BracketGroupNode)).toBe(true);
  expect(node.items.length).toBe(2);
  expect((node.items[0]?.value as IntegerNode).content.text.toString()).toBe('1');
  expect((node.items[1]?.value as IntegerNode).content.text.toString()).toBe('2');
});

test('two integers and comma no ws at the end', () => {
  const text = '[1, 2,]';
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as BracketGroupNode;

  expect(statements.length).toBe(1);
  expect(is(node, $.BracketGroupNode)).toBe(true);
  expect(node.items.length).toBe(3);
  expect((node.items[0]?.value as IntegerNode).content.text.toString()).toBe('1');
  expect((node.items[1]?.value as IntegerNode).content.text.toString()).toBe('2');
});

test('two integers and comma and ws', () => {
  const text = '[1, 2, ]';
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as BracketGroupNode;

  expect(statements.length).toBe(1);
  expect(is(node, $.BracketGroupNode)).toBe(true);
  expect(node.items.length).toBe(3);
  expect((node.items[0]?.value as IntegerNode).content.text.toString()).toBe('1');
  expect((node.items[1]?.value as IntegerNode).content.text.toString()).toBe('2');
});

test('array on several lines', () => {
  const text = `[1,
                2+2
                3,
     4,    6+6]`;
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as BracketGroupNode;

  expect(statements.length).toBe(1);
  expect(is(node, $.BracketGroupNode)).toBe(true);
  expect(node.items.length).toBe(4);
  expect((node.items[0]?.value as IntegerNode).content.text.toString()).toBe('1');
  expect((node.items[1]?.value as InfixNode).operator.text.toString()).toBe('+');
});

test('debug 1', () => {
  const text = '[1, , 2 ]';
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as BracketGroupNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($.BracketGroupNode);
  expect(node.items.length).toBe(3);
  expect((node.items[0]?.value as IntegerNode).content.text.toString()).toBe('1');
  expect((node.items[2]?.value as IntegerNode).content.text.toString()).toBe('2');
});

test('empty object', () => {
  const text = '{}';
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as BraceGroupNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($.BraceGroupNode);
  expect(node.items.length).toBe(0);
});

// test('group with nl', () => {
//   const text = `  (123 ,456
//   7)`;
//   const source = textResourceFrom(nothing, text);
//   const syntax = syntaxParse(source);
//   const statements = syntax.statements;
//   const node = statements[0].item as ParenGroupNode;

//   expect(statements.length).toBe(1);
//   expect(node.$).toBe($Node.GROUP);
//   expect(node.items.length).toBe(2);
//   expect((node.items[0]?.value as IntegerNode).text.toString()).toBe('123');
//   expect(node.items[0]?.statements.length).toBe(1);
//   expect((node.items[1]?.value as IntegerNode).text.toString()).toBe('456');
//   expect(node.items[1]?.statements.length).toBe(1);
//   expect(node.items[1]?.statements[0].body.length).toBe(1);
//   expect((node.items[1]?.statements[0].body[0].item as IntegerNode).text.toString()).toBe('7');
// });
