import {$GroupNode, analyzerPackageType, GroupNode} from '#analyzer';
import {Brand} from '#typing';

export type BraceGroupNode = GroupNode & Brand<'Core.BraceGroupNode'>;

export const $BraceGroupNode = analyzerPackageType<BraceGroupNode>('BraceGroupNode', $GroupNode());
