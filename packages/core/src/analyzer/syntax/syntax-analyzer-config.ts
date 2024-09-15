import {DEFAULT_FORMATTER_CONFIG, FormatterConfig} from '#core';

export interface SyntaxAnalyzerConfig {
  formatting: FormatterConfig;
}

export function DEFAULT_SYNTAX_ANALYZER_CONFIG(): SyntaxAnalyzerConfig {
  return {
    formatting: DEFAULT_FORMATTER_CONFIG,
  };
}
