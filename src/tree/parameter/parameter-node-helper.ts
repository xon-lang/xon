import { ParameterContext } from '../../grammar/xon-parser';
import { ParameterNode } from './parameter-node';

export const getParameterNode = (ctx: ParameterContext): ParameterNode => {
  if (ctx === undefined) return undefined;
  return new ParameterNode(ctx);
};

export const getParameterNodes = (contexts: ParameterContext[]): ParameterNode[] => {
  return contexts?.map((x) => getParameterNode(x)) || [];
};
