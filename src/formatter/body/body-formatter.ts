import { BodyContext } from '../../grammar/xon-parser';
import { Formatter } from '../formatter';

export abstract class BodyFormatter extends Formatter {
  ctx: BodyContext;
}
