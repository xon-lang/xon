import {$} from '../../../../../$';
import {nothing} from '../../../../../../../lib/types';
import {textResourceFromData} from '../../../../../util/resource/text/text-resource';
import {ReturnNode} from '../../../../syntax/node/return/return-node';
import {syntaxFromResource} from '../../../../syntax/syntax-analyzer';
import {createSemanticAnalyzer} from '../../../semantic-analyzer';
import {IntegerValueSemantic} from '../../value/integer/integer-value-semantic';

test('with value', () => {
  const text = `return  3`;
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const semanticAnalyzer = createSemanticAnalyzer(syntax);

  const returnNode = semanticAnalyzer.statements[0].value as ReturnNode;
  expect(returnNode.$).toBe($.ReturnNode);

  const idSemantic = returnNode.value?.semantic as IntegerValueSemantic;
  expect(idSemantic.type.value).toBe(3);
});
