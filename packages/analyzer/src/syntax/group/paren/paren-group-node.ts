import {$GroupNode, corePackageType, GroupNode} from '#analyzer';
import {Brand} from '#typing';

export type ParenGroupNode = GroupNode & Brand<'Core.ParenGroupNode'>;

export const $ParenGroupNode = corePackageType<ParenGroupNode>('ParenGroupNode', $GroupNode());
