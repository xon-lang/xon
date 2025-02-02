import {$OperatorNode, OperatorNode, analyzerPackageType} from '#analyzer';
import {Brand} from '#typing';

export type TypeKeywordNode = OperatorNode & Brand<'Analyzer.TypeKeywordNode'>;

export const $TypeKeywordNode = analyzerPackageType<TypeKeywordNode>('TypeKeywordNode', $OperatorNode);
