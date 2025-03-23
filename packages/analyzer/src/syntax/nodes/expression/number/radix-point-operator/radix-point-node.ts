import {$AnalyzerType, $LexicalNode, LexicalNode} from '#analyzer';
import {Brand} from '#typing';

export type RadixPointNode = LexicalNode & Brand<'Analyzer.RadixPointNode'>;

export const $RadixPointNode = () => $AnalyzerType<RadixPointNode>('RadixPointNode', $LexicalNode());
