import {$} from '../../../$';
import {TextResourceRange} from '../../../util/resource/text/text-resource-range';

export interface SemanticNode<T extends $ = $> {
  $: T;
  reference: TextResourceRange;
}
