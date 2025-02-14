import {$LexicalNode2, LexicalNode2, analyzerPackageType} from '#analyzer';
import {Brand} from '#typing';

export type StringCloseNode = LexicalNode2 & Brand<'Analyzer.StringCloseNode'>;

export const $StringCloseNode = analyzerPackageType<StringCloseNode>('StringCloseNode', $LexicalNode2);
