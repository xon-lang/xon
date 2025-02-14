import {$LexicalNode, analyzerPackageType, LexicalNode} from '#analyzer';
import {Brand} from '#typing';

export type NlNode = LexicalNode & Brand<'Analyzer.NlNode'>;

export const $NlNode = analyzerPackageType<NlNode>('NlNode', $LexicalNode);
