import {nothing} from '../../../../../lib/types';
import {textResourceFrom} from '../../../../util/resource/text/text-resource';
import {NL} from '../../../lexical/lexical-config';
import {syntaxParse} from '../../../syntax-parser';
import {$Node} from '../../node';
import {IdNode} from '../id/id-node';
import {TokenNode} from '../token-node';
import {NlNode} from './nl-node';

test('lf nl', () => {
  const text = '\n';
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxParse(source);
  const statements = syntax.statements;
  const node = syntax.syntaxContext.hiddenNodes[0] as NlNode;

  expect(statements.length).toBe(0);
  expect(node.$).toBe($Node.NL);
  expect(node.text).toBe(NL);
});

test('several', () => {
  const text = '  \n    \n   abc';
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxParse(source);
  const statements = syntax.statements;
  const node0 = statements[0].hiddenNodes?.at(0) as TokenNode;
  const node1 = statements[0].hiddenNodes?.at(1) as TokenNode;
  const node2 = statements[0].hiddenNodes?.at(2) as TokenNode;

  expect(statements.length).toBe(1);
  expect(statements[0].value.$).toBe($Node.ID);
  expect((statements[0].value as IdNode).text).toBe('abc');

  expect(statements[0].hiddenNodes?.length).toBe(3);
  expect(node0.text).toBe('  ');
  expect(node1.text).toBe('\n    \n');
  expect(node2.text).toBe('   ');
});
