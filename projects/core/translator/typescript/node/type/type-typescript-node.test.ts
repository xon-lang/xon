import {nothing} from '../../../../../lib/types';
import {ExpressionNode} from '../../../../analyzer/node';
import {TypeSemantic} from '../../../../analyzer/semantic/node/type/type-semantic';
import {semanticFromResource} from '../../../../analyzer/semantic/semantic-analyzer';
import {textResourceFromData} from '../../../../util/resource/text/text-resource';
import {toTypeTypescriptNode} from './type-typescript-node';

test('type string', () => {
  const text = '"string"';
  const resource = textResourceFromData(nothing, text);
  const syntax = semanticFromResource(resource);
  const value = syntax.statements[0].value as ExpressionNode;
  const semantic = value.semantic as TypeSemantic;
  const translator = toTypeTypescriptNode(semantic);
  const translated = translator.translate();

  expect(translated).toBe('"string"');
});

test('type integer', () => {
  const text = '123';
  const resource = textResourceFromData(nothing, text);
  const syntax = semanticFromResource(resource);
  const value = syntax.statements[0].value as ExpressionNode;
  const semantic = value.semantic as TypeSemantic;
  const translator = toTypeTypescriptNode(semantic);
  const translated = translator.translate();

  expect(translated).toBe('123');
});

test('type union', () => {
  const text = '123 | "abc"';
  const resource = textResourceFromData(nothing, text);
  const syntax = semanticFromResource(resource);
  const value = syntax.statements[0].value as ExpressionNode;
  const semantic = value.semantic as TypeSemantic;
  const translator = toTypeTypescriptNode(semantic);
  const translated = translator.translate();

  expect(translated).toBe('123 | "abc"');
});
