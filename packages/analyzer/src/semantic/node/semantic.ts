import {analyzerPackageType, Node} from '#analyzer';
import {Model} from '#typing';

export type Semantic = Model & {
  nodeLink: Node;
};

export const $Semantic = analyzerPackageType<Semantic>('Semantic');
