import { DefinitionTree } from '../../../tree/definition/definition-tree';
import { DefinitionTranslator } from './definition-translator';

export const getDefinitionTranslator = (tree: DefinitionTree): DefinitionTranslator => {
  if (tree === undefined) return undefined;

  return new DefinitionTranslator(tree);
};

export const getDefinitionTranslators = (trees: DefinitionTree[]): DefinitionTranslator[] => {
  return trees?.map(getDefinitionTranslator) || [];
};
