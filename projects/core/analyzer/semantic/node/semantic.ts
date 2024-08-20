import {$, $Model} from '../../../$';
import {Node} from '../../node';

export type Semantic<T extends $ = $> = $Model & {
  $: T;
  nodeLink: Node;
};
