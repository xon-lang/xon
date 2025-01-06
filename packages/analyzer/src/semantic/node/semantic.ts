import {corePackageType, Node} from '#analyzer';
import {Model} from '#typing';

export type Semantic = Model & {
  nodeLink: Node;
};

export const $Semantic = corePackageType<Semantic>('Semantic');
