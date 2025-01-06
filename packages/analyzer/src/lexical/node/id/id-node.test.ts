import {$IdNode, IdNode, syntaxFromResource} from '#analyzer';
import {newText, newTextResource, nothing} from '#common';
import {predefinedDiagnostics} from '#diagnostic';
import {expect, test} from 'vitest';

test('single id', () => {
  const text = newText('abc');
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements.at(0)?.value as IdNode;

  expect(statements.count()).toBe(1);
  expect(node.text.toNativeString()).toBe('abc');
  expect(node.$).toBe($IdNode);
});

test('several id', () => {
  const text = newText('abc edf_    _ghi1_23');
  const source = newTextResource(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements.at(0)?.value as IdNode;

  expect(statements.count()).toBe(1);
  expect(node.text.toNativeString()).toBe('abc');
  expect(node.$).toBe($IdNode);

  expect(syntax.diagnosticManager.diagnostics.count()).toBe(2);

  const diagnosticMessage = predefinedDiagnostics(node.reference).unexpectedExpression().message;

  expect(syntax.diagnosticManager.diagnostics.at(0)?.message.actual.toNativeString()).toBe(
    diagnosticMessage.actual.toNativeString(),
  );
  expect(syntax.diagnosticManager.diagnostics.at(1)?.message.actual.toNativeString()).toBe(
    diagnosticMessage.actual.toNativeString(),
  );
});
