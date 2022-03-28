import { ExprContext } from '../../grammar/xon-parser';
import { Formatter } from '../formatter';

export abstract class ExpressionFormatter extends Formatter {
  ctx: ExprContext;
}
