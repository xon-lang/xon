import {$LexicalNode, analyzerPackageType, LexicalNode} from '#analyzer';
import {Brand} from '#typing';

export type OpenNode = LexicalNode & Brand<'Analyzer.OpenNode'>;

export const $OpenNode = analyzerPackageType<OpenNode>('OpenNode', $LexicalNode);
