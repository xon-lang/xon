import {Nothing, nothing} from '../lib/core';
import {SyntaxResult} from '../parser/syntax-result';
import {SourceReference} from '../source/source-reference';
import {syntaxDeclarationsParse} from './declaration/declaration-semantic-parser';
import {declarationManagerFromImportString, syntaxImportsParse} from './import/import-semantic-parser';
import {DEFAULT_SEMANTIC_CONFIG, SemanticConfig} from './semantic-config';
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

  UNION_OPERATOR_TYPE = 'UNION_OPERATOR_TYPE',
  INTERSECTION_OPERATOR_TYPE = 'INTERSECTION_OPERATOR_TYPE',

  VALUE = 'VALUE',
}

export function semanticIs<T extends Semantic = Semantic>(
  semantic: {$: $Semantic} | Nothing,
  type: $Semantic,
): semantic is T {
  return semantic?.$ === type;
}

export function parseSemantic(syntax: SyntaxResult, config?: Partial<SemanticConfig>): SemanticContext {
  const semanticConfig: SemanticConfig = {...DEFAULT_SEMANTIC_CONFIG, ...config};
  const imports = semanticConfig?.defaultImports?.filterMap((x) => declarationManagerFromImportString(x)) ?? [];
  const context = semanticContext(nothing, syntax.source, syntax.issueManager, imports, semanticConfig);

  syntaxImportsParse(context, syntax);
  syntaxDeclarationsParse(context, syntax);
  syntaxValuesParse(context, syntax);

  return context;
}
