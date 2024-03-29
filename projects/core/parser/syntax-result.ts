import {SyntaxContext} from './syntax-context';

type ContextAttributes = 'resource' | 'statements' | 'issueManager' | 'formatterManager';

export type SyntaxResult = Pick<SyntaxContext, ContextAttributes> & {
  syntaxContext: SyntaxContext;
};
