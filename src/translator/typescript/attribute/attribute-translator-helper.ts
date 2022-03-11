import { Issue } from '../../../issue-service/issue';
import { none } from '../../../lib/core';
import { AttributeTree } from '../../../tree/attribute/attribute-tree';
import { AttributeTranslator } from './attribute-translator';

export function getAttributeTranslator(tree: AttributeTree): AttributeTranslator {
  if (!tree) return none;
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
