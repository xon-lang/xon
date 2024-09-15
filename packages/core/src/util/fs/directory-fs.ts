import {Stats} from 'fs';

export class DirectoryFs {
  constructor(public fullPath: String, public stats: Stats) {}
}
