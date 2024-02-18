import { Issue } from '../issue/issue';
import { Source } from '../source/source';
import { Node } from './node/node';
import { RootNode } from './node/root/root-node';
import { SyntaxConfig } from './syntax-config';
import { SyntaxContext } from './syntax-context';

export interface SyntaxResult {
  source: Source;
  hidden: Node[];
  issues: Issue[];
  root: RootNode;
  config: SyntaxConfig;
  syntaxContext: SyntaxContext;
}
