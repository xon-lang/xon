import {Boolean2, DirectoryFs, FileFs, Nothing, Text, newText, nothing} from '#common';
import {Stats, lstatSync} from 'node:fs';
import {resolve} from 'node:path';

export class PathFs {
  fullPath: Text;
  stats: Stats | Nothing = nothing;

  constructor(public path: Text) {
    this.fullPath = newText(this.resolve(path));
    this.setStats();
  }

  setStats(): void {
    try {
      this.stats = lstatSync(this.fullPath.toNativeString());
    } catch (error) {
      //
    }
  }

  isFile(): Boolean2 {
    return this.stats?.isFile() ?? false;
  }

  isDirectory(): Boolean2 {
    return this.stats?.isDirectory() ?? false;
  }

  resolve(importPath: Text): Text {
    return newText(resolve(importPath.toNativeString()));
  }

  object(): FileFs | DirectoryFs {
    if (this.stats) {
      if (this.isFile()) {
        return new FileFs(this.fullPath, this.stats);
      }

      if (this.isDirectory()) {
        return new DirectoryFs(this.fullPath, this.stats);
      }
    }

    throw new Error('Not implemented');
  }
}
