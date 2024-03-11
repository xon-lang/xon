import {IssueType} from '../issue/issue';
import {createIssueManager} from '../issue/issue-manager';
import {Nothing, nothing} from '../lib/core';
import {DeclarationNode} from '../parser/node/syntax/declaration/declaration-node';
import {SyntaxResult} from '../parser/syntax-result';
import {SourceReference} from '../source/source-reference';
import {declarationsSemanticParse} from './declaration/declaration-semantic-parser';
import {SemanticContext, semanticContext} from './semantic-context';

export interface Semantic {
  readonly $: $Semantic;
  readonly reference: SourceReference;
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
  TYPE_DECLARATION = 'TYPE_DECLARATION',
  VALUE_DECLARATION = 'VALUE_DECLARATION',
}

export function semanticIs<T extends Semantic = Semantic>(
  semantic: {$: $Semantic} | Nothing,
  type: $Semantic,
): semantic is T {
  return semantic?.$ === type;
}

export function parseSemantic(syntax: SyntaxResult): SemanticContext {
  // todo mb we need to create single issue manager ???
  const issueManager = createIssueManager(syntax.source, IssueType.SEMANTIC, syntax.issueManager.issues);
  const context = semanticContext(nothing, syntax.source, issueManager);
  const declarations = syntax.statements.map((x) => x.declaration).filter((x): x is DeclarationNode => !!x);

  declarationsSemanticParse(context, declarations);

  return context;
}
