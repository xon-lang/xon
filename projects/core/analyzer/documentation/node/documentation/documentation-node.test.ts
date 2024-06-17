import {nothing} from '../../../../../lib/types';
import {textResourceFrom} from '../../../../util/resource/text/text-resource';
import {syntaxParse} from '../../../syntax-parser';
import {$Node} from '../../../syntax/node';
import {DocumentationNode} from './documentation-node';

test('documentation', () => {
  const text = '=== abc\n\n\n def===';
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxParse(source);
  const statements = syntax.statements;
  const node = syntax.statements[0].value as DocumentationNode;

  expect(statements.length).toBe(0);
  expect(syntax.syntaxContext.hiddenNodes.length).toBe(1);
  expect(node.$).toBe($Node.DOCUMENTATION);
  expect(node.description?.text).toBe('abc\n\n\n def');
});
