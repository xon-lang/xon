import {$LexicalNode, analyzerPackageType, LexicalNode} from '#analyzer';
import {Brand} from '#typing';

export type UnknownNode = LexicalNode & Brand<'Analyzer.UnknownNode'>;

export const $UnknownNode = analyzerPackageType<UnknownNode>('UnknownNode', $LexicalNode);
