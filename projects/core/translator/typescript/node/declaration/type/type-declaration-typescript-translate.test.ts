import {nothing} from '../../../../../../lib/types';
import {DeclarationSemantic} from '../../../../../analyzer/semantic/node/declaration/declaration-semantic';
import {semanticFromResource} from '../../../../../analyzer/semantic/semantic-analyzer';
import {TEST_SEMANTIC_CONFIG} from '../../../../../analyzer/semantic/semantic-analyzer-config';
import {DeclarationNode} from '../../../../../analyzer/syntax/node/declaration/declaration-node';
import {textResourceFromData} from '../../../../../util/resource/text/text-resource';
import {createTypescriptTranslator} from '../../../typescript-translator';

test('type string', () => {
  const text = 'type A';
  const resource = textResourceFromData(nothing, text);
  const semanticAnalyzer = semanticFromResource(resource, nothing, TEST_SEMANTIC_CONFIG);
  const declaration = semanticAnalyzer.statements[0].value as DeclarationNode;
  const semantic = declaration.id.semantic as DeclarationSemantic;
  const translator = createTypescriptTranslator(semanticAnalyzer);
  const translated = translator.typeDeclaration(semantic);

  expect(translated).toBe('export type A = {}');
});
