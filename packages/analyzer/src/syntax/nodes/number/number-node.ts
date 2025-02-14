import {$SyntaxNode, analyzerPackageType, SyntaxNode} from '#analyzer';
import {Brand} from '#typing';

export type NumberNode = SyntaxNode & Brand<'Analyzer.NumberNode'>;

export const $NumberNode = analyzerPackageType<NumberNode>('NumberNode', $SyntaxNode);
