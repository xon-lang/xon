import {$OpenNode, OpenNode, analyzerPackageType} from '#analyzer';
import {Brand} from '#typing';

export type AngleOpenNode = OpenNode & Brand<'Analyzer.AngleOpenNode'>;

export const $AngleOpenNode = analyzerPackageType<AngleOpenNode>('AngleOpenNode', $OpenNode);
