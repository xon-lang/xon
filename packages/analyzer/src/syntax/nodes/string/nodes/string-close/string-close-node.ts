import {$LexicalNode, LexicalNode, analyzerPackageType} from '#analyzer';
import {Brand} from '#typing';

export type StringCloseNode = LexicalNode & Brand<'Analyzer.StringCloseNode'>;

export const $StringCloseNode = analyzerPackageType<StringCloseNode>('StringCloseNode', $LexicalNode);
