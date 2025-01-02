import {Text} from '#common';
import {Stats} from 'node:fs';

export class FileFs {
  constructor(public fullPath: Text, public stats: Stats) {}
}
