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
	public static readonly FLOAT_LITERAL = 65;
	public static readonly INTEGER_LITERAL = 66;
	public static readonly REGEX_LITERAL = 67;
	public static readonly STRING_LITERAL = 68;
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
		"FLOAT_LITERAL", "INTEGER_LITERAL", "REGEX_LITERAL", "STRING_LITERAL", 
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
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.ACTUAL) | (1 << XonParser.BREAK) | (1 << XonParser.DO) | (1 << XonParser.EXPORT) | (1 << XonParser.FACTORY) | (1 << XonParser.FOR) | (1 << XonParser.IF) | (1 << XonParser.IMPORT) | (1 << XonParser.MODEL) | (1 << XonParser.NOT) | (1 << XonParser.OBJECT))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (XonParser.RETURN - 32)) | (1 << (XonParser.WHILE - 32)) | (1 << (XonParser.ASSIGN - 32)) | (1 << (XonParser.ASTERISK - 32)) | (1 << (XonParser.CARET - 32)) | (1 << (XonParser.GREAT - 32)) | (1 << (XonParser.LESS - 32)) | (1 << (XonParser.MINUS - 32)) | (1 << (XonParser.MODULO - 32)) | (1 << (XonParser.PLUS - 32)) | (1 << (XonParser.SLASH - 32)) | (1 << (XonParser.SPREAD - 32)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (XonParser.FLOAT_LITERAL - 65)) | (1 << (XonParser.INTEGER_LITERAL - 65)) | (1 << (XonParser.REGEX_LITERAL - 65)) | (1 << (XonParser.STRING_LITERAL - 65)) | (1 << (XonParser.PREPROCESSOR - 65)) | (1 << (XonParser.ID - 65)) | (1 << (XonParser.NL - 65)))) !== 0)) {
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
			this.state = 127;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
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
				this.state = 105;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.IS) {
					{
					this.state = 103;
					this.match(XonParser.IS);
					this.state = 104;
					(_localctx as ObjectStatementContext)._base = this.id();
					}
				}

				this.state = 108;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
				case 1:
					{
					this.state = 107;
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
				this.state = 110;
				this.match(XonParser.FACTORY);
				this.state = 111;
				(_localctx as FactoryStatementContext)._name = this.id();
				this.state = 112;
				this.match(XonParser.OPEN_PAREN);
				this.state = 114;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (XonParser.ASSIGN - 37)) | (1 << (XonParser.ASTERISK - 37)) | (1 << (XonParser.CARET - 37)) | (1 << (XonParser.GREAT - 37)) | (1 << (XonParser.LESS - 37)) | (1 << (XonParser.MINUS - 37)) | (1 << (XonParser.MODULO - 37)) | (1 << (XonParser.PLUS - 37)) | (1 << (XonParser.SLASH - 37)) | (1 << (XonParser.SPREAD - 37)))) !== 0) || _la === XonParser.ID) {
					{
					this.state = 113;
					this.parameters();
					}
				}

				this.state = 116;
				this.match(XonParser.CLOSE_PAREN);
				this.state = 117;
				this.match(XonParser.IS);
				this.state = 118;
				(_localctx as FactoryStatementContext)._base = this.id();
				this.state = 120;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 14, this._ctx) ) {
				case 1:
					{
					this.state = 119;
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
				this.state = 122;
				this.id();
				this.state = 123;
				this.match(XonParser.ASSIGN);
				this.state = 124;
				this.expr(0);
				}
				break;

			case 15:
				_localctx = new ExpressionStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 126;
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
			this.state = 206;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				{
				_localctx = new IdExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;

				this.state = 130;
				this.id();
				}
				break;

			case 2:
				{
				_localctx = new ArrayExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 131;
				this.match(XonParser.OPEN_BRACKET);
				this.state = 143;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.NOT))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (XonParser.ASSIGN - 37)) | (1 << (XonParser.ASTERISK - 37)) | (1 << (XonParser.CARET - 37)) | (1 << (XonParser.GREAT - 37)) | (1 << (XonParser.LESS - 37)) | (1 << (XonParser.MINUS - 37)) | (1 << (XonParser.MODULO - 37)) | (1 << (XonParser.PLUS - 37)) | (1 << (XonParser.SLASH - 37)) | (1 << (XonParser.SPREAD - 37)) | (1 << (XonParser.FLOAT_LITERAL - 37)) | (1 << (XonParser.INTEGER_LITERAL - 37)) | (1 << (XonParser.REGEX_LITERAL - 37)) | (1 << (XonParser.STRING_LITERAL - 37)))) !== 0) || _la === XonParser.ID) {
					{
					this.state = 132;
					this.arrayItem();
					this.state = 137;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 133;
							this.match(XonParser.COMMA);
							this.state = 134;
							this.arrayItem();
							}
							}
						}
						this.state = 139;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 16, this._ctx);
					}
					this.state = 141;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.COMMA) {
						{
						this.state = 140;
						this.match(XonParser.COMMA);
						}
					}

					}
				}

				this.state = 145;
				this.match(XonParser.CLOSE_BRACKET);
				}
				break;

			case 3:
				{
				_localctx = new ObjectExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 146;
				this.match(XonParser.OPEN_BRACE);
				this.state = 158;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (XonParser.ASSIGN - 37)) | (1 << (XonParser.ASTERISK - 37)) | (1 << (XonParser.CARET - 37)) | (1 << (XonParser.GREAT - 37)) | (1 << (XonParser.LESS - 37)) | (1 << (XonParser.MINUS - 37)) | (1 << (XonParser.MODULO - 37)) | (1 << (XonParser.PLUS - 37)) | (1 << (XonParser.SLASH - 37)) | (1 << (XonParser.SPREAD - 37)))) !== 0) || _la === XonParser.ID) {
					{
					this.state = 147;
					this.parameter();
					this.state = 152;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 148;
							this.match(XonParser.COMMA);
							this.state = 149;
							this.parameter();
							}
							}
						}
						this.state = 154;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 19, this._ctx);
					}
					this.state = 156;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.COMMA) {
						{
						this.state = 155;
						this.match(XonParser.COMMA);
						}
					}

					}
				}

				this.state = 160;
				this.match(XonParser.CLOSE_BRACE);
				}
				break;

			case 4:
				{
				_localctx = new SpreadExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 161;
				this.match(XonParser.SPREAD);
				this.state = 162;
				this.expr(15);
				}
				break;

			case 5:
				{
				_localctx = new PrefixExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 163;
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
				this.state = 164;
				this.expr(14);
				}
				break;

			case 6:
				{
				_localctx = new LiteralExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 165;
				this.literal();
				}
				break;

			case 7:
				{
				_localctx = new MethodExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 166;
				this.match(XonParser.OPEN_PAREN);
				this.state = 178;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (XonParser.ASSIGN - 37)) | (1 << (XonParser.ASTERISK - 37)) | (1 << (XonParser.CARET - 37)) | (1 << (XonParser.GREAT - 37)) | (1 << (XonParser.LESS - 37)) | (1 << (XonParser.MINUS - 37)) | (1 << (XonParser.MODULO - 37)) | (1 << (XonParser.PLUS - 37)) | (1 << (XonParser.SLASH - 37)) | (1 << (XonParser.SPREAD - 37)))) !== 0) || _la === XonParser.ID) {
					{
					this.state = 167;
					this.parameter();
					this.state = 172;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 168;
							this.match(XonParser.COMMA);
							this.state = 169;
							this.parameter();
							}
							}
						}
						this.state = 174;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 22, this._ctx);
					}
					this.state = 176;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.COMMA) {
						{
						this.state = 175;
						this.match(XonParser.COMMA);
						}
					}

					}
				}

				this.state = 180;
				this.match(XonParser.CLOSE_PAREN);
				this.state = 182;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 25, this._ctx) ) {
				case 1:
					{
					this.state = 181;
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
				this.state = 184;
				this.match(XonParser.OPEN_BRACKET);
				this.state = 196;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (XonParser.ASSIGN - 37)) | (1 << (XonParser.ASTERISK - 37)) | (1 << (XonParser.CARET - 37)) | (1 << (XonParser.GREAT - 37)) | (1 << (XonParser.LESS - 37)) | (1 << (XonParser.MINUS - 37)) | (1 << (XonParser.MODULO - 37)) | (1 << (XonParser.PLUS - 37)) | (1 << (XonParser.SLASH - 37)) | (1 << (XonParser.SPREAD - 37)))) !== 0) || _la === XonParser.ID) {
					{
					this.state = 185;
					this.parameter();
					this.state = 190;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
					while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
						if (_alt === 1) {
							{
							{
							this.state = 186;
							this.match(XonParser.COMMA);
							this.state = 187;
							this.parameter();
							}
							}
						}
						this.state = 192;
						this._errHandler.sync(this);
						_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
					}
					this.state = 194;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.COMMA) {
						{
						this.state = 193;
						this.match(XonParser.COMMA);
						}
					}

					}
				}

				this.state = 198;
				this.match(XonParser.CLOSE_BRACKET);
				this.state = 200;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 29, this._ctx) ) {
				case 1:
					{
					this.state = 199;
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
				this.state = 202;
				this.match(XonParser.OPEN_PAREN);
				this.state = 203;
				this.expr(0);
				this.state = 204;
				this.match(XonParser.CLOSE_PAREN);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 274;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 38, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 272;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 37, this._ctx) ) {
					case 1:
						{
						_localctx = new PowExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as PowExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 208;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 209;
						(_localctx as PowExpressionContext)._op = this.match(XonParser.CARET);
						this.state = 210;
						(_localctx as PowExpressionContext)._right = this.expr(14);
						}
						break;

					case 2:
						{
						_localctx = new MulDivModExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as MulDivModExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 211;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 212;
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
						this.state = 213;
						(_localctx as MulDivModExpressionContext)._right = this.expr(13);
						}
						break;

					case 3:
						{
						_localctx = new AddSubExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as AddSubExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 214;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 215;
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
						this.state = 216;
						(_localctx as AddSubExpressionContext)._right = this.expr(12);
						}
						break;

					case 4:
						{
						_localctx = new RangeExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as RangeExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 217;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 218;
						(_localctx as RangeExpressionContext)._op = this.match(XonParser.RANGE);
						this.state = 219;
						(_localctx as RangeExpressionContext)._right = this.expr(11);
						}
						break;

					case 5:
						{
						_localctx = new RelationalExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as RelationalExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 220;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 221;
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
						this.state = 222;
						(_localctx as RelationalExpressionContext)._right = this.expr(10);
						}
						break;

					case 6:
						{
						_localctx = new EqualityExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as EqualityExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 223;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 224;
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
						this.state = 225;
						(_localctx as EqualityExpressionContext)._right = this.expr(9);
						}
						break;

					case 7:
						{
						_localctx = new ConjunctionExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as ConjunctionExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 226;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 227;
						(_localctx as ConjunctionExpressionContext)._op = this.match(XonParser.AND);
						this.state = 228;
						(_localctx as ConjunctionExpressionContext)._right = this.expr(8);
						}
						break;

					case 8:
						{
						_localctx = new DisjunctionExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as DisjunctionExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 229;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 230;
						(_localctx as DisjunctionExpressionContext)._op = this.match(XonParser.OR);
						this.state = 231;
						(_localctx as DisjunctionExpressionContext)._right = this.expr(7);
						}
						break;

					case 9:
						{
						_localctx = new InfixExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as InfixExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 232;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 233;
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
						this.state = 234;
						(_localctx as InfixExpressionContext)._right = this.expr(6);
						}
						break;

					case 10:
						{
						_localctx = new InvokeExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as InvokeExpressionContext)._instance = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 235;
						if (!(this.precpred(this._ctx, 19))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 19)");
						}
						this.state = 236;
						this.match(XonParser.OPEN_PAREN);
						this.state = 248;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.NOT))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (XonParser.ASSIGN - 37)) | (1 << (XonParser.ASTERISK - 37)) | (1 << (XonParser.CARET - 37)) | (1 << (XonParser.GREAT - 37)) | (1 << (XonParser.LESS - 37)) | (1 << (XonParser.MINUS - 37)) | (1 << (XonParser.MODULO - 37)) | (1 << (XonParser.PLUS - 37)) | (1 << (XonParser.SLASH - 37)) | (1 << (XonParser.SPREAD - 37)) | (1 << (XonParser.FLOAT_LITERAL - 37)) | (1 << (XonParser.INTEGER_LITERAL - 37)) | (1 << (XonParser.REGEX_LITERAL - 37)) | (1 << (XonParser.STRING_LITERAL - 37)))) !== 0) || _la === XonParser.ID) {
							{
							this.state = 237;
							(_localctx as InvokeExpressionContext)._expr = this.expr(0);
							(_localctx as InvokeExpressionContext)._args.push((_localctx as InvokeExpressionContext)._expr);
							this.state = 242;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
							while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
								if (_alt === 1) {
									{
									{
									this.state = 238;
									this.match(XonParser.COMMA);
									this.state = 239;
									(_localctx as InvokeExpressionContext)._expr = this.expr(0);
									(_localctx as InvokeExpressionContext)._args.push((_localctx as InvokeExpressionContext)._expr);
									}
									}
								}
								this.state = 244;
								this._errHandler.sync(this);
								_alt = this.interpreter.adaptivePredict(this._input, 31, this._ctx);
							}
							this.state = 246;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === XonParser.COMMA) {
								{
								this.state = 245;
								this.match(XonParser.COMMA);
								}
							}

							}
						}

						this.state = 250;
						this.match(XonParser.CLOSE_PAREN);
						}
						break;

					case 11:
						{
						_localctx = new IndexExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as IndexExpressionContext)._instance = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 251;
						if (!(this.precpred(this._ctx, 18))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 18)");
						}
						this.state = 252;
						this.match(XonParser.OPEN_BRACKET);
						this.state = 264;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.NOT))) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (XonParser.ASSIGN - 37)) | (1 << (XonParser.ASTERISK - 37)) | (1 << (XonParser.CARET - 37)) | (1 << (XonParser.GREAT - 37)) | (1 << (XonParser.LESS - 37)) | (1 << (XonParser.MINUS - 37)) | (1 << (XonParser.MODULO - 37)) | (1 << (XonParser.PLUS - 37)) | (1 << (XonParser.SLASH - 37)) | (1 << (XonParser.SPREAD - 37)) | (1 << (XonParser.FLOAT_LITERAL - 37)) | (1 << (XonParser.INTEGER_LITERAL - 37)) | (1 << (XonParser.REGEX_LITERAL - 37)) | (1 << (XonParser.STRING_LITERAL - 37)))) !== 0) || _la === XonParser.ID) {
							{
							this.state = 253;
							(_localctx as IndexExpressionContext)._expr = this.expr(0);
							(_localctx as IndexExpressionContext)._args.push((_localctx as IndexExpressionContext)._expr);
							this.state = 258;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
							while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
								if (_alt === 1) {
									{
									{
									this.state = 254;
									this.match(XonParser.COMMA);
									this.state = 255;
									(_localctx as IndexExpressionContext)._expr = this.expr(0);
									(_localctx as IndexExpressionContext)._args.push((_localctx as IndexExpressionContext)._expr);
									}
									}
								}
								this.state = 260;
								this._errHandler.sync(this);
								_alt = this.interpreter.adaptivePredict(this._input, 34, this._ctx);
							}
							this.state = 262;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === XonParser.COMMA) {
								{
								this.state = 261;
								this.match(XonParser.COMMA);
								}
							}

							}
						}

						this.state = 266;
						this.match(XonParser.CLOSE_BRACKET);
						}
						break;

					case 12:
						{
						_localctx = new NullableExpressionContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 267;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 268;
						this.match(XonParser.QUESTION);
						}
						break;

					case 13:
						{
						_localctx = new MemberExpressionContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 269;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 270;
						this.match(XonParser.DOT);
						this.state = 271;
						this.id();
						}
						break;
					}
					}
				}
				this.state = 276;
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
			this.state = 281;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.INTEGER_LITERAL:
				_localctx = new IntegerLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 277;
				this.match(XonParser.INTEGER_LITERAL);
				}
				break;
			case XonParser.FLOAT_LITERAL:
				_localctx = new FloatLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 278;
				this.match(XonParser.FLOAT_LITERAL);
				}
				break;
			case XonParser.STRING_LITERAL:
				_localctx = new StringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 279;
				this.match(XonParser.STRING_LITERAL);
				}
				break;
			case XonParser.REGEX_LITERAL:
				_localctx = new RegexLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 280;
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
			this.state = 297;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 43, this._ctx) ) {
			case 1:
				_localctx = new SingleBodyContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 283;
				this.match(XonParser.COLON);
				this.state = 284;
				this.statement();
				}
				break;

			case 2:
				_localctx = new MultipleBodyContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 286;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COLON) {
					{
					this.state = 285;
					this.match(XonParser.COLON);
					}
				}

				this.state = 288;
				this.match(XonParser.NL);
				this.state = 289;
				this.match(XonParser.INDENT);
				this.state = 292;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 292;
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
					case XonParser.FLOAT_LITERAL:
					case XonParser.INTEGER_LITERAL:
					case XonParser.REGEX_LITERAL:
					case XonParser.STRING_LITERAL:
					case XonParser.PREPROCESSOR:
					case XonParser.ID:
						{
						this.state = 290;
						this.statement();
						}
						break;
					case XonParser.NL:
						{
						this.state = 291;
						this.match(XonParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 294;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.ACTUAL) | (1 << XonParser.BREAK) | (1 << XonParser.DO) | (1 << XonParser.EXPORT) | (1 << XonParser.FACTORY) | (1 << XonParser.FOR) | (1 << XonParser.IF) | (1 << XonParser.IMPORT) | (1 << XonParser.MODEL) | (1 << XonParser.NOT) | (1 << XonParser.OBJECT))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (XonParser.RETURN - 32)) | (1 << (XonParser.WHILE - 32)) | (1 << (XonParser.ASSIGN - 32)) | (1 << (XonParser.ASTERISK - 32)) | (1 << (XonParser.CARET - 32)) | (1 << (XonParser.GREAT - 32)) | (1 << (XonParser.LESS - 32)) | (1 << (XonParser.MINUS - 32)) | (1 << (XonParser.MODULO - 32)) | (1 << (XonParser.PLUS - 32)) | (1 << (XonParser.SLASH - 32)) | (1 << (XonParser.SPREAD - 32)))) !== 0) || ((((_la - 65)) & ~0x1F) === 0 && ((1 << (_la - 65)) & ((1 << (XonParser.FLOAT_LITERAL - 65)) | (1 << (XonParser.INTEGER_LITERAL - 65)) | (1 << (XonParser.REGEX_LITERAL - 65)) | (1 << (XonParser.STRING_LITERAL - 65)) | (1 << (XonParser.PREPROCESSOR - 65)) | (1 << (XonParser.ID - 65)) | (1 << (XonParser.NL - 65)))) !== 0));
				this.state = 296;
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
			this.state = 299;
			this.match(XonParser.NL);
			this.state = 300;
			this.match(XonParser.INDENT);
			this.state = 303;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 303;
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
					this.state = 301;
					this.parameter();
					}
					break;
				case XonParser.NL:
					{
					this.state = 302;
					this.match(XonParser.NL);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 305;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & ((1 << (XonParser.ASSIGN - 37)) | (1 << (XonParser.ASTERISK - 37)) | (1 << (XonParser.CARET - 37)) | (1 << (XonParser.GREAT - 37)) | (1 << (XonParser.LESS - 37)) | (1 << (XonParser.MINUS - 37)) | (1 << (XonParser.MODULO - 37)) | (1 << (XonParser.PLUS - 37)) | (1 << (XonParser.SLASH - 37)) | (1 << (XonParser.SPREAD - 37)))) !== 0) || _la === XonParser.ID || _la === XonParser.NL);
			this.state = 307;
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
			this.state = 312;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 46, this._ctx) ) {
			case 1:
				{
				this.state = 309;
				this.expr(0);
				this.state = 310;
				this.match(XonParser.COLON);
				}
				break;
			}
			this.state = 314;
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
			this.state = 316;
			this.parameter();
			this.state = 321;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 317;
					this.match(XonParser.COMMA);
					this.state = 318;
					this.parameter();
					}
					}
				}
				this.state = 323;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 47, this._ctx);
			}
			this.state = 325;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.COMMA) {
				{
				this.state = 324;
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
			this.state = 350;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 53, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 328;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.SPREAD) {
					{
					this.state = 327;
					this.match(XonParser.SPREAD);
					}
				}

				this.state = 330;
				this.id();
				this.state = 331;
				this.expr(0);
				this.state = 332;
				this.body();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 335;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.SPREAD) {
					{
					this.state = 334;
					this.match(XonParser.SPREAD);
					}
				}

				this.state = 337;
				this.id();
				this.state = 338;
				this.expr(0);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 341;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.SPREAD) {
					{
					this.state = 340;
					this.match(XonParser.SPREAD);
					}
				}

				this.state = 343;
				this.id();
				this.state = 344;
				this.body();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 347;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.SPREAD) {
					{
					this.state = 346;
					this.match(XonParser.SPREAD);
					}
				}

				this.state = 349;
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
			this.state = 352;
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
			this.state = 356;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.ID:
				{
				this.state = 354;
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
				this.state = 355;
				this.operator();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 374;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 57, this._ctx) ) {
			case 1:
				{
				this.state = 358;
				this.match(XonParser.LESS);
				this.state = 359;
				this.match(XonParser.PIPE);
				this.state = 360;
				this.parameter();
				this.state = 365;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 55, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 361;
						this.match(XonParser.COMMA);
						this.state = 362;
						this.parameter();
						}
						}
					}
					this.state = 367;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 55, this._ctx);
				}
				this.state = 369;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COMMA) {
					{
					this.state = 368;
					this.match(XonParser.COMMA);
					}
				}

				this.state = 371;
				this.match(XonParser.PIPE);
				this.state = 372;
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
			this.state = 376;
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03M\u017D\x04\x02" +
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
		"c\n\x03\x03\x03\x05\x03f\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03" +
		"l\n\x03\x03\x03\x05\x03o\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03" +
		"u\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03{\n\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x05\x03\x82\n\x03\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x07\x04\x8A\n\x04\f\x04\x0E\x04\x8D\v\x04\x03\x04" +
		"\x05\x04\x90\n\x04\x05\x04\x92\n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x07\x04\x99\n\x04\f\x04\x0E\x04\x9C\v\x04\x03\x04\x05\x04\x9F\n\x04" +
		"\x05\x04\xA1\n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x07\x04\xAD\n\x04\f\x04\x0E\x04\xB0\v\x04" +
		"\x03\x04\x05\x04\xB3\n\x04\x05\x04\xB5\n\x04\x03\x04\x03\x04\x05\x04\xB9" +
		"\n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04\xBF\n\x04\f\x04\x0E\x04" +
		"\xC2\v\x04\x03\x04\x05\x04\xC5\n\x04\x05\x04\xC7\n\x04\x03\x04\x03\x04" +
		"\x05\x04\xCB\n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04\xD1\n\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04\xF3\n\x04\f\x04\x0E\x04\xF6" +
		"\v\x04\x03\x04\x05\x04\xF9\n\x04\x05\x04\xFB\n\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x07\x04\u0103\n\x04\f\x04\x0E\x04\u0106\v" +
		"\x04\x03\x04\x05\x04\u0109\n\x04\x05\x04\u010B\n\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x07\x04\u0113\n\x04\f\x04\x0E\x04\u0116\v" +
		"\x04\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05\u011C\n\x05\x03\x06\x03\x06" +
		"\x03\x06\x05\x06\u0121\n\x06\x03\x06\x03\x06\x03\x06\x03\x06\x06\x06\u0127" +
		"\n\x06\r\x06\x0E\x06\u0128\x03\x06\x05\x06\u012C\n\x06\x03\x07\x03\x07" +
		"\x03\x07\x03\x07\x06\x07\u0132\n\x07\r\x07\x0E\x07\u0133\x03\x07\x03\x07" +
		"\x03\b\x03\b\x03\b\x05\b\u013B\n\b\x03\b\x03\b\x03\t\x03\t\x03\t\x07\t" +
		"\u0142\n\t\f\t\x0E\t\u0145\v\t\x03\t\x05\t\u0148\n\t\x03\n\x05\n\u014B" +
		"\n\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\u0152\n\n\x03\n\x03\n\x03\n\x03" +
		"\n\x05\n\u0158\n\n\x03\n\x03\n\x03\n\x03\n\x05\n\u015E\n\n\x03\n\x05\n" +
		"\u0161\n\n\x03\v\x03\v\x03\f\x03\f\x05\f\u0167\n\f\x03\f\x03\f\x03\f\x03" +
		"\f\x03\f\x07\f\u016E\n\f\f\f\x0E\f\u0171\v\f\x03\f\x05\f\u0174\n\f\x03" +
		"\f\x03\f\x03\f\x05\f\u0179\n\f\x03\r\x03\r\x03\r\x02\x02\x03\x06\x0E\x02" +
		"\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02" +
		"\x16\x02\x18\x02\x02\n\x05\x02\x1E\x1E77<<\x05\x02((88??\x04\x0277<<\x04" +
		"\x022356\x04\x020099\x05\x02\r\r\x1A\x1A\x1C\x1C\x07\x02\x0F\x0F\x12\x12" +
		"\x1D\x1D\x1F\x1F##\b\x02\'(++3368<<??\x02\u01CD\x02\x1E\x03\x02\x02\x02" +
		"\x04\x81\x03\x02\x02\x02\x06\xD0\x03\x02\x02\x02\b\u011B\x03\x02\x02\x02" +
		"\n\u012B\x03\x02\x02\x02\f\u012D\x03\x02\x02\x02\x0E\u013A\x03\x02\x02" +
		"\x02\x10\u013E\x03\x02\x02\x02\x12\u0160\x03\x02\x02\x02\x14\u0162\x03" +
		"\x02\x02\x02\x16\u0166\x03\x02\x02\x02\x18\u017A\x03\x02\x02\x02\x1A\x1D" +
		"\x05\x04\x03\x02\x1B\x1D\x07I\x02\x02\x1C\x1A\x03\x02\x02\x02\x1C\x1B" +
		"\x03\x02\x02\x02\x1D \x03\x02\x02\x02\x1E\x1C\x03\x02\x02\x02\x1E\x1F" +
		"\x03\x02\x02\x02\x1F\x03\x03\x02\x02\x02 \x1E\x03\x02\x02\x02!\"\x07\x19" +
		"\x02\x02\"#\x05\x06\x04\x02#$\x07-\x02\x02$)\x05\x06\x04\x02%&\x07.\x02" +
		"\x02&(\x05\x06\x04\x02\'%\x03\x02\x02\x02(+\x03\x02\x02\x02)\'\x03\x02" +
		"\x02\x02)*\x03\x02\x02\x02*-\x03\x02\x02\x02+)\x03\x02\x02\x02,.\x07." +
		"\x02\x02-,\x03\x02\x02\x02-.\x03\x02\x02\x02.\x82\x03\x02\x02\x02/0\x07" +
		"\x14\x02\x020\x82\x05\x06\x04\x0219\x07\x17\x02\x0225\x05\x12\n\x0234" +
		"\x07.\x02\x0246\x05\x12\n\x0253\x03\x02\x02\x0256\x03\x02\x02\x0267\x03" +
		"\x02\x02\x0278\x07\x1A\x02\x028:\x03\x02\x02\x0292\x03\x02\x02\x029:\x03" +
		"\x02\x02\x02:;\x03\x02\x02\x02;<\x05\x06\x04\x02<=\x05\n\x06\x02=\x82" +
		"\x03\x02\x02\x02>?\x07$\x02\x02?@\x05\x06\x04\x02@A\x05\n\x06\x02A\x82" +
		"\x03\x02\x02\x02BC\x07\x10\x02\x02CD\x05\n\x06\x02DE\x07$\x02\x02EF\x05" +
		"\x06\x04\x02F\x82\x03\x02\x02\x02GH\x07\x18\x02\x02HI\x05\x06\x04\x02" +
		"IL\x05\n\x06\x02JK\x07\x11\x02\x02KM\x05\n\x06\x02LJ\x03\x02\x02\x02L" +
		"M\x03\x02\x02\x02M\x82\x03\x02\x02\x02N\x82\x07\x0E\x02\x02OQ\x07\"\x02" +
		"\x02PR\x05\x06\x04\x02QP\x03\x02\x02\x02QR\x03\x02\x02\x02R\x82\x03\x02" +
		"\x02\x02ST\x07\f\x02\x02TV\x05\x06\x04\x02UW\x07I\x02\x02VU\x03\x02\x02" +
		"\x02WX\x03\x02\x02\x02XV\x03\x02\x02\x02XY\x03\x02\x02\x02YZ\x03\x02\x02" +
		"\x02Z[\x07\x13\x02\x02[\\\x05\x06\x04\x02\\\x82\x03\x02\x02\x02]\x82\x07" +
		"G\x02\x02^_\x07\x1D\x02\x02_b\x05\x16\f\x02`a\x07\x1C\x02\x02ac\x05\x16" +
		"\f\x02b`\x03\x02\x02\x02bc\x03\x02\x02\x02ce\x03\x02\x02\x02df\x05\f\x07" +
		"\x02ed\x03\x02\x02\x02ef\x03\x02\x02\x02f\x82\x03\x02\x02\x02gh\x07\x1F" +
		"\x02\x02hk\x05\x16\f\x02ij\x07\x1C\x02\x02jl\x05\x16\f\x02ki\x03\x02\x02" +
		"\x02kl\x03\x02\x02\x02ln\x03\x02\x02\x02mo\x05\f\x07\x02nm\x03\x02\x02" +
		"\x02no\x03\x02\x02\x02o\x82\x03\x02\x02\x02pq\x07\x16\x02\x02qr\x05\x16" +
		"\f\x02rt\x07\x07\x02\x02su\x05\x10\t\x02ts\x03\x02\x02\x02tu\x03\x02\x02" +
		"\x02uv\x03\x02\x02\x02vw\x07\b\x02\x02wx\x07\x1C\x02\x02xz\x05\x16\f\x02" +
		"y{\x05\f\x07\x02zy\x03\x02\x02\x02z{\x03\x02\x02\x02{\x82\x03\x02\x02" +
		"\x02|}\x05\x16\f\x02}~\x07\'\x02\x02~\x7F\x05\x06\x04\x02\x7F\x82\x03" +
		"\x02\x02\x02\x80\x82\x05\x06\x04\x02\x81!\x03\x02\x02\x02\x81/\x03\x02" +
		"\x02\x02\x811\x03\x02\x02\x02\x81>\x03\x02\x02\x02\x81B\x03\x02\x02\x02" +
		"\x81G\x03\x02\x02\x02\x81N\x03\x02\x02\x02\x81O\x03\x02\x02\x02\x81S\x03" +
		"\x02\x02\x02\x81]\x03\x02\x02\x02\x81^\x03\x02\x02\x02\x81g\x03\x02\x02" +
		"\x02\x81p\x03\x02\x02\x02\x81|\x03\x02\x02\x02\x81\x80\x03\x02\x02\x02" +
		"\x82\x05\x03\x02\x02\x02\x83\x84\b\x04\x01\x02\x84\xD1\x05\x16\f\x02\x85" +
		"\x91\x07\x05\x02\x02\x86\x8B\x05\x0E\b\x02\x87\x88\x07.\x02\x02\x88\x8A" +
		"\x05\x0E\b\x02\x89\x87\x03\x02\x02\x02\x8A\x8D\x03\x02\x02\x02\x8B\x89" +
		"\x03\x02\x02\x02\x8B\x8C\x03\x02\x02\x02\x8C\x8F\x03\x02\x02\x02\x8D\x8B" +
		"\x03\x02\x02\x02\x8E\x90\x07.\x02\x02\x8F\x8E\x03\x02\x02\x02\x8F\x90" +
		"\x03\x02\x02\x02\x90\x92\x03\x02\x02\x02\x91\x86\x03\x02\x02\x02\x91\x92" +
		"\x03\x02\x02\x02\x92\x93\x03\x02\x02\x02\x93\xD1\x07\x06\x02\x02\x94\xA0" +
		"\x07\t\x02\x02\x95\x9A\x05\x12\n\x02\x96\x97\x07.\x02\x02\x97\x99\x05" +
		"\x12\n\x02\x98\x96\x03\x02\x02\x02\x99\x9C\x03\x02\x02\x02\x9A\x98\x03" +
		"\x02\x02\x02\x9A\x9B\x03\x02\x02\x02\x9B\x9E\x03\x02\x02\x02\x9C\x9A\x03" +
		"\x02\x02\x02\x9D\x9F\x07.\x02\x02\x9E\x9D\x03\x02\x02\x02\x9E\x9F\x03" +
		"\x02\x02\x02\x9F\xA1\x03\x02\x02\x02\xA0\x95\x03\x02\x02\x02\xA0\xA1\x03" +
		"\x02\x02\x02\xA1\xA2\x03\x02\x02\x02\xA2\xD1\x07\n\x02\x02\xA3\xA4\x07" +
		"@\x02\x02\xA4\xD1\x05\x06\x04\x11\xA5\xA6\t\x02\x02\x02\xA6\xD1\x05\x06" +
		"\x04\x10\xA7\xD1\x05\b\x05\x02\xA8\xB4\x07\x07\x02\x02\xA9\xAE\x05\x12" +
		"\n\x02\xAA\xAB\x07.\x02\x02\xAB\xAD\x05\x12\n\x02\xAC\xAA\x03\x02\x02" +
		"\x02\xAD\xB0\x03\x02\x02\x02\xAE\xAC\x03\x02\x02\x02\xAE\xAF\x03\x02\x02" +
		"\x02\xAF\xB2\x03\x02\x02\x02\xB0\xAE\x03\x02\x02\x02\xB1\xB3\x07.\x02" +
		"\x02\xB2\xB1\x03\x02\x02\x02\xB2\xB3\x03\x02\x02\x02\xB3\xB5\x03\x02\x02" +
		"\x02\xB4\xA9\x03\x02\x02\x02\xB4\xB5\x03\x02\x02\x02\xB5\xB6\x03\x02\x02" +
		"\x02\xB6\xB8\x07\b\x02\x02\xB7\xB9\x05\x06\x04\x02\xB8\xB7\x03\x02\x02" +
		"\x02\xB8\xB9\x03\x02\x02\x02\xB9\xD1\x03\x02\x02\x02\xBA\xC6\x07\x05\x02" +
		"\x02\xBB\xC0\x05\x12\n\x02\xBC\xBD\x07.\x02\x02\xBD\xBF\x05\x12\n\x02" +
		"\xBE\xBC\x03\x02\x02\x02\xBF\xC2\x03\x02\x02\x02\xC0\xBE\x03\x02\x02\x02" +
		"\xC0\xC1\x03\x02\x02\x02\xC1\xC4\x03\x02\x02\x02\xC2\xC0\x03\x02\x02\x02" +
		"\xC3\xC5\x07.\x02\x02\xC4\xC3\x03\x02\x02\x02\xC4\xC5\x03\x02\x02\x02" +
		"\xC5\xC7\x03\x02\x02\x02\xC6\xBB\x03\x02\x02\x02\xC6\xC7\x03\x02\x02\x02" +
		"\xC7\xC8\x03\x02\x02\x02\xC8\xCA\x07\x06\x02\x02\xC9\xCB\x05\x06\x04\x02" +
		"\xCA\xC9\x03\x02\x02\x02\xCA\xCB\x03\x02\x02\x02\xCB\xD1\x03\x02\x02\x02" +
		"\xCC\xCD\x07\x07\x02\x02\xCD\xCE\x05\x06\x04\x02\xCE\xCF\x07\b\x02\x02" +
		"\xCF\xD1\x03\x02\x02\x02\xD0\x83\x03\x02\x02\x02\xD0\x85\x03\x02\x02\x02" +
		"\xD0\x94\x03\x02\x02\x02\xD0\xA3\x03\x02\x02\x02\xD0\xA5\x03\x02\x02\x02" +
		"\xD0\xA7\x03\x02\x02\x02\xD0\xA8\x03\x02\x02\x02\xD0\xBA\x03\x02\x02\x02" +
		"\xD0\xCC\x03\x02\x02\x02\xD1\u0114\x03\x02\x02\x02\xD2\xD3\f\x0F\x02\x02" +
		"\xD3\xD4\x07+\x02\x02\xD4\u0113\x05\x06\x04\x10\xD5\xD6\f\x0E\x02\x02" +
		"\xD6\xD7\t\x03\x02\x02\xD7\u0113\x05\x06\x04\x0F\xD8\xD9\f\r\x02\x02\xD9" +
		"\xDA\t\x04\x02\x02\xDA\u0113\x05\x06\x04\x0E\xDB\xDC\f\f\x02\x02\xDC\xDD" +
		"\x07>\x02\x02\xDD\u0113\x05\x06\x04\r\xDE\xDF\f\v\x02\x02\xDF\xE0\t\x05" +
		"\x02\x02\xE0\u0113\x05\x06\x04\f\xE1\xE2\f\n\x02\x02\xE2\xE3\t\x06\x02" +
		"\x02\xE3\u0113\x05\x06\x04\v\xE4\xE5\f\t\x02\x02\xE5\xE6\x07&\x02\x02" +
		"\xE6\u0113\x05\x06\x04\n\xE7\xE8\f\b\x02\x02\xE8\xE9\x07:\x02\x02\xE9" +
		"\u0113\x05\x06\x04\t\xEA\xEB\f\x07\x02\x02\xEB\xEC\t\x07\x02\x02\xEC\u0113" +
		"\x05\x06\x04\b\xED\xEE\f\x15\x02\x02\xEE\xFA\x07\x07\x02\x02\xEF\xF4\x05" +
		"\x06\x04\x02\xF0\xF1\x07.\x02\x02\xF1\xF3\x05\x06\x04\x02\xF2\xF0\x03" +
		"\x02\x02\x02\xF3\xF6\x03\x02\x02\x02\xF4\xF2\x03\x02\x02\x02\xF4\xF5\x03" +
		"\x02\x02\x02\xF5\xF8\x03\x02\x02\x02\xF6\xF4\x03\x02\x02\x02\xF7\xF9\x07" +
		".\x02\x02\xF8\xF7\x03\x02\x02\x02\xF8\xF9\x03\x02\x02\x02\xF9\xFB\x03" +
		"\x02\x02\x02\xFA\xEF\x03\x02\x02\x02\xFA\xFB\x03\x02\x02\x02\xFB\xFC\x03" +
		"\x02\x02\x02\xFC\u0113\x07\b\x02\x02\xFD\xFE\f\x14\x02\x02\xFE\u010A\x07" +
		"\x05\x02\x02\xFF\u0104\x05\x06\x04\x02\u0100\u0101\x07.\x02\x02\u0101" +
		"\u0103\x05\x06\x04\x02\u0102\u0100\x03\x02\x02\x02\u0103\u0106\x03\x02" +
		"\x02\x02\u0104\u0102\x03\x02\x02\x02\u0104\u0105\x03\x02\x02\x02\u0105" +
		"\u0108\x03\x02\x02\x02\u0106\u0104\x03\x02\x02\x02\u0107\u0109\x07.\x02" +
		"\x02\u0108\u0107\x03\x02\x02\x02\u0108\u0109\x03\x02\x02\x02\u0109\u010B" +
		"\x03\x02\x02\x02\u010A\xFF\x03\x02\x02\x02\u010A\u010B\x03\x02\x02\x02" +
		"\u010B\u010C\x03\x02\x02\x02\u010C\u0113\x07\x06\x02\x02\u010D\u010E\f" +
		"\x13\x02\x02\u010E\u0113\x07=\x02\x02\u010F\u0110\f\x12\x02\x02\u0110" +
		"\u0111\x07/\x02\x02\u0111\u0113\x05\x16\f\x02\u0112\xD2\x03\x02\x02\x02" +
		"\u0112\xD5\x03\x02\x02\x02\u0112\xD8\x03\x02\x02\x02\u0112\xDB\x03\x02" +
		"\x02\x02\u0112\xDE\x03\x02\x02\x02\u0112\xE1\x03\x02\x02\x02\u0112\xE4" +
		"\x03\x02\x02\x02\u0112\xE7\x03\x02\x02\x02\u0112\xEA\x03\x02\x02\x02\u0112" +
		"\xED\x03\x02\x02\x02\u0112\xFD\x03\x02\x02\x02\u0112\u010D\x03\x02\x02" +
		"\x02\u0112\u010F\x03\x02\x02\x02\u0113\u0116\x03\x02\x02\x02\u0114\u0112" +
		"\x03\x02\x02\x02\u0114\u0115\x03\x02\x02\x02\u0115\x07\x03\x02\x02\x02" +
		"\u0116\u0114\x03\x02\x02\x02\u0117\u011C\x07D\x02\x02\u0118\u011C\x07" +
		"C\x02\x02\u0119\u011C\x07F\x02\x02\u011A\u011C\x07E\x02\x02\u011B\u0117" +
		"\x03\x02\x02\x02\u011B\u0118\x03\x02\x02\x02\u011B\u0119\x03\x02\x02\x02" +
		"\u011B\u011A\x03\x02\x02\x02\u011C\t\x03\x02\x02\x02\u011D\u011E\x07-" +
		"\x02\x02\u011E\u012C\x05\x04\x03\x02\u011F\u0121\x07-\x02\x02\u0120\u011F" +
		"\x03\x02\x02\x02\u0120\u0121\x03\x02\x02\x02\u0121\u0122\x03\x02\x02\x02" +
		"\u0122\u0123\x07I\x02\x02\u0123\u0126\x07\x03\x02\x02\u0124\u0127\x05" +
		"\x04\x03\x02\u0125\u0127\x07I\x02\x02\u0126\u0124\x03\x02\x02\x02\u0126" +
		"\u0125\x03\x02\x02\x02\u0127\u0128\x03\x02\x02\x02\u0128\u0126\x03\x02" +
		"\x02\x02\u0128\u0129\x03\x02\x02\x02\u0129\u012A\x03\x02\x02\x02\u012A" +
		"\u012C\x07\x04\x02\x02\u012B\u011D\x03\x02\x02\x02\u012B\u0120\x03\x02" +
		"\x02\x02\u012C\v\x03\x02\x02\x02\u012D\u012E\x07I\x02\x02\u012E\u0131" +
		"\x07\x03\x02\x02\u012F\u0132\x05\x12\n\x02\u0130\u0132\x07I\x02\x02\u0131" +
		"\u012F\x03\x02\x02\x02\u0131\u0130\x03\x02\x02\x02\u0132\u0133\x03\x02" +
		"\x02\x02\u0133\u0131\x03\x02\x02\x02\u0133\u0134\x03\x02\x02\x02\u0134" +
		"\u0135\x03\x02\x02\x02\u0135\u0136\x07\x04\x02\x02\u0136\r\x03\x02\x02" +
		"\x02\u0137\u0138\x05\x06\x04\x02\u0138\u0139\x07-\x02\x02\u0139\u013B" +
		"\x03\x02\x02\x02\u013A\u0137\x03\x02\x02\x02\u013A\u013B\x03\x02\x02\x02" +
		"\u013B\u013C\x03\x02\x02\x02\u013C\u013D\x05\x06\x04\x02\u013D\x0F\x03" +
		"\x02\x02\x02\u013E\u0143\x05\x12\n\x02\u013F\u0140\x07.\x02\x02\u0140" +
		"\u0142\x05\x12\n\x02\u0141\u013F\x03\x02\x02\x02\u0142\u0145\x03\x02\x02" +
		"\x02\u0143\u0141\x03\x02\x02\x02\u0143\u0144\x03\x02\x02\x02\u0144\u0147" +
		"\x03\x02\x02\x02\u0145\u0143\x03\x02\x02\x02\u0146\u0148\x07.\x02\x02" +
		"\u0147\u0146\x03\x02\x02\x02\u0147\u0148\x03\x02\x02\x02\u0148\x11\x03" +
		"\x02\x02\x02\u0149\u014B\x07@\x02\x02\u014A\u0149\x03\x02\x02\x02\u014A" +
		"\u014B\x03\x02\x02\x02\u014B\u014C\x03\x02\x02\x02\u014C\u014D\x05\x16" +
		"\f\x02\u014D\u014E\x05\x06\x04\x02\u014E\u014F\x05\n\x06\x02\u014F\u0161" +
		"\x03\x02\x02\x02\u0150\u0152\x07@\x02\x02\u0151\u0150\x03\x02\x02\x02" +
		"\u0151\u0152\x03\x02\x02\x02\u0152\u0153\x03\x02\x02\x02\u0153\u0154\x05" +
		"\x16\f\x02\u0154\u0155\x05\x06\x04\x02\u0155\u0161\x03\x02\x02\x02\u0156" +
		"\u0158\x07@\x02\x02\u0157\u0156\x03\x02\x02\x02\u0157\u0158\x03\x02\x02" +
		"\x02\u0158\u0159\x03\x02\x02\x02\u0159\u015A\x05\x16\f\x02\u015A\u015B" +
		"\x05\n\x06\x02\u015B\u0161\x03\x02\x02\x02\u015C\u015E\x07@\x02\x02\u015D" +
		"\u015C\x03\x02\x02\x02\u015D\u015E\x03\x02\x02\x02\u015E\u015F\x03\x02" +
		"\x02\x02\u015F\u0161\x05\x16\f\x02\u0160\u014A\x03\x02\x02\x02\u0160\u0151" +
		"\x03\x02\x02\x02\u0160\u0157\x03\x02\x02\x02\u0160\u015D\x03\x02\x02\x02" +
		"\u0161\x13\x03\x02\x02\x02\u0162\u0163\t\b\x02\x02\u0163\x15\x03\x02\x02" +
		"\x02\u0164\u0167\x07H\x02\x02\u0165\u0167\x05\x18\r\x02\u0166\u0164\x03" +
		"\x02\x02\x02\u0166\u0165\x03\x02\x02\x02\u0167\u0178\x03\x02\x02\x02\u0168" +
		"\u0169\x076\x02\x02\u0169\u016A\x07;\x02\x02\u016A\u016F\x05\x12\n\x02" +
		"\u016B\u016C\x07.\x02\x02\u016C\u016E\x05\x12\n\x02\u016D\u016B\x03\x02" +
		"\x02\x02\u016E\u0171\x03\x02\x02\x02\u016F\u016D\x03\x02\x02\x02\u016F" +
		"\u0170\x03\x02\x02\x02\u0170\u0173\x03\x02\x02\x02\u0171\u016F\x03\x02" +
		"\x02\x02\u0172\u0174\x07.\x02\x02\u0173\u0172\x03\x02\x02\x02\u0173\u0174" +
		"\x03\x02\x02\x02\u0174\u0175\x03\x02\x02\x02\u0175\u0176\x07;\x02\x02" +
		"\u0176\u0177\x073\x02\x02\u0177\u0179\x03\x02\x02\x02\u0178\u0168\x03" +
		"\x02\x02\x02\u0178\u0179\x03\x02\x02\x02\u0179\x17\x03\x02\x02\x02\u017A" +
		"\u017B\t\t\x02\x02\u017B\x19\x03\x02\x02\x02<\x1C\x1E)-59LQXbekntz\x81" +
		"\x8B\x8F\x91\x9A\x9E\xA0\xAE\xB2\xB4\xB8\xC0\xC4\xC6\xCA\xD0\xF4\xF8\xFA" +
		"\u0104\u0108\u010A\u0112\u0114\u011B\u0120\u0126\u0128\u012B\u0131\u0133" +
		"\u013A\u0143\u0147\u014A\u0151\u0157\u015D\u0160\u0166\u016F\u0173\u0178";
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


