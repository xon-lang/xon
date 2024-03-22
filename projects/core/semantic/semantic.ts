import {Nothing, nothing} from '../lib/core';
import {SyntaxResult} from '../parser/syntax-result';
import {SourceReference} from '../source/source-reference';
import {syntaxDeclarationsParse} from './declaration/declaration-semantic-parser';
import {syntaxImportsParse} from './import/module-semantic-parser';
import {SemanticConfig} from './semantic-config';
import {SemanticContext, semanticContext} from './semantic-context';
import {syntaxValuesParse} from './value/value-semantic-parser';

export interface Semantic {
  readonly $: $Semantic;
  readonly reference: SourceReference;
}

export enum $Semantic {
  EXPORT = 'EXPORT',
  IMPORT = 'IMPORT',

  TYPE_DECLARATION = 'TYPE_DECLARATION',
  VALUE_DECLARATION = 'VALUE_DECLARATION',

  INTEGER_LITERAL = 'INTEGER_LITERAL',
  STRING_LITERAL = 'STRING_LITERAL',
  RANGE_LITERAL = 'RANGE_LITERAL',

  DECLARATION_TYPE = 'DECLARATION_TYPE',
  LITERAL_TYPE = 'LITERAL_TYPE',
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

  syntaxImportsParse(context, syntax);
  syntaxDeclarationsParse(context, syntax);
  syntaxValuesParse(context, syntax);

  return context;
}
