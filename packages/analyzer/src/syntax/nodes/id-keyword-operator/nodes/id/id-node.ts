import {$AnalyzerType, $LexicalNode, LexicalNode} from '#analyzer';
import {Brand} from '#typing';

export type IdNode = LexicalNode & Brand<'Analyzer.IdNode'>;

export const $IdNode = () => $AnalyzerType<IdNode>('IdNode', $LexicalNode());
