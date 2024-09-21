import {Node} from '#core';
import {$, $Model} from '#typing';

export type Semantic<T extends $ = $> = $Model & {
  $: T;
  nodeLink: Node;
};
