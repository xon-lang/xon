import {$} from '../../../../$';
import {nothing} from '../../../../../lib/types';
import {textResourceFromData} from '../../../../util/resource/text/text-resource';
import {syntaxFromResource} from '../../../syntax/syntax-analyzer';
import {LexicalNode} from '../lexical-node';
import {WhitespaceNode} from './whitespace-node';

test('whitespace', () => {
  const text = '    ';
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const statements = syntax.statements;
  const node = syntax.hiddenNodes[0] as WhitespaceNode;

  expect(statements.length).toBe(0);
  expect(syntax.hiddenNodes.length).toBe(1);
  expect(node.$).toBe($.WhitespaceNode);
  expect((node as LexicalNode).text).toBe('    ');
});
