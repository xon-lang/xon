import {$Node} from '../../../$';
import {TextResourceRange} from '../../../util/resource/text/text-resource-range';

export interface SemanticNode<T extends $Node = $Node> {
  $: T;
  reference: TextResourceRange;
}
