import {$LexicalNode, analyzerPackageType, LexicalNode} from '#analyzer';
import {Brand} from '#typing';

export type StringContentNode = LexicalNode & Brand<'Analyzer.StringContentNode'>;

export const $StringContentNode = analyzerPackageType<StringContentNode>('StringContentNode', $LexicalNode);
