import {Nothing, nothing} from '../lib/core';
import {SyntaxResult} from '../parser/syntax-result';
import {TextResourceReference} from '../util/resource/resource-reference';
import {syntaxDeclarationsParse} from './declaration/declaration-semantic-parser';
import {declarationManagerFromImportString, syntaxImportsParse} from './import/import-semantic-parser';
import {DEFAULT_SEMANTIC_CONFIG, SemanticConfig} from './semantic-config';
import {SemanticContext, semanticContext} from './semantic-context';
import {syntaxValuesParse} from './value/value-semantic-parser';

export interface Semantic {
  readonly $: $Semantic;
  readonly reference: TextResourceReference;
}

export enum $Semantic {
  EXPORT = 'EXPORT',
  IMPORT = 'IMPORT',

  TYPE_DECLARATION = 'TYPE_DECLARATION',
  VALUE_DECLARATION = 'VALUE_DECLARATION',

  INTEGER_TYPE = 'INTEGER_TYPE',
  STRING_TYPE = 'STRING_TYPE',
  ARRAY_TYPE = 'ARRAY_TYPE',
  DECLARATION_TYPE = 'DECLARATION_TYPE',

  INTERSECTION_TYPE = 'INTERSECTION_SET_TYPE',
  UNION_TYPE = 'UNION_SET_TYPE',
  COMPLEMENT_TYPE = 'COMPLEMENT_SET_TYPE',
  NOT_TYPE = 'NOT_SET_TYPE',
  RANGE_TYPE = 'RANGE_SET_TYPE',

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
  const context = semanticContext(nothing, syntax.resource, syntax.issueManager, imports, semanticConfig);

  syntaxImportsParse(context, syntax);
  syntaxDeclarationsParse(context, syntax);
  syntaxValuesParse(context, syntax);

  return context;
}
