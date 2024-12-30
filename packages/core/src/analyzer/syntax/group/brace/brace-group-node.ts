import {$GroupNode, corePackageType, GroupNode} from '#core';
import {Brand} from '#typing';

export type BraceGroupNode = GroupNode & Brand<'Core.BraceGroupNode'>;

export const $BraceGroupNode = corePackageType<BraceGroupNode>('BraceGroupNode', $GroupNode());
