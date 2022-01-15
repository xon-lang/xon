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
	public static readonly FACTORY = 20;
	public static readonly FOR = 21;
	public static readonly IF = 22;
	public static readonly IMPORT = 23;
	public static readonly IN = 24;
	public static readonly INFIX = 25;
	public static readonly IS = 26;
	public static readonly MODEL = 27;
	public static readonly NOT = 28;
	public static readonly OBJECT = 29;
	public static readonly POSTFIX = 30;
	public static readonly PREFIX = 31;
	public static readonly RETURN = 32;
	public static readonly TYPE = 33;
	public static readonly WHILE = 34;
	public static readonly AMPERSAND = 35;
	public static readonly AND = 36;
	public static readonly ASSIGN = 37;
	public static readonly ASTERISK = 38;
	public static readonly AT = 39;
	public static readonly BACK_SLASH = 40;
	public static readonly CARET = 41;
	public static readonly COALESCING = 42;
	public static readonly COLON = 43;
	public static readonly COMMA = 44;
	public static readonly DOT = 45;
	public static readonly EQUAL = 46;
	public static readonly EXCLAMATION = 47;
	public static readonly GREAT_EQUAL = 48;
	public static readonly GREAT = 49;
	public static readonly HASH = 50;
	public static readonly LESS_EQUAL = 51;
	public static readonly LESS = 52;
	public static readonly MINUS = 53;
	public static readonly MODULO = 54;
	public static readonly NOT_EQUAL = 55;
	public static readonly OR = 56;
	public static readonly PIPE = 57;
	public static readonly PLUS = 58;
	public static readonly QUESTION = 59;
	public static readonly RANGE = 60;
	public static readonly SLASH = 61;
	public static readonly SPREAD = 62;
	public static readonly TILDE = 63;
	public static readonly UNDERSCORE = 64;
	public static readonly CHAR_LITERAL = 65;
	public static readonly FLOAT_LITERAL = 66;
	public static readonly INTEGER_LITERAL = 67;
	public static readonly REGEX_LITERAL = 68;
	public static readonly STRING_LITERAL = 69;
	public static readonly PREPROCESSOR = 70;
	public static readonly ID = 71;
	public static readonly NL = 72;
	public static readonly WS = 73;
	public static readonly BLOCK_COMMENT = 74;
	public static readonly LINE_COMMENT = 75;
	public static readonly UNEXPECTED = 76;
	public static readonly RULE_source = 0;
	public static readonly RULE_statement = 1;
	public static readonly RULE_expr = 2;
	public static readonly RULE_literal = 3;
	public static readonly RULE_body = 4;
	public static readonly RULE_definitionBody = 5;
	public static readonly RULE_arrayItem = 6;
	public static readonly RULE_parameters = 7;
	public static readonly RULE_parameter = 8;
	public static readonly RULE_modifier = 9;
	public static readonly RULE_id = 10;
	public static readonly RULE_operator = 11;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"source", "statement", "expr", "literal", "body", "definitionBody", "arrayItem", 
		"parameters", "parameter", "modifier", "id", "operator",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, "'['", "']'", "'('", "')'", "'{'", "'}'", 
		"'abstract'", "'actual'", "'as'", "'break'", "'class'", "'do'", "'else'", 
		"'enum'", "'expect'", "'export'", "'extension'", "'factory'", "'for'", 
		"'if'", "'import'", "'in'", "'infix'", "'is'", "'model'", "'not'", "'object'", 
		"'postfix'", "'prefix'", "'return'", "'type'", "'while'", "'&'", "'&&'", 
		"'='", "'*'", "'@'", "'\\'", "'^'", "'?.'", "':'", "','", "'.'", "'=='", 
		"'!'", "'>='", "'>'", "'#'", "'<='", "'<'", "'-'", "'%'", "'!='", "'||'", 
		"'|'", "'+'", "'?'", "'..'", "'/'", "'...'", "'~'", "'_'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "INDENT", "DEDENT", "OPEN_BRACKET", "CLOSE_BRACKET", "OPEN_PAREN", 
		"CLOSE_PAREN", "OPEN_BRACE", "CLOSE_BRACE", "ABSTRACT", "ACTUAL", "AS", 
		"BREAK", "CLASS", "DO", "ELSE", "ENUM", "EXPECT", "EXPORT", "EXTENSION", 
		"FACTORY", "FOR", "IF", "IMPORT", "IN", "INFIX", "IS", "MODEL", "NOT", 
		"OBJECT", "POSTFIX", "PREFIX", "RETURN", "TYPE", "WHILE", "AMPERSAND", 
		"AND", "ASSIGN", "ASTERISK", "AT", "BACK_SLASH", "CARET", "COALESCING", 
		"COLON", "COMMA", "DOT", "EQUAL", "EXCLAMATION", "GREAT_EQUAL", "GREAT", 
		"HASH", "LESS_EQUAL", "LESS", "MINUS", "MODULO", "NOT_EQUAL", "OR", "PIPE", 
		"PLUS", "QUESTION", "RANGE", "SLASH", "SPREAD", "TILDE", "UNDERSCORE", 
		"CHAR_LITERAL", "FLOAT_LITERAL", "INTEGER_LITERAL", "REGEX_LITERAL", "STRING_LITERAL", 
		"PREPROCESSOR", "ID", "NL", "WS", "BLOCK_COMMENT", "LINE_COMMENT", "UNEXPECTED",
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
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 28;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.ACTUAL) | (1 << XonParser.BREAK) | (1 << XonParser.DO) | (1 << XonParser.EXPORT) | (1 << XonParser.FACTORY) | (1 << XonParser.FOR) | (1 << XonParser.IF) | (1 << XonParser.IMPORT) | (1 << XonParser.MODEL) | (1 << XonParser.NOT) | (1 << XonParser.OBJECT))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (XonParser.RETURN - 32)) | (1 << (XonParser.WHILE - 32)) | (1 << (XonParser.ASSIGN - 32)) | (1 << (XonParser.ASTERISK - 32)) | (1 << (XonParser.CARET - 32)) | (1 << (XonParser.GREAT - 32)) | (1 << (XonParser.LESS - 32)) | (1 << (XonParser.MINUS - 32)) | (1 << (XonParser.MODULO - 32)) | (1 << (XonParser.PLUS - 32)) | (1 << (XonParser.SLASH - 32)) | (1 << (XonParser.SPREAD - 32)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (XonParser.CHAR_LITERAL - 65)) | (1 << (XonParser.FLOAT_LITERAL - 65)) | (1 << (XonParser.INTEGER_LITERAL - 65)) | (1 << (XonParser.REGEX_LITERAL - 65)) | (1 << (XonParser.STRING_LITERAL - 65)) | (1 << (XonParser.PREPROCESSOR - 65)) | (1 << (XonParser.ID - 65)) | (1 << (XonParser.NL - 65)))) !== 0)) {
				{
				this.state = 26;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case XonParser.OPEN_BRACKET:
				case XonParser.OPEN_PAREN:
				case XonParser.OPEN_BRACE:
				case XonParser.ACTUAL:
				case XonParser.BREAK:
				case XonParser.DO:
				case XonParser.EXPORT:
				case XonParser.FACTORY:
				case XonParser.FOR:
				case XonParser.IF:
				case XonParser.IMPORT:
				case XonParser.MODEL:
				case XonParser.NOT:
				case XonParser.OBJECT:
				case XonParser.RETURN:
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
				case XonParser.CHAR_LITERAL:
				case XonParser.FLOAT_LITERAL:
				case XonParser.INTEGER_LITERAL:
				case XonParser.REGEX_LITERAL:
				case XonParser.STRING_LITERAL:
				case XonParser.PREPROCESSOR:
				case XonParser.ID:
					{
					this.state = 24;
					this.statement();
					}
					break;
				case XonParser.NL:
					{
					this.state = 25;
					this.match(XonParser.NL);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 30;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
			this.state = 125;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				_localctx = new ImportStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 31;
				this.match(XonParser.IMPORT);
				this.state = 32;
				(_localctx as ImportStatementContext)._path = this.expr(0);
				this.state = 33;
				this.match(XonParser.COLON);
				this.state = 34;
				(_localctx as ImportStatementContext)._expr = this.expr(0);
				(_localctx as ImportStatementContext)._members.push((_localctx as ImportStatementContext)._expr);
				this.state = 39;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 35;
						this.match(XonParser.COMMA);
						this.state = 36;
						(_localctx as ImportStatementContext)._expr = this.expr(0);
						(_localctx as ImportStatementContext)._members.push((_localctx as ImportStatementContext)._expr);
						}
						}
					}
					this.state = 41;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
				}
				this.state = 43;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 3, this._ctx) ) {
				case 1:
					{
					this.state = 42;
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
				this.state = 45;
				this.match(XonParser.EXPORT);
				this.state = 46;
				(_localctx as ExportStatementContext)._path = this.expr(0);
				}
				break;

			case 3:
				_localctx = new ForStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 47;
				this.match(XonParser.FOR);
				this.state = 55;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 5, this._ctx) ) {
				case 1:
					{
					this.state = 48;
					(_localctx as ForStatementContext)._value = this.parameter();
					this.state = 51;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.COMMA) {
						{
						this.state = 49;
						this.match(XonParser.COMMA);
						this.state = 50;
						(_localctx as ForStatementContext)._index = this.parameter();
						}
					}

					this.state = 53;
					this.match(XonParser.IN);
					}
					break;
				}
				this.state = 57;
				this.expr(0);
				this.state = 58;
				this.body();
				}
				break;

			case 4:
				_localctx = new WhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 60;
				this.match(XonParser.WHILE);
				this.state = 61;
				this.expr(0);
				this.state = 62;
				this.body();
				}
				break;

			case 5:
				_localctx = new DoWhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 64;
				this.match(XonParser.DO);
				this.state = 65;
				this.body();
				this.state = 66;
				this.match(XonParser.WHILE);
				this.state = 67;
				this.expr(0);
				}
				break;

			case 6:
				_localctx = new IfStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 69;
				this.match(XonParser.IF);
				this.state = 70;
				this.expr(0);
				this.state = 71;
				(_localctx as IfStatementContext)._thenBody = this.body();
				this.state = 74;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
				case 1:
					{
					this.state = 72;
					this.match(XonParser.ELSE);
					this.state = 73;
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
				this.state = 76;
				this.match(XonParser.BREAK);
				}
				break;

			case 8:
				_localctx = new ReturnStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 77;
				this.match(XonParser.RETURN);
				this.state = 79;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
				case 1:
					{
					this.state = 78;
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
				this.state = 81;
				this.match(XonParser.ACTUAL);
				this.state = 82;
				(_localctx as AssertStatementContext)._actual = this.expr(0);
				this.state = 84;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 83;
					this.match(XonParser.NL);
					}
					}
					this.state = 86;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === XonParser.NL);
				this.state = 88;
				this.match(XonParser.EXPECT);
				this.state = 89;
				(_localctx as AssertStatementContext)._expect = this.expr(0);
				}
				break;

			case 10:
				_localctx = new PreprocessorStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 91;
				this.match(XonParser.PREPROCESSOR);
				}
				break;

			case 11:
				_localctx = new ModelStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 92;
				this.match(XonParser.MODEL);
				this.state = 93;
				(_localctx as ModelStatementContext)._name = this.id();
				this.state = 96;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.IS) {
					{
					this.state = 94;
					this.match(XonParser.IS);
					this.state = 95;
					(_localctx as ModelStatementContext)._base = this.id();
					}
				}

				this.state = 99;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
				case 1:
					{
					this.state = 98;
					this.definitionBody();
					}
					break;
				}
				}
				break;

			case 12:
				_localctx = new ObjectStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 101;
				this.match(XonParser.OBJECT);
				this.state = 102;
				(_localctx as ObjectStatementContext)._name = this.id();
				this.state = 103;
				this.match(XonParser.IS);
				this.state = 104;
				(_localctx as ObjectStatementContext)._base = this.id();
				this.state = 106;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
				case 1:
					{
					this.state = 105;
					this.definitionBody();
					}
					break;
				}
				}
				break;

			case 13:
				_localctx = new FactoryStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 108;
				this.match(XonParser.FACTORY);
				this.state = 109;
				(_localctx as FactoryStatementContext)._name = this.id();
				this.state = 110;
				this.match(XonParser.OPEN_PAREN);
				this.state = 112;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (XonParser.ASSIGN - 37)) | (1 << (XonParser.ASTERISK - 37)) | (1 << (XonParser.CARET - 37)) | (1 << (XonParser.GREAT - 37)) | (1 << (XonParser.LESS - 37)) | (1 << (XonParser.MINUS - 37)) | (1 << (XonParser.MODULO - 37)) | (1 << (XonParser.PLUS - 37)) | (1 << (XonParser.SLASH - 37)) | (1 << (XonParser.SPREAD - 37)))) !== 0) || _la === XonParser.ID) {
					{
					this.state = 111;
					this.parameters();
					}
				}

				this.state = 114;
				this.match(XonParser.CLOSE_PAREN);
				this.state = 115;
				this.match(XonParser.IS);
				this.state = 116;
				(_localctx as FactoryStatementContext)._base = this.id();
				this.state = 118;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
				case 1:
					{
					this.state = 117;
					this.definitionBody();
					}
					break;
				}
				}
				break;

			case 14:
				_localctx = new AssignmentStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 120;
				this.id();
				this.state = 121;
				this.match(XonParser.ASSIGN);
				this.state = 122;
				this.expr(0);
				}
				break;

			case 15:
				_localctx = new ExpressionStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 124;
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
			this.state = 204;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 29, this._ctx) ) {
			case 1:
				{
				_localctx = new IdExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 128;
				this.id();
				}
				break;

			case 2:
				{
				_localctx = new ArrayExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 129;
				this.match(XonParser.OPEN_BRACKET);
				this.state = 141;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.NOT))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (XonParser.ASSIGN - 37)) | (1 << (XonParser.ASTERISK - 37)) | (1 << (XonParser.CARET - 37)) | (1 << (XonParser.GREAT - 37)) | (1 << (XonParser.LESS - 37)) | (1 << (XonParser.MINUS - 37)) | (1 << (XonParser.MODULO - 37)) | (1 << (XonParser.PLUS - 37)) | (1 << (XonParser.SLASH - 37)) | (1 << (XonParser.SPREAD - 37)) | (1 << (XonParser.CHAR_LITERAL - 37)) | (1 << (XonParser.FLOAT_LITERAL - 37)) | (1 << (XonParser.INTEGER_LITERAL - 37)) | (1 << (XonParser.REGEX_LITERAL - 37)))) !== 0) || _la === XonParser.STRING_LITERAL || _la === XonParser.ID) {
					{
					this.state = 130;
					this.arrayItem();
					this.state = 135;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 131;
							this.match(XonParser.COMMA);
							this.state = 132;
							this.arrayItem();
							}
							}
						}
						this.state = 137;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 15, this._ctx);
					}
					this.state = 139;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.COMMA) {
						{
						this.state = 138;
						this.match(XonParser.COMMA);
						}
					}

					}
				}

				this.state = 143;
				this.match(XonParser.CLOSE_BRACKET);
				}
				break;

			case 3:
				{
				_localctx = new ObjectExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 144;
				this.match(XonParser.OPEN_BRACE);
				this.state = 156;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (XonParser.ASSIGN - 37)) | (1 << (XonParser.ASTERISK - 37)) | (1 << (XonParser.CARET - 37)) | (1 << (XonParser.GREAT - 37)) | (1 << (XonParser.LESS - 37)) | (1 << (XonParser.MINUS - 37)) | (1 << (XonParser.MODULO - 37)) | (1 << (XonParser.PLUS - 37)) | (1 << (XonParser.SLASH - 37)) | (1 << (XonParser.SPREAD - 37)))) !== 0) || _la === XonParser.ID) {
					{
					this.state = 145;
					this.parameter();
					this.state = 150;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 146;
							this.match(XonParser.COMMA);
							this.state = 147;
							this.parameter();
							}
							}
						}
						this.state = 152;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 18, this._ctx);
					}
					this.state = 154;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.COMMA) {
						{
						this.state = 153;
						this.match(XonParser.COMMA);
						}
					}

					}
				}

				this.state = 158;
				this.match(XonParser.CLOSE_BRACE);
				}
				break;

			case 4:
				{
				_localctx = new SpreadExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 159;
				this.match(XonParser.SPREAD);
				this.state = 160;
				this.expr(15);
				}
				break;

			case 5:
				{
				_localctx = new PrefixExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 161;
				(_localctx as PrefixExpressionContext)._op = this._input.LT(1);
				_la = this._input.LA(1);
				if (!(((((_la - 28)) & ~0x1F) === 0 && ((1 << (_la - 28)) & ((1 << (XonParser.NOT - 28)) | (1 << (XonParser.MINUS - 28)) | (1 << (XonParser.PLUS - 28)))) !== 0))) {
					(_localctx as PrefixExpressionContext)._op = this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				this.state = 162;
				this.expr(14);
				}
				break;

			case 6:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 163;
				this.literal();
				}
				break;

			case 7:
				{
				_localctx = new MethodExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 164;
				this.match(XonParser.OPEN_PAREN);
				this.state = 176;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (XonParser.ASSIGN - 37)) | (1 << (XonParser.ASTERISK - 37)) | (1 << (XonParser.CARET - 37)) | (1 << (XonParser.GREAT - 37)) | (1 << (XonParser.LESS - 37)) | (1 << (XonParser.MINUS - 37)) | (1 << (XonParser.MODULO - 37)) | (1 << (XonParser.PLUS - 37)) | (1 << (XonParser.SLASH - 37)) | (1 << (XonParser.SPREAD - 37)))) !== 0) || _la === XonParser.ID) {
					{
					this.state = 165;
					this.parameter();
					this.state = 170;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 166;
							this.match(XonParser.COMMA);
							this.state = 167;
							this.parameter();
							}
							}
						}
						this.state = 172;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
					}
					this.state = 174;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.COMMA) {
						{
						this.state = 173;
						this.match(XonParser.COMMA);
						}
					}

					}
				}

				this.state = 178;
				this.match(XonParser.CLOSE_PAREN);
				this.state = 180;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 24, this._ctx) ) {
				case 1:
					{
					this.state = 179;
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
				this.state = 182;
				this.match(XonParser.OPEN_BRACKET);
				this.state = 194;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (XonParser.ASSIGN - 37)) | (1 << (XonParser.ASTERISK - 37)) | (1 << (XonParser.CARET - 37)) | (1 << (XonParser.GREAT - 37)) | (1 << (XonParser.LESS - 37)) | (1 << (XonParser.MINUS - 37)) | (1 << (XonParser.MODULO - 37)) | (1 << (XonParser.PLUS - 37)) | (1 << (XonParser.SLASH - 37)) | (1 << (XonParser.SPREAD - 37)))) !== 0) || _la === XonParser.ID) {
					{
					this.state = 183;
					this.parameter();
					this.state = 188;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 184;
							this.match(XonParser.COMMA);
							this.state = 185;
							this.parameter();
							}
							}
						}
						this.state = 190;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 25, this._ctx);
					}
					this.state = 192;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.COMMA) {
						{
						this.state = 191;
						this.match(XonParser.COMMA);
						}
					}

					}
				}

				this.state = 196;
				this.match(XonParser.CLOSE_BRACKET);
				this.state = 198;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 28, this._ctx) ) {
				case 1:
					{
					this.state = 197;
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
				this.state = 200;
				this.match(XonParser.OPEN_PAREN);
				this.state = 201;
				this.expr(0);
				this.state = 202;
				this.match(XonParser.CLOSE_PAREN);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 272;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 270;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 36, this._ctx) ) {
					case 1:
						{
						_localctx = new PowExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as PowExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 206;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 207;
						(_localctx as PowExpressionContext)._op = this.match(XonParser.CARET);
						this.state = 208;
						(_localctx as PowExpressionContext)._right = this.expr(14);
						}
						break;

					case 2:
						{
						_localctx = new MulDivModExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as MulDivModExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 209;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 210;
						(_localctx as MulDivModExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (XonParser.ASTERISK - 38)) | (1 << (XonParser.MODULO - 38)) | (1 << (XonParser.SLASH - 38)))) !== 0))) {
							(_localctx as MulDivModExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 211;
						(_localctx as MulDivModExpressionContext)._right = this.expr(13);
						}
						break;

					case 3:
						{
						_localctx = new AddSubExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as AddSubExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 212;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 213;
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
						this.state = 214;
						(_localctx as AddSubExpressionContext)._right = this.expr(12);
						}
						break;

					case 4:
						{
						_localctx = new RangeExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as RangeExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 215;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 216;
						(_localctx as RangeExpressionContext)._op = this.match(XonParser.RANGE);
						this.state = 217;
						(_localctx as RangeExpressionContext)._right = this.expr(11);
						}
						break;

					case 5:
						{
						_localctx = new RelationalExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as RelationalExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 218;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 219;
						(_localctx as RelationalExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & ((1 << (XonParser.GREAT_EQUAL - 48)) | (1 << (XonParser.GREAT - 48)) | (1 << (XonParser.LESS_EQUAL - 48)) | (1 << (XonParser.LESS - 48)))) !== 0))) {
							(_localctx as RelationalExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 220;
						(_localctx as RelationalExpressionContext)._right = this.expr(10);
						}
						break;

					case 6:
						{
						_localctx = new EqualityExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as EqualityExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 221;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 222;
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
						this.state = 223;
						(_localctx as EqualityExpressionContext)._right = this.expr(9);
						}
						break;

					case 7:
						{
						_localctx = new ConjunctionExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as ConjunctionExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 224;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 225;
						(_localctx as ConjunctionExpressionContext)._op = this.match(XonParser.AND);
						this.state = 226;
						(_localctx as ConjunctionExpressionContext)._right = this.expr(8);
						}
						break;

					case 8:
						{
						_localctx = new DisjunctionExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as DisjunctionExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 227;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 228;
						(_localctx as DisjunctionExpressionContext)._op = this.match(XonParser.OR);
						this.state = 229;
						(_localctx as DisjunctionExpressionContext)._right = this.expr(7);
						}
						break;

					case 9:
						{
						_localctx = new InfixExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as InfixExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 230;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 231;
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
						this.state = 232;
						(_localctx as InfixExpressionContext)._right = this.expr(6);
						}
						break;

					case 10:
						{
						_localctx = new InvokeExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as InvokeExpressionContext)._instance = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 233;
						if (!(this.precpred(this._ctx, 19))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 19)");
						}
						this.state = 234;
						this.match(XonParser.OPEN_PAREN);
						this.state = 246;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.NOT))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (XonParser.ASSIGN - 37)) | (1 << (XonParser.ASTERISK - 37)) | (1 << (XonParser.CARET - 37)) | (1 << (XonParser.GREAT - 37)) | (1 << (XonParser.LESS - 37)) | (1 << (XonParser.MINUS - 37)) | (1 << (XonParser.MODULO - 37)) | (1 << (XonParser.PLUS - 37)) | (1 << (XonParser.SLASH - 37)) | (1 << (XonParser.SPREAD - 37)) | (1 << (XonParser.CHAR_LITERAL - 37)) | (1 << (XonParser.FLOAT_LITERAL - 37)) | (1 << (XonParser.INTEGER_LITERAL - 37)) | (1 << (XonParser.REGEX_LITERAL - 37)))) !== 0) || _la === XonParser.STRING_LITERAL || _la === XonParser.ID) {
							{
							this.state = 235;
							(_localctx as InvokeExpressionContext)._expr = this.expr(0);
							(_localctx as InvokeExpressionContext)._args.push((_localctx as InvokeExpressionContext)._expr);
							this.state = 240;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
							while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
								if (_alt === 1) {
									{
									{
									this.state = 236;
									this.match(XonParser.COMMA);
									this.state = 237;
									(_localctx as InvokeExpressionContext)._expr = this.expr(0);
									(_localctx as InvokeExpressionContext)._args.push((_localctx as InvokeExpressionContext)._expr);
									}
									}
								}
								this.state = 242;
								this._errHandler.sync(this);
								_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
							}
							this.state = 244;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === XonParser.COMMA) {
								{
								this.state = 243;
								this.match(XonParser.COMMA);
								}
							}

							}
						}

						this.state = 248;
						this.match(XonParser.CLOSE_PAREN);
						}
						break;

					case 11:
						{
						_localctx = new IndexExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as IndexExpressionContext)._instance = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 249;
						if (!(this.precpred(this._ctx, 18))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 18)");
						}
						this.state = 250;
						this.match(XonParser.OPEN_BRACKET);
						this.state = 262;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.NOT))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (XonParser.ASSIGN - 37)) | (1 << (XonParser.ASTERISK - 37)) | (1 << (XonParser.CARET - 37)) | (1 << (XonParser.GREAT - 37)) | (1 << (XonParser.LESS - 37)) | (1 << (XonParser.MINUS - 37)) | (1 << (XonParser.MODULO - 37)) | (1 << (XonParser.PLUS - 37)) | (1 << (XonParser.SLASH - 37)) | (1 << (XonParser.SPREAD - 37)) | (1 << (XonParser.CHAR_LITERAL - 37)) | (1 << (XonParser.FLOAT_LITERAL - 37)) | (1 << (XonParser.INTEGER_LITERAL - 37)) | (1 << (XonParser.REGEX_LITERAL - 37)))) !== 0) || _la === XonParser.STRING_LITERAL || _la === XonParser.ID) {
							{
							this.state = 251;
							(_localctx as IndexExpressionContext)._expr = this.expr(0);
							(_localctx as IndexExpressionContext)._args.push((_localctx as IndexExpressionContext)._expr);
							this.state = 256;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
							while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
								if (_alt === 1) {
									{
									{
									this.state = 252;
									this.match(XonParser.COMMA);
									this.state = 253;
									(_localctx as IndexExpressionContext)._expr = this.expr(0);
									(_localctx as IndexExpressionContext)._args.push((_localctx as IndexExpressionContext)._expr);
									}
									}
								}
								this.state = 258;
								this._errHandler.sync(this);
								_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
							}
							this.state = 260;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === XonParser.COMMA) {
								{
								this.state = 259;
								this.match(XonParser.COMMA);
								}
							}

							}
						}

						this.state = 264;
						this.match(XonParser.CLOSE_BRACKET);
						}
						break;

					case 12:
						{
						_localctx = new NullableExpressionContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 265;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 266;
						this.match(XonParser.QUESTION);
						}
						break;

					case 13:
						{
						_localctx = new MemberExpressionContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 267;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 268;
						this.match(XonParser.DOT);
						this.state = 269;
						this.id();
						}
						break;
					}
					}
				}
				this.state = 274;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx);
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
			this.state = 280;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.INTEGER_LITERAL:
				_localctx = new IntegerLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 275;
				this.match(XonParser.INTEGER_LITERAL);
				}
				break;
			case XonParser.FLOAT_LITERAL:
				_localctx = new FloatLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 276;
				this.match(XonParser.FLOAT_LITERAL);
				}
				break;
			case XonParser.CHAR_LITERAL:
				_localctx = new CharLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 277;
				this.match(XonParser.CHAR_LITERAL);
				}
				break;
			case XonParser.STRING_LITERAL:
				_localctx = new StringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 278;
				this.match(XonParser.STRING_LITERAL);
				}
				break;
			case XonParser.REGEX_LITERAL:
				_localctx = new RegexLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 279;
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
			this.state = 296;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 42, this._ctx) ) {
			case 1:
				_localctx = new SingleBodyContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 282;
				this.match(XonParser.COLON);
				this.state = 283;
				this.statement();
				}
				break;

			case 2:
				_localctx = new MultipleBodyContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 285;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COLON) {
					{
					this.state = 284;
					this.match(XonParser.COLON);
					}
				}

				this.state = 287;
				this.match(XonParser.NL);
				this.state = 288;
				this.match(XonParser.INDENT);
				this.state = 291;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 291;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case XonParser.OPEN_BRACKET:
					case XonParser.OPEN_PAREN:
					case XonParser.OPEN_BRACE:
					case XonParser.ACTUAL:
					case XonParser.BREAK:
					case XonParser.DO:
					case XonParser.EXPORT:
					case XonParser.FACTORY:
					case XonParser.FOR:
					case XonParser.IF:
					case XonParser.IMPORT:
					case XonParser.MODEL:
					case XonParser.NOT:
					case XonParser.OBJECT:
					case XonParser.RETURN:
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
					case XonParser.CHAR_LITERAL:
					case XonParser.FLOAT_LITERAL:
					case XonParser.INTEGER_LITERAL:
					case XonParser.REGEX_LITERAL:
					case XonParser.STRING_LITERAL:
					case XonParser.PREPROCESSOR:
					case XonParser.ID:
						{
						this.state = 289;
						this.statement();
						}
						break;
					case XonParser.NL:
						{
						this.state = 290;
						this.match(XonParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 293;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.ACTUAL) | (1 << XonParser.BREAK) | (1 << XonParser.DO) | (1 << XonParser.EXPORT) | (1 << XonParser.FACTORY) | (1 << XonParser.FOR) | (1 << XonParser.IF) | (1 << XonParser.IMPORT) | (1 << XonParser.MODEL) | (1 << XonParser.NOT) | (1 << XonParser.OBJECT))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (XonParser.RETURN - 32)) | (1 << (XonParser.WHILE - 32)) | (1 << (XonParser.ASSIGN - 32)) | (1 << (XonParser.ASTERISK - 32)) | (1 << (XonParser.CARET - 32)) | (1 << (XonParser.GREAT - 32)) | (1 << (XonParser.LESS - 32)) | (1 << (XonParser.MINUS - 32)) | (1 << (XonParser.MODULO - 32)) | (1 << (XonParser.PLUS - 32)) | (1 << (XonParser.SLASH - 32)) | (1 << (XonParser.SPREAD - 32)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (XonParser.CHAR_LITERAL - 65)) | (1 << (XonParser.FLOAT_LITERAL - 65)) | (1 << (XonParser.INTEGER_LITERAL - 65)) | (1 << (XonParser.REGEX_LITERAL - 65)) | (1 << (XonParser.STRING_LITERAL - 65)) | (1 << (XonParser.PREPROCESSOR - 65)) | (1 << (XonParser.ID - 65)) | (1 << (XonParser.NL - 65)))) !== 0));
				this.state = 295;
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
			this.state = 298;
			this.match(XonParser.NL);
			this.state = 299;
			this.match(XonParser.INDENT);
			this.state = 302;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 302;
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
					this.state = 300;
					this.parameter();
					}
					break;
				case XonParser.NL:
					{
					this.state = 301;
					this.match(XonParser.NL);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 304;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (XonParser.ASSIGN - 37)) | (1 << (XonParser.ASTERISK - 37)) | (1 << (XonParser.CARET - 37)) | (1 << (XonParser.GREAT - 37)) | (1 << (XonParser.LESS - 37)) | (1 << (XonParser.MINUS - 37)) | (1 << (XonParser.MODULO - 37)) | (1 << (XonParser.PLUS - 37)) | (1 << (XonParser.SLASH - 37)) | (1 << (XonParser.SPREAD - 37)))) !== 0) || _la === XonParser.ID || _la === XonParser.NL);
			this.state = 306;
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
	public arrayItem(): ArrayItemContext {
		let _localctx: ArrayItemContext = new ArrayItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, XonParser.RULE_arrayItem);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 311;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 45, this._ctx) ) {
			case 1:
				{
				this.state = 308;
				this.expr(0);
				this.state = 309;
				this.match(XonParser.COLON);
				}
				break;
			}
			this.state = 313;
			this.expr(0);
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
		this.enterRule(_localctx, 14, XonParser.RULE_parameters);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 315;
			this.parameter();
			this.state = 320;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
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
				_alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
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
		this.enterRule(_localctx, 16, XonParser.RULE_parameter);
		let _la: number;
		try {
			this.state = 349;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 52, this._ctx) ) {
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
		this.enterRule(_localctx, 18, XonParser.RULE_modifier);
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
		this.enterRule(_localctx, 20, XonParser.RULE_id);
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
			switch ( this.interpreter.adaptivePredict(this._input, 56, this._ctx) ) {
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
				_alt = this.interpreter.adaptivePredict(this._input, 54, this._ctx);
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
					_alt = this.interpreter.adaptivePredict(this._input, 54, this._ctx);
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
		this.enterRule(_localctx, 22, XonParser.RULE_operator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 375;
			_la = this._input.LA(1);
			if (!(((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (XonParser.ASSIGN - 37)) | (1 << (XonParser.ASTERISK - 37)) | (1 << (XonParser.CARET - 37)) | (1 << (XonParser.GREAT - 37)) | (1 << (XonParser.LESS - 37)) | (1 << (XonParser.MINUS - 37)) | (1 << (XonParser.MODULO - 37)) | (1 << (XonParser.PLUS - 37)) | (1 << (XonParser.SLASH - 37)))) !== 0))) {
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03N\u017C\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x03" +
		"\x02\x03\x02\x07\x02\x1D\n\x02\f\x02\x0E\x02 \v\x02\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x07\x03(\n\x03\f\x03\x0E\x03+\v\x03\x03\x03" +
		"\x05\x03.\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03" +
		"6\n\x03\x03\x03\x03\x03\x05\x03:\n\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03M\n\x03\x03\x03\x03\x03\x03\x03" +
		"\x05\x03R\n\x03\x03\x03\x03\x03\x03\x03\x06\x03W\n\x03\r\x03\x0E\x03X" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03" +
		"c\n\x03\x03\x03\x05\x03f\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x05\x03m\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03s\n\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x05\x03y\n\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x05\x03\x80\n\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x07\x04\x88\n\x04\f\x04\x0E\x04\x8B\v\x04\x03\x04\x05\x04\x8E\n\x04" +
		"\x05\x04\x90\n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04\x97" +
		"\n\x04\f\x04\x0E\x04\x9A\v\x04\x03\x04\x05\x04\x9D\n\x04\x05\x04\x9F\n" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x07\x04\xAB\n\x04\f\x04\x0E\x04\xAE\v\x04\x03\x04\x05\x04" +
		"\xB1\n\x04\x05\x04\xB3\n\x04\x03\x04\x03\x04\x05\x04\xB7\n\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x07\x04\xBD\n\x04\f\x04\x0E\x04\xC0\v\x04\x03" +
		"\x04\x05\x04\xC3\n\x04\x05\x04\xC5\n\x04\x03\x04\x03\x04\x05\x04\xC9\n" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04\xCF\n\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x07\x04\xF1\n\x04\f\x04\x0E\x04\xF4\v\x04\x03" +
		"\x04\x05\x04\xF7\n\x04\x05\x04\xF9\n\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x07\x04\u0101\n\x04\f\x04\x0E\x04\u0104\v\x04\x03\x04" +
		"\x05\x04\u0107\n\x04\x05\x04\u0109\n\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x07\x04\u0111\n\x04\f\x04\x0E\x04\u0114\v\x04\x03\x05" +
		"\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05\u011B\n\x05\x03\x06\x03\x06\x03" +
		"\x06\x05\x06\u0120\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x06\x06\u0126" +
		"\n\x06\r\x06\x0E\x06\u0127\x03\x06\x05\x06\u012B\n\x06\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x06\x07\u0131\n\x07\r\x07\x0E\x07\u0132\x03\x07\x03\x07" +
		"\x03\b\x03\b\x03\b\x05\b\u013A\n\b\x03\b\x03\b\x03\t\x03\t\x03\t\x07\t" +
		"\u0141\n\t\f\t\x0E\t\u0144\v\t\x03\t\x05\t\u0147\n\t\x03\n\x05\n\u014A" +
		"\n\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\u0151\n\n\x03\n\x03\n\x03\n\x03" +
		"\n\x05\n\u0157\n\n\x03\n\x03\n\x03\n\x03\n\x05\n\u015D\n\n\x03\n\x05\n" +
		"\u0160\n\n\x03\v\x03\v\x03\f\x03\f\x05\f\u0166\n\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x07\f\u016D\n\f\f\f\x0E\f\u0170\v\f\x03\f\x05\f\u0173\n\f\x03" +
		"\f\x03\f\x03\f\x05\f\u0178\n\f\x03\r\x03\r\x03\r\x02\x02\x03\x06\x0E\x02" +
		"\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02" +
		"\x16\x02\x18\x02\x02\n\x05\x02\x1E\x1E77<<\x05\x02((88??\x04\x0277<<\x04" +
		"\x022356\x04\x020099\x05\x02\r\r\x1A\x1A\x1C\x1C\x07\x02\x0F\x0F\x12\x12" +
		"\x1D\x1D\x1F\x1F##\b\x02\'(++3368<<??\x02\u01CC\x02\x1E\x03\x02\x02\x02" +
		"\x04\x7F\x03\x02\x02\x02\x06\xCE\x03\x02\x02\x02\b\u011A\x03\x02\x02\x02" +
		"\n\u012A\x03\x02\x02\x02\f\u012C\x03\x02\x02\x02\x0E\u0139\x03\x02\x02" +
		"\x02\x10\u013D\x03\x02\x02\x02\x12\u015F\x03\x02\x02\x02\x14\u0161\x03" +
		"\x02\x02\x02\x16\u0165\x03\x02\x02\x02\x18\u0179\x03\x02\x02\x02\x1A\x1D" +
		"\x05\x04\x03\x02\x1B\x1D\x07J\x02\x02\x1C\x1A\x03\x02\x02\x02\x1C\x1B" +
		"\x03\x02\x02\x02\x1D \x03\x02\x02\x02\x1E\x1C\x03\x02\x02\x02\x1E\x1F" +
		"\x03\x02\x02\x02\x1F\x03\x03\x02\x02\x02 \x1E\x03\x02\x02\x02!\"\x07\x19" +
		"\x02\x02\"#\x05\x06\x04\x02#$\x07-\x02\x02$)\x05\x06\x04\x02%&\x07.\x02" +
		"\x02&(\x05\x06\x04\x02\'%\x03\x02\x02\x02(+\x03\x02\x02\x02)\'\x03\x02" +
		"\x02\x02)*\x03\x02\x02\x02*-\x03\x02\x02\x02+)\x03\x02\x02\x02,.\x07." +
		"\x02\x02-,\x03\x02\x02\x02-.\x03\x02\x02\x02.\x80\x03\x02\x02\x02/0\x07" +
		"\x14\x02\x020\x80\x05\x06\x04\x0219\x07\x17\x02\x0225\x05\x12\n\x0234" +
		"\x07.\x02\x0246\x05\x12\n\x0253\x03\x02\x02\x0256\x03\x02\x02\x0267\x03" +
		"\x02\x02\x0278\x07\x1A\x02\x028:\x03\x02\x02\x0292\x03\x02\x02\x029:\x03" +
		"\x02\x02\x02:;\x03\x02\x02\x02;<\x05\x06\x04\x02<=\x05\n\x06\x02=\x80" +
		"\x03\x02\x02\x02>?\x07$\x02\x02?@\x05\x06\x04\x02@A\x05\n\x06\x02A\x80" +
		"\x03\x02\x02\x02BC\x07\x10\x02\x02CD\x05\n\x06\x02DE\x07$\x02\x02EF\x05" +
		"\x06\x04\x02F\x80\x03\x02\x02\x02GH\x07\x18\x02\x02HI\x05\x06\x04\x02" +
		"IL\x05\n\x06\x02JK\x07\x11\x02\x02KM\x05\n\x06\x02LJ\x03\x02\x02\x02L" +
		"M\x03\x02\x02\x02M\x80\x03\x02\x02\x02N\x80\x07\x0E\x02\x02OQ\x07\"\x02" +
		"\x02PR\x05\x06\x04\x02QP\x03\x02\x02\x02QR\x03\x02\x02\x02R\x80\x03\x02" +
		"\x02\x02ST\x07\f\x02\x02TV\x05\x06\x04\x02UW\x07J\x02\x02VU\x03\x02\x02" +
		"\x02WX\x03\x02\x02\x02XV\x03\x02\x02\x02XY\x03\x02\x02\x02YZ\x03\x02\x02" +
		"\x02Z[\x07\x13\x02\x02[\\\x05\x06\x04\x02\\\x80\x03\x02\x02\x02]\x80\x07" +
		"H\x02\x02^_\x07\x1D\x02\x02_b\x05\x16\f\x02`a\x07\x1C\x02\x02ac\x05\x16" +
		"\f\x02b`\x03\x02\x02\x02bc\x03\x02\x02\x02ce\x03\x02\x02\x02df\x05\f\x07" +
		"\x02ed\x03\x02\x02\x02ef\x03\x02\x02\x02f\x80\x03\x02\x02\x02gh\x07\x1F" +
		"\x02\x02hi\x05\x16\f\x02ij\x07\x1C\x02\x02jl\x05\x16\f\x02km\x05\f\x07" +
		"\x02lk\x03\x02\x02\x02lm\x03\x02\x02\x02m\x80\x03\x02\x02\x02no\x07\x16" +
		"\x02\x02op\x05\x16\f\x02pr\x07\x07\x02\x02qs\x05\x10\t\x02rq\x03\x02\x02" +
		"\x02rs\x03\x02\x02\x02st\x03\x02\x02\x02tu\x07\b\x02\x02uv\x07\x1C\x02" +
		"\x02vx\x05\x16\f\x02wy\x05\f\x07\x02xw\x03\x02\x02\x02xy\x03\x02\x02\x02" +
		"y\x80\x03\x02\x02\x02z{\x05\x16\f\x02{|\x07\'\x02\x02|}\x05\x06\x04\x02" +
		"}\x80\x03\x02\x02\x02~\x80\x05\x06\x04\x02\x7F!\x03\x02\x02\x02\x7F/\x03" +
		"\x02\x02\x02\x7F1\x03\x02\x02\x02\x7F>\x03\x02\x02\x02\x7FB\x03\x02\x02" +
		"\x02\x7FG\x03\x02\x02\x02\x7FN\x03\x02\x02\x02\x7FO\x03\x02\x02\x02\x7F" +
		"S\x03\x02\x02\x02\x7F]\x03\x02\x02\x02\x7F^\x03\x02\x02\x02\x7Fg\x03\x02" +
		"\x02\x02\x7Fn\x03\x02\x02\x02\x7Fz\x03\x02\x02\x02\x7F~\x03\x02\x02\x02" +
		"\x80\x05\x03\x02\x02\x02\x81\x82\b\x04\x01\x02\x82\xCF\x05\x16\f\x02\x83" +
		"\x8F\x07\x05\x02\x02\x84\x89\x05\x0E\b\x02\x85\x86\x07.\x02\x02\x86\x88" +
		"\x05\x0E\b\x02\x87\x85\x03\x02\x02\x02\x88\x8B\x03\x02\x02\x02\x89\x87" +
		"\x03\x02\x02\x02\x89\x8A\x03\x02\x02\x02\x8A\x8D\x03\x02\x02\x02\x8B\x89" +
		"\x03\x02\x02\x02\x8C\x8E\x07.\x02\x02\x8D\x8C\x03\x02\x02\x02\x8D\x8E" +
		"\x03\x02\x02\x02\x8E\x90\x03\x02\x02\x02\x8F\x84\x03\x02\x02\x02\x8F\x90" +
		"\x03\x02\x02\x02\x90\x91\x03\x02\x02\x02\x91\xCF\x07\x06\x02\x02\x92\x9E" +
		"\x07\t\x02\x02\x93\x98\x05\x12\n\x02\x94\x95\x07.\x02\x02\x95\x97\x05" +
		"\x12\n\x02\x96\x94\x03\x02\x02\x02\x97\x9A\x03\x02\x02\x02\x98\x96\x03" +
		"\x02\x02\x02\x98\x99\x03\x02\x02\x02\x99\x9C\x03\x02\x02\x02\x9A\x98\x03" +
		"\x02\x02\x02\x9B\x9D\x07.\x02\x02\x9C\x9B\x03\x02\x02\x02\x9C\x9D\x03" +
		"\x02\x02\x02\x9D\x9F\x03\x02\x02\x02\x9E\x93\x03\x02\x02\x02\x9E\x9F\x03" +
		"\x02\x02\x02\x9F\xA0\x03\x02\x02\x02\xA0\xCF\x07\n\x02\x02\xA1\xA2\x07" +
		"@\x02\x02\xA2\xCF\x05\x06\x04\x11\xA3\xA4\t\x02\x02\x02\xA4\xCF\x05\x06" +
		"\x04\x10\xA5\xCF\x05\b\x05\x02\xA6\xB2\x07\x07\x02\x02\xA7\xAC\x05\x12" +
		"\n\x02\xA8\xA9\x07.\x02\x02\xA9\xAB\x05\x12\n\x02\xAA\xA8\x03\x02\x02" +
		"\x02\xAB\xAE\x03\x02\x02\x02\xAC\xAA\x03\x02\x02\x02\xAC\xAD\x03\x02\x02" +
		"\x02\xAD\xB0\x03\x02\x02\x02\xAE\xAC\x03\x02\x02\x02\xAF\xB1\x07.\x02" +
		"\x02\xB0\xAF\x03\x02\x02\x02\xB0\xB1\x03\x02\x02\x02\xB1\xB3\x03\x02\x02" +
		"\x02\xB2\xA7\x03\x02\x02\x02\xB2\xB3\x03\x02\x02\x02\xB3\xB4\x03\x02\x02" +
		"\x02\xB4\xB6\x07\b\x02\x02\xB5\xB7\x05\x06\x04\x02\xB6\xB5\x03\x02\x02" +
		"\x02\xB6\xB7\x03\x02\x02\x02\xB7\xCF\x03\x02\x02\x02\xB8\xC4\x07\x05\x02" +
		"\x02\xB9\xBE\x05\x12\n\x02\xBA\xBB\x07.\x02\x02\xBB\xBD\x05\x12\n\x02" +
		"\xBC\xBA\x03\x02\x02\x02\xBD\xC0\x03\x02\x02\x02\xBE\xBC\x03\x02\x02\x02" +
		"\xBE\xBF\x03\x02\x02\x02\xBF\xC2\x03\x02\x02\x02\xC0\xBE\x03\x02\x02\x02" +
		"\xC1\xC3\x07.\x02\x02\xC2\xC1\x03\x02\x02\x02\xC2\xC3\x03\x02\x02\x02" +
		"\xC3\xC5\x03\x02\x02\x02\xC4\xB9\x03\x02\x02\x02\xC4\xC5\x03\x02\x02\x02" +
		"\xC5\xC6\x03\x02\x02\x02\xC6\xC8\x07\x06\x02\x02\xC7\xC9\x05\x06\x04\x02" +
		"\xC8\xC7\x03\x02\x02\x02\xC8\xC9\x03\x02\x02\x02\xC9\xCF\x03\x02\x02\x02" +
		"\xCA\xCB\x07\x07\x02\x02\xCB\xCC\x05\x06\x04\x02\xCC\xCD\x07\b\x02\x02" +
		"\xCD\xCF\x03\x02\x02\x02\xCE\x81\x03\x02\x02\x02\xCE\x83\x03\x02\x02\x02" +
		"\xCE\x92\x03\x02\x02\x02\xCE\xA1\x03\x02\x02\x02\xCE\xA3\x03\x02\x02\x02" +
		"\xCE\xA5\x03\x02\x02\x02\xCE\xA6\x03\x02\x02\x02\xCE\xB8\x03\x02\x02\x02" +
		"\xCE\xCA\x03\x02\x02\x02\xCF\u0112\x03\x02\x02\x02\xD0\xD1\f\x0F\x02\x02" +
		"\xD1\xD2\x07+\x02\x02\xD2\u0111\x05\x06\x04\x10\xD3\xD4\f\x0E\x02\x02" +
		"\xD4\xD5\t\x03\x02\x02\xD5\u0111\x05\x06\x04\x0F\xD6\xD7\f\r\x02\x02\xD7" +
		"\xD8\t\x04\x02\x02\xD8\u0111\x05\x06\x04\x0E\xD9\xDA\f\f\x02\x02\xDA\xDB" +
		"\x07>\x02\x02\xDB\u0111\x05\x06\x04\r\xDC\xDD\f\v\x02\x02\xDD\xDE\t\x05" +
		"\x02\x02\xDE\u0111\x05\x06\x04\f\xDF\xE0\f\n\x02\x02\xE0\xE1\t\x06\x02" +
		"\x02\xE1\u0111\x05\x06\x04\v\xE2\xE3\f\t\x02\x02\xE3\xE4\x07&\x02\x02" +
		"\xE4\u0111\x05\x06\x04\n\xE5\xE6\f\b\x02\x02\xE6\xE7\x07:\x02\x02\xE7" +
		"\u0111\x05\x06\x04\t\xE8\xE9\f\x07\x02\x02\xE9\xEA\t\x07\x02\x02\xEA\u0111" +
		"\x05\x06\x04\b\xEB\xEC\f\x15\x02\x02\xEC\xF8\x07\x07\x02\x02\xED\xF2\x05" +
		"\x06\x04\x02\xEE\xEF\x07.\x02\x02\xEF\xF1\x05\x06\x04\x02\xF0\xEE\x03" +
		"\x02\x02\x02\xF1\xF4\x03\x02\x02\x02\xF2\xF0\x03\x02\x02\x02\xF2\xF3\x03" +
		"\x02\x02\x02\xF3\xF6\x03\x02\x02\x02\xF4\xF2\x03\x02\x02\x02\xF5\xF7\x07" +
		".\x02\x02\xF6\xF5\x03\x02\x02\x02\xF6\xF7\x03\x02\x02\x02\xF7\xF9\x03" +
		"\x02\x02\x02\xF8\xED\x03\x02\x02\x02\xF8\xF9\x03\x02\x02\x02\xF9\xFA\x03" +
		"\x02\x02\x02\xFA\u0111\x07\b\x02\x02\xFB\xFC\f\x14\x02\x02\xFC\u0108\x07" +
		"\x05\x02\x02\xFD\u0102\x05\x06\x04\x02\xFE\xFF\x07.\x02\x02\xFF\u0101" +
		"\x05\x06\x04\x02\u0100\xFE\x03\x02\x02\x02\u0101\u0104\x03\x02\x02\x02" +
		"\u0102\u0100\x03\x02\x02\x02\u0102\u0103\x03\x02\x02\x02\u0103\u0106\x03" +
		"\x02\x02\x02\u0104\u0102\x03\x02\x02\x02\u0105\u0107\x07.\x02\x02\u0106" +
		"\u0105\x03\x02\x02\x02\u0106\u0107\x03\x02\x02\x02\u0107\u0109\x03\x02" +
		"\x02\x02\u0108\xFD\x03\x02\x02\x02\u0108\u0109\x03\x02\x02\x02\u0109\u010A" +
		"\x03\x02\x02\x02\u010A\u0111\x07\x06\x02\x02\u010B\u010C\f\x13\x02\x02" +
		"\u010C\u0111\x07=\x02\x02\u010D\u010E\f\x12\x02\x02\u010E\u010F\x07/\x02" +
		"\x02\u010F\u0111\x05\x16\f\x02\u0110\xD0\x03\x02\x02\x02\u0110\xD3\x03" +
		"\x02\x02\x02\u0110\xD6\x03\x02\x02\x02\u0110\xD9\x03\x02\x02\x02\u0110" +
		"\xDC\x03\x02\x02\x02\u0110\xDF\x03\x02\x02\x02\u0110\xE2\x03\x02\x02\x02" +
		"\u0110\xE5\x03\x02\x02\x02\u0110\xE8\x03\x02\x02\x02\u0110\xEB\x03\x02" +
		"\x02\x02\u0110\xFB\x03\x02\x02\x02\u0110\u010B\x03\x02\x02\x02\u0110\u010D" +
		"\x03\x02\x02\x02\u0111\u0114\x03\x02\x02\x02\u0112\u0110\x03\x02\x02\x02" +
		"\u0112\u0113\x03\x02\x02\x02\u0113\x07\x03\x02\x02\x02\u0114\u0112\x03" +
		"\x02\x02\x02\u0115\u011B\x07E\x02\x02\u0116\u011B\x07D\x02\x02\u0117\u011B" +
		"\x07C\x02\x02\u0118\u011B\x07G\x02\x02\u0119\u011B\x07F\x02\x02\u011A" +
		"\u0115\x03\x02\x02\x02\u011A\u0116\x03\x02\x02\x02\u011A\u0117\x03\x02" +
		"\x02\x02\u011A\u0118\x03\x02\x02\x02\u011A\u0119\x03\x02\x02\x02\u011B" +
		"\t\x03\x02\x02\x02\u011C\u011D\x07-\x02\x02\u011D\u012B\x05\x04\x03\x02" +
		"\u011E\u0120\x07-\x02\x02\u011F\u011E\x03\x02\x02\x02\u011F\u0120\x03" +
		"\x02\x02\x02\u0120\u0121\x03\x02\x02\x02\u0121\u0122\x07J\x02\x02\u0122" +
		"\u0125\x07\x03\x02\x02\u0123\u0126\x05\x04\x03\x02\u0124\u0126\x07J\x02" +
		"\x02\u0125\u0123\x03\x02\x02\x02\u0125\u0124\x03\x02\x02\x02\u0126\u0127" +
		"\x03\x02\x02\x02\u0127\u0125\x03\x02\x02\x02\u0127\u0128\x03\x02\x02\x02" +
		"\u0128\u0129\x03\x02\x02\x02\u0129\u012B\x07\x04\x02\x02\u012A\u011C\x03" +
		"\x02\x02\x02\u012A\u011F\x03\x02\x02\x02\u012B\v\x03\x02\x02\x02\u012C" +
		"\u012D\x07J\x02\x02\u012D\u0130\x07\x03\x02\x02\u012E\u0131\x05\x12\n" +
		"\x02\u012F\u0131\x07J\x02\x02\u0130\u012E\x03\x02\x02\x02\u0130\u012F" +
		"\x03\x02\x02\x02\u0131\u0132\x03\x02\x02\x02\u0132\u0130\x03\x02\x02\x02" +
		"\u0132\u0133\x03\x02\x02\x02\u0133\u0134\x03\x02\x02\x02\u0134\u0135\x07" +
		"\x04\x02\x02\u0135\r\x03\x02\x02\x02\u0136\u0137\x05\x06\x04\x02\u0137" +
		"\u0138\x07-\x02\x02\u0138\u013A\x03\x02\x02\x02\u0139\u0136\x03\x02\x02" +
		"\x02\u0139\u013A\x03\x02\x02\x02\u013A\u013B\x03\x02\x02\x02\u013B\u013C" +
		"\x05\x06\x04\x02\u013C\x0F\x03\x02\x02\x02\u013D\u0142\x05\x12\n\x02\u013E" +
		"\u013F\x07.\x02\x02\u013F\u0141\x05\x12\n\x02\u0140\u013E\x03\x02\x02" +
		"\x02\u0141\u0144\x03\x02\x02\x02\u0142\u0140\x03\x02\x02\x02\u0142\u0143" +
		"\x03\x02\x02\x02\u0143\u0146\x03\x02\x02\x02\u0144\u0142\x03\x02\x02\x02" +
		"\u0145\u0147\x07.\x02\x02\u0146\u0145\x03\x02\x02\x02\u0146\u0147\x03" +
		"\x02\x02\x02\u0147\x11\x03\x02\x02\x02\u0148\u014A\x07@\x02\x02\u0149" +
		"\u0148\x03\x02\x02\x02\u0149\u014A\x03\x02\x02\x02\u014A\u014B\x03\x02" +
		"\x02\x02\u014B\u014C\x05\x16\f\x02\u014C\u014D\x05\x06\x04\x02\u014D\u014E" +
		"\x05\n\x06\x02\u014E\u0160\x03\x02\x02\x02\u014F\u0151\x07@\x02\x02\u0150" +
		"\u014F\x03\x02\x02\x02\u0150\u0151\x03\x02\x02\x02\u0151\u0152\x03\x02" +
		"\x02\x02\u0152\u0153\x05\x16\f\x02\u0153\u0154\x05\x06\x04\x02\u0154\u0160" +
		"\x03\x02\x02\x02\u0155\u0157\x07@\x02\x02\u0156\u0155\x03\x02\x02\x02" +
		"\u0156\u0157\x03\x02\x02\x02\u0157\u0158\x03\x02\x02\x02\u0158\u0159\x05" +
		"\x16\f\x02\u0159\u015A\x05\n\x06\x02\u015A\u0160\x03\x02\x02\x02\u015B" +
		"\u015D\x07@\x02\x02\u015C\u015B\x03\x02\x02\x02\u015C\u015D\x03\x02\x02" +
		"\x02\u015D\u015E\x03\x02\x02\x02\u015E\u0160\x05\x16\f\x02\u015F\u0149" +
		"\x03\x02\x02\x02\u015F\u0150\x03\x02\x02\x02\u015F\u0156\x03\x02\x02\x02" +
		"\u015F\u015C\x03\x02\x02\x02\u0160\x13\x03\x02\x02\x02\u0161\u0162\t\b" +
		"\x02\x02\u0162\x15\x03\x02\x02\x02\u0163\u0166\x07I\x02\x02\u0164\u0166" +
		"\x05\x18\r\x02\u0165\u0163\x03\x02\x02\x02\u0165\u0164\x03\x02\x02\x02" +
		"\u0166\u0177\x03\x02\x02\x02\u0167\u0168\x076\x02\x02\u0168\u0169\x07" +
		";\x02\x02\u0169\u016E\x05\x12\n\x02\u016A\u016B\x07.\x02\x02\u016B\u016D" +
		"\x05\x12\n\x02\u016C\u016A\x03\x02\x02\x02\u016D\u0170\x03\x02\x02\x02" +
		"\u016E\u016C\x03\x02\x02\x02\u016E\u016F\x03\x02\x02\x02\u016F\u0172\x03" +
		"\x02\x02\x02\u0170\u016E\x03\x02\x02\x02\u0171\u0173\x07.\x02\x02\u0172" +
		"\u0171\x03\x02\x02\x02\u0172\u0173\x03\x02\x02\x02\u0173\u0174\x03\x02" +
		"\x02\x02\u0174\u0175\x07;\x02\x02\u0175\u0176\x073\x02\x02\u0176\u0178" +
		"\x03\x02\x02\x02\u0177\u0167\x03\x02\x02\x02\u0177\u0178\x03\x02\x02\x02" +
		"\u0178\x17\x03\x02\x02\x02\u0179\u017A\t\t\x02\x02\u017A\x19\x03\x02\x02" +
		"\x02;\x1C\x1E)-59LQXbelrx\x7F\x89\x8D\x8F\x98\x9C\x9E\xAC\xB0\xB2\xB6" +
		"\xBE\xC2\xC4\xC8\xCE\xF2\xF6\xF8\u0102\u0106\u0108\u0110\u0112\u011A\u011F" +
		"\u0125\u0127\u012A\u0130\u0132\u0139\u0142\u0146\u0149\u0150\u0156\u015C" +
		"\u015F\u0165\u016E\u0172\u0177";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!XonParser.__ATN) {
			XonParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(XonParser._serializedATN));
		}

		return XonParser.__ATN;
	}

}

export class SourceContext extends ParserRuleContext {
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
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
export class ModelStatementContext extends StatementContext {
	public _name!: IdContext;
	public _base!: IdContext;
	public MODEL(): TerminalNode { return this.getToken(XonParser.MODEL, 0); }
	public id(): IdContext[];
	public id(i: number): IdContext;
	public id(i?: number): IdContext | IdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdContext);
		} else {
			return this.getRuleContext(i, IdContext);
		}
	}
	public IS(): TerminalNode | undefined { return this.tryGetToken(XonParser.IS, 0); }
	public definitionBody(): DefinitionBodyContext | undefined {
		return this.tryGetRuleContext(0, DefinitionBodyContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class ObjectStatementContext extends StatementContext {
	public _name!: IdContext;
	public _base!: IdContext;
	public OBJECT(): TerminalNode { return this.getToken(XonParser.OBJECT, 0); }
	public IS(): TerminalNode { return this.getToken(XonParser.IS, 0); }
	public id(): IdContext[];
	public id(i: number): IdContext;
	public id(i?: number): IdContext | IdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdContext);
		} else {
			return this.getRuleContext(i, IdContext);
		}
	}
	public definitionBody(): DefinitionBodyContext | undefined {
		return this.tryGetRuleContext(0, DefinitionBodyContext);
	}
	constructor(ctx: StatementContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
}
export class FactoryStatementContext extends StatementContext {
	public _name!: IdContext;
	public _base!: IdContext;
	public FACTORY(): TerminalNode { return this.getToken(XonParser.FACTORY, 0); }
	public OPEN_PAREN(): TerminalNode { return this.getToken(XonParser.OPEN_PAREN, 0); }
	public CLOSE_PAREN(): TerminalNode { return this.getToken(XonParser.CLOSE_PAREN, 0); }
	public IS(): TerminalNode { return this.getToken(XonParser.IS, 0); }
	public id(): IdContext[];
	public id(i: number): IdContext;
	public id(i?: number): IdContext | IdContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IdContext);
		} else {
			return this.getRuleContext(i, IdContext);
		}
	}
	public parameters(): ParametersContext | undefined {
		return this.tryGetRuleContext(0, ParametersContext);
	}
	public definitionBody(): DefinitionBodyContext | undefined {
		return this.tryGetRuleContext(0, DefinitionBodyContext);
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
	public arrayItem(): ArrayItemContext[];
	public arrayItem(i: number): ArrayItemContext;
	public arrayItem(i?: number): ArrayItemContext | ArrayItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArrayItemContext);
		} else {
			return this.getRuleContext(i, ArrayItemContext);
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
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.NL);
		} else {
			return this.getToken(XonParser.NL, i);
		}
	}
	public INDENT(): TerminalNode { return this.getToken(XonParser.INDENT, 0); }
	public DEDENT(): TerminalNode { return this.getToken(XonParser.DEDENT, 0); }
	public COLON(): TerminalNode | undefined { return this.tryGetToken(XonParser.COLON, 0); }
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
	public NL(): TerminalNode[];
	public NL(i: number): TerminalNode;
	public NL(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(XonParser.NL);
		} else {
			return this.getToken(XonParser.NL, i);
		}
	}
	public INDENT(): TerminalNode { return this.getToken(XonParser.INDENT, 0); }
	public DEDENT(): TerminalNode { return this.getToken(XonParser.DEDENT, 0); }
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


export class ArrayItemContext extends ParserRuleContext {
	public expr(): ExprContext[];
	public expr(i: number): ExprContext;
	public expr(i?: number): ExprContext | ExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExprContext);
		} else {
			return this.getRuleContext(i, ExprContext);
		}
	}
	public COLON(): TerminalNode | undefined { return this.tryGetToken(XonParser.COLON, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return XonParser.RULE_arrayItem; }
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


