import {$SyntaxNode2, StatementNode2, SyntaxNode2, analyzerPackageType} from '#analyzer';
import {ArrayData} from '#common';
import {Brand} from '#typing';

export type StatementGroupNode = SyntaxNode2 &
  Brand<'Analyzer.StatementGroupNode'> & {
    statements: ArrayData<StatementNode2>;
  };

export const $StatementGroupNode = analyzerPackageType<StatementGroupNode>(
  'StatementGroupNode',
  $SyntaxNode2,
);
