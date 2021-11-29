import { AssignmentContext } from '../../grammar/xon-parser';
import { BaseTree } from '../base.tree';

export abstract class AssignmentTree extends BaseTree {
  abstract ctx: AssignmentContext;
}
