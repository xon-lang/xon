import {IssueType} from '../issue/issue';
import {createIssueManager} from '../issue/issue-manager';
import {Nothing, nothing} from '../lib/core';
import {$DeclarationNodeType, DeclarationNode} from '../parser/node/syntax/declaration/declaration-node';
import {SyntaxResult} from '../parser/syntax-result';
import {SourceReference} from '../source/source-reference';
import {declarationsParse} from './declaration/declaration-semantic-parser';
import {SemanticContext, semanticContext} from './semantic-context';
import {valuesSemanticParse} from './value/value-semantic';

export interface Semantic {
  readonly $: $Semantic;
  readonly reference: SourceReference;
}
$DeclarationNodeType;
export enum $Semantic {
  DECLARATION = 'DECLARATION',

  ID_TYPE = 'ID_TYPE',
  INTEGER_TYPE = 'INTEGER_TYPE',
  RANGE_TYPE = 'RANGE_TYPE',
  ARRAY_TYPE = 'ARRAY_TYPE',
  UNION_TYPE = 'UNION_TYPE',

  ID_VALUE = 'ID_VALUE',
  INTEGER_VALUE = 'INTEGER_VALUE',
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

  declarationsParse(context, declarations);
  valuesSemanticParse(context, syntax);

  return context;
}
