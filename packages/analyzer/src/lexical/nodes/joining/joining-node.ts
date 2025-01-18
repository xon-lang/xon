import {$LexicalNode2, analyzerPackageType, LexicalNode2} from '#analyzer';
import {Brand} from '#typing';

export type JoiningNode = LexicalNode2 & Brand<'Analyzer.JoiningNode'>;

export const $JoiningNode = analyzerPackageType<JoiningNode>('JoiningNode', $LexicalNode2);
