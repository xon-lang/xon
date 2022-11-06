import { Formatter } from '~/formatter';
import { ExpressionContext } from '~/grammar';

export abstract class ExpressionFormatter extends Formatter {
  ctx: ExpressionContext;
}
