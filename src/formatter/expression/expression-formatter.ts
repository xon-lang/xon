import { ExpressionContext } from '../../grammar/xon-parser';
import { Formatter } from '../formatter';

export abstract class ExpressionFormatter extends Formatter {
  ctx: ExpressionContext;
}
