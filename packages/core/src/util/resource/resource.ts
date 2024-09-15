import {$Model} from '../../$';
import {Nothing, Something, String2} from '../../../../lib/types';

export type Resource = $Model & {
  location: String2 | Nothing;
  data: Something;
};
