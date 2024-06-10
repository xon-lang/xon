import {Nothing, nothing} from '../../lib/types';
import {SyntaxResult} from '../analyzer/syntax-context';
import {TextResourceReference} from '../util/resource/resource-reference';
import {syntaxDeclarationsParse} from './declaration/declaration-semantic-parser';
import {DEFAULT_SEMANTIC_CONFIG, SemanticConfig} from './semantic-config';
import {SemanticContext, semanticContext} from './semantic-context';
import {
  declarationManagerFromImportString,
  syntaxImportsParse,
} from './value/import/import-value-semantic-parser';
import {syntaxValuesParse} from './value/value-semantic-parser';

export interface Semantic<T extends $Semantic = $Semantic> {
  $: T;
  reference: TextResourceReference;
}

export enum $Semantic {
  DECLARATION = 'DECLARATION',

  TYPE = 'TYPE',
  ID_TYPE = 'DECLARATION_TYPE',
  INTEGER_TYPE = 'INTEGER_TYPE',
  STRING_TYPE = 'STRING_TYPE',
  ARRAY_TYPE = 'ARRAY_TYPE',
  FUNCTION_TYPE = 'FUNCTION_TYPE',
  RANGE_TYPE = 'RANGE_SET_TYPE',
  INTERSECTION_TYPE = 'INTERSECTION_SET_TYPE',
  UNION_TYPE = 'UNION_SET_TYPE',
  COMPLEMENT_TYPE = 'COMPLEMENT_SET_TYPE',
  NOT_TYPE = 'NOT_SET_TYPE',

  VALUE = 'VALUE',
  ID_VALUE = 'ID_VALUE',
  INVOKE_VALUE = 'INVOKE_VALUE',
  INTEGER_VALUE = 'INTEGER_VALUE',
  STRING_VALUE = 'STRING_VALUE',
  MEMBER_VALUE = 'MEMBER_VALUE',
  IMPORT_VALUE = 'IMPORT_VALUE',
}

export function semanticIs<T extends Semantic = Semantic>(
  semantic: {$: $Semantic} | Nothing,
  type: $Semantic,
): semantic is T {
  return semantic?.$ === type;
}

export function semanticParse(syntax: SyntaxResult, config?: Partial<SemanticConfig>): SemanticContext {
  const semanticConfig: SemanticConfig = {...DEFAULT_SEMANTIC_CONFIG, ...config};
  const imports =
    semanticConfig?.defaultImports?.filterMap((x) => declarationManagerFromImportString(x)) ?? [];
  const context = semanticContext(nothing, syntax.resource, syntax.issueManager, imports, semanticConfig);

  syntaxImportsParse(context, syntax);
  syntaxDeclarationsParse(context, syntax);
  syntaxValuesParse(context, syntax);

  return context;
}
