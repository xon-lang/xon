import {Text} from '#common';
import {Stats} from 'node:fs';

export class DirectoryFs {
  constructor(public fullPath: Text, public stats: Stats) {}
}
