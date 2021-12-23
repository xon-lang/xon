import { AttrContext } from '../../grammar/xon-parser';
import { Node } from '../node';

export abstract class AttributeNode extends Node {
  abstract ctx: AttrContext;
}
