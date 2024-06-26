import {nothing} from '../../../../../lib/types';
import {textResourceFrom} from '../../../../util/resource/text/text-resource';
import {syntaxParse} from '../../../syntax-analyzer';
import {$Node} from '../../../syntax/node';
import {IntegerNode} from '../integer/integer-node';
import {LexicalNode} from '../lexical-node';
import {UnknownNode} from './unknown-node';

test('unknown 1', () => {
  const text = '123 §•∞•456';
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxParse(source);
  const statements = syntax.statements;
  const node0 = statements[0].value as IntegerNode;
  const node1 = statements[0].children[1] as UnknownNode;

  expect(statements.length).toBe(1);
  expect(node0.$).toBe($Node.INTEGER);
  expect(node0.text).toBe('123');

  expect(node1.hiddenNodes?.length).toBe(1);
  // todo fix  'as LexicalNode'
  expect((node1.hiddenNodes?.at(0) as LexicalNode)?.text).toBe(' ');
  expect(node1.text).toBe('§');
});

test('unknown 2', () => {
  const text = 'ºª¶';
  const resource = textResourceFrom(nothing, text);
  const syntax = syntaxParse(resource);
  const statements = syntax.statements;
  const node = statements[0].value as UnknownNode;

  expect(statements.length).toBe(1);
  expect(syntax.issueManager.issues.length).toBe(5);
  expect(resource.getRangeText(syntax.issueManager.issues[0].range)).toBe('º');
  expect(node.text).toBe('º');
});
