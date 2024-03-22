import {Resource} from '../../util/resource/data';
import {$Semantic, Semantic} from '../semantic';

export interface ImportSemantic extends Semantic {
  $: $Semantic.IMPORT;
  resource: Resource;
}
