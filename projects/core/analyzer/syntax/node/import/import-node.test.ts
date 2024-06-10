import {nothing} from '../../../../../lib/types';
import {textResourceFrom} from '../../../../util/resource/text/text-resource';
import {syntaxParse} from '../../../syntax-parser';
import {$Node} from '../../node';
import {StringNode} from '../../token/string/string-node';
import {ImportNode} from './import-node';

test('import string', () => {
  const text = 'import "xon/core"';
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxParse(source);
  const statements = syntax.statements;
  const node = statements[0].value as ImportNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($Node.IMPORT);
  expect(node.operator.text).toBe('import');
  expect(node.value?.$).toBe($Node.STRING);
  expect((node.value as StringNode).value).toBe('xon/core');
});

test('import integer', () => {
  const text = 'import 1';
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxParse(source);
  const statements = syntax.statements;
  const node = statements[0].value as ImportNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($Node.IMPORT);
  expect(node.operator.text).toBe('import');
  expect(node.value).toBeFalsy();
});
