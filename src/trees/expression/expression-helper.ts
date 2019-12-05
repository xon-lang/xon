import {
  ExpressionContext,
  UnaryExpressionContext,
  IntegerLiteralExpressionContext,
  FloatLiteralExpressionContext,
  BooleanLiteralExpressionContext,
  CharacterLiteralExpressionContext,
  StringLiteralExpressionContext,
  ParenthesizedExpressionContext,
  IdExpressionContext,
  MultiplicationExpressionContext,
  AddExpressionContext,
  DivideExpressionContext,
  SubtractionExpressionContext,
  PropertyExpressionContext,
} from '../../grammar/.antlr/XonParser';
import { UnaryExpressionTree } from '../unary-expression/unary-expression.tree';
import { IntegerLiteralExpressionTree } from '../integer-literal-expression/integer-literal-expression.tree';
import { FloatLiteralExpressionTree } from '../float-literal-expression/float-literal-expression.tree';
import { BooleanLiteralExpressionTree } from '../boolean-literal-expression/boolean-literal-expression.tree';
import { StringLiteralExpressionTree } from '../string-literal-expression/string-literal-expression.tree';
import { CharacterLiteralExpressionTree } from '../character-literal-expression/character-literal-expression.tree';
import { ParenthesizedExpressionTree } from '../parenthesized-expression/parenthesized-expression.tree';
import { IdExpressionTree } from '../id-expression/id-expression.tree';
import { MultiplicationExpressionTree } from '../multiplication-expression/multiplication-expression.tree';
import { AddExpressionTree } from '../add-expression/add-expression.tree';
import { DivideExpressionTree } from '../divide-expression/divide-expression.tree';
import { SubtractionExpressionTree } from '../subtraction-expression/subtraction-expression.tree';
import { PropertyExpressionTree } from '../property-expression/property-expression.tree';

export function getExpressionTree(ctx: ExpressionContext) {
    // IdExpression
    if (ctx instanceof IdExpressionContext) return new IdExpressionTree(ctx);
    // ParenthesizedExpression
    else if (ctx instanceof ParenthesizedExpressionContext)
        return new ParenthesizedExpressionTree(ctx).value;
    // IntegerLiteralExpression
    else if (ctx instanceof IntegerLiteralExpressionContext)
        return new IntegerLiteralExpressionTree(ctx);
    // FloatLiteralExpression
    else if (ctx instanceof FloatLiteralExpressionContext)
        return new FloatLiteralExpressionTree(ctx);
    // BooleanLiteralExpression
    else if (ctx instanceof BooleanLiteralExpressionContext)
        return new BooleanLiteralExpressionTree(ctx);
    // CharacterLiteralExpression
    else if (ctx instanceof CharacterLiteralExpressionContext)
        return new CharacterLiteralExpressionTree(ctx);
    // StringLiteralExpression
    else if (ctx instanceof StringLiteralExpressionContext)
        return new StringLiteralExpressionTree(ctx);
    // MultiplicationExpression
    else if (ctx instanceof MultiplicationExpressionContext)
        return new MultiplicationExpressionTree(ctx);
    // DivideExpression
    else if (ctx instanceof DivideExpressionContext) return new DivideExpressionTree(ctx);
    // AddExpression
    else if (ctx instanceof AddExpressionContext) return new AddExpressionTree(ctx);
    // SubtractionExpress
    else if (ctx instanceof SubtractionExpressionContext) return new SubtractionExpressionTree(ctx);
    // UnaryExpression
    else if (ctx instanceof UnaryExpressionContext) return new UnaryExpressionTree(ctx);
    // PropertyExpression
    else if (ctx instanceof PropertyExpressionContext) return new PropertyExpressionTree(ctx);
}
