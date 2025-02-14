import {$LexicalNode, analyzerPackageType, LexicalNode} from '#analyzer';
import {Brand} from '#typing';

export type RadixPointNode = LexicalNode & Brand<'Analyzer.RadixPointNode'>;

export const $RadixPointNode = analyzerPackageType<RadixPointNode>('RadixPointNode', $LexicalNode);
