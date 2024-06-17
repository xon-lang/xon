import {Analyzer} from '../analyzer';
import {SyntaxContext} from '../syntax-context';
import {DocumentationNode} from './node/documentation/documentation-node';

export interface DocumentationAnalyzer extends Analyzer<DocumentationNode> {
  analyze(): DocumentationNode;
}

export function documentationAnalyzer(context: SyntaxContext): DocumentationAnalyzer {
  return {
    analyze(): DocumentationNode {

    },
  };
}

