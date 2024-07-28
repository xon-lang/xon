import {$} from '../../../../../$';
import {nothing} from '../../../../../../lib/types';
import {textResourceFromData} from '../../../../../util/resource/text/text-resource';
import {DeclarationNode} from '../../../../syntax/node/declaration/declaration-node';
import {syntaxFromResource} from '../../../../syntax/syntax-analyzer';
import {createSemanticAnalyzer} from '../../../semantic-analyzer';
import {TEST_SEMANTIC_CONFIG} from '../../../semantic-analyzer-config';
import {PropertyValueDeclarationSemantic} from '../../declaration/value/property/property-value-declaration-semantic';
import {typeNodeType} from '../type-semantic-parser';
import {CharTypeSemantic} from './char-type-semantic';

test('a is string value', () => {
  const text = `
    const a: 'a' = 'a'
  `;
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const semantic = createSemanticAnalyzer(syntax, TEST_SEMANTIC_CONFIG);

  expect(semantic.declarationManager.count()).toBe(1);
  expect(semantic.declarationManager.declarations['a'][0].$).toBe($.PropertyValueDeclarationSemantic);
  expect(semantic.declarationManager.declarations['a'][0].name).toBe('a');

  const constNode = syntax.statements[0].value as DeclarationNode;
  expect(constNode.id?.text.toString()).toBe('a');
  expect(constNode.id?.semantic?.$).toBe($.PropertyValueDeclarationSemantic);

  const idSemantic = constNode.id?.semantic as PropertyValueDeclarationSemantic;
  expect(idSemantic.name).toBe('a');

  const typeSemantic = constNode.type
    ? (typeNodeType(semantic, constNode.type) as CharTypeSemantic)
    : nothing;
  expect(typeSemantic?.$).toBe($.CharTypeSemantic);
  expect(typeSemantic?.value).toBe('a');
});

test('a is string literal', () => {
  const text = `
    const a: 'a`;
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const semantic = createSemanticAnalyzer(syntax, TEST_SEMANTIC_CONFIG);
  const constNode = syntax.statements[0].value as DeclarationNode;
  const typeSemantic = constNode.type
    ? (typeNodeType(semantic, constNode.type) as CharTypeSemantic)
    : nothing;

  expect(typeSemantic?.$).toBe($.CharTypeSemantic);
  expect(typeSemantic?.value).toBe('a');
});

test('emoji', () => {
  const text = `
    const a: '👩‍❤️‍💋‍👩'
    const b: '👍'`;
  const source = textResourceFromData(nothing, text);
  const syntax = syntaxFromResource(source);
  const semantic = createSemanticAnalyzer(syntax, TEST_SEMANTIC_CONFIG);

  const constA = syntax.statements[0].value as DeclarationNode;
  const typeASemantic = constA.type ? (typeNodeType(semantic, constA.type) as CharTypeSemantic) : nothing;
  expect(typeASemantic?.$).toBe($.CharTypeSemantic);
  expect(typeASemantic?.value).toBe('👩‍❤️‍💋‍👩');
  expect(typeASemantic?.declaration?.name).toBe('Char');

  const constB = syntax.statements[1].value as DeclarationNode;
  const typeBSemantic = constB.type ? (typeNodeType(semantic, constB.type) as CharTypeSemantic) : nothing;
  expect(typeBSemantic?.$).toBe($.CharTypeSemantic);
  expect(typeBSemantic?.value).toBe('👍');
});
