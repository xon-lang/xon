import {analyzerPackageType, FormatterItem, Semantic} from '#analyzer';
import {ArrayData, Boolean2, Nothing, TextRange} from '#common';
import {AnalyzerDiagnostic} from '#diagnostic';
import {Brand, Model} from '#typing';

export type Node = Model &
  Brand<'Analyzer.Node2'> & {
    range: TextRange;
    parent?: Node | Nothing;
    children?: ArrayData<Node> | Nothing;
    semantic?: Semantic | Nothing;
    isHidden?: Boolean2;
    hiddenNodes?: ArrayData<Node> | Nothing;
    canBeExpression?: Boolean2 | Nothing;

    diagnose?(): ArrayData<AnalyzerDiagnostic>;
    format?(): ArrayData<FormatterItem>;
  };

export const $Node = analyzerPackageType<Node>('Node');
