import {nothing} from '../../../../../../lib/types';
import {DeclarationSemantic} from '../../../../../analyzer/semantic/node/declaration/declaration-semantic';
import {semanticFromResource} from '../../../../../analyzer/semantic/semantic-analyzer';
import {TEST_SEMANTIC_CONFIG} from '../../../../../analyzer/semantic/semantic-analyzer-config';
import {DeclarationNode} from '../../../../../analyzer/syntax/node/declaration/declaration-node';
import {textResourceFromData} from '../../../../../util/resource/text/text-resource';
import {toTypeDeclarationTypescriptNode} from './type-declaration-typescript-node';

test('type string', () => {
  const text = 'model A';
  const resource = textResourceFromData(nothing, text);
  const syntax = semanticFromResource(resource, nothing, TEST_SEMANTIC_CONFIG);
  const declaration = syntax.statements[0].value as DeclarationNode;
  const semantic = declaration.id.semantic as DeclarationSemantic;
  const translator = toTypeDeclarationTypescriptNode(semantic);
  const translated = translator.translate();

  expect(translated).toBe('export type A = {}');
});
