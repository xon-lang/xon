import { Issue } from '../../../issue-service/issue';
import { AttributeTree } from '../../../tree/attribute/attribute-tree';
import { AttributeTranslator } from './attribute-translator';

export function getAttributeTranslator(tree: AttributeTree): AttributeTranslator {
  if (tree === undefined) return undefined;
  try {
    if (tree instanceof AttributeTree) return new AttributeTranslator(tree);
    // throw new Error(`Attribute translator not found for '${tree.constructor.name}'`);
  } catch (error) {
    Issue.errorFromTree(tree, error.toString());
  }
}

export const getAttributeTranslators = (trees: AttributeTree[]): AttributeTranslator[] => {
  return trees?.map(getAttributeTranslator) || [];
};
