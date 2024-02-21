import { IssueType } from '../issue/issue';
import { createIssueManager } from '../issue/issue-manager';
import { Nothing } from '../lib/core';
import { SourceReference } from '../source/source-reference';
import { DeclarationNode } from '../syntax/node/declaration/declaration-node';
import { $Node } from '../syntax/node/node';
import { SyntaxResult } from '../syntax/syntax-result';
import { is } from '../syntax/util/is';
import { declarationsParse } from './declaration/declaration-semantic-parser';
import { SemanticContext, semanticContext } from './semantic-context';

export interface Semantic {
  $: $Semantic;
  reference: SourceReference;
}

export enum $Semantic {
  LITERAL,
  USAGE,
  MODIFIER,
  MODEL,
  GENERIC,
  PARAMETER,
  METHOD,
  PROPERTY,
  CONSTANT,
  VARIABLE,
  OPERATOR,
}

export function semanticIs<T extends Semantic = Semantic>(
  semantic: { $: $Semantic } | Nothing,
  type: $Semantic,
): semantic is T {
  return semantic?.$ === type;
}

export function parseSemantic(syntax: SyntaxResult): SemanticContext {
  const issueManager = createIssueManager(syntax.source, IssueType.SEMANTIC, syntax.issueManager.issues);
  const context = semanticContext(null, syntax.source, issueManager);

  const declarations = syntax.statements
    .map((x) => x.item)
    .filter((x): x is DeclarationNode => is<DeclarationNode>(x, $Node.DECLARATION));

  declarationsParse(context, declarations);

  issueManager.issues.forEach((x) => issueManager.log(x));

  return context;
}
