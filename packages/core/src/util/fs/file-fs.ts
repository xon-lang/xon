import {String2} from '#common';
import {Stats} from 'fs';

export class FileFs {
  constructor(public fullPath: String2, public stats: Stats) {}
}
