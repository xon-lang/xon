import {Array2, Nothing, String2} from '../../../../lib/types';
import {DIAGNOSTIC_MESSAGE} from '../../../diagnostic/analyzer-diagnostic-message';
import {DocumentationCloseNode} from '../../lexical/node/documentation-close/documentation-close-node';
import {DocumentationDescriptionNode} from '../../lexical/node/documentation-description/documentation-description-node';
import {DocumentationOpenNode} from '../../lexical/node/documentation-open/documentation-open-node';
import {HiddenNode} from '../../lexical/node/lexical-node';
import {$Node} from '../../node';
import {SyntaxNode, syntaxNode} from '../node/syntax-node';
import {SyntaxAnalyzer} from '../syntax-analyzer';
import {DocumentationItemNode} from './documentation-item-node';

export type DocumentationNode = SyntaxNode<$Node.DOCUMENTATION> &
  HiddenNode & {
    // todo should we use Open and Close nodes here ???
    open: DocumentationOpenNode;
    description?: DocumentationDescriptionNode | Nothing;
    items: Array2<DocumentationItemNode>;
    close?: DocumentationCloseNode | Nothing;
  };

export function documentationNode(
  analyzer: SyntaxAnalyzer,
  open: DocumentationOpenNode,
  description: DocumentationDescriptionNode | Nothing,
  items: Array2<DocumentationItemNode>,
  close?: DocumentationCloseNode | Nothing,
): DocumentationNode {
  const node = syntaxNode($Node.DOCUMENTATION, {open, description, items, close});

  validate(analyzer, node);

  return node;
}

export function validate(analyzer: SyntaxAnalyzer, node: DocumentationNode) {
  const unnecessaryLabels: Array2<String2> = [];

  for (const item of node.items) {
    const name = item.id.text;

    if (unnecessaryLabels.includes(name)) {
      analyzer.diagnosticManager.addWarning(
        item.range,
        DIAGNOSTIC_MESSAGE.documentationLabelAlreadyExists(name),
      );

      continue;
    }

    unnecessaryLabels.push(name);
  }
}
