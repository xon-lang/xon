import {Integer} from '../../../../../lib/types';
import {ISSUE_MESSAGE} from '../../../../issue/issue-message';
import {SyntaxContext} from '../../../syntax-context';
import {UnknownNode, unknownNode} from './unknown-node';

export function unknownNodeParse(context: SyntaxContext, index: Integer): UnknownNode {
  const text = context.resource.data[index];
  const range = context.getSymbolRange();

  context.issueManager.addError(range, ISSUE_MESSAGE.unknownSymbol());

  return unknownNode(range, text);
}
