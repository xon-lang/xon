import {$AnalyzerType, $LexicalNode, LexicalNode} from '#analyzer';
import {Brand} from '#typing';

export type CharacterOpenNode = LexicalNode & Brand<'Analyzer.CharacterOpenNode'>;

export const $CharacterOpenNode = () => $AnalyzerType<CharacterOpenNode>('CharacterOpenNode', $LexicalNode());
