import { Issue } from '../../../issue-service/issue';
import { none } from '../../../lib/core';
import { ParameterTree } from '../../../tree/parameter/parameter-tree';
import { ParameterTranslator } from './parameter-translator';

export function getParameterTranslator(tree: ParameterTree, isType: boolean): ParameterTranslator {
  if (!tree) return none;
  try {
    if (tree instanceof ParameterTree) return new ParameterTranslator(tree, isType);
  } catch (error) {
    Issue.errorFromTree(tree, error.toString());
  }
}

export const getParameterTranslators = (
  trees: ParameterTree[],
  isType: boolean,
): ParameterTranslator[] => {
  return trees?.map((x) => getParameterTranslator(x, isType)) || [];
};
