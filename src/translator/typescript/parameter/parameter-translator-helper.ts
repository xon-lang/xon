import { Issue } from '../../../issue-service/issue';
import { ParameterTree } from '../../../tree/parameter/parameter-tree';
import { ParameterTranslator } from './parameter-translator';

export function getParameterTranslator(tree: ParameterTree): ParameterTranslator {
  if (!tree) return null;
  try {
    if (tree instanceof ParameterTree) return new ParameterTranslator(tree);
    // throw new Error(`Parameter translator not found for '${tree.constructor.name}'`);
  } catch (error) {
    Issue.errorFromTree(tree, error.toString());
  }
}

export const getParameterTranslators = (trees: ParameterTree[]): ParameterTranslator[] => {
  return trees?.map(getParameterTranslator) || [];
};
