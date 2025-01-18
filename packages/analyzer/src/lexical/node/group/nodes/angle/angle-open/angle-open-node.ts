import {$GroupOpenNode, GroupOpenNode, analyzerPackageType} from '#analyzer';
import {Brand} from '#typing';

export type AngleOpenNode = GroupOpenNode & Brand<'Analyzer.AngleOpenNode'>;

export const $AngleOpenNode = analyzerPackageType<AngleOpenNode>('AngleOpenNode', $GroupOpenNode);
