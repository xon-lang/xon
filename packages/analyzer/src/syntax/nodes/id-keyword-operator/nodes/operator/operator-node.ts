import {$LexicalNode, analyzerPackageType, LexicalNode} from '#analyzer';
import {Brand} from '#typing';

export type OperatorNode = LexicalNode & Brand<'Analyzer.OperatorNode'>;

export const $OperatorNode = analyzerPackageType<OperatorNode>('OperatorNode', $LexicalNode);
