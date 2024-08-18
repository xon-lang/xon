import {resolve} from 'path';
import {ReturnNode} from '../../../../syntax/node/return/return-node';
import {SemanticAnalyzer} from '../../../semantic-analyzer';
import {valueSemanticParse} from '../../value/value-semantic-parser';

const LIB_FOLDER = resolve(__dirname, '../../../../../../lib');

export function returnStatementSemanticParse(analyzer: SemanticAnalyzer, node: ReturnNode): void {
  if (node.value) {
    node.value.semantic = valueSemanticParse(analyzer, node.value);
  }
}
