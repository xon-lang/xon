import {Stats} from 'fs';
import {String2} from '../../../lib/types';

export class DirectoryFs {
  constructor(public fullPath: String2, public stats: Stats) {}
}
