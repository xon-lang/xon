// const Reset = '\x1b[0m';
// const Bright = '\x1b[1m';
// const Dim = '\x1b[2m';
// const Underscore = '\x1b[4m';
// const Blink = '\x1b[5m';
// const Reverse = '\x1b[7m';
// const Hidden = '\x1b[8m';

import {TextData} from '#/common';

// const FG_BLACK = '\x1b[30m';
// const FG_RED = '\x1b[31m';
// const FG_GREEN = '\x1b[32m';
// const FG_YELLOW = '\x1b[33m';
// const FG_BLUE = '\x1b[34m';
// const FG_MAGENTA = '\x1b[35m';
// const FG_CYAN = '\x1b[36m';
// const FG_WHITE = '\x1b[37m';
// const FG_GRAY = '\x1b[90m';

// const BG_BLACK = '\x1b[40m';
// const BG_RED = '\x1b[41m';
// const BG_GREEN = '\x1b[42m';
// const BG_YELLOW = '\x1b[43m';
// const BG_BLUE = '\x1b[44m';
// const BG_MAGENTA = '\x1b[45m';
// const BG_CYAN = '\x1b[46m';
// const BG_WHITE = '\x1b[47m';
// const BG_GRAY = '\x1b[100m';

export enum LogColor {
  BLACK = 0,
  RED = 1,
  GREEN = 2,
  YELLOW = 3,
  BLUE = 4,
  MAGENTA = 5,
  CYAN = 6,
  WHITE = 7,
  GRAY = 60,
}

export function log(
  text: TextData,
  foreground: LogColor = LogColor.WHITE,
  background: LogColor = LogColor.BLACK,
) {
  console.log(`\x1b[${30 + foreground}m\x1b[${40 + background}m%s\x1b[0m`, text);
}
