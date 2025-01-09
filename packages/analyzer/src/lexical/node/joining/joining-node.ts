import {$LexicalNode, analyzerPackageType, LexicalNode} from '#analyzer';
import {Brand} from '#typing';

export type JoiningNode = LexicalNode & Brand<'Analyzer.JoiningNode'>;

export const $JoiningNode = analyzerPackageType<JoiningNode>('JoiningNode', $LexicalNode);
