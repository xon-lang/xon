// Generated from XonParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";


export class XonParser extends Parser {
	public static readonly INDENT = 1;
	public static readonly DEDENT = 2;
	public static readonly OPEN_BRACKET = 3;
	public static readonly CLOSE_BRACKET = 4;
	public static readonly OPEN_PAREN = 5;
	public static readonly CLOSE_PAREN = 6;
	public static readonly OPEN_BRACE = 7;
	public static readonly CLOSE_BRACE = 8;
	public static readonly ABSTRACT = 9;
	public static readonly ACTUAL = 10;
	public static readonly AS = 11;
	public static readonly BREAK = 12;
	public static readonly CLASS = 13;
	public static readonly DO = 14;
	public static readonly ELSE = 15;
	public static readonly ENUM = 16;
	public static readonly EXPECT = 17;
	public static readonly EXPORT = 18;
	public static readonly EXTENSION = 19;
	public static readonly FOR = 20;
	public static readonly IF = 21;
	public static readonly IMPORT = 22;
	public static readonly IN = 23;
	public static readonly INFIX = 24;
	public static readonly IS = 25;
	public static readonly MODEL = 26;
	public static readonly NOT = 27;
	public static readonly OBJECT = 28;
	public static readonly POSTFIX = 29;
	public static readonly PREFIX = 30;
	public static readonly RETURN = 31;
	public static readonly TYPE = 32;
	public static readonly WHILE = 33;
	public static readonly AMPERSAND = 34;
	public static readonly AND = 35;
	public static readonly ASSIGN = 36;
	public static readonly ASTERISK = 37;
	public static readonly AT = 38;
	public static readonly BACK_SLASH = 39;
	public static readonly CARET = 40;
	public static readonly COALESCING = 41;
	public static readonly COLON = 42;
	public static readonly COMMA = 43;
	public static readonly DOT = 44;
	public static readonly EQUAL = 45;
	public static readonly EXCLAMATION = 46;
	public static readonly GREAT_EQUAL = 47;
	public static readonly GREAT = 48;
	public static readonly HASH = 49;
	public static readonly LESS_EQUAL = 50;
	public static readonly LESS = 51;
	public static readonly MINUS = 52;
	public static readonly MODULO = 53;
	public static readonly NOT_EQUAL = 54;
	public static readonly OR = 55;
	public static readonly PIPE = 56;
	public static readonly PLUS = 57;
	public static readonly QUESTION = 58;
	public static readonly RANGE = 59;
	public static readonly SLASH = 60;
	public static readonly SPREAD = 61;
	public static readonly TILDE = 62;
	public static readonly UNDERSCORE = 63;
	public static readonly FLOAT_LITERAL = 64;
	public static readonly INTEGER_LITERAL = 65;
	public static readonly CHAR_LITERAL = 66;
	public static readonly STRING_LITERAL = 67;
	public static readonly REGEX_LITERAL = 68;
	public static readonly PREPROCESSOR = 69;
	public static readonly ID = 70;
	public static readonly NL = 71;
	public static readonly WS = 72;
	public static readonly BLOCK_COMMENT = 73;
	public static readonly LINE_COMMENT = 74;
	public static readonly UNEXPECTED = 75;
	public static readonly RULE_source = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_expr = 2;
	public static readonly RULE_literal = 3;
	public static readonly RULE_body = 4;
	public static readonly RULE_definitionBody = 5;
	public static readonly RULE_parameters = 6;
	public static readonly RULE_parameter = 7;
	public static readonly RULE_modifier = 8;
	public static readonly RULE_id = 9;
	public static readonly RULE_operator = 10;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"source", "statement", "expr", "literal", "body", "definitionBody", "parameters", 
		"parameter", "modifier", "id", "operator",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'['", "']'", "'('", "')'", "'{'", "'}'", 
		"'abstract'", "'actual'", "'as'", "'break'", "'class'", "'do'", "'else'", 
		"'enum'", "'expect'", "'export'", "'extension'", "'for'", "'if'", "'import'", 
		"'in'", "'infix'", "'is'", "'model'", "'not'", "'object'", "'postfix'", 
		"'prefix'", "'return'", "'type'", "'while'", "'&'", "'&&'", "'='", "'*'", 
		"'@'", "'\\'", "'^'", "'?.'", "':'", "','", "'.'", "'=='", "'!'", "'>='", 
		"'>'", "'#'", "'<='", "'<'", "'-'", "'%'", "'!='", "'||'", "'|'", "'+'", 
		"'?'", "'..'", "'/'", "'...'", "'~'", "'_'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "INDENT", "DEDENT", "OPEN_BRACKET", "CLOSE_BRACKET", "OPEN_PAREN", 
		"CLOSE_PAREN", "OPEN_BRACE", "CLOSE_BRACE", "ABSTRACT", "ACTUAL", "AS", 
		"BREAK", "CLASS", "DO", "ELSE", "ENUM", "EXPECT", "EXPORT", "EXTENSION", 
		"FOR", "IF", "IMPORT", "IN", "INFIX", "IS", "MODEL", "NOT", "OBJECT", 
		"POSTFIX", "PREFIX", "RETURN", "TYPE", "WHILE", "AMPERSAND", "AND", "ASSIGN", 
		"ASTERISK", "AT", "BACK_SLASH", "CARET", "COALESCING", "COLON", "COMMA", 
		"DOT", "EQUAL", "EXCLAMATION", "GREAT_EQUAL", "GREAT", "HASH", "LESS_EQUAL", 
		"LESS", "MINUS", "MODULO", "NOT_EQUAL", "OR", "PIPE", "PLUS", "QUESTION", 
		"RANGE", "SLASH", "SPREAD", "TILDE", "UNDERSCORE", "FLOAT_LITERAL", "INTEGER_LITERAL", 
		"CHAR_LITERAL", "STRING_LITERAL", "REGEX_LITERAL", "PREPROCESSOR", "ID", 
		"NL", "WS", "BLOCK_COMMENT", "LINE_COMMENT", "UNEXPECTED",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(XonParser._LITERAL_NAMES, XonParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return XonParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "XonParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return XonParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return XonParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(XonParser._ATN, this);
	}
	// @RuleVersion(0)
	public source(): SourceContext {
		let _localctx: SourceContext = new SourceContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, XonParser.RULE_source);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 25;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === XonParser.NL) {
				{
				{
				this.state = 22;
				this.match(XonParser.NL);
				}
				}
				this.state = 27;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 39;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
			while (_alt !== 1 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1 + 1) {
					{
					{
					this.state = 28;
					this.statement();
					this.state = 35;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case XonParser.NL:
						{
						this.state = 30;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						do {
							{
							{
							this.state = 29;
							this.match(XonParser.NL);
							}
							}
							this.state = 32;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
						} while (_la === XonParser.NL);
						}
						break;
					case XonParser.EOF:
						{
						this.state = 34;
						this.match(XonParser.EOF);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					}
				}
				this.state = 41;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, XonParser.RULE_statement);
		let _la: number;
		try {
			let _alt: number;
			this.state = 124;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
			case 1:
				_localctx = new ImportStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 42;
				this.match(XonParser.IMPORT);
				this.state = 43;
				(_localctx as ImportStatementContext)._path = this.expr(0);
				this.state = 44;
				this.match(XonParser.COLON);
				this.state = 45;
				(_localctx as ImportStatementContext)._expr = this.expr(0);
				(_localctx as ImportStatementContext)._members.push((_localctx as ImportStatementContext)._expr);
				this.state = 50;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 46;
						this.match(XonParser.COMMA);
						this.state = 47;
						(_localctx as ImportStatementContext)._expr = this.expr(0);
						(_localctx as ImportStatementContext)._members.push((_localctx as ImportStatementContext)._expr);
						}
						}
					}
					this.state = 52;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 4, this._ctx);
				}
				this.state = 54;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
				case 1:
					{
					this.state = 53;
					this.match(XonParser.COMMA);
					}
					break;
				}
				}
				break;

			case 2:
				_localctx = new ExportStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 56;
				this.match(XonParser.EXPORT);
				this.state = 57;
				(_localctx as ExportStatementContext)._path = this.expr(0);
				}
				break;

			case 3:
				_localctx = new ForStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 58;
				this.match(XonParser.FOR);
				this.state = 66;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
				case 1:
					{
					this.state = 59;
					(_localctx as ForStatementContext)._value = this.parameter();
					this.state = 62;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.COMMA) {
						{
						this.state = 60;
						this.match(XonParser.COMMA);
						this.state = 61;
						(_localctx as ForStatementContext)._index = this.parameter();
						}
					}

					this.state = 64;
					this.match(XonParser.IN);
					}
					break;
				}
				this.state = 68;
				this.expr(0);
				this.state = 69;
				this.body();
				}
				break;

			case 4:
				_localctx = new WhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 71;
				this.match(XonParser.WHILE);
				this.state = 72;
				this.expr(0);
				this.state = 73;
				this.body();
				}
				break;

			case 5:
				_localctx = new DoWhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 75;
				this.match(XonParser.DO);
				this.state = 76;
				this.body();
				this.state = 77;
				this.match(XonParser.WHILE);
				this.state = 78;
				this.expr(0);
				}
				break;

			case 6:
				_localctx = new IfStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 80;
				this.match(XonParser.IF);
				this.state = 81;
				this.expr(0);
				this.state = 82;
				(_localctx as IfStatementContext)._thenBody = this.body();
				this.state = 85;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
				case 1:
					{
					this.state = 83;
					this.match(XonParser.ELSE);
					this.state = 84;
					(_localctx as IfStatementContext)._elseBody = this.body();
					}
					break;
				}
				}
				break;

			case 7:
				_localctx = new BreakStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 87;
				this.match(XonParser.BREAK);
				}
				break;

			case 8:
				_localctx = new ReturnStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 88;
				this.match(XonParser.RETURN);
				this.state = 90;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 9, this._ctx) ) {
				case 1:
					{
					this.state = 89;
					this.expr(0);
					}
					break;
				}
				}
				break;

			case 9:
				_localctx = new AssertStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 92;
				this.match(XonParser.ACTUAL);
				this.state = 93;
				(_localctx as AssertStatementContext)._actual = this.expr(0);
				this.state = 95;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 94;
					this.match(XonParser.NL);
					}
					}
					this.state = 97;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === XonParser.NL);
				this.state = 99;
				this.match(XonParser.EXPECT);
				this.state = 100;
				(_localctx as AssertStatementContext)._expect = this.expr(0);
				}
				break;

			case 10:
				_localctx = new PreprocessorStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 102;
				this.match(XonParser.PREPROCESSOR);
				}
				break;

			case 11:
				_localctx = new DefinitionStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 103;
				this.modifier();
				this.state = 104;
				this.id();
				this.state = 110;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
				case 1:
					{
					this.state = 105;
					this.match(XonParser.OPEN_PAREN);
					this.state = 107;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (XonParser.ASSIGN - 36)) | (1 << (XonParser.ASTERISK - 36)) | (1 << (XonParser.CARET - 36)) | (1 << (XonParser.GREAT - 36)) | (1 << (XonParser.LESS - 36)) | (1 << (XonParser.MINUS - 36)) | (1 << (XonParser.MODULO - 36)) | (1 << (XonParser.PLUS - 36)) | (1 << (XonParser.SLASH - 36)) | (1 << (XonParser.SPREAD - 36)))) !== 0) || _la === XonParser.ID) {
						{
						this.state = 106;
						this.parameters();
						}
					}

					this.state = 109;
					this.match(XonParser.CLOSE_PAREN);
					}
					break;
				}
				this.state = 114;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.IS) {
					{
					this.state = 112;
					this.match(XonParser.IS);
					this.state = 113;
					(_localctx as DefinitionStatementContext)._base = this.expr(0);
					}
				}

				this.state = 117;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
				case 1:
					{
					this.state = 116;
					this.definitionBody();
					}
					break;
				}
				}
				break;

			case 12:
				_localctx = new AssignmentStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 119;
				this.id();
				this.state = 120;
				this.match(XonParser.ASSIGN);
				this.state = 121;
				this.expr(0);
				}
				break;

			case 13:
				_localctx = new ExpressionStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 123;
				this.expr(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expr(): ExprContext;
	public expr(_p: number): ExprContext;
	// @RuleVersion(0)
	public expr(_p?: number): ExprContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExprContext = new ExprContext(this._ctx, _parentState);
		let _prevctx: ExprContext = _localctx;
		let _startState: number = 4;
		this.enterRecursionRule(_localctx, 4, XonParser.RULE_expr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 203;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				{
				_localctx = new IdExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 127;
				this.id();
				}
				break;

			case 2:
				{
				_localctx = new ArrayExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 128;
				this.match(XonParser.OPEN_BRACKET);
				this.state = 140;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.NOT))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (XonParser.ASSIGN - 36)) | (1 << (XonParser.ASTERISK - 36)) | (1 << (XonParser.CARET - 36)) | (1 << (XonParser.GREAT - 36)) | (1 << (XonParser.LESS - 36)) | (1 << (XonParser.MINUS - 36)) | (1 << (XonParser.MODULO - 36)) | (1 << (XonParser.PLUS - 36)) | (1 << (XonParser.SLASH - 36)) | (1 << (XonParser.SPREAD - 36)) | (1 << (XonParser.FLOAT_LITERAL - 36)) | (1 << (XonParser.INTEGER_LITERAL - 36)) | (1 << (XonParser.CHAR_LITERAL - 36)) | (1 << (XonParser.STRING_LITERAL - 36)))) !== 0) || _la === XonParser.REGEX_LITERAL || _la === XonParser.ID) {
					{
					this.state = 129;
					this.expr(0);
					this.state = 134;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 130;
							this.match(XonParser.COMMA);
							this.state = 131;
							this.expr(0);
							}
							}
						}
						this.state = 136;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
					}
					this.state = 138;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.COMMA) {
						{
						this.state = 137;
						this.match(XonParser.COMMA);
						}
					}

					}
				}

				this.state = 142;
				this.match(XonParser.CLOSE_BRACKET);
				}
				break;

			case 3:
				{
				_localctx = new ObjectExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 143;
				this.match(XonParser.OPEN_BRACE);
				this.state = 155;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (XonParser.ASSIGN - 36)) | (1 << (XonParser.ASTERISK - 36)) | (1 << (XonParser.CARET - 36)) | (1 << (XonParser.GREAT - 36)) | (1 << (XonParser.LESS - 36)) | (1 << (XonParser.MINUS - 36)) | (1 << (XonParser.MODULO - 36)) | (1 << (XonParser.PLUS - 36)) | (1 << (XonParser.SLASH - 36)) | (1 << (XonParser.SPREAD - 36)))) !== 0) || _la === XonParser.ID) {
					{
					this.state = 144;
					this.parameter();
					this.state = 149;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 145;
							this.match(XonParser.COMMA);
							this.state = 146;
							this.parameter();
							}
							}
						}
						this.state = 151;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
					}
					this.state = 153;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.COMMA) {
						{
						this.state = 152;
						this.match(XonParser.COMMA);
						}
					}

					}
				}

				this.state = 157;
				this.match(XonParser.CLOSE_BRACE);
				}
				break;

			case 4:
				{
				_localctx = new SpreadExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 158;
				this.match(XonParser.SPREAD);
				this.state = 159;
				this.expr(15);
				}
				break;

			case 5:
				{
				_localctx = new PrefixExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 160;
				(_localctx as PrefixExpressionContext)._op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 27)) & ~0x1F) === 0 && ((1 << (_la - 27)) & ((1 << (XonParser.NOT - 27)) | (1 << (XonParser.MINUS - 27)) | (1 << (XonParser.PLUS - 27)))) !== 0))) {
					(_localctx as PrefixExpressionContext)._op = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 161;
				this.expr(14);
				}
				break;

			case 6:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 162;
				this.literal();
				}
				break;

			case 7:
				{
				_localctx = new MethodExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 163;
				this.match(XonParser.OPEN_PAREN);
				this.state = 175;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (XonParser.ASSIGN - 36)) | (1 << (XonParser.ASTERISK - 36)) | (1 << (XonParser.CARET - 36)) | (1 << (XonParser.GREAT - 36)) | (1 << (XonParser.LESS - 36)) | (1 << (XonParser.MINUS - 36)) | (1 << (XonParser.MODULO - 36)) | (1 << (XonParser.PLUS - 36)) | (1 << (XonParser.SLASH - 36)) | (1 << (XonParser.SPREAD - 36)))) !== 0) || _la === XonParser.ID) {
					{
					this.state = 164;
					this.parameter();
					this.state = 169;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 165;
							this.match(XonParser.COMMA);
							this.state = 166;
							this.parameter();
							}
							}
						}
						this.state = 171;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
					}
					this.state = 173;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.COMMA) {
						{
						this.state = 172;
						this.match(XonParser.COMMA);
						}
					}

					}
				}

				this.state = 177;
				this.match(XonParser.CLOSE_PAREN);
				this.state = 179;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
				case 1:
					{
					this.state = 178;
					this.expr(0);
					}
					break;
				}
				}
				break;

			case 8:
				{
				_localctx = new IndexerExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 181;
				this.match(XonParser.OPEN_BRACKET);
				this.state = 193;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (XonParser.ASSIGN - 36)) | (1 << (XonParser.ASTERISK - 36)) | (1 << (XonParser.CARET - 36)) | (1 << (XonParser.GREAT - 36)) | (1 << (XonParser.LESS - 36)) | (1 << (XonParser.MINUS - 36)) | (1 << (XonParser.MODULO - 36)) | (1 << (XonParser.PLUS - 36)) | (1 << (XonParser.SLASH - 36)) | (1 << (XonParser.SPREAD - 36)))) !== 0) || _la === XonParser.ID) {
					{
					this.state = 182;
					this.parameter();
					this.state = 187;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 183;
							this.match(XonParser.COMMA);
							this.state = 184;
							this.parameter();
							}
							}
						}
						this.state = 189;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
					}
					this.state = 191;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.COMMA) {
						{
						this.state = 190;
						this.match(XonParser.COMMA);
						}
					}

					}
				}

				this.state = 195;
				this.match(XonParser.CLOSE_BRACKET);
				this.state = 197;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 29, this._ctx) ) {
				case 1:
					{
					this.state = 196;
					this.expr(0);
					}
					break;
				}
				}
				break;

			case 9:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 199;
				this.match(XonParser.OPEN_PAREN);
				this.state = 200;
				this.expr(0);
				this.state = 201;
				this.match(XonParser.CLOSE_PAREN);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 271;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 38, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 269;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
					case 1:
						{
						_localctx = new PowExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as PowExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 205;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 206;
						(_localctx as PowExpressionContext)._op = this.match(XonParser.CARET);
						this.state = 207;
						(_localctx as PowExpressionContext)._right = this.expr(14);
						}
						break;

					case 2:
						{
						_localctx = new MulDivModExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as MulDivModExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 208;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 209;
						(_localctx as MulDivModExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (XonParser.ASTERISK - 37)) | (1 << (XonParser.MODULO - 37)) | (1 << (XonParser.SLASH - 37)))) !== 0))) {
							(_localctx as MulDivModExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 210;
						(_localctx as MulDivModExpressionContext)._right = this.expr(13);
						}
						break;

					case 3:
						{
						_localctx = new AddSubExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as AddSubExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 211;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 212;
						(_localctx as AddSubExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === XonParser.MINUS || _la === XonParser.PLUS)) {
							(_localctx as AddSubExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 213;
						(_localctx as AddSubExpressionContext)._right = this.expr(12);
						}
						break;

					case 4:
						{
						_localctx = new RangeExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as RangeExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 214;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 215;
						(_localctx as RangeExpressionContext)._op = this.match(XonParser.RANGE);
						this.state = 216;
						(_localctx as RangeExpressionContext)._right = this.expr(11);
						}
						break;

					case 5:
						{
						_localctx = new RelationalExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as RelationalExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 217;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 218;
						(_localctx as RelationalExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 47)) & ~0x1F) === 0 && ((1 << (_la - 47)) & ((1 << (XonParser.GREAT_EQUAL - 47)) | (1 << (XonParser.GREAT - 47)) | (1 << (XonParser.LESS_EQUAL - 47)) | (1 << (XonParser.LESS - 47)))) !== 0))) {
							(_localctx as RelationalExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 219;
						(_localctx as RelationalExpressionContext)._right = this.expr(10);
						}
						break;

					case 6:
						{
						_localctx = new EqualityExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as EqualityExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 220;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 221;
						(_localctx as EqualityExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(_la === XonParser.EQUAL || _la === XonParser.NOT_EQUAL)) {
							(_localctx as EqualityExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 222;
						(_localctx as EqualityExpressionContext)._right = this.expr(9);
						}
						break;

					case 7:
						{
						_localctx = new ConjunctionExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as ConjunctionExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 223;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 224;
						(_localctx as ConjunctionExpressionContext)._op = this.match(XonParser.AND);
						this.state = 225;
						(_localctx as ConjunctionExpressionContext)._right = this.expr(8);
						}
						break;

					case 8:
						{
						_localctx = new DisjunctionExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as DisjunctionExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 226;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 227;
						(_localctx as DisjunctionExpressionContext)._op = this.match(XonParser.OR);
						this.state = 228;
						(_localctx as DisjunctionExpressionContext)._right = this.expr(7);
						}
						break;

					case 9:
						{
						_localctx = new InfixExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as InfixExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 229;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 230;
						(_localctx as InfixExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.AS) | (1 << XonParser.IN) | (1 << XonParser.IS))) !== 0))) {
							(_localctx as InfixExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 231;
						(_localctx as InfixExpressionContext)._right = this.expr(6);
						}
						break;

					case 10:
						{
						_localctx = new InvokeExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as InvokeExpressionContext)._instance = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 232;
						if (!(this.precpred(this._ctx, 19))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 19)");
						}
						this.state = 233;
						this.match(XonParser.OPEN_PAREN);
						this.state = 245;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.NOT))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (XonParser.ASSIGN - 36)) | (1 << (XonParser.ASTERISK - 36)) | (1 << (XonParser.CARET - 36)) | (1 << (XonParser.GREAT - 36)) | (1 << (XonParser.LESS - 36)) | (1 << (XonParser.MINUS - 36)) | (1 << (XonParser.MODULO - 36)) | (1 << (XonParser.PLUS - 36)) | (1 << (XonParser.SLASH - 36)) | (1 << (XonParser.SPREAD - 36)) | (1 << (XonParser.FLOAT_LITERAL - 36)) | (1 << (XonParser.INTEGER_LITERAL - 36)) | (1 << (XonParser.CHAR_LITERAL - 36)) | (1 << (XonParser.STRING_LITERAL - 36)))) !== 0) || _la === XonParser.REGEX_LITERAL || _la === XonParser.ID) {
							{
							this.state = 234;
							(_localctx as InvokeExpressionContext)._expr = this.expr(0);
							(_localctx as InvokeExpressionContext)._args.push((_localctx as InvokeExpressionContext)._expr);
							this.state = 239;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
							while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
								if (_alt === 1) {
									{
									{
									this.state = 235;
									this.match(XonParser.COMMA);
									this.state = 236;
									(_localctx as InvokeExpressionContext)._expr = this.expr(0);
									(_localctx as InvokeExpressionContext)._args.push((_localctx as InvokeExpressionContext)._expr);
									}
									}
								}
								this.state = 241;
								this._errHandler.sync(this);
								_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
							}
							this.state = 243;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === XonParser.COMMA) {
								{
								this.state = 242;
								this.match(XonParser.COMMA);
								}
							}

							}
						}

						this.state = 247;
						this.match(XonParser.CLOSE_PAREN);
						}
						break;

					case 11:
						{
						_localctx = new IndexExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as IndexExpressionContext)._instance = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 248;
						if (!(this.precpred(this._ctx, 18))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 18)");
						}
						this.state = 249;
						this.match(XonParser.OPEN_BRACKET);
						this.state = 261;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.NOT))) !== 0) || ((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (XonParser.ASSIGN - 36)) | (1 << (XonParser.ASTERISK - 36)) | (1 << (XonParser.CARET - 36)) | (1 << (XonParser.GREAT - 36)) | (1 << (XonParser.LESS - 36)) | (1 << (XonParser.MINUS - 36)) | (1 << (XonParser.MODULO - 36)) | (1 << (XonParser.PLUS - 36)) | (1 << (XonParser.SLASH - 36)) | (1 << (XonParser.SPREAD - 36)) | (1 << (XonParser.FLOAT_LITERAL - 36)) | (1 << (XonParser.INTEGER_LITERAL - 36)) | (1 << (XonParser.CHAR_LITERAL - 36)) | (1 << (XonParser.STRING_LITERAL - 36)))) !== 0) || _la === XonParser.REGEX_LITERAL || _la === XonParser.ID) {
							{
							this.state = 250;
							(_localctx as IndexExpressionContext)._expr = this.expr(0);
							(_localctx as IndexExpressionContext)._args.push((_localctx as IndexExpressionContext)._expr);
							this.state = 255;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
							while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
								if (_alt === 1) {
									{
									{
									this.state = 251;
									this.match(XonParser.COMMA);
									this.state = 252;
									(_localctx as IndexExpressionContext)._expr = this.expr(0);
									(_localctx as IndexExpressionContext)._args.push((_localctx as IndexExpressionContext)._expr);
									}
									}
								}
								this.state = 257;
								this._errHandler.sync(this);
								_alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
							}
							this.state = 259;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === XonParser.COMMA) {
								{
								this.state = 258;
								this.match(XonParser.COMMA);
								}
							}

							}
						}

						this.state = 263;
						this.match(XonParser.CLOSE_BRACKET);
						}
						break;

					case 12:
						{
						_localctx = new NullableExpressionContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 264;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 265;
						this.match(XonParser.QUESTION);
						}
						break;

					case 13:
						{
						_localctx = new MemberExpressionContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 266;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 267;
						this.match(XonParser.DOT);
						this.state = 268;
						this.id();
						}
						break;
					}
					}
				}
				this.state = 273;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 38, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public literal(): LiteralContext {
		let _localctx: LiteralContext = new LiteralContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, XonParser.RULE_literal);
		try {
			this.state = 279;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.INTEGER_LITERAL:
				_localctx = new IntegerLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 274;
				this.match(XonParser.INTEGER_LITERAL);
				}
				break;
			case XonParser.FLOAT_LITERAL:
				_localctx = new FloatLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 275;
				this.match(XonParser.FLOAT_LITERAL);
				}
				break;
			case XonParser.CHAR_LITERAL:
				_localctx = new CharLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 276;
				this.match(XonParser.CHAR_LITERAL);
				}
				break;
			case XonParser.STRING_LITERAL:
				_localctx = new StringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 277;
				this.match(XonParser.STRING_LITERAL);
				}
				break;
			case XonParser.REGEX_LITERAL:
				_localctx = new RegexLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 278;
				this.match(XonParser.REGEX_LITERAL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public body(): BodyContext {
		let _localctx: BodyContext = new BodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, XonParser.RULE_body);
		let _la: number;
		try {
			this.state = 299;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 44, this._ctx) ) {
			case 1:
				_localctx = new SingleBodyContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 281;
				this.match(XonParser.COLON);
				this.state = 282;
				this.statement();
				}
				break;

			case 2:
				_localctx = new MultipleBodyContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 284;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COLON) {
					{
					this.state = 283;
					this.match(XonParser.COLON);
					}
				}

				this.state = 287;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 286;
					this.match(XonParser.NL);
					}
					}
					this.state = 289;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === XonParser.NL);
				this.state = 291;
				this.match(XonParser.INDENT);
				this.state = 294;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 294;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case XonParser.OPEN_BRACKET:
					case XonParser.OPEN_PAREN:
					case XonParser.OPEN_BRACE:
					case XonParser.ACTUAL:
					case XonParser.BREAK:
					case XonParser.CLASS:
					case XonParser.DO:
					case XonParser.ENUM:
					case XonParser.EXPORT:
					case XonParser.FOR:
					case XonParser.IF:
					case XonParser.IMPORT:
					case XonParser.MODEL:
					case XonParser.NOT:
					case XonParser.OBJECT:
					case XonParser.RETURN:
					case XonParser.TYPE:
					case XonParser.WHILE:
					case XonParser.ASSIGN:
					case XonParser.ASTERISK:
					case XonParser.CARET:
					case XonParser.GREAT:
					case XonParser.LESS:
					case XonParser.MINUS:
					case XonParser.MODULO:
					case XonParser.PLUS:
					case XonParser.SLASH:
					case XonParser.SPREAD:
					case XonParser.FLOAT_LITERAL:
					case XonParser.INTEGER_LITERAL:
					case XonParser.CHAR_LITERAL:
					case XonParser.STRING_LITERAL:
					case XonParser.REGEX_LITERAL:
					case XonParser.PREPROCESSOR:
					case XonParser.ID:
						{
						this.state = 292;
						this.statement();
						}
						break;
					case XonParser.NL:
						{
						this.state = 293;
						this.match(XonParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 296;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.ACTUAL) | (1 << XonParser.BREAK) | (1 << XonParser.CLASS) | (1 << XonParser.DO) | (1 << XonParser.ENUM) | (1 << XonParser.EXPORT) | (1 << XonParser.FOR) | (1 << XonParser.IF) | (1 << XonParser.IMPORT) | (1 << XonParser.MODEL) | (1 << XonParser.NOT) | (1 << XonParser.OBJECT) | (1 << XonParser.RETURN))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (XonParser.TYPE - 32)) | (1 << (XonParser.WHILE - 32)) | (1 << (XonParser.ASSIGN - 32)) | (1 << (XonParser.ASTERISK - 32)) | (1 << (XonParser.CARET - 32)) | (1 << (XonParser.GREAT - 32)) | (1 << (XonParser.LESS - 32)) | (1 << (XonParser.MINUS - 32)) | (1 << (XonParser.MODULO - 32)) | (1 << (XonParser.PLUS - 32)) | (1 << (XonParser.SLASH - 32)) | (1 << (XonParser.SPREAD - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (XonParser.FLOAT_LITERAL - 64)) | (1 << (XonParser.INTEGER_LITERAL - 64)) | (1 << (XonParser.CHAR_LITERAL - 64)) | (1 << (XonParser.STRING_LITERAL - 64)) | (1 << (XonParser.REGEX_LITERAL - 64)) | (1 << (XonParser.PREPROCESSOR - 64)) | (1 << (XonParser.ID - 64)) | (1 << (XonParser.NL - 64)))) !== 0));
				this.state = 298;
				this.match(XonParser.DEDENT);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public definitionBody(): DefinitionBodyContext {
		let _localctx: DefinitionBodyContext = new DefinitionBodyContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, XonParser.RULE_definitionBody);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 302;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 301;
				this.match(XonParser.NL);
				}
				}
				this.state = 304;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === XonParser.NL);
			this.state = 306;
			this.match(XonParser.INDENT);
			this.state = 309;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 309;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case XonParser.ASSIGN:
				case XonParser.ASTERISK:
				case XonParser.CARET:
				case XonParser.GREAT:
				case XonParser.LESS:
				case XonParser.MINUS:
				case XonParser.MODULO:
				case XonParser.PLUS:
				case XonParser.SLASH:
				case XonParser.SPREAD:
				case XonParser.ID:
					{
					this.state = 307;
					this.parameter();
					}
					break;
				case XonParser.NL:
					{
					this.state = 308;
					this.match(XonParser.NL);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 311;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (XonParser.ASSIGN - 36)) | (1 << (XonParser.ASTERISK - 36)) | (1 << (XonParser.CARET - 36)) | (1 << (XonParser.GREAT - 36)) | (1 << (XonParser.LESS - 36)) | (1 << (XonParser.MINUS - 36)) | (1 << (XonParser.MODULO - 36)) | (1 << (XonParser.PLUS - 36)) | (1 << (XonParser.SLASH - 36)) | (1 << (XonParser.SPREAD - 36)))) !== 0) || _la === XonParser.ID || _la === XonParser.NL);
			this.state = 313;
			this.match(XonParser.DEDENT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameters(): ParametersContext {
		let _localctx: ParametersContext = new ParametersContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, XonParser.RULE_parameters);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 315;
			this.parameter();
			this.state = 320;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 316;
					this.match(XonParser.COMMA);
					this.state = 317;
					this.parameter();
					}
					}
				}
				this.state = 322;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 48, this._ctx);
			}
			this.state = 324;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.COMMA) {
				{
				this.state = 323;
				this.match(XonParser.COMMA);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public parameter(): ParameterContext {
		let _localctx: ParameterContext = new ParameterContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, XonParser.RULE_parameter);
		let _la: number;
		try {
			this.state = 349;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 54, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 327;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.SPREAD) {
					{
					this.state = 326;
					this.match(XonParser.SPREAD);
					}
				}

				this.state = 329;
				this.id();
				this.state = 330;
				this.expr(0);
				this.state = 331;
				this.body();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 334;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.SPREAD) {
					{
					this.state = 333;
					this.match(XonParser.SPREAD);
					}
				}

				this.state = 336;
				this.id();
				this.state = 337;
				this.expr(0);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 340;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.SPREAD) {
					{
					this.state = 339;
					this.match(XonParser.SPREAD);
					}
				}

				this.state = 342;
				this.id();
				this.state = 343;
				this.body();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 346;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.SPREAD) {
					{
					this.state = 345;
					this.match(XonParser.SPREAD);
					}
				}

				this.state = 348;
				this.id();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public modifier(): ModifierContext {
		let _localctx: ModifierContext = new ModifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, XonParser.RULE_modifier);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 351;
			_la = this._input.LA(1);
			if (!(((((_la - 13)) & ~0x1F) === 0 && ((1 << (_la - 13)) & ((1 << (XonParser.CLASS - 13)) | (1 << (XonParser.ENUM - 13)) | (1 << (XonParser.MODEL - 13)) | (1 << (XonParser.OBJECT - 13)) | (1 << (XonParser.TYPE - 13)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public id(): IdContext {
		let _localctx: IdContext = new IdContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, XonParser.RULE_id);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 355;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.ID:
				{
				this.state = 353;
				_localctx._name = this.match(XonParser.ID);
				}
				break;
			case XonParser.ASSIGN:
			case XonParser.ASTERISK:
			case XonParser.CARET:
			case XonParser.GREAT:
			case XonParser.LESS:
			case XonParser.MINUS:
			case XonParser.MODULO:
			case XonParser.PLUS:
			case XonParser.SLASH:
				{
				this.state = 354;
				this.operator();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 373;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 58, this._ctx) ) {
			case 1:
				{
				this.state = 357;
				this.match(XonParser.LESS);
				this.state = 358;
				this.match(XonParser.PIPE);
				this.state = 359;
				this.parameter();
				this.state = 364;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 56, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 360;
						this.match(XonParser.COMMA);
						this.state = 361;
						this.parameter();
						}
						}
					}
					this.state = 366;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 56, this._ctx);
				}
				this.state = 368;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COMMA) {
					{
					this.state = 367;
					this.match(XonParser.COMMA);
					}
				}

				this.state = 370;
				this.match(XonParser.PIPE);
				this.state = 371;
				this.match(XonParser.GREAT);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public operator(): OperatorContext {
		let _localctx: OperatorContext = new OperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, XonParser.RULE_operator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 375;
			_la = this._input.LA(1);
			if (!(((((_la - 36)) & ~0x1F) === 0 && ((1 << (_la - 36)) & ((1 << (XonParser.ASSIGN - 36)) | (1 << (XonParser.ASTERISK - 36)) | (1 << (XonParser.CARET - 36)) | (1 << (XonParser.GREAT - 36)) | (1 << (XonParser.LESS - 36)) | (1 << (XonParser.MINUS - 36)) | (1 << (XonParser.MODULO - 36)) | (1 << (XonParser.PLUS - 36)) | (1 << (XonParser.SLASH - 36)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 2:
			return this.expr_sempred(_localctx as ExprContext, predIndex);
		}
		return true;
	}
	private expr_sempred(_localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 13);

		case 1:
			return this.precpred(this._ctx, 12);

		case 2:
			return this.precpred(this._ctx, 11);

		case 3:
			return this.precpred(this._ctx, 10);

		case 4:
			return this.precpred(this._ctx, 9);

		case 5:
			return this.precpred(this._ctx, 8);

		case 6:
			return this.precpred(this._ctx, 7);

		case 7:
			return this.precpred(this._ctx, 6);

		case 8:
			return this.precpred(this._ctx, 5);

		case 9:
			return this.precpred(this._ctx, 19);

		case 10:
			return this.precpred(this._ctx, 18);

		case 11:
			return this.precpred(this._ctx, 17);

		case 12:
			return this.precpred(this._ctx, 16);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03M\u017C\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x03\x02\x07\x02" +
		"\x1A\n\x02\f\x02\x0E\x02\x1D\v\x02\x03\x02\x03\x02\x06\x02!\n\x02\r\x02" +
		"\x0E\x02\"\x03\x02\x05\x02&\n\x02\x07\x02(\n\x02\f\x02\x0E\x02+\v\x02" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x07\x033\n\x03\f\x03" +
		"\x0E\x036\v\x03\x03\x03\x05\x039\n\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x05\x03A\n\x03\x03\x03\x03\x03\x05\x03E\n\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03X\n\x03" +
		"\x03\x03\x03\x03\x03\x03\x05\x03]\n\x03\x03\x03\x03\x03\x03\x03\x06\x03" +
		"b\n\x03\r\x03\x0E\x03c\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x05\x03n\n\x03\x03\x03\x05\x03q\n\x03\x03\x03\x03\x03" +
		"\x05\x03u\n\x03\x03\x03\x05\x03x\n\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x05\x03\x7F\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x07\x04\x87\n\x04\f\x04\x0E\x04\x8A\v\x04\x03\x04\x05\x04\x8D\n\x04" +
		"\x05\x04\x8F\n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04\x96" +
		"\n\x04\f\x04\x0E\x04\x99\v\x04\x03\x04\x05\x04\x9C\n\x04\x05\x04\x9E\n" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x07\x04\xAA\n\x04\f\x04\x0E\x04\xAD\v\x04\x03\x04\x05\x04" +
		"\xB0\n\x04\x05\x04\xB2\n\x04\x03\x04\x03\x04\x05\x04\xB6\n\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x07\x04\xBC\n\x04\f\x04\x0E\x04\xBF\v\x04\x03" +
		"\x04\x05\x04\xC2\n\x04\x05\x04\xC4\n\x04\x03\x04\x03\x04\x05\x04\xC8\n" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04\xCE\n\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x07\x04\xF0\n\x04\f\x04\x0E\x04\xF3\v\x04\x03" +
		"\x04\x05\x04\xF6\n\x04\x05\x04\xF8\n\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x07\x04\u0100\n\x04\f\x04\x0E\x04\u0103\v\x04\x03\x04" +
		"\x05\x04\u0106\n\x04\x05\x04\u0108\n\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x07\x04\u0110\n\x04\f\x04\x0E\x04\u0113\v\x04\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05\u011A\n\x05\x03\x06\x03\x06\x03" +
		"\x06\x05\x06\u011F\n\x06\x03\x06\x06\x06\u0122\n\x06\r\x06\x0E\x06\u0123" +
		"\x03\x06\x03\x06\x03\x06\x06\x06\u0129\n\x06\r\x06\x0E\x06\u012A\x03\x06" +
		"\x05\x06\u012E\n\x06\x03\x07\x06\x07\u0131\n\x07\r\x07\x0E\x07\u0132\x03" +
		"\x07\x03\x07\x03\x07\x06\x07\u0138\n\x07\r\x07\x0E\x07\u0139\x03\x07\x03" +
		"\x07\x03\b\x03\b\x03\b\x07\b\u0141\n\b\f\b\x0E\b\u0144\v\b\x03\b\x05\b" +
		"\u0147\n\b\x03\t\x05\t\u014A\n\t\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t\u0151" +
		"\n\t\x03\t\x03\t\x03\t\x03\t\x05\t\u0157\n\t\x03\t\x03\t\x03\t\x03\t\x05" +
		"\t\u015D\n\t\x03\t\x05\t\u0160\n\t\x03\n\x03\n\x03\v\x03\v\x05\v\u0166" +
		"\n\v\x03\v\x03\v\x03\v\x03\v\x03\v\x07\v\u016D\n\v\f\v\x0E\v\u0170\v\v" +
		"\x03\v\x05\v\u0173\n\v\x03\v\x03\v\x03\v\x05\v\u0178\n\v\x03\f\x03\f\x03" +
		"\f\x03)\x02\x03\x06\r\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02" +
		"\x10\x02\x12\x02\x14\x02\x16\x02\x02\n\x05\x02\x1D\x1D66;;\x05\x02\'\'" +
		"77>>\x04\x0266;;\x04\x021245\x04\x02//88\x05\x02\r\r\x19\x19\x1B\x1B\x07" +
		"\x02\x0F\x0F\x12\x12\x1C\x1C\x1E\x1E\"\"\b\x02&\'**2257;;>>\x02\u01CD" +
		"\x02\x1B\x03\x02\x02\x02\x04~\x03\x02\x02\x02\x06\xCD\x03\x02\x02\x02" +
		"\b\u0119\x03\x02\x02\x02\n\u012D\x03\x02\x02\x02\f\u0130\x03\x02\x02\x02" +
		"\x0E\u013D\x03\x02\x02\x02\x10\u015F\x03\x02\x02\x02\x12\u0161\x03\x02" +
		"\x02\x02\x14\u0165\x03\x02\x02\x02\x16\u0179\x03\x02\x02\x02\x18\x1A\x07" +
		"I\x02\x02\x19\x18\x03\x02\x02\x02\x1A\x1D\x03\x02\x02\x02\x1B\x19\x03" +
		"\x02\x02\x02\x1B\x1C\x03\x02\x02\x02\x1C)\x03\x02\x02\x02\x1D\x1B\x03" +
		"\x02\x02\x02\x1E%\x05\x04\x03\x02\x1F!\x07I\x02\x02 \x1F\x03\x02\x02\x02" +
		"!\"\x03\x02\x02\x02\" \x03\x02\x02\x02\"#\x03\x02\x02\x02#&\x03\x02\x02" +
		"\x02$&\x07\x02\x02\x03% \x03\x02\x02\x02%$\x03\x02\x02\x02&(\x03\x02\x02" +
		"\x02\'\x1E\x03\x02\x02\x02(+\x03\x02\x02\x02)*\x03\x02\x02\x02)\'\x03" +
		"\x02\x02\x02*\x03\x03\x02\x02\x02+)\x03\x02\x02\x02,-\x07\x18\x02\x02" +
		"-.\x05\x06\x04\x02./\x07,\x02\x02/4\x05\x06\x04\x0201\x07-\x02\x0213\x05" +
		"\x06\x04\x0220\x03\x02\x02\x0236\x03\x02\x02\x0242\x03\x02\x02\x0245\x03" +
		"\x02\x02\x0258\x03\x02\x02\x0264\x03\x02\x02\x0279\x07-\x02\x0287\x03" +
		"\x02\x02\x0289\x03\x02\x02\x029\x7F\x03\x02\x02\x02:;\x07\x14\x02\x02" +
		";\x7F\x05\x06\x04\x02<D\x07\x16\x02\x02=@\x05\x10\t\x02>?\x07-\x02\x02" +
		"?A\x05\x10\t\x02@>\x03\x02\x02\x02@A\x03\x02\x02\x02AB\x03\x02\x02\x02" +
		"BC\x07\x19\x02\x02CE\x03\x02\x02\x02D=\x03\x02\x02\x02DE\x03\x02\x02\x02" +
		"EF\x03\x02\x02\x02FG\x05\x06\x04\x02GH\x05\n\x06\x02H\x7F\x03\x02\x02" +
		"\x02IJ\x07#\x02\x02JK\x05\x06\x04\x02KL\x05\n\x06\x02L\x7F\x03\x02\x02" +
		"\x02MN\x07\x10\x02\x02NO\x05\n\x06\x02OP\x07#\x02\x02PQ\x05\x06\x04\x02" +
		"Q\x7F\x03\x02\x02\x02RS\x07\x17\x02\x02ST\x05\x06\x04\x02TW\x05\n\x06" +
		"\x02UV\x07\x11\x02\x02VX\x05\n\x06\x02WU\x03\x02\x02\x02WX\x03\x02\x02" +
		"\x02X\x7F\x03\x02\x02\x02Y\x7F\x07\x0E\x02\x02Z\\\x07!\x02\x02[]\x05\x06" +
		"\x04\x02\\[\x03\x02\x02\x02\\]\x03\x02\x02\x02]\x7F\x03\x02\x02\x02^_" +
		"\x07\f\x02\x02_a\x05\x06\x04\x02`b\x07I\x02\x02a`\x03\x02\x02\x02bc\x03" +
		"\x02\x02\x02ca\x03\x02\x02\x02cd\x03\x02\x02\x02de\x03\x02\x02\x02ef\x07" +
		"\x13\x02\x02fg\x05\x06\x04\x02g\x7F\x03\x02\x02\x02h\x7F\x07G\x02\x02" +
		"ij\x05\x12\n\x02jp\x05\x14\v\x02km\x07\x07\x02\x02ln\x05\x0E\b\x02ml\x03" +
		"\x02\x02\x02mn\x03\x02\x02\x02no\x03\x02\x02\x02oq\x07\b\x02\x02pk\x03" +
		"\x02\x02\x02pq\x03\x02\x02\x02qt\x03\x02\x02\x02rs\x07\x1B\x02\x02su\x05" +
		"\x06\x04\x02tr\x03\x02\x02\x02tu\x03\x02\x02\x02uw\x03\x02\x02\x02vx\x05" +
		"\f\x07\x02wv\x03\x02\x02\x02wx\x03\x02\x02\x02x\x7F\x03\x02\x02\x02yz" +
		"\x05\x14\v\x02z{\x07&\x02\x02{|\x05\x06\x04\x02|\x7F\x03\x02\x02\x02}" +
		"\x7F\x05\x06\x04\x02~,\x03\x02\x02\x02~:\x03\x02\x02\x02~<\x03\x02\x02" +
		"\x02~I\x03\x02\x02\x02~M\x03\x02\x02\x02~R\x03\x02\x02\x02~Y\x03\x02\x02" +
		"\x02~Z\x03\x02\x02\x02~^\x03\x02\x02\x02~h\x03\x02\x02\x02~i\x03\x02\x02" +
		"\x02~y\x03\x02\x02\x02~}\x03\x02\x02\x02\x7F\x05\x03\x02\x02\x02\x80\x81" +
		"\b\x04\x01\x02\x81\xCE\x05\x14\v\x02\x82\x8E\x07\x05\x02\x02\x83\x88\x05" +
		"\x06\x04\x02\x84\x85\x07-\x02\x02\x85\x87\x05\x06\x04\x02\x86\x84\x03" +
		"\x02\x02\x02\x87\x8A\x03\x02\x02\x02\x88\x86\x03\x02\x02\x02\x88\x89\x03" +
		"\x02\x02\x02\x89\x8C\x03\x02\x02\x02\x8A\x88\x03\x02\x02\x02\x8B\x8D\x07" +
		"-\x02\x02\x8C\x8B\x03\x02\x02\x02\x8C\x8D\x03\x02\x02\x02\x8D\x8F\x03" +
		"\x02\x02\x02\x8E\x83\x03\x02\x02\x02\x8E\x8F\x03\x02\x02\x02\x8F\x90\x03" +
		"\x02\x02\x02\x90\xCE\x07\x06\x02\x02\x91\x9D\x07\t\x02\x02\x92\x97\x05" +
		"\x10\t\x02\x93\x94\x07-\x02\x02\x94\x96\x05\x10\t\x02\x95\x93\x03\x02" +
		"\x02\x02\x96\x99\x03\x02\x02\x02\x97\x95\x03\x02\x02\x02\x97\x98\x03\x02" +
		"\x02\x02\x98\x9B\x03\x02\x02\x02\x99\x97\x03\x02\x02\x02\x9A\x9C\x07-" +
		"\x02\x02\x9B\x9A\x03\x02\x02\x02\x9B\x9C\x03\x02\x02\x02\x9C\x9E\x03\x02" +
		"\x02\x02\x9D\x92\x03\x02\x02\x02\x9D\x9E\x03\x02\x02\x02\x9E\x9F\x03\x02" +
		"\x02\x02\x9F\xCE\x07\n\x02\x02\xA0\xA1\x07?\x02\x02\xA1\xCE\x05\x06\x04" +
		"\x11\xA2\xA3\t\x02\x02\x02\xA3\xCE\x05\x06\x04\x10\xA4\xCE\x05\b\x05\x02" +
		"\xA5\xB1\x07\x07\x02\x02\xA6\xAB\x05\x10\t\x02\xA7\xA8\x07-\x02\x02\xA8" +
		"\xAA\x05\x10\t\x02\xA9\xA7\x03\x02\x02\x02\xAA\xAD\x03\x02\x02\x02\xAB" +
		"\xA9\x03\x02\x02\x02\xAB\xAC\x03\x02\x02\x02\xAC\xAF\x03\x02\x02\x02\xAD" +
		"\xAB\x03\x02\x02\x02\xAE\xB0\x07-\x02\x02\xAF\xAE\x03\x02\x02\x02\xAF" +
		"\xB0\x03\x02\x02\x02\xB0\xB2\x03\x02\x02\x02\xB1\xA6\x03\x02\x02\x02\xB1" +
		"\xB2\x03\x02\x02\x02\xB2\xB3\x03\x02\x02\x02\xB3\xB5\x07\b\x02\x02\xB4" +
		"\xB6\x05\x06\x04\x02\xB5\xB4\x03\x02\x02\x02\xB5\xB6\x03\x02\x02\x02\xB6" +
		"\xCE\x03\x02\x02\x02\xB7\xC3\x07\x05\x02\x02\xB8\xBD\x05\x10\t\x02\xB9" +
		"\xBA\x07-\x02\x02\xBA\xBC\x05\x10\t\x02\xBB\xB9\x03\x02\x02\x02\xBC\xBF" +
		"\x03\x02\x02\x02\xBD\xBB\x03\x02\x02\x02\xBD\xBE\x03\x02\x02\x02\xBE\xC1" +
		"\x03\x02\x02\x02\xBF\xBD\x03\x02\x02\x02\xC0\xC2\x07-\x02\x02\xC1\xC0" +
		"\x03\x02\x02\x02\xC1\xC2\x03\x02\x02\x02\xC2\xC4\x03\x02\x02\x02\xC3\xB8" +
		"\x03\x02\x02\x02\xC3\xC4\x03\x02\x02\x02\xC4\xC5\x03\x02\x02\x02\xC5\xC7" +
		"\x07\x06\x02\x02\xC6\xC8\x05\x06\x04\x02\xC7\xC6\x03\x02\x02\x02\xC7\xC8" +
		"\x03\x02\x02\x02\xC8\xCE\x03\x02\x02\x02\xC9\xCA\x07\x07\x02\x02\xCA\xCB" +
		"\x05\x06\x04\x02\xCB\xCC\x07\b\x02\x02\xCC\xCE\x03\x02\x02\x02\xCD\x80" +
		"\x03\x02\x02\x02\xCD\x82\x03\x02\x02\x02\xCD\x91\x03\x02\x02\x02\xCD\xA0" +
		"\x03\x02\x02\x02\xCD\xA2\x03\x02\x02\x02\xCD\xA4\x03\x02\x02\x02\xCD\xA5" +
		"\x03\x02\x02\x02\xCD\xB7\x03\x02\x02\x02\xCD\xC9\x03\x02\x02\x02\xCE\u0111" +
		"\x03\x02\x02\x02\xCF\xD0\f\x0F\x02\x02\xD0\xD1\x07*\x02\x02\xD1\u0110" +
		"\x05\x06\x04\x10\xD2\xD3\f\x0E\x02\x02\xD3\xD4\t\x03\x02\x02\xD4\u0110" +
		"\x05\x06\x04\x0F\xD5\xD6\f\r\x02\x02\xD6\xD7\t\x04\x02\x02\xD7\u0110\x05" +
		"\x06\x04\x0E\xD8\xD9\f\f\x02\x02\xD9\xDA\x07=\x02\x02\xDA\u0110\x05\x06" +
		"\x04\r\xDB\xDC\f\v\x02\x02\xDC\xDD\t\x05\x02\x02\xDD\u0110\x05\x06\x04" +
		"\f\xDE\xDF\f\n\x02\x02\xDF\xE0\t\x06\x02\x02\xE0\u0110\x05\x06\x04\v\xE1" +
		"\xE2\f\t\x02\x02\xE2\xE3\x07%\x02\x02\xE3\u0110\x05\x06\x04\n\xE4\xE5" +
		"\f\b\x02\x02\xE5\xE6\x079\x02\x02\xE6\u0110\x05\x06\x04\t\xE7\xE8\f\x07" +
		"\x02\x02\xE8\xE9\t\x07\x02\x02\xE9\u0110\x05\x06\x04\b\xEA\xEB\f\x15\x02" +
		"\x02\xEB\xF7\x07\x07\x02\x02\xEC\xF1\x05\x06\x04\x02\xED\xEE\x07-\x02" +
		"\x02\xEE\xF0\x05\x06\x04\x02\xEF\xED\x03\x02\x02\x02\xF0\xF3\x03\x02\x02" +
		"\x02\xF1\xEF\x03\x02\x02\x02\xF1\xF2\x03\x02\x02\x02\xF2\xF5\x03\x02\x02" +
		"\x02\xF3\xF1\x03\x02\x02\x02\xF4\xF6\x07-\x02\x02\xF5\xF4\x03\x02\x02" +
		"\x02\xF5\xF6\x03\x02\x02\x02\xF6\xF8\x03\x02\x02\x02\xF7\xEC\x03\x02\x02" +
		"\x02\xF7\xF8\x03\x02\x02\x02\xF8\xF9\x03\x02\x02\x02\xF9\u0110\x07\b\x02" +
		"\x02\xFA\xFB\f\x14\x02\x02\xFB\u0107\x07\x05\x02\x02\xFC\u0101\x05\x06" +
		"\x04\x02\xFD\xFE\x07-\x02\x02\xFE\u0100\x05\x06\x04\x02\xFF\xFD\x03\x02" +
		"\x02\x02\u0100\u0103\x03\x02\x02\x02\u0101\xFF\x03\x02\x02\x02\u0101\u0102" +
		"\x03\x02\x02\x02\u0102\u0105\x03\x02\x02\x02\u0103\u0101\x03\x02\x02\x02" +
		"\u0104\u0106\x07-\x02\x02\u0105\u0104\x03\x02\x02\x02\u0105\u0106\x03" +
		"\x02\x02\x02\u0106\u0108\x03\x02\x02\x02\u0107\xFC\x03\x02\x02\x02\u0107" +
		"\u0108\x03\x02\x02\x02\u0108\u0109\x03\x02\x02\x02\u0109\u0110\x07\x06" +
		"\x02\x02\u010A\u010B\f\x13\x02\x02\u010B\u0110\x07<\x02\x02\u010C\u010D" +
		"\f\x12\x02\x02\u010D\u010E\x07.\x02\x02\u010E\u0110\x05\x14\v\x02\u010F" +
		"\xCF\x03\x02\x02\x02\u010F\xD2\x03\x02\x02\x02\u010F\xD5\x03\x02\x02\x02" +
		"\u010F\xD8\x03\x02\x02\x02\u010F\xDB\x03\x02\x02\x02\u010F\xDE\x03\x02" +
		"\x02\x02\u010F\xE1\x03\x02\x02\x02\u010F\xE4\x03\x02\x02\x02\u010F\xE7" +
		"\x03\x02\x02\x02\u010F\xEA\x03\x02\x02\x02\u010F\xFA\x03\x02\x02\x02\u010F" +
		"\u010A\x03\x02\x02\x02\u010F\u010C\x03\x02\x02\x02\u0110\u0113\x03\x02" +
		"\x02\x02\u0111\u010F\x03\x02\x02\x02\u0111\u0112\x03\x02\x02\x02\u0112" +
		"\x07\x03\x02\x02\x02\u0113\u0111\x03\x02\x02\x02\u0114\u011A\x07C\x02" +
		"\x02\u0115\u011A\x07B\x02\x02\u0116\u011A\x07D\x02\x02\u0117\u011A\x07" +
		"E\x02\x02\u0118\u011A\x07F\x02\x02\u0119\u0114\x03\x02\x02\x02\u0119\u0115" +
		"\x03\x02\x02\x02\u0119\u0116\x03\x02\x02\x02\u0119\u0117\x03\x02\x02\x02" +
		"\u0119\u0118\x03\x02\x02\x02\u011A\t\x03\x02\x02\x02\u011B\u011C\x07," +
		"\x02\x02\u011C\u012E\x05\x04\x03\x02\u011D\u011F\x07,\x02\x02\u011E\u011D" +
		"\x03\x02\x02\x02\u011E\u011F\x03\x02\x02\x02\u011F\u0121\x03\x02\x02\x02" +
		"\u0120\u0122\x07I\x02\x02\u0121\u0120\x03\x02\x02\x02\u0122\u0123\x03" +
		"\x02\x02\x02\u0123\u0121\x03\x02\x02\x02\u0123\u0124\x03\x02\x02\x02\u0124" +
		"\u0125\x03\x02\x02\x02\u0125\u0128\x07\x03\x02\x02\u0126\u0129\x05\x04" +
		"\x03\x02\u0127\u0129\x07I\x02\x02\u0128\u0126\x03\x02\x02\x02\u0128\u0127" +
		"\x03\x02\x02\x02\u0129\u012A\x03\x02\x02\x02\u012A\u0128\x03\x02\x02\x02" +
		"\u012A\u012B\x03\x02\x02\x02\u012B\u012C\x03\x02\x02\x02\u012C\u012E\x07" +
		"\x04\x02\x02\u012D\u011B\x03\x02\x02\x02\u012D\u011E\x03\x02\x02\x02\u012E" +
		"\v\x03\x02\x02\x02\u012F\u0131\x07I\x02\x02\u0130\u012F\x03\x02\x02\x02" +
		"\u0131\u0132\x03\x02\x02\x02\u0132\u0130\x03\x02\x02\x02\u0132\u0133\x03" +
		"\x02\x02\x02\u0133\u0134\x03\x02\x02\x02\u0134\u0137\x07\x03\x02\x02\u0135" +
		"\u0138\x05\x10\t\x02\u0136\u0138\x07I\x02\x02\u0137\u0135\x03\x02\x02" +
		"\x02\u0137\u0136\x03\x02\x02\x02\u0138\u0139\x03\x02\x02\x02\u0139\u0137" +
		"\x03\x02\x02\x02\u0139\u013A\x03\x02\x02\x02\u013A\u013B\x03\x02\x02\x02" +
		"\u013B\u013C\x07\x04\x02\x02\u013C\r\x03\x02\x02\x02\u013D\u0142\x05\x10" +
		"\t\x02\u013E\u013F\x07-\x02\x02\u013F\u0141\x05\x10\t\x02\u0140\u013E" +
		"\x03\x02\x02\x02\u0141\u0144\x03\x02\x02\x02\u0142\u0140\x03\x02\x02\x02" +
		"\u0142\u0143\x03\x02\x02\x02\u0143\u0146\x03\x02\x02\x02\u0144\u0142\x03" +
		"\x02\x02\x02\u0145\u0147\x07-\x02\x02\u0146\u0145\x03\x02\x02\x02\u0146" +
		"\u0147\x03\x02\x02\x02\u0147\x0F\x03\x02\x02\x02\u0148\u014A\x07?\x02" +
		"\x02\u0149\u0148\x03\x02\x02\x02\u0149\u014A\x03\x02\x02\x02\u014A\u014B" +
		"\x03\x02\x02\x02\u014B\u014C\x05\x14\v\x02\u014C\u014D\x05\x06\x04\x02" +
		"\u014D\u014E\x05\n\x06\x02\u014E\u0160\x03\x02\x02\x02\u014F\u0151\x07" +
		"?\x02\x02\u0150\u014F\x03\x02\x02\x02\u0150\u0151\x03\x02\x02\x02\u0151" +
		"\u0152\x03\x02\x02\x02\u0152\u0153\x05\x14\v\x02\u0153\u0154\x05\x06\x04" +
		"\x02\u0154\u0160\x03\x02\x02\x02\u0155\u0157\x07?\x02\x02\u0156\u0155" +
		"\x03\x02\x02\x02\u0156\u0157\x03\x02\x02\x02\u0157\u0158\x03\x02\x02\x02" +
		"\u0158\u0159\x05\x14\v\x02\u0159\u015A\x05\n\x06\x02\u015A\u0160\x03\x02" +
		"\x02\x02\u015B\u015D\x07?\x02\x02\u015C\u015B\x03\x02\x02\x02\u015C\u015D" +
		"\x03\x02\x02\x02\u015D\u015E\x03\x02\x02\x02\u015E\u0160\x05\x14\v\x02" +
		"\u015F\u0149\x03\x02\x02\x02\u015F\u0150\x03\x02\x02\x02\u015F\u0156\x03" +
		"\x02\x02\x02\u015F\u015C\x03\x02\x02\x02\u0160\x11\x03\x02\x02\x02\u0161" +
		"\u0162\t\b\x02\x02\u0162\x13\x03\x02\x02\x02\u0163\u0166\x07H\x02\x02" +
		"\u0164\u0166\x05\x16\f\x02\u0165\u0163\x03\x02\x02\x02\u0165\u0164\x03" +
		"\x02\x02\x02\u0166\u0177\x03\x02\x02\x02\u0167\u0168\x075\x02\x02\u0168" +
		"\u0169\x07:\x02\x02\u0169\u016E\x05\x10\t\x02\u016A\u016B\x07-\x02\x02" +
		"\u016B\u016D\x05\x10\t\x02\u016C\u016A\x03\x02\x02\x02\u016D\u0170\x03" +
		"\x02\x02\x02\u016E\u016C\x03\x02\x02\x02\u016E\u016F\x03\x02\x02\x02\u016F" +
		"\u0172\x03\x02\x02\x02\u0170\u016E\x03\x02\x02\x02\u0171\u0173\x07-\x02" +
		"\x02\u0172\u0171\x03\x02\x02\x02\u0172\u0173\x03\x02\x02\x02\u0173\u0174" +
		"\x03\x02\x02\x02\u0174\u0175\x07:\x02\x02\u0175\u0176\x072\x02\x02\u0176" +
		"\u0178\x03\x02\x02\x02\u0177\u0167\x03\x02\x02\x02\u0177\u0178\x03\x02" +
		"\x02\x02\u0178\x15\x03\x02\x02\x02\u0179\u017A\t\t\x02\x02\u017A\x17\x03" +
		"\x02\x02\x02=\x1B\"%)48@DW\\cmptw~\x88\x8C\x8E\x97\x9B\x9D\xAB\xAF\xB1" +
		"\xB5\xBD\xC1\xC3\xC7\xCD\xF1\xF5\xF7\u0101\u0105\u0107\u010F\u0111\u0119" +
		"\u011E\u0123\u0128\u012A\u012D\u0132\u0137\u0139\u0142\u0146\u0149\u0150" +
		"\u0156\u015C\u015F\u0165\u016E\u0172\u0177";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!XonParser.__ATN) {
			XonParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(XonParser._serializedATN));
		}

		return XonParser.__ATN;
	}

}

export class SourceContext extends ParserRuleContext {
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.NL);
		} else {
			return this.getToken(XonParser.NL, i);
		}
	}
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	public EOF(): TerminalNode[];
	public EOF(i: number): TerminalNode;
	public EOF(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.EOF);
		} else {
			return this.getToken(XonParser.EOF, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_source; }
}


export class StatementContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_statement; }
	public copyFrom(ctx: StatementContext): void {
		super.copyFrom(ctx);
	}
}
export class ImportStatementContext extends StatementContext {
	public _path!: ExprContext;
	public _expr!: ExprContext;
	public _members: ExprContext[] = [];
	public IMPORT(): TerminalNode { return this.getToken(XonParser.IMPORT, 0); }
	public COLON(): TerminalNode { return this.getToken(XonParser.COLON, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.COMMA);
		} else {
			return this.getToken(XonParser.COMMA, i);
		}
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ExportStatementContext extends StatementContext {
	public _path!: ExprContext;
	public EXPORT(): TerminalNode { return this.getToken(XonParser.EXPORT, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ForStatementContext extends StatementContext {
	public _value!: ParameterContext;
	public _index!: ParameterContext;
	public FOR(): TerminalNode { return this.getToken(XonParser.FOR, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public body(): BodyContext {
		return this.getRuleContext(0, BodyContext);
	}
	public IN(): TerminalNode | undefined { return this.tryGetToken(XonParser.IN, 0); }
	public parameter(): ParameterContext[];
	public parameter(i: number): ParameterContext;
	public parameter(i?: number): ParameterContext | ParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterContext);
		} else {
			return this.getRuleContext(i, ParameterContext);
		}
	}
	public COMMA(): TerminalNode | undefined { return this.tryGetToken(XonParser.COMMA, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class WhileStatementContext extends StatementContext {
	public WHILE(): TerminalNode { return this.getToken(XonParser.WHILE, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public body(): BodyContext {
		return this.getRuleContext(0, BodyContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class DoWhileStatementContext extends StatementContext {
	public DO(): TerminalNode { return this.getToken(XonParser.DO, 0); }
	public body(): BodyContext {
		return this.getRuleContext(0, BodyContext);
	}
	public WHILE(): TerminalNode { return this.getToken(XonParser.WHILE, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class IfStatementContext extends StatementContext {
	public _thenBody!: BodyContext;
	public _elseBody!: BodyContext;
	public IF(): TerminalNode { return this.getToken(XonParser.IF, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public body(): BodyContext[];
	public body(i: number): BodyContext;
	public body(i?: number): BodyContext | BodyContext[] {
		if (i === undefined) {
			return this.getRuleContexts(BodyContext);
		} else {
			return this.getRuleContext(i, BodyContext);
		}
	}
	public ELSE(): TerminalNode | undefined { return this.tryGetToken(XonParser.ELSE, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class BreakStatementContext extends StatementContext {
	public BREAK(): TerminalNode { return this.getToken(XonParser.BREAK, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ReturnStatementContext extends StatementContext {
	public RETURN(): TerminalNode { return this.getToken(XonParser.RETURN, 0); }
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class AssertStatementContext extends StatementContext {
	public _actual!: ExprContext;
	public _expect!: ExprContext;
	public ACTUAL(): TerminalNode { return this.getToken(XonParser.ACTUAL, 0); }
	public EXPECT(): TerminalNode { return this.getToken(XonParser.EXPECT, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.NL);
		} else {
			return this.getToken(XonParser.NL, i);
		}
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class PreprocessorStatementContext extends StatementContext {
	public PREPROCESSOR(): TerminalNode { return this.getToken(XonParser.PREPROCESSOR, 0); }
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class DefinitionStatementContext extends StatementContext {
	public _base!: ExprContext;
	public modifier(): ModifierContext {
		return this.getRuleContext(0, ModifierContext);
	}
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public OPEN_PAREN(): TerminalNode | undefined { return this.tryGetToken(XonParser.OPEN_PAREN, 0); }
	public CLOSE_PAREN(): TerminalNode | undefined { return this.tryGetToken(XonParser.CLOSE_PAREN, 0); }
	public IS(): TerminalNode | undefined { return this.tryGetToken(XonParser.IS, 0); }
	public definitionBody(): DefinitionBodyContext | undefined {
		return this.tryGetRuleContext(0, DefinitionBodyContext);
	}
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public parameters(): ParametersContext | undefined {
		return this.tryGetRuleContext(0, ParametersContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class AssignmentStatementContext extends StatementContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public ASSIGN(): TerminalNode { return this.getToken(XonParser.ASSIGN, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ExpressionStatementContext extends StatementContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class ExprContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_expr; }
	public copyFrom(ctx: ExprContext): void {
		super.copyFrom(ctx);
	}
}
export class IdExpressionContext extends ExprContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ArrayExpressionContext extends ExprContext {
	public OPEN_BRACKET(): TerminalNode { return this.getToken(XonParser.OPEN_BRACKET, 0); }
	public CLOSE_BRACKET(): TerminalNode { return this.getToken(XonParser.CLOSE_BRACKET, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.COMMA);
		} else {
			return this.getToken(XonParser.COMMA, i);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ObjectExpressionContext extends ExprContext {
	public OPEN_BRACE(): TerminalNode { return this.getToken(XonParser.OPEN_BRACE, 0); }
	public CLOSE_BRACE(): TerminalNode { return this.getToken(XonParser.CLOSE_BRACE, 0); }
	public parameter(): ParameterContext[];
	public parameter(i: number): ParameterContext;
	public parameter(i?: number): ParameterContext | ParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterContext);
		} else {
			return this.getRuleContext(i, ParameterContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.COMMA);
		} else {
			return this.getToken(XonParser.COMMA, i);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class InvokeExpressionContext extends ExprContext {
	public _instance!: ExprContext;
	public _expr!: ExprContext;
	public _args: ExprContext[] = [];
	public OPEN_PAREN(): TerminalNode { return this.getToken(XonParser.OPEN_PAREN, 0); }
	public CLOSE_PAREN(): TerminalNode { return this.getToken(XonParser.CLOSE_PAREN, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.COMMA);
		} else {
			return this.getToken(XonParser.COMMA, i);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class IndexExpressionContext extends ExprContext {
	public _instance!: ExprContext;
	public _expr!: ExprContext;
	public _args: ExprContext[] = [];
	public OPEN_BRACKET(): TerminalNode { return this.getToken(XonParser.OPEN_BRACKET, 0); }
	public CLOSE_BRACKET(): TerminalNode { return this.getToken(XonParser.CLOSE_BRACKET, 0); }
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.COMMA);
		} else {
			return this.getToken(XonParser.COMMA, i);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class NullableExpressionContext extends ExprContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public QUESTION(): TerminalNode { return this.getToken(XonParser.QUESTION, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class MemberExpressionContext extends ExprContext {
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public DOT(): TerminalNode { return this.getToken(XonParser.DOT, 0); }
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class SpreadExpressionContext extends ExprContext {
	public SPREAD(): TerminalNode { return this.getToken(XonParser.SPREAD, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class PrefixExpressionContext extends ExprContext {
	public _op!: Token;
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(XonParser.MINUS, 0); }
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(XonParser.PLUS, 0); }
	public NOT(): TerminalNode | undefined { return this.tryGetToken(XonParser.NOT, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class PowExpressionContext extends ExprContext {
	public _left!: ExprContext;
	public _op!: Token;
	public _right!: ExprContext;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public CARET(): TerminalNode { return this.getToken(XonParser.CARET, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class MulDivModExpressionContext extends ExprContext {
	public _left!: ExprContext;
	public _op!: Token;
	public _right!: ExprContext;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public ASTERISK(): TerminalNode | undefined { return this.tryGetToken(XonParser.ASTERISK, 0); }
	public SLASH(): TerminalNode | undefined { return this.tryGetToken(XonParser.SLASH, 0); }
	public MODULO(): TerminalNode | undefined { return this.tryGetToken(XonParser.MODULO, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class AddSubExpressionContext extends ExprContext {
	public _left!: ExprContext;
	public _op!: Token;
	public _right!: ExprContext;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(XonParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(XonParser.MINUS, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class RangeExpressionContext extends ExprContext {
	public _left!: ExprContext;
	public _op!: Token;
	public _right!: ExprContext;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public RANGE(): TerminalNode { return this.getToken(XonParser.RANGE, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class RelationalExpressionContext extends ExprContext {
	public _left!: ExprContext;
	public _op!: Token;
	public _right!: ExprContext;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public LESS(): TerminalNode | undefined { return this.tryGetToken(XonParser.LESS, 0); }
	public LESS_EQUAL(): TerminalNode | undefined { return this.tryGetToken(XonParser.LESS_EQUAL, 0); }
	public GREAT_EQUAL(): TerminalNode | undefined { return this.tryGetToken(XonParser.GREAT_EQUAL, 0); }
	public GREAT(): TerminalNode | undefined { return this.tryGetToken(XonParser.GREAT, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class EqualityExpressionContext extends ExprContext {
	public _left!: ExprContext;
	public _op!: Token;
	public _right!: ExprContext;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public EQUAL(): TerminalNode | undefined { return this.tryGetToken(XonParser.EQUAL, 0); }
	public NOT_EQUAL(): TerminalNode | undefined { return this.tryGetToken(XonParser.NOT_EQUAL, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ConjunctionExpressionContext extends ExprContext {
	public _left!: ExprContext;
	public _op!: Token;
	public _right!: ExprContext;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public AND(): TerminalNode { return this.getToken(XonParser.AND, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class DisjunctionExpressionContext extends ExprContext {
	public _left!: ExprContext;
	public _op!: Token;
	public _right!: ExprContext;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public OR(): TerminalNode { return this.getToken(XonParser.OR, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class InfixExpressionContext extends ExprContext {
	public _left!: ExprContext;
	public _op!: Token;
	public _right!: ExprContext;
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public IS(): TerminalNode | undefined { return this.tryGetToken(XonParser.IS, 0); }
	public AS(): TerminalNode | undefined { return this.tryGetToken(XonParser.AS, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(XonParser.IN, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class LiteralExpressionContext extends ExprContext {
	public literal(): LiteralContext {
		return this.getRuleContext(0, LiteralContext);
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class MethodExpressionContext extends ExprContext {
	public OPEN_PAREN(): TerminalNode { return this.getToken(XonParser.OPEN_PAREN, 0); }
	public CLOSE_PAREN(): TerminalNode { return this.getToken(XonParser.CLOSE_PAREN, 0); }
	public parameter(): ParameterContext[];
	public parameter(i: number): ParameterContext;
	public parameter(i?: number): ParameterContext | ParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterContext);
		} else {
			return this.getRuleContext(i, ParameterContext);
		}
	}
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.COMMA);
		} else {
			return this.getToken(XonParser.COMMA, i);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class IndexerExpressionContext extends ExprContext {
	public OPEN_BRACKET(): TerminalNode { return this.getToken(XonParser.OPEN_BRACKET, 0); }
	public CLOSE_BRACKET(): TerminalNode { return this.getToken(XonParser.CLOSE_BRACKET, 0); }
	public parameter(): ParameterContext[];
	public parameter(i: number): ParameterContext;
	public parameter(i?: number): ParameterContext | ParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterContext);
		} else {
			return this.getRuleContext(i, ParameterContext);
		}
	}
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.COMMA);
		} else {
			return this.getToken(XonParser.COMMA, i);
		}
	}
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ParenthesizedExpressionContext extends ExprContext {
	public OPEN_PAREN(): TerminalNode { return this.getToken(XonParser.OPEN_PAREN, 0); }
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
	}
	public CLOSE_PAREN(): TerminalNode { return this.getToken(XonParser.CLOSE_PAREN, 0); }
	constructor(ctx: ExprContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class LiteralContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_literal; }
	public copyFrom(ctx: LiteralContext): void {
		super.copyFrom(ctx);
	}
}
export class IntegerLiteralContext extends LiteralContext {
	public INTEGER_LITERAL(): TerminalNode { return this.getToken(XonParser.INTEGER_LITERAL, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class FloatLiteralContext extends LiteralContext {
	public FLOAT_LITERAL(): TerminalNode { return this.getToken(XonParser.FLOAT_LITERAL, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class CharLiteralContext extends LiteralContext {
	public CHAR_LITERAL(): TerminalNode { return this.getToken(XonParser.CHAR_LITERAL, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class StringLiteralContext extends LiteralContext {
	public STRING_LITERAL(): TerminalNode { return this.getToken(XonParser.STRING_LITERAL, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class RegexLiteralContext extends LiteralContext {
	public REGEX_LITERAL(): TerminalNode { return this.getToken(XonParser.REGEX_LITERAL, 0); }
	constructor(ctx: LiteralContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class BodyContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_body; }
	public copyFrom(ctx: BodyContext): void {
		super.copyFrom(ctx);
	}
}
export class SingleBodyContext extends BodyContext {
	public COLON(): TerminalNode { return this.getToken(XonParser.COLON, 0); }
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	constructor(ctx: BodyContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class MultipleBodyContext extends BodyContext {
	public INDENT(): TerminalNode { return this.getToken(XonParser.INDENT, 0); }
	public DEDENT(): TerminalNode { return this.getToken(XonParser.DEDENT, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(XonParser.COLON, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.NL);
		} else {
			return this.getToken(XonParser.NL, i);
		}
	}
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(ctx: BodyContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}


export class DefinitionBodyContext extends ParserRuleContext {
	public INDENT(): TerminalNode { return this.getToken(XonParser.INDENT, 0); }
	public DEDENT(): TerminalNode { return this.getToken(XonParser.DEDENT, 0); }
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.NL);
		} else {
			return this.getToken(XonParser.NL, i);
		}
	}
	public parameter(): ParameterContext[];
	public parameter(i: number): ParameterContext;
	public parameter(i?: number): ParameterContext | ParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterContext);
		} else {
			return this.getRuleContext(i, ParameterContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_definitionBody; }
}


export class ParametersContext extends ParserRuleContext {
	public parameter(): ParameterContext[];
	public parameter(i: number): ParameterContext;
	public parameter(i?: number): ParameterContext | ParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterContext);
		} else {
			return this.getRuleContext(i, ParameterContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.COMMA);
		} else {
			return this.getToken(XonParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_parameters; }
}


export class ParameterContext extends ParserRuleContext {
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
	}
	public expr(): ExprContext | undefined {
		return this.tryGetRuleContext(0, ExprContext);
	}
	public body(): BodyContext | undefined {
		return this.tryGetRuleContext(0, BodyContext);
	}
	public SPREAD(): TerminalNode | undefined { return this.tryGetToken(XonParser.SPREAD, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_parameter; }
}


export class ModifierContext extends ParserRuleContext {
	public TYPE(): TerminalNode | undefined { return this.tryGetToken(XonParser.TYPE, 0); }
	public CLASS(): TerminalNode | undefined { return this.tryGetToken(XonParser.CLASS, 0); }
	public OBJECT(): TerminalNode | undefined { return this.tryGetToken(XonParser.OBJECT, 0); }
	public ENUM(): TerminalNode | undefined { return this.tryGetToken(XonParser.ENUM, 0); }
	public MODEL(): TerminalNode | undefined { return this.tryGetToken(XonParser.MODEL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_modifier; }
}


export class IdContext extends ParserRuleContext {
	public _name!: Token;
	public operator(): OperatorContext | undefined {
		return this.tryGetRuleContext(0, OperatorContext);
	}
	public ID(): TerminalNode | undefined { return this.tryGetToken(XonParser.ID, 0); }
	public LESS(): TerminalNode | undefined { return this.tryGetToken(XonParser.LESS, 0); }
	public PIPE(): TerminalNode[];
	public PIPE(i: number): TerminalNode;
	public PIPE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.PIPE);
		} else {
			return this.getToken(XonParser.PIPE, i);
		}
	}
	public parameter(): ParameterContext[];
	public parameter(i: number): ParameterContext;
	public parameter(i?: number): ParameterContext | ParameterContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParameterContext);
		} else {
			return this.getRuleContext(i, ParameterContext);
		}
	}
	public GREAT(): TerminalNode | undefined { return this.tryGetToken(XonParser.GREAT, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.COMMA);
		} else {
			return this.getToken(XonParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_id; }
}


export class OperatorContext extends ParserRuleContext {
	public CARET(): TerminalNode | undefined { return this.tryGetToken(XonParser.CARET, 0); }
	public ASTERISK(): TerminalNode | undefined { return this.tryGetToken(XonParser.ASTERISK, 0); }
	public SLASH(): TerminalNode | undefined { return this.tryGetToken(XonParser.SLASH, 0); }
	public MODULO(): TerminalNode | undefined { return this.tryGetToken(XonParser.MODULO, 0); }
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(XonParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(XonParser.MINUS, 0); }
	public LESS(): TerminalNode | undefined { return this.tryGetToken(XonParser.LESS, 0); }
	public GREAT(): TerminalNode | undefined { return this.tryGetToken(XonParser.GREAT, 0); }
	public ASSIGN(): TerminalNode | undefined { return this.tryGetToken(XonParser.ASSIGN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_operator; }
}


