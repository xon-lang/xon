import {Nothing, Something, String2} from '../../../lib/types';

export interface Resource {
  $: $Resource;
  location: String2 | Nothing;
  data: Something;
}

export enum $Resource {
  TEXT = 'TEXT',
}
