import { ValueContext } from '~/grammar/xon-parser';
import { Tree } from '~/tree/tree';

export abstract class ValueTree extends Tree {
  abstract ctx: ValueContext;
}
