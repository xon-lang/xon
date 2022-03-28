import { StatementContext } from '../../grammar/xon-parser';
import { Formatter } from '../formatter';

export abstract class StatementFormatter extends Formatter {
  ctx: StatementContext;
}
