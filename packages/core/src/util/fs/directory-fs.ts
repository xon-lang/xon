import {Stats} from 'fs';
import {String2} from '../../../../lib/src/types';

export class DirectoryFs {
  constructor(public fullPath: String2, public stats: Stats) {}
}
