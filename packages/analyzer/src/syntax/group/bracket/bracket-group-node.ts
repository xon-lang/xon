import {$GroupNode, analyzerPackageType, GroupNode} from '#analyzer';
import {Brand} from '#typing';

export type BracketGroupNode = GroupNode & Brand<'Core.BracketGroupNode'>;

export const $BracketGroupNode = analyzerPackageType<BracketGroupNode>('BracketGroupNode', $GroupNode());
