import {SyntaxContext} from './syntax-context';

type ContextAttributes = 'source' | 'statements' | 'operators' | 'issueManager' | 'formatterManager';

export type SyntaxResult = Pick<SyntaxContext, ContextAttributes> & {
  syntaxContext: SyntaxContext;
};
