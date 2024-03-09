import {SyntaxContext} from './syntax-context';

type ContextAttributes = 'source' | 'statements' | 'issueManager' | 'formatterManager';

export type SyntaxResult = Pick<SyntaxContext, ContextAttributes> & {
  syntaxContext: SyntaxContext;
};
