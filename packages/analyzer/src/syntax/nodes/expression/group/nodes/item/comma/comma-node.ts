import {$AnalyzerType, $LexicalNode, LexicalNode} from '#analyzer';
import {Brand} from '#typing';

export type CommaNode = LexicalNode & Brand<'Analyzer.CommaNode'>;

export const $CommaNode = () => $AnalyzerType<CommaNode>('CommaNode', $LexicalNode());
