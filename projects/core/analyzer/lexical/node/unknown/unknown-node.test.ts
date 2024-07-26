import {$, is} from '../../../../$';
import {nothing} from '../../../../../lib/types';
import {textResourceFromData} from '../../../../util/resource/text/text-resource';
import {IntegerNode} from '../../../syntax/node/integer/integer-node';
import {syntaxFromResource} from '../../../syntax/syntax-analyzer';
import {LexicalNode} from '../lexical-node';
import {UnknownNode} from './unknown-node';

test('unknown 1', () => {
  const text = '123 §•∞•456';
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node0 = statements[0].value as IntegerNode;
  const node1 = statements[0].children[1] as UnknownNode;

  expect(statements.length).toBe(1);
  expect(node0.$).toBe($.IntegerNode);
  expect(node0.content.text.toString()).toBe('123');

  expect(node1.hiddenNodes?.length).toBe(1);
  expect(is(node1.hiddenNodes?.at(0), $.LexicalNode)).toBe(true);
  expect((node1.hiddenNodes?.at(0) as LexicalNode)?.text.toString()).toBe(' ');
  expect(node1.text.toString()).toBe('§');
});

test('unknown 2', () => {
  const text = 'ºª¶';
  const resource = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(resource);
  const statements = syntax.statements;
  const node = statements[0].value as UnknownNode;

  expect(statements.length).toBe(1);
  expect(syntax.diagnosticManager.diagnostics.length).toBe(5);
  expect(resource.data.slice(syntax.diagnosticManager.diagnostics[0].reference.range).toString()).toBe('º');
  expect(node.text.toString()).toBe('º');
});
