import {Array2} from '../../../lib/types';
import {TextPosition} from '../../util/resource/text/text-position';
import {TextResource} from '../../util/resource/text/text-resource';
import {createLexicalAnalyzer, LexicalAnalyzer, LexicalNodeParseFn} from './lexical-analyzer';
import {documentationCloseNodeParse} from './node/documentation-close/documentation-close-node-parse';
import {documentationDescriptionNodeParse} from './node/documentation-description/documentation-description-node-parse';
import {documentationLabelNodeParse} from './node/documentation-label/documentation-label-node-parse';
import {documentationOpenNodeParse} from './node/documentation-open/documentation-open-node-parse';

const parsers: Array2<LexicalNodeParseFn> = [
  documentationOpenNodeParse,
  documentationCloseNodeParse,
  documentationLabelNodeParse,
  documentationDescriptionNodeParse,
];

export function documentationLexicalAnalyzer(
  resource: TextResource,
  startPosition: TextPosition,
): LexicalAnalyzer {
  return createLexicalAnalyzer(parsers, resource, startPosition);
}
