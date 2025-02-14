import {$LexicalNode, analyzerPackageType, LexicalNode} from '#analyzer';
import {Brand} from '#typing';

export type IdNode = LexicalNode & Brand<'Analyzer.IdNode'>;

export const $IdNode = analyzerPackageType<IdNode>('IdNode', $LexicalNode);
