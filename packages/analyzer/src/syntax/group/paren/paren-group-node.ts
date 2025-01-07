import {$GroupNode, analyzerPackageType, GroupNode} from '#analyzer';
import {Brand} from '#typing';

export type ParenGroupNode = GroupNode & Brand<'Analyzer.ParenGroupNode'>;

export const $ParenGroupNode = analyzerPackageType<ParenGroupNode>('ParenGroupNode', $GroupNode());
