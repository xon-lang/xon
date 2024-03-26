import {Nothing} from '../../lib/core';
import {Resource} from '../../util/resource/resource';
import {$Semantic, Semantic} from '../semantic';

export interface ImportSemantic extends Semantic {
  $: $Semantic.IMPORT;
  resource: Resource | Nothing;
}
