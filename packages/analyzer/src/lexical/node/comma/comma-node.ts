import {$LexicalNode, analyzerPackageType, LexicalNode} from '#analyzer';
import {Brand} from '#typing';

export type CommaNode = LexicalNode & Brand<'Analyzer.CommaNode'>;

export const $CommaNode = analyzerPackageType<CommaNode>('CommaNode', $LexicalNode);
