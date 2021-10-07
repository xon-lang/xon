import {
  AssignmentContext,
  IdAssignmentContext,
  MemberAssignmentContext,
} from '../../grammar/xon-parser';
import { AssignmentTree } from './assignment.tree';
import { IdAssignmentTree } from './id-assignment/id-assignment-statement.tree';
import { MemberAssignmentTree } from './member-assignment/member-assignment-statement.tree';

export const getAssignmentTree = (ctx: AssignmentContext): AssignmentTree => {
  if (ctx === undefined) return undefined;

  if (ctx instanceof IdAssignmentContext) return new IdAssignmentTree(ctx);
  if (ctx instanceof MemberAssignmentContext) return new MemberAssignmentTree(ctx);

  throw Error(`Assignment tree not found for "${ctx.constructor.name}"`);
};

export const getAssignmentsTrees = (contexts: AssignmentContext[]): AssignmentTree[] => {
  return contexts?.map(getAssignmentTree) || [];
};
