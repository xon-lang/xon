import {nothing} from '../../../lib/types';
import {SyntaxResult} from '../syntax/syntax-context';
import {syntaxDeclarationsParse} from './node/declaration/declaration-semantic-parser';
import {
  declarationManagerFromImportString,
  syntaxImportsParse,
} from './node/value/import/import-value-semantic-parser';
import {syntaxValuesParse} from './node/value/value-semantic-parser';
import {DEFAULT_SEMANTIC_CONFIG, SemanticAnalyzerConfig} from './semantic-analyzer-config';
import {SemanticAnalyzerContext, semanticContext} from './semantic-analyzer-context';

export function semanticParse(
  syntax: SyntaxResult,
  config?: Partial<SemanticAnalyzerConfig>,
): SemanticAnalyzerContext {
  const semanticConfig: SemanticAnalyzerConfig = {...DEFAULT_SEMANTIC_CONFIG, ...config};
  const imports =
    semanticConfig?.defaultImports?.filterMap((x) => declarationManagerFromImportString(x)) ?? [];
  const context = semanticContext(
    nothing,
    syntax.resource,
    syntax.diagnosticManager,
    imports,
    semanticConfig,
  );

  syntaxImportsParse(context, syntax);
  syntaxDeclarationsParse(context, syntax);
  syntaxValuesParse(context, syntax);

  return context;
}
