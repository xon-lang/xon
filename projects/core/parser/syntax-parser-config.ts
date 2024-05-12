import {Boolean2, Integer} from '../lib/core';

export interface SyntaxParserConfig {
  formatting: {
    insertFinalNewline: Boolean2;
    maxNewLines: Integer;
    indentSpaceLength: Integer;
  };
}

export const DEFAULT_SYNTAX_PARSER_CONFIG: SyntaxParserConfig = {
  formatting: {insertFinalNewline: true, maxNewLines: 2, indentSpaceLength: 2},
};
