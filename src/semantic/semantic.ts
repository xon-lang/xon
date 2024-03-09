import {IssueType} from '../issue/issue';
import {createIssueManager} from '../issue/issue-manager';
import {Nothing} from '../lib/core';
import {$Node, is} from '../parser/node/node';
import {DeclarationNode} from '../parser/node/syntax/declaration/declaration-node';
import {SyntaxResult} from '../parser/syntax-result';
import {SourceReference} from '../source/source-reference';
import {declarationDeepSemanticParse, declarationShallowSemanticParse} from './declaration/declaration-semantic-parser';
import {SemanticContext, semanticContext} from './semantic-context';

export interface Semantic {
  $: $Semantic;
  reference: SourceReference;
}

export enum $Semantic {
  // literals
  INTEGER_TYPE = 'INTEGER_TYPE',
  RANGE_TYPE = 'RANGE_TYPE',
  ARRAY_TYPE = 'ARRAY_TYPE',
  // operators
  UNION_TYPE = 'UNION_TYPE',

  DECLARATION_TYPE = 'DECLARATION_TYPE',

  VALUE = 'VALUE',

  // declarations
  MODIFIER = 'MODIFIER',
  MODEL = 'MODEL',
  GENERIC = 'GENERIC',
  PARAMETER = 'PARAMETER',
  METHOD = 'METHOD',
  PROPERTY = 'PROPERTY',
  CONSTANT = 'CONSTANT',
  VARIABLE = 'VARIABLE',
  OPERATOR = 'OPERATOR',
}

export function semanticIs<T extends Semantic = Semantic>(
  semantic: {$: $Semantic} | Nothing,
  type: $Semantic,
): semantic is T {
  return semantic?.$ === type;
}

export function parseSemantic(syntax: SyntaxResult): SemanticContext {
  // todo mb we need to create single issue manager
  const issueManager = createIssueManager(syntax.source, IssueType.SEMANTIC, syntax.issueManager.issues);
  const context = semanticContext(null, syntax.source, issueManager);

  const declarations = syntax.statements
    .map((x) => x.item)
    .filter((x): x is DeclarationNode => is<DeclarationNode>(x, $Node.DECLARATION));

  for (const declaration of declarations) {
    declarationShallowSemanticParse(context, declaration);
  }

  for (const declaration of declarations) {
    declarationDeepSemanticParse(context, declaration);
  }

  return context;
}
