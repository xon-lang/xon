import {nothing} from '../../../../lib/types';
import {textResourceFrom} from '../../../util/resource/text/text-resource';
import {syntaxParse} from '../../syntax-analyzer';
import {$Node} from '../node';
import {DocumentationNode} from './documentation-node';

test('documentation', () => {
  const text = '===a===';
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxParse(source);
  const statements = syntax.statements;
  const hiddenNodes = syntax.syntaxContext.hiddenNodes;

  expect(statements.length).toBe(0);
  expect(hiddenNodes.length).toBe(1);

  const node = hiddenNodes[0] as DocumentationNode;
  expect(node.$).toBe($Node.DOCUMENTATION);
  expect(node.description?.text).toBe('a');
});
