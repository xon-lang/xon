import {String2} from '#common';
import {Stats} from 'node:fs';

export class FileFs {
  constructor(public fullPath: String2, public stats: Stats) {}
}
