import { ProgramContext } from '../../grammar/xon-parser';
import { ProgramTree } from './program.tree';

export const getProgramTree = (ctx: ProgramContext): ProgramTree => {
  if (ctx === undefined) return undefined;
  return new ProgramTree(ctx);
};
