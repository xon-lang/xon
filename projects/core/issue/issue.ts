import {String2} from '../lib/core';
import {Node} from '../parser/node/node';
import {Source, getRangeText} from '../source/source';
import {IssueLevel} from './issue-level';
import {IssueMessage} from './issue-message';

export enum IssueType {
  SYNTACTIC = 0,
  SEMANTIC = 1,
}

export interface Issue {
  type: IssueType;
  level: IssueLevel;
  node: Node;
  message: IssueMessage;
}

export function createSyntacticErrorIssue(node: Node, message: IssueMessage): Issue {
  return {
    type: IssueType.SYNTACTIC,
    level: IssueLevel.ERROR,
    node,
    message,
  };
}

export function createSemanticErrorIssue(node: Node, message: IssueMessage): Issue {
  return {
    type: IssueType.SEMANTIC,
    level: IssueLevel.ERROR,
    node,
    message,
  };
}

const redBright = (x: String2): String2 => colorText(x, Color.FG_RED);
const cyan = (x: String2): String2 => colorText(x, Color.FG_CYAN);
const gray = (x: String2): String2 => colorText(x, Color.FG_GRAY);
const red = (x: String2): String2 => colorText(x, Color.FG_RED);

const colorText = (text: String2, color: Color): String2 => `${color}${text}${Color.RESET}`;

enum Color {
  RESET = '\x1b[0m',
  BRIGHT = '\x1b[1m',
  DIM = '\x1b[2m',
  UNDERSCORE = '\x1b[4m',
  BLINK = '\x1b[5m',
  REVERSE = '\x1b[7m',
  HIDDEN = '\x1b[8m',

  FG_BLACK = '\x1b[30m',
  FG_RED = '\x1b[31m',
  FG_GREEN = '\x1b[32m',
  FG_YELLOW = '\x1b[33m',
  FG_BLUE = '\x1b[34m',
  FG_MAGENTA = '\x1b[35m',
  FG_CYAN = '\x1b[36m',
  FG_WHITE = '\x1b[37m',
  FG_GRAY = '\x1b[90m',

  BG_BLACK = '\x1b[40m',
  BG_RED = '\x1b[41m',
  BG_GREEN = '\x1b[42m',
  BG_YELLOW = '\x1b[43m',
  BG_BLUE = '\x1b[44m',
  BG_MAGENTA = '\x1b[45m',
  BG_CYAN = '\x1b[46m',
  BG_WHITE = '\x1b[47m',
  BG_GRAY = '\x1b[100m',
}

export function formatIssue(source: Source, {node, message}: Issue): String2 {
  const msg = redBright(message.actual);
  const lineText = source.text.split('\n')[node.range.start.line];
  const nodeText = getRangeText(source, node.range);
  const location = cyan(source.location ?? '<code>');
  const line = cyan(`:${node.range.start.line + 1}`);
  const column = cyan(`:${node.range.start.column + 1}`);
  const lineNumberBeforeGrayed = `${node.range.start.line + 1} | `;
  const lineNumber = gray(lineNumberBeforeGrayed);
  const caret = ' '.repeat(node.range.start.column + lineNumberBeforeGrayed.length) + red('~'.repeat(nodeText.length));

  return `${msg}\n${location}${line}${column}\n${lineNumber}${lineText}\n${caret}`;
}
