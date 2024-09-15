import {$, $Model, Node} from '#core';

export type Semantic<T extends $ = $> = $Model & {
  $: T;
  nodeLink: Node;
};
