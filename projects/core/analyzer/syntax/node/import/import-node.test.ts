import {$} from '../../../../$';
import {nothing} from '../../../../../lib/types';
import {textResourceFrom} from '../../../../util/resource/text/text-resource';
import {StringNode} from '../../../lexical/node/string/string-node';
import {syntaxFromResource} from '../../syntax-analyzer';
import {ImportNode} from './import-node';

test('import string', () => {
  const text = 'import "xon/core"';
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as ImportNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($.ImportNode);
  expect(node.operator.text).toBe('import');
  expect(node.value?.$).toBe($.StringNode);
  expect((node.value as StringNode).value).toBe('xon/core');
});

test('import integer', () => {
  const text = 'import 1';
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as ImportNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($.ImportNode);
  expect(node.operator.text).toBe('import');
  expect(node.value).toBeFalsy();
});
