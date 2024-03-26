import {nothing} from '../../../../lib/core';
import {textResourceFrom} from '../../../../util/resource/text/text-resource';
import {NL} from '../../../parser-config';
import {parseSyntax} from '../../../syntax';
import {$Node} from '../../node';
import {IdNode} from '../id/id-node';
import {TokenNode} from '../token-node';
import {NlNode} from './nl-node';

test('lf nl', () => {
  const text = '\n';
  const source = textResourceFrom(nothing, text);
  const syntax = parseSyntax(source);
  const statements = syntax.statements;
  const node = syntax.syntaxContext.hiddenNodes[0] as NlNode;

  expect(statements.length).toBe(0);
  expect(node.$).toBe($Node.NL);
  expect(node.text).toBe(NL);
});

test('several', () => {
  const text = '  \n    \n   abc';
  const source = textResourceFrom(nothing, text);
  const syntax = parseSyntax(source);
  const statements = syntax.statements;
  const node0 = statements[0].hiddenNodes[0] as TokenNode;
  const node1 = statements[0].hiddenNodes[1] as TokenNode;
  const node2 = statements[0].hiddenNodes[2] as TokenNode;

  expect(statements.length).toBe(1);
  expect(statements[0].item.$).toBe($Node.ID);
  expect((statements[0].item as IdNode).text).toBe('abc');

  expect(syntax.statements[0].hiddenNodes.length).toBe(3);
  expect(node0.text).toBe('  ');
  expect(node1.text).toBe('\n    \n');
  expect(node2.text).toBe('   ');
});
