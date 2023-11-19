import { SourceRange } from '../../source/source-range';
import { NodeType } from './node-type';

export interface Node {
  $: NodeType;
  range: SourceRange;
  parent?: Node | null;
  children?: Node[] | null;
  declarations?: Node[] | null;
}
