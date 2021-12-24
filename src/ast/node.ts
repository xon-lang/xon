import { ParserRuleContext } from 'antlr4ts';
import { SourceReference } from './util/source-reference';

export interface Node {
  toString(): string;
  sourceReference: SourceReference;
}
