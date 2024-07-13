import {$, $Model} from '../../../$';
import {TextResourceRange} from '../../../util/resource/text/text-resource-range';

export type Semantic<T extends $ = $> = $Model & {
  $: T;
  reference: TextResourceRange;
};
