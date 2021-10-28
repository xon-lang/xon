import { ParserRuleContext, Token } from 'antlr4ts';
import { ParameterTree } from './parameter/parameter.tree';
import { SourceReference } from './source-reference';
import { VariableDeclarationStatementTree } from './statement/variable-declaration-statement/variable-declaration-statement.tree';

export class IdToken {
  text: string;
  declarationLink?: VariableDeclarationStatementTree | ParameterTree;
  sourceReference?: SourceReference;

  public constructor(public token?: Token) {
    if (!token) return;

    this.text = token.text;
    this.sourceReference = SourceReference.fromToken(token);
  }

  toString(): string {
    return this.text;
  }

  static fromContext(context: ParserRuleContext): IdToken {
    const id = new IdToken();
    id.text = context.text;
    id.sourceReference = SourceReference.fromContext(context);
    return id;
  }

  static fromTokens(tokens: Token[]): IdToken {
    const id = new IdToken();
    id.text = tokens.map((x) => x.text).join('');
    id.sourceReference = SourceReference.fromTwoTokens(tokens[0], tokens[tokens.length - 1]);
    return id;
  }

  static fromText(text: string): IdToken {
    const id = new IdToken();
    id.text = text;
    return id;
  }
}
