import { BodyContext } from '../../grammar/xon-parser';
import { Node } from '../node';

export abstract class BodyNode extends Node {
  abstract ctx: BodyContext;
}
