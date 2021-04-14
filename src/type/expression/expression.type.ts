/* eslint-disable max-classes-per-file */
/* eslint-disable @typescript-eslint/no-use-before-define */
import { ExpressionTree } from '../../tree/expression/expression.tree';
import { TypeTree } from '../../tree/type/type.tree';
import { GenericsMap } from '../generics-map';

export abstract class ExpressionType {
  abstract tree: ExpressionTree;

  abstract genericsMap: GenericsMap;

  abstract type(): TypeTree;
}
