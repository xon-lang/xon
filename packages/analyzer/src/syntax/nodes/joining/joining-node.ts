import {$AnalyzerType, $LexicalNode, LexicalNode} from '#analyzer';
import {Brand} from '#typing';

export type JoiningNode = LexicalNode & Brand<'Analyzer.JoiningNode'>;

export const $JoiningNode = () => $AnalyzerType<JoiningNode>('JoiningNode', $LexicalNode());
