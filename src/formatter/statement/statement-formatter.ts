import { Formatter } from '@/formatter/formatter';
import { StatementContext } from '@/grammar/xon-parser';

export abstract class StatementFormatter extends Formatter {
  ctx: StatementContext;
}
