import {$WordOperatorNode, analyzerPackageType, WordOperatorNode} from '#analyzer';
import {Brand} from '#typing';

export type IsOperatorNode = WordOperatorNode & Brand<'Analyzer.IsOperatorNode'>;

export const $IsOperatorNode = analyzerPackageType<IsOperatorNode>('IsOperatorNode', $WordOperatorNode);
