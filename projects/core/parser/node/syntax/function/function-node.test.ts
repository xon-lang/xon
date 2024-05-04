import {nothing} from '../../../../lib/core';
import {textResourceFrom} from '../../../../util/resource/text/text-resource';
import {syntaxParse} from '../../../syntax-parser';
import {FunctionNode} from './function-node';

test('model A', () => {
  const text = '(): Integer';
  const source = textResourceFrom(nothing, text);
  const syntax = syntaxParse(source);
  const statements = syntax.statements;
  const node = statements[0].item as FunctionNode;

  expect(statements.length).toBe(1);
});
