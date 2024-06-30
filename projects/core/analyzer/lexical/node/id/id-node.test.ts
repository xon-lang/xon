import {nothing} from '../../../../../lib/types';
import {DIAGNOSTIC_MESSAGE} from '../../../../diagnostic/analyzer-diagnostic-message';
import {textResourceFrom} from '../../../../util/resource/text/text-resource';
import {$Node} from '../../../node';
import {syntaxFromResource} from '../../../syntax/syntax-analyzer';
import {IdNode} from './id-node';

test('single id', () => {
  const text = 'abc';
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as IdNode;

  expect(statements.length).toBe(1);
  expect(node.text).toBe('abc');
  expect(node.$).toBe($Node.ID);
});

test('several id', () => {
  const text = 'abc edf_    _ghi1_23';
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as IdNode;

  expect(statements.length).toBe(1);
  expect(node.text).toBe('abc');
  expect(node.$).toBe($Node.ID);

  expect(syntax.diagnosticManager.diagnostics.length).toBe(2);
  expect(syntax.diagnosticManager.diagnostics[0].message.actual).toBe(
    DIAGNOSTIC_MESSAGE.unexpectedExpression().actual,
  );
  expect(syntax.diagnosticManager.diagnostics[1].message.actual).toBe(
    DIAGNOSTIC_MESSAGE.unexpectedExpression().actual,
  );
});
