/* eslint-disable no-param-reassign */
import { ArgumentTree } from '../tree/argument/argument.tree';
import { processExpression } from './expression-typing';

export function processArgument(tree: ArgumentTree): void {
  processExpression(tree.value);
  tree.dataType = tree.value.dataType;
}
