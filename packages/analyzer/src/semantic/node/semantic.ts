import {analyzerPackageType, Node} from '#analyzer';
import {Brand, Model} from '#typing';

export type Semantic = Model &
  Brand<'Analyzer.Semantic'> & {
    nodeLink: Node;
  };

export const $Semantic = analyzerPackageType<Semantic>('Semantic');
