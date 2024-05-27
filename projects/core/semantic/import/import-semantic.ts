import {Nothing} from '../../../lib/types';
import {Resource} from '../../util/resource/resource';
import {$Semantic, Semantic} from '../semantic';

// todo move import semantic to value semantic
export interface ImportSemantic extends Semantic<$Semantic.IMPORT> {
  resource: Resource | Nothing;
}
