import {$GroupNode, corePackageType, GroupNode} from '#core';
import {Brand} from '#typing';

export type BracketGroupNode = GroupNode & Brand<'Core.BracketGroupNode'>;

export const $BracketGroupNode = corePackageType<BracketGroupNode>('BracketGroupNode', $GroupNode());
