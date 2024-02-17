import { Issue } from '../issue/issue';
import { DeclarationMeta } from '../meta/meta';
import { Source } from '../source/source';
import { Node } from './node/node';
import { RootNode } from './node/root/root-node';
import { ParserConfig } from './parser-config';
import { ParserContext } from './parser-context';

export interface ParserResult {
  source: Source;
  hidden: Node[];
  issues: Issue[];
  declarations: DeclarationMeta[];
  root: RootNode;
  config: ParserConfig;
  context: ParserContext;
}
