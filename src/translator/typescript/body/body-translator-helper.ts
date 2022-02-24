import { Issue } from '../../../issue-service/issue';
import { BodyTree } from '../../../tree/body/body-tree';
import { MultipleBodyTree } from '../../../tree/body/multiple/multiple-body-tree';
import { SingleBodyTree } from '../../../tree/body/single/single-body-tree';
import { BodyTranslator } from './body-translator';
import { MultipleBodyTranslator } from './multiple/multiple-body-translator';
import { SingleBodyTranslator } from './single/single-body-translator';

export const getBodyTranslator = (tree: BodyTree): BodyTranslator => {
  if (!tree) return null;
  try {
    if (tree instanceof SingleBodyTree) return new SingleBodyTranslator(tree);
    if (tree instanceof MultipleBodyTree) return new MultipleBodyTranslator(tree);
    throw `Body translator not found for '${tree.constructor.name}'`;
  } catch (error) {
    Issue.errorFromTree(tree, error.toString());
  }
};
