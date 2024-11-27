import {Stats} from 'node:fs';

export class DirectoryFs {
  constructor(public fullPath: String, public stats: Stats) {}
}
