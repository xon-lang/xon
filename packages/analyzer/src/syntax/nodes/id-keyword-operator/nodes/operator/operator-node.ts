import {$LexicalNode2, analyzerPackageType, LexicalNode2} from '#analyzer';
import {Brand} from '#typing';

export type OperatorNode = LexicalNode2 & Brand<'Analyzer.OperatorNode'>;

export const $OperatorNode = analyzerPackageType<OperatorNode>('OperatorNode', $LexicalNode2);
