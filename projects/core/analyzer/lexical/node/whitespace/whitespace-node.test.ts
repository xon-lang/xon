import {nothing} from '../../../../../lib/types';
import {textResourceFrom} from '../../../../util/resource/text/text-resource';
import {syntaxParse} from '../../../syntax-analyzer';
import {$Node} from '../../../syntax/node';
import {LexicalNode} from '../lexical-node';
import {WhitespaceNode} from './whitespace-node';

test('whitespace', () => {
  const text = '    ';
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxParse(source);
  const statements = syntax.statements;
  const node = syntax.syntaxContext.hiddenNodes[0] as WhitespaceNode;

  expect(statements.length).toBe(0);
  expect(syntax.syntaxContext.hiddenNodes.length).toBe(1);
  expect(node.$).toBe($Node.WHITESPACE);
  expect((node as LexicalNode).text).toBe('    ');
});
