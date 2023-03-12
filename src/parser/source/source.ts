import { lstatSync, readFileSync } from 'fs';
import { resolve } from 'path';
import { Integer, String2 } from '~/lib/core';
import { Node } from '~/node/node';

export class Source {
  // make text as array of char or Buffer
  public constructor(public text: String2, public location: String2 | null) {}

  public lineText(line: Integer): String2 {
    return this.text.split('\n')[line];
  }

  public nodeText(node: Node): String2 {
    return this.text.slice(node.startIndex, node.stopIndex + 1);
  }

  public static fromText = fromText;
  public static fromPath = fromPath;
}

function fromText(text: String2, location: String2 | null = null): Source {
  return new Source(text, location);
}

function fromPath(path: String2): Source {
  const fullPath = resolve(path);
  const stats = lstatSync(fullPath);

  if (!stats.isFile()) {
    throw new Error(`Not a file: ${fullPath}`);
  }
  const text = readFileSync(fullPath).toString();

  return new Source(text, path);
}
