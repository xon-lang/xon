import {$, $Model} from '../../../$';
import {Nothing} from '../../../../lib/types';
import {Node} from '../../node';

export type Semantic<T extends $ = $> = $Model & {
  $: T;
  nodeLink?: Node | Nothing;
};
