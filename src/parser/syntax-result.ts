import {SyntaxContext} from './syntax-context';

export type SyntaxResult = Pick<
  SyntaxContext,
  'source' | 'formatters' | 'issueManager' | 'statements' | 'getFormattedText'
> & {
  syntaxContext: SyntaxContext;
};

// export interface SyntaxResult {
//   source: Source;
//   hiddenNodes: TokenNode[];
//   formatters: Formatter[];
//   issueManager: IssueManager;
//   statements: StatementNode[];
//   syntaxContext: SyntaxContext;
// }
