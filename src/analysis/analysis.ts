import { Node } from '~/analysis/node';

export interface Analysis {
  nodes(): Node[];
}
