import {nothing} from '../../../../lib/core';
import {textResourceFrom} from '../../../../util/resource/text/text-resource';
import {resourceParse} from '../../../resource-parser';
import {$Node} from '../../node';
import {ImportNode} from './import-node';

test('negative integer', () => {
  const text = 'import "xon/core"';
  const source = textResourceFrom(nothing, text);
  const syntax = resourceParse(source);
  const statements = syntax.statements;
  const node = statements[0].item as ImportNode;

  expect(statements.length).toBe(1);
  expect(node.$).toBe($Node.IMPORT);
  expect(node.operator.text).toBe('import');
  expect(node.location.$).toBe($Node.STRING);
  expect(node.location.value).toBe('xon/core');
});
