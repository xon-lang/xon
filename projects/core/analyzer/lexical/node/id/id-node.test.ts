import {$} from '../../../../$';
import {nothing} from '../../../../../lib/types';
import {predefinedDiagnostics} from '../../../../diagnostic/analyzer-diagnostic-message';
import {textResourceFromData} from '../../../../util/resource/text/text-resource';
import {syntaxFromResource} from '../../../syntax/syntax-analyzer';
import {IdNode} from './id-node';

test('single id', () => {
  const text = 'abc';
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as IdNode;

  expect(statements.length).toBe(1);
  expect(node.text.toString()).toBe('abc');
  expect(node.$).toBe($.IdNode);
});

test('several id', () => {
  const text = 'abc edf_    _ghi1_23';
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as IdNode;

  expect(statements.length).toBe(1);
  expect(node.text.toString()).toBe('abc');
  expect(node.$).toBe($.IdNode);

  expect(syntax.diagnosticManager.diagnostics.length).toBe(2);

  const diagnosticMessage = predefinedDiagnostics(node.reference).unexpectedExpression().message;

  expect(syntax.diagnosticManager.diagnostics[0].message.actual).toBe(diagnosticMessage.actual);
  expect(syntax.diagnosticManager.diagnostics[1].message.actual).toBe(diagnosticMessage.actual);
});
