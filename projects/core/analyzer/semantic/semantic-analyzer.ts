import {nothing} from '../../../lib/types';
import {SyntaxAnalyzer, syntaxParse} from '../syntax/syntax-analyzer';
import {syntaxDeclarationsParse} from './node/declaration/declaration-semantic-parser';
import {
  declarationManagerFromImportString,
  syntaxImportsParse,
} from './node/value/import/import-value-semantic-parser';
import {syntaxValuesParse} from './node/value/value-semantic-parser';
import {DEFAULT_SEMANTIC_CONFIG, SemanticAnalyzerConfig} from './semantic-analyzer-config';
import {SemanticAnalyzerContext, semanticContext} from './semantic-analyzer-context';

export function semanticParse(
  syntaxAnalyzer: SyntaxAnalyzer | ReturnType<typeof syntaxParse>,
  config?: Partial<SemanticAnalyzerConfig>,
): SemanticAnalyzerContext {
  const semanticConfig: SemanticAnalyzerConfig = {...DEFAULT_SEMANTIC_CONFIG, ...config};
  const imports =
    semanticConfig?.defaultImports?.filterMap((x) => declarationManagerFromImportString(x)) ?? [];
  const context = semanticContext(
    nothing,
    syntaxAnalyzer.lexicalAnalyzer.resource,
    syntaxAnalyzer.diagnosticManager,
    imports,
    semanticConfig,
  );

  const statements =
    'statements' in syntaxAnalyzer ? syntaxAnalyzer.statements : syntaxAnalyzer.parseStatements().statements;

  syntaxImportsParse(context, statements);
  syntaxDeclarationsParse(context, statements);
  syntaxValuesParse(context, statements);

  return context;
}
