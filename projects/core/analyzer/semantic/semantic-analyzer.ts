import {nothing} from '../../../lib/types';
import {SyntaxResult} from '../syntax-context';
import {syntaxDeclarationsParse} from './declaration/declaration-semantic-parser';
import {DEFAULT_SEMANTIC_CONFIG, SemanticAnalyzerConfig} from './semantic-analyzer-config';
import {SemanticAnalyzerContext, semanticContext} from './semantic-analyzer-context';
import {
  declarationManagerFromImportString,
  syntaxImportsParse,
} from './value/import/import-value-semantic-parser';
import {syntaxValuesParse} from './value/value-semantic-parser';

export function semanticParse(
  syntax: SyntaxResult,
  config?: Partial<SemanticAnalyzerConfig>,
): SemanticAnalyzerContext {
  const semanticConfig: SemanticAnalyzerConfig = {...DEFAULT_SEMANTIC_CONFIG, ...config};
  const imports =
    semanticConfig?.defaultImports?.filterMap((x) => declarationManagerFromImportString(x)) ?? [];
  const context = semanticContext(nothing, syntax.resource, syntax.issueManager, imports, semanticConfig);

  syntaxImportsParse(context, syntax);
  syntaxDeclarationsParse(context, syntax);
  syntaxValuesParse(context, syntax);

  return context;
}
