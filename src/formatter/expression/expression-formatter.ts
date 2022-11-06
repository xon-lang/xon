import { Formatter } from '~/formatter/formatter';
import { ExpressionContext } from '~/grammar/xon-parser';

export abstract class ExpressionFormatter extends Formatter {
  ctx: ExpressionContext;
}
