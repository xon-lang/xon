import {Nothing, nothing} from '../lib/core';
import {$DeclarationNodeType} from '../parser/node/syntax/declaration/declaration-node';
import {SyntaxResult} from '../parser/syntax-result';
import {SourceReference} from '../source/source-reference';
import {declarationsParse2} from './declaration/declaration-semantic-parser';
import {SemanticConfig} from './semantic-config';
import {SemanticContext, semanticContext} from './semantic-context';
import {valuesSemanticParse} from './value/value-semantic-parser';

export interface Semantic {
  readonly $: $Semantic;
  readonly reference: SourceReference;
}
$DeclarationNodeType;
export enum $Semantic {
  TYPE_DECLARATION = 'TYPE_DECLARATION',
  VALUE_DECLARATION = 'VALUE_DECLARATION',

  INTEGER_LITERAL = 'INTEGER_LITERAL',
  STRING_LITERAL = 'STRING_LITERAL',

  DECLARATION_TYPE = 'DECLARATION_TYPE',
  LITERAL_TYPE = 'LITERAL_TYPE',
  RANGE_TYPE = 'RANGE_TYPE',
  ARRAY_TYPE = 'ARRAY_TYPE',
  UNION_TYPE = 'UNION_TYPE',

  VALUE = 'VALUE',
}

export function semanticIs<T extends Semantic = Semantic>(
  semantic: {$: $Semantic} | Nothing,
  type: $Semantic,
): semantic is T {
  return semantic?.$ === type;
}

export function parseSemantic(syntax: SyntaxResult, config?: Partial<SemanticConfig>): SemanticContext {
  const context = semanticContext(nothing, config, syntax.source, syntax.issueManager);

  declarationsParse2(context, syntax);
  valuesSemanticParse(context, syntax);

  return context;
}
