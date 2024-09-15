import {$} from '../../../../$';
import {nothing} from '../../../../../../lib/src/types';
import {textResourceFromData} from '../../../../util/resource/text/text-resource';
import {syntaxFromResource} from '../../syntax-analyzer';
import {StringNode} from '../string/string-node';
import {ImportNode} from './import-node';

test('import string', () => {
  const text = 'import "xon/core"';
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as ImportNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($.ImportNode);
  expect(node.operator.text.toString()).toBe('import');
  expect(node.value?.$).toBe($.StringNode);
  expect((node.value as StringNode).content?.text.toString()).toBe('xon/core');
});

test('import integer', () => {
  const text = 'import 1';
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = statements[0].value as ImportNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($.ImportNode);
  expect(node.operator.text.toString()).toBe('import');
  expect(node.value).toBeFalsy();
});
