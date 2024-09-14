import {DEFAULT_FORMATTER_CONFIG, FormatterConfig} from '../../formatter/formatter-config';

export interface SyntaxAnalyzerConfig {
  formatting: FormatterConfig;
}

export const DEFAULT_SYNTAX_ANALYZER_CONFIG: SyntaxAnalyzerConfig = {
  formatting: DEFAULT_FORMATTER_CONFIG,
};
