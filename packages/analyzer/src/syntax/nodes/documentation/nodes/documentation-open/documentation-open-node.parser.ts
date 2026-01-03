import {$DocumentationOpenNode, AnalyzerContext, DOCUMENTATION_OPEN, DocumentationOpenNode} from '#analyzer';
import {Nothing} from '#core';

export function parseDocumentationOpenNode(context: AnalyzerContext): DocumentationOpenNode | Nothing {
  return context.source.takeText($DocumentationOpenNode(), DOCUMENTATION_OPEN);
}
