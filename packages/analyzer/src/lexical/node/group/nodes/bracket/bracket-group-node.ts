import {$GroupNode, analyzerPackageType, GroupNode} from '#analyzer';
import {Brand} from '#typing';

export type BracketGroupNode = GroupNode & Brand<'Analyzer.BracketGroupNode'>;

export const $BracketGroupNode = analyzerPackageType<BracketGroupNode>('BracketGroupNode', $GroupNode);
