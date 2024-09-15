import {$} from '../../../../$';
import {nothing} from '../../../../../../lib/types';
import {textResourceFromData} from '../../../../util/resource/text/text-resource';
import {syntaxFromResource} from '../../../syntax/syntax-analyzer';
import {NL} from '../../lexical-analyzer-config';
import {IdNode} from '../id/id-node';
import {LexicalNode} from '../lexical-node';
import {NlNode} from './nl-node';

test('lf nl', () => {
  const text = '\n';
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = syntax.hiddenNodes[0] as NlNode;

  expect(statements.length).toBe(0);
  expect(node.$).toBe($.NlNode);
  expect(node.text.toString()).toBe(NL);
});

test('several', () => {
  const text = '  \n    \n   abc';
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;

  expect(statements.length).toBe(1);
  expect(statements[0].value.$).toBe($.IdNode);
  expect((statements[0].value as IdNode).text.toString()).toBe('abc');

  const node0 = statements[0].hiddenNodes?.at(0) as LexicalNode;
  const node1 = statements[0].hiddenNodes?.at(1) as LexicalNode;
  const node2 = statements[0].hiddenNodes?.at(2) as LexicalNode;
  expect(statements[0].hiddenNodes?.length).toBe(3);
  expect(node0.text.toString()).toBe('  ');
  expect(node1.text.toString()).toBe('\n    \n');
  expect(node2.text.toString()).toBe('   ');
});
