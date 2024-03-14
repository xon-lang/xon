import {Nothing, nothing} from '../lib/core';
import {$DeclarationNodeType, DeclarationNode} from '../parser/node/syntax/declaration/declaration-node';
import {SyntaxResult} from '../parser/syntax-result';
import {SourceReference} from '../source/source-reference';
import {declarationsParse} from './declaration/declaration-semantic-parser';
import {SemanticConfig} from './semantic-config';
import {SemanticContext, semanticContext} from './semantic-context';
import {valuesSemanticParse} from './value/value-semantic-parser';

export interface Semantic {
  readonly $: $Semantic;
  readonly reference: SourceReference;
}
$DeclarationNodeType;
export enum $Semantic {
  DECLARATION = 'DECLARATION',

  INTEGER_LITERAL = 'INTEGER_LITERAL',
  STRING_LITERAL = 'STRING_LITERAL',

  TYPE = 'TYPE', // todo base class hack remove it later
  DECLARATION_TYPE = 'DECLARATION_TYPE',
  LITERAL_TYPE = 'LITERAL_TYPE',
  RANGE_TYPE = 'RANGE_TYPE',
  ARRAY_TYPE = 'ARRAY_TYPE',
  UNION_TYPE = 'UNION_TYPE',

  VALUE = 'VALUE',
}

export function semanticIs<T extends Semantic = Semantic>(
  semantic: {$: $Semantic} | Nothing,
  type: $Semantic,
): semantic is T {
  if (!semantic) {
    return false;
  }

  return semantic.$ === type || semantic.$.split('_').includes(type);
}

export function parseSemantic(syntax: SyntaxResult, config?: Partial<SemanticConfig>): SemanticContext {
  const context = semanticContext(nothing, config, syntax.source, syntax.issueManager);
  const declarations = syntax.statements.map((x) => x.declaration).filter((x): x is DeclarationNode => !!x);

  declarationsParse(context, declarations);
  valuesSemanticParse(context, syntax);

  return context;
}
