// Generated from XonLexer.g4 by ANTLR 4.9.0-SNAPSHOT

 
    import { XonLexerBase } from "./xon-lexer-base";


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { CharStream } from "antlr4ts/CharStream";
import { Lexer } from "antlr4ts/Lexer";
import { LexerATNSimulator } from "antlr4ts/atn/LexerATNSimulator";
import { NotNull } from "antlr4ts/Decorators";
import { Override } from "antlr4ts/Decorators";
import { RuleContext } from "antlr4ts/RuleContext";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class XonLexer extends XonLexerBase {
	public static readonly INDENT = 1;
	public static readonly DEDENT = 2;
	public static readonly OPEN = 3;
	public static readonly CLOSE = 4;
	public static readonly COMMA = 5;
	public static readonly NL = 6;
	public static readonly WS = 7;
	public static readonly LINE_COMMENT = 8;
	public static readonly BLOCK_COMMENT = 9;
	public static readonly LINE_JOINING = 10;
	public static readonly TOKEN = 11;

	// tslint:disable:no-trailing-whitespace
	public static readonly channelNames: string[] = [
		"DEFAULT_TOKEN_CHANNEL", "HIDDEN",
	];

	// tslint:disable:no-trailing-whitespace
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE",
	];

	public static readonly ruleNames: string[] = [
		"OPEN", "CLOSE", "COMMA", "NL", "WS", "LINE_COMMENT", "BLOCK_COMMENT", 
		"LINE_JOINING", "TOKEN",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, "','",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "INDENT", "DEDENT", "OPEN", "CLOSE", "COMMA", "NL", "WS", "LINE_COMMENT", 
		"BLOCK_COMMENT", "LINE_JOINING", "TOKEN",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(XonLexer._LITERAL_NAMES, XonLexer._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return XonLexer.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(XonLexer._ATN, this);
	}

	// @Override
	public get grammarFileName(): string { return "XonLexer.g4"; }

	// @Override
	public get ruleNames(): string[] { return XonLexer.ruleNames; }

	// @Override
	public get serializedATN(): string { return XonLexer._serializedATN; }

	// @Override
	public get channelNames(): string[] { return XonLexer.channelNames; }

	// @Override
	public get modeNames(): string[] { return XonLexer.modeNames; }

	// @Override
	public action(_localctx: RuleContext, ruleIndex: number, actionIndex: number): void {
		switch (ruleIndex) {
		case 0:
			this.OPEN_action(_localctx, actionIndex);
			break;

		case 1:
			this.CLOSE_action(_localctx, actionIndex);
			break;

		case 3:
			this.NL_action(_localctx, actionIndex);
			break;
		}
	}
	private OPEN_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 0:
			this.opened++;
			break;
		}
	}
	private CLOSE_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 1:
			this.opened--;
			break;
		}
	}
	private NL_action(_localctx: RuleContext, actionIndex: number): void {
		switch (actionIndex) {
		case 2:
			this.handleLineBreak()
			break;
		}
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x02\r]\b\x01\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x03\x02\x03\x02\x03\x02\x03\x03" +
		"\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x07\x05 \n\x05\f\x05" +
		"\x0E\x05#\v\x05\x06\x05%\n\x05\r\x05\x0E\x05&\x03\x05\x03\x05\x03\x06" +
		"\x06\x06,\n\x06\r\x06\x0E\x06-\x03\x06\x03\x06\x03\x07\x03\x07\x03\x07" +
		"\x03\x07\x07\x076\n\x07\f\x07\x0E\x079\v\x07\x03\x07\x03\x07\x03\b\x03" +
		"\b\x03\b\x03\b\x03\b\x07\bB\n\b\f\b\x0E\bE\v\b\x03\b\x03\b\x03\b\x03\b" +
		"\x03\b\x03\t\x03\t\x07\tN\n\t\f\t\x0E\tQ\v\t\x03\t\x05\tT\n\t\x03\t\x03" +
		"\t\x05\tX\n\t\x03\t\x03\t\x03\n\x03\n\x03C\x02\x02\v\x03\x02\x05\x05\x02" +
		"\x06\x07\x02\x07\t\x02\b\v\x02\t\r\x02\n\x0F\x02\v\x11\x02\f\x13\x02\r" +
		"\x03\x02\x06\x05\x02**]]}}\x05\x02++__\x7F\x7F\x04\x02\f\f\x0F\x0F\x04" +
		"\x02\v\v\"\"\x02f\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02" +
		"\x07\x03\x02\x02\x02\x02\t\x03\x02\x02\x02\x02\v\x03\x02\x02\x02\x02\r" +
		"\x03\x02\x02\x02\x02\x0F\x03\x02\x02\x02\x02\x11\x03\x02\x02\x02\x02\x13" +
		"\x03\x02\x02\x02\x03\x15\x03\x02\x02\x02\x05\x18\x03\x02\x02\x02\x07\x1B" +
		"\x03\x02\x02\x02\t$\x03\x02\x02\x02\v+\x03\x02\x02\x02\r1\x03\x02\x02" +
		"\x02\x0F<\x03\x02\x02\x02\x11K\x03\x02\x02\x02\x13[\x03\x02\x02\x02\x15" +
		"\x16\t\x02\x02\x02\x16\x17\b\x02\x02\x02\x17\x04\x03\x02\x02\x02\x18\x19" +
		"\t\x03\x02\x02\x19\x1A\b\x03\x03\x02\x1A\x06\x03\x02\x02\x02\x1B\x1C\x07" +
		".\x02\x02\x1C\b\x03\x02\x02\x02\x1D!\t\x04\x02\x02\x1E \x05\v\x06\x02" +
		"\x1F\x1E\x03\x02\x02\x02 #\x03\x02\x02\x02!\x1F\x03\x02\x02\x02!\"\x03" +
		"\x02\x02\x02\"%\x03\x02\x02\x02#!\x03\x02\x02\x02$\x1D\x03\x02\x02\x02" +
		"%&\x03\x02\x02\x02&$\x03\x02\x02\x02&\'\x03\x02\x02\x02\'(\x03\x02\x02" +
		"\x02()\b\x05\x04\x02)\n\x03\x02\x02\x02*,\t\x05\x02\x02+*\x03\x02\x02" +
		"\x02,-\x03\x02\x02\x02-+\x03\x02\x02\x02-.\x03\x02\x02\x02./\x03\x02\x02" +
		"\x02/0\b\x06\x05\x020\f\x03\x02\x02\x0212\x07/\x02\x0223\x07/\x02\x02" +
		"37\x03\x02\x02\x0246\n\x04\x02\x0254\x03\x02\x02\x0269\x03\x02\x02\x02" +
		"75\x03\x02\x02\x0278\x03\x02\x02\x028:\x03\x02\x02\x0297\x03\x02\x02\x02" +
		":;\b\x07\x05\x02;\x0E\x03\x02\x02\x02<=\x071\x02\x02=>\x07,\x02\x02>C" +
		"\x03\x02\x02\x02?B\x05\x0F\b\x02@B\v\x02\x02\x02A?\x03\x02\x02\x02A@\x03" +
		"\x02\x02\x02BE\x03\x02\x02\x02CD\x03\x02\x02\x02CA\x03\x02\x02\x02DF\x03" +
		"\x02\x02\x02EC\x03\x02\x02\x02FG\x07,\x02\x02GH\x071\x02\x02HI\x03\x02" +
		"\x02\x02IJ\b\b\x05\x02J\x10\x03\x02\x02\x02KO\x07^\x02\x02LN\t\x05\x02" +
		"\x02ML\x03\x02\x02\x02NQ\x03\x02\x02\x02OM\x03\x02\x02\x02OP\x03\x02\x02" +
		"\x02PW\x03\x02\x02\x02QO\x03\x02\x02\x02RT\x07\x0F\x02\x02SR\x03\x02\x02" +
		"\x02ST\x03\x02\x02\x02TU\x03\x02\x02\x02UX\x07\f\x02\x02VX\x07\x0F\x02" +
		"\x02WS\x03\x02\x02\x02WV\x03\x02\x02\x02WX\x03\x02\x02\x02XY\x03\x02\x02" +
		"\x02YZ\b\t\x05\x02Z\x12\x03\x02\x02\x02[\\\v\x02\x02\x02\\\x14\x03\x02" +
		"\x02\x02\f\x02!&-7ACOSW\x06\x03\x02\x02\x03\x03\x03\x03\x05\x04\b\x02" +
		"\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!XonLexer.__ATN) {
			XonLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(XonLexer._serializedATN));
		}

		return XonLexer.__ATN;
	}

}

