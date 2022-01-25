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
	public static readonly AND = 11;
	public static readonly AS = 12;
	public static readonly BREAK = 13;
	public static readonly CLASS = 14;
	public static readonly DO = 15;
	public static readonly ELSE = 16;
	public static readonly ENUM = 17;
	public static readonly EXPECT = 18;
	public static readonly EXPORT = 19;
	public static readonly EXTENSION = 20;
	public static readonly FACTORY = 21;
	public static readonly FOR = 22;
	public static readonly IF = 23;
	public static readonly IMPORT = 24;
	public static readonly IN = 25;
	public static readonly INFIX = 26;
	public static readonly IS = 27;
	public static readonly MODEL = 28;
	public static readonly NOT = 29;
	public static readonly OBJECT = 30;
	public static readonly OR = 31;
	public static readonly POSTFIX = 32;
	public static readonly PREFIX = 33;
	public static readonly RETURN = 34;
	public static readonly TYPE = 35;
	public static readonly WHILE = 36;
	public static readonly AMPERSAND = 37;
	public static readonly ASSIGN = 38;
	public static readonly ASTERISK = 39;
	public static readonly AT = 40;
	public static readonly BACK_SLASH = 41;
	public static readonly CARET = 42;
	public static readonly COALESCING = 43;
	public static readonly COLON = 44;
	public static readonly COMMA = 45;
	public static readonly DOT = 46;
	public static readonly EQUAL = 47;
	public static readonly EXCLAMATION = 48;
	public static readonly GREAT_EQUAL = 49;
	public static readonly GREAT = 50;
	public static readonly HASH = 51;
	public static readonly LESS_EQUAL = 52;
	public static readonly LESS = 53;
	public static readonly MINUS = 54;
	public static readonly MODULO = 55;
	public static readonly NOT_EQUAL = 56;
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
		"'abstract'", "'actual'", "'and'", "'as'", "'break'", "'class'", "'do'", 
		"'else'", "'enum'", "'expect'", "'export'", "'extension'", "'factory'", 
		"'for'", "'if'", "'import'", "'in'", "'infix'", "'is'", "'model'", "'not'", 
		"'object'", "'or'", "'postfix'", "'prefix'", "'return'", "'type'", "'while'", 
		"'&'", "'='", "'*'", "'@'", "'\\'", "'^'", "'?.'", "':'", "','", "'.'", 
		"'=='", "'!'", "'>='", "'>'", "'#'", "'<='", "'<'", "'-'", "'%'", "'!='", 
		"'|'", "'+'", "'?'", "'..'", "'/'", "'...'", "'~'", "'_'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "INDENT", "DEDENT", "OPEN_BRACKET", "CLOSE_BRACKET", "OPEN_PAREN", 
		"CLOSE_PAREN", "OPEN_BRACE", "CLOSE_BRACE", "ABSTRACT", "ACTUAL", "AND", 
		"AS", "BREAK", "CLASS", "DO", "ELSE", "ENUM", "EXPECT", "EXPORT", "EXTENSION", 
		"FACTORY", "FOR", "IF", "IMPORT", "IN", "INFIX", "IS", "MODEL", "NOT", 
		"OBJECT", "OR", "POSTFIX", "PREFIX", "RETURN", "TYPE", "WHILE", "AMPERSAND", 
		"ASSIGN", "ASTERISK", "AT", "BACK_SLASH", "CARET", "COALESCING", "COLON", 
		"COMMA", "DOT", "EQUAL", "EXCLAMATION", "GREAT_EQUAL", "GREAT", "HASH", 
		"LESS_EQUAL", "LESS", "MINUS", "MODULO", "NOT_EQUAL", "PIPE", "PLUS", 
		"QUESTION", "RANGE", "SLASH", "SPREAD", "TILDE", "UNDERSCORE", "FLOAT_LITERAL", 
		"INTEGER_LITERAL", "REGEX_LITERAL", "STRING_LITERAL", "PREPROCESSOR", 
		"ID", "NL", "WS", "BLOCK_COMMENT", "LINE_COMMENT", "UNEXPECTED",
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
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.ACTUAL) | (1 << XonParser.AS) | (1 << XonParser.BREAK) | (1 << XonParser.DO) | (1 << XonParser.EXPORT) | (1 << XonParser.FACTORY) | (1 << XonParser.FOR) | (1 << XonParser.IF) | (1 << XonParser.IMPORT) | (1 << XonParser.IN) | (1 << XonParser.IS) | (1 << XonParser.MODEL) | (1 << XonParser.NOT) | (1 << XonParser.OBJECT))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (XonParser.RETURN - 34)) | (1 << (XonParser.WHILE - 34)) | (1 << (XonParser.ASSIGN - 34)) | (1 << (XonParser.ASTERISK - 34)) | (1 << (XonParser.CARET - 34)) | (1 << (XonParser.GREAT - 34)) | (1 << (XonParser.LESS - 34)) | (1 << (XonParser.MINUS - 34)) | (1 << (XonParser.MODULO - 34)) | (1 << (XonParser.PLUS - 34)) | (1 << (XonParser.SLASH - 34)) | (1 << (XonParser.SPREAD - 34)) | (1 << (XonParser.FLOAT_LITERAL - 34)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (XonParser.INTEGER_LITERAL - 66)) | (1 << (XonParser.REGEX_LITERAL - 66)) | (1 << (XonParser.STRING_LITERAL - 66)) | (1 << (XonParser.PREPROCESSOR - 66)) | (1 << (XonParser.ID - 66)) | (1 << (XonParser.NL - 66)))) !== 0)) {
				{
				this.state = 26;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case XonParser.OPEN_BRACKET:
				case XonParser.OPEN_PAREN:
				case XonParser.OPEN_BRACE:
				case XonParser.ACTUAL:
				case XonParser.AS:
				case XonParser.BREAK:
				case XonParser.DO:
				case XonParser.EXPORT:
				case XonParser.FACTORY:
				case XonParser.FOR:
				case XonParser.IF:
				case XonParser.IMPORT:
				case XonParser.IN:
				case XonParser.IS:
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
			switch ( this.interpreter.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				_localctx = new ImportStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 31;
				this.match(XonParser.IMPORT);
				this.state = 32;
				(_localctx as ImportStatementContext)._path = this.expr(0);
				this.state = 45;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COLON) {
					{
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
				}

				}
				break;

			case 2:
				_localctx = new ExportStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 47;
				this.match(XonParser.EXPORT);
				this.state = 48;
				(_localctx as ExportStatementContext)._path = this.expr(0);
				}
				break;

			case 3:
				_localctx = new ForStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 49;
				this.match(XonParser.FOR);
				this.state = 57;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 6, this._ctx) ) {
				case 1:
					{
					this.state = 50;
					(_localctx as ForStatementContext)._value = this.parameter();
					this.state = 53;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if (_la === XonParser.COMMA) {
						{
						this.state = 51;
						this.match(XonParser.COMMA);
						this.state = 52;
						(_localctx as ForStatementContext)._index = this.parameter();
						}
					}

					this.state = 55;
					this.match(XonParser.IN);
					}
					break;
				}
				this.state = 59;
				this.expr(0);
				this.state = 60;
				this.body();
				}
				break;

			case 4:
				_localctx = new WhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 62;
				this.match(XonParser.WHILE);
				this.state = 63;
				this.expr(0);
				this.state = 64;
				this.body();
				}
				break;

			case 5:
				_localctx = new DoWhileStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 66;
				this.match(XonParser.DO);
				this.state = 67;
				this.body();
				this.state = 68;
				this.match(XonParser.WHILE);
				this.state = 69;
				this.expr(0);
				}
				break;

			case 6:
				_localctx = new IfStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 71;
				this.match(XonParser.IF);
				this.state = 72;
				this.expr(0);
				this.state = 73;
				(_localctx as IfStatementContext)._thenBody = this.body();
				this.state = 76;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 7, this._ctx) ) {
				case 1:
					{
					this.state = 74;
					this.match(XonParser.ELSE);
					this.state = 75;
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
				this.state = 78;
				this.match(XonParser.BREAK);
				}
				break;

			case 8:
				_localctx = new ReturnStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 79;
				this.match(XonParser.RETURN);
				this.state = 81;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 8, this._ctx) ) {
				case 1:
					{
					this.state = 80;
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
				this.state = 83;
				this.match(XonParser.ACTUAL);
				this.state = 84;
				(_localctx as AssertStatementContext)._actual = this.expr(0);
				this.state = 86;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 85;
					this.match(XonParser.NL);
					}
					}
					this.state = 88;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === XonParser.NL);
				this.state = 90;
				this.match(XonParser.EXPECT);
				this.state = 91;
				(_localctx as AssertStatementContext)._expect = this.expr(0);
				}
				break;

			case 10:
				_localctx = new PreprocessorStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 93;
				this.match(XonParser.PREPROCESSOR);
				}
				break;

			case 11:
				_localctx = new ModelStatementContext(_localctx);
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 94;
				this.match(XonParser.MODEL);
				this.state = 95;
				(_localctx as ModelStatementContext)._name = this.id();
				this.state = 98;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 10, this._ctx) ) {
				case 1:
					{
					this.state = 96;
					this.match(XonParser.IS);
					this.state = 97;
					(_localctx as ModelStatementContext)._base = this.id();
					}
					break;
				}
				this.state = 101;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 11, this._ctx) ) {
				case 1:
					{
					this.state = 100;
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
				this.state = 103;
				this.match(XonParser.OBJECT);
				this.state = 104;
				(_localctx as ObjectStatementContext)._name = this.id();
				this.state = 107;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 12, this._ctx) ) {
				case 1:
					{
					this.state = 105;
					this.match(XonParser.IS);
					this.state = 106;
					(_localctx as ObjectStatementContext)._base = this.id();
					}
					break;
				}
				this.state = 110;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 13, this._ctx) ) {
				case 1:
					{
					this.state = 109;
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
				this.state = 112;
				this.match(XonParser.FACTORY);
				this.state = 113;
				(_localctx as FactoryStatementContext)._name = this.id();
				this.state = 114;
				this.match(XonParser.OPEN_PAREN);
				this.state = 116;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (((((_la - 12)) & ~0x1F) === 0 && ((1 << (_la - 12)) & ((1 << (XonParser.AS - 12)) | (1 << (XonParser.IN - 12)) | (1 << (XonParser.IS - 12)) | (1 << (XonParser.ASSIGN - 12)) | (1 << (XonParser.ASTERISK - 12)) | (1 << (XonParser.CARET - 12)))) !== 0) || ((((_la - 50)) & ~0x1F) === 0 && ((1 << (_la - 50)) & ((1 << (XonParser.GREAT - 50)) | (1 << (XonParser.LESS - 50)) | (1 << (XonParser.MINUS - 50)) | (1 << (XonParser.MODULO - 50)) | (1 << (XonParser.PLUS - 50)) | (1 << (XonParser.SLASH - 50)) | (1 << (XonParser.SPREAD - 50)) | (1 << (XonParser.ID - 50)))) !== 0)) {
					{
					this.state = 115;
					this.parameters();
					}
				}

				this.state = 118;
				this.match(XonParser.CLOSE_PAREN);
				this.state = 120;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input, 15, this._ctx) ) {
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
			this.state = 202;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 29, this._ctx) ) {
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
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.AS) | (1 << XonParser.IN) | (1 << XonParser.IS) | (1 << XonParser.NOT))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (XonParser.ASSIGN - 38)) | (1 << (XonParser.ASTERISK - 38)) | (1 << (XonParser.CARET - 38)) | (1 << (XonParser.GREAT - 38)) | (1 << (XonParser.LESS - 38)) | (1 << (XonParser.MINUS - 38)) | (1 << (XonParser.MODULO - 38)) | (1 << (XonParser.PLUS - 38)) | (1 << (XonParser.SLASH - 38)) | (1 << (XonParser.SPREAD - 38)) | (1 << (XonParser.FLOAT_LITERAL - 38)) | (1 << (XonParser.INTEGER_LITERAL - 38)) | (1 << (XonParser.REGEX_LITERAL - 38)) | (1 << (XonParser.STRING_LITERAL - 38)))) !== 0) || _la === XonParser.ID) {
					{
					this.state = 132;
					this.arrayItem();
					this.state = 137;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
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
						_alt = this.interpreter.adaptivePredict(this._input, 17, this._ctx);
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
				if (((((_la - 12)) & ~0x1F) === 0 && ((1 << (_la - 12)) & ((1 << (XonParser.AS - 12)) | (1 << (XonParser.IN - 12)) | (1 << (XonParser.IS - 12)) | (1 << (XonParser.ASSIGN - 12)) | (1 << (XonParser.ASTERISK - 12)) | (1 << (XonParser.CARET - 12)))) !== 0) || ((((_la - 50)) & ~0x1F) === 0 && ((1 << (_la - 50)) & ((1 << (XonParser.GREAT - 50)) | (1 << (XonParser.LESS - 50)) | (1 << (XonParser.MINUS - 50)) | (1 << (XonParser.MODULO - 50)) | (1 << (XonParser.PLUS - 50)) | (1 << (XonParser.SLASH - 50)) | (1 << (XonParser.SPREAD - 50)) | (1 << (XonParser.ID - 50)))) !== 0)) {
					{
					this.state = 147;
					this.parameter();
					this.state = 152;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
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
						_alt = this.interpreter.adaptivePredict(this._input, 20, this._ctx);
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
				if (!(((((_la - 29)) & ~0x1F) === 0 && ((1 << (_la - 29)) & ((1 << (XonParser.NOT - 29)) | (1 << (XonParser.MINUS - 29)) | (1 << (XonParser.PLUS - 29)))) !== 0))) {
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
				if (((((_la - 12)) & ~0x1F) === 0 && ((1 << (_la - 12)) & ((1 << (XonParser.AS - 12)) | (1 << (XonParser.IN - 12)) | (1 << (XonParser.IS - 12)) | (1 << (XonParser.ASSIGN - 12)) | (1 << (XonParser.ASTERISK - 12)) | (1 << (XonParser.CARET - 12)))) !== 0) || ((((_la - 50)) & ~0x1F) === 0 && ((1 << (_la - 50)) & ((1 << (XonParser.GREAT - 50)) | (1 << (XonParser.LESS - 50)) | (1 << (XonParser.MINUS - 50)) | (1 << (XonParser.MODULO - 50)) | (1 << (XonParser.PLUS - 50)) | (1 << (XonParser.SLASH - 50)) | (1 << (XonParser.SPREAD - 50)) | (1 << (XonParser.ID - 50)))) !== 0)) {
					{
					this.state = 167;
					this.parameter();
					this.state = 172;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
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
						_alt = this.interpreter.adaptivePredict(this._input, 23, this._ctx);
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
				this.state = 181;
				this.expr(3);
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
				if (((((_la - 12)) & ~0x1F) === 0 && ((1 << (_la - 12)) & ((1 << (XonParser.AS - 12)) | (1 << (XonParser.IN - 12)) | (1 << (XonParser.IS - 12)) | (1 << (XonParser.ASSIGN - 12)) | (1 << (XonParser.ASTERISK - 12)) | (1 << (XonParser.CARET - 12)))) !== 0) || ((((_la - 50)) & ~0x1F) === 0 && ((1 << (_la - 50)) & ((1 << (XonParser.GREAT - 50)) | (1 << (XonParser.LESS - 50)) | (1 << (XonParser.MINUS - 50)) | (1 << (XonParser.MODULO - 50)) | (1 << (XonParser.PLUS - 50)) | (1 << (XonParser.SLASH - 50)) | (1 << (XonParser.SPREAD - 50)) | (1 << (XonParser.ID - 50)))) !== 0)) {
					{
					this.state = 183;
					this.parameter();
					this.state = 188;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
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
						_alt = this.interpreter.adaptivePredict(this._input, 26, this._ctx);
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
				this.state = 197;
				this.expr(2);
				}
				break;

			case 9:
				{
				_localctx = new ParenthesizedExpressionContext(_localctx);
				this._ctx = _localctx;
				_prevctx = _localctx;
				this.state = 198;
				this.match(XonParser.OPEN_PAREN);
				this.state = 199;
				this.expr(0);
				this.state = 200;
				this.match(XonParser.CLOSE_PAREN);
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 270;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 37, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = _localctx;
					{
					this.state = 268;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input, 36, this._ctx) ) {
					case 1:
						{
						_localctx = new PowExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as PowExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 204;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 205;
						(_localctx as PowExpressionContext)._op = this.match(XonParser.CARET);
						this.state = 206;
						(_localctx as PowExpressionContext)._right = this.expr(14);
						}
						break;

					case 2:
						{
						_localctx = new MulDivModExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as MulDivModExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 207;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 208;
						(_localctx as MulDivModExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 39)) & ~0x1F) === 0 && ((1 << (_la - 39)) & ((1 << (XonParser.ASTERISK - 39)) | (1 << (XonParser.MODULO - 39)) | (1 << (XonParser.SLASH - 39)))) !== 0))) {
							(_localctx as MulDivModExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 209;
						(_localctx as MulDivModExpressionContext)._right = this.expr(13);
						}
						break;

					case 3:
						{
						_localctx = new AddSubExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as AddSubExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 210;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 211;
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
						this.state = 212;
						(_localctx as AddSubExpressionContext)._right = this.expr(12);
						}
						break;

					case 4:
						{
						_localctx = new RangeExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as RangeExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 213;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 214;
						(_localctx as RangeExpressionContext)._op = this.match(XonParser.RANGE);
						this.state = 215;
						(_localctx as RangeExpressionContext)._right = this.expr(11);
						}
						break;

					case 5:
						{
						_localctx = new RelationalExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as RelationalExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 216;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 217;
						(_localctx as RelationalExpressionContext)._op = this._input.LT(1);
						_la = this._input.LA(1);
						if (!(((((_la - 49)) & ~0x1F) === 0 && ((1 << (_la - 49)) & ((1 << (XonParser.GREAT_EQUAL - 49)) | (1 << (XonParser.GREAT - 49)) | (1 << (XonParser.LESS_EQUAL - 49)) | (1 << (XonParser.LESS - 49)))) !== 0))) {
							(_localctx as RelationalExpressionContext)._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 218;
						(_localctx as RelationalExpressionContext)._right = this.expr(10);
						}
						break;

					case 6:
						{
						_localctx = new EqualityExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as EqualityExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 219;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 220;
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
						this.state = 221;
						(_localctx as EqualityExpressionContext)._right = this.expr(9);
						}
						break;

					case 7:
						{
						_localctx = new InfixExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as InfixExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 222;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 223;
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
						this.state = 224;
						(_localctx as InfixExpressionContext)._right = this.expr(8);
						}
						break;

					case 8:
						{
						_localctx = new AndExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as AndExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 225;
						if (!(this.precpred(this._ctx, 6))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 6)");
						}
						this.state = 226;
						(_localctx as AndExpressionContext)._op = this.match(XonParser.AND);
						this.state = 227;
						(_localctx as AndExpressionContext)._right = this.expr(7);
						}
						break;

					case 9:
						{
						_localctx = new OrExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as OrExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 228;
						if (!(this.precpred(this._ctx, 5))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 5)");
						}
						this.state = 229;
						(_localctx as OrExpressionContext)._op = this.match(XonParser.OR);
						this.state = 230;
						(_localctx as OrExpressionContext)._right = this.expr(6);
						}
						break;

					case 10:
						{
						_localctx = new InvokeExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as InvokeExpressionContext)._instance = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 231;
						if (!(this.precpred(this._ctx, 19))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 19)");
						}
						this.state = 232;
						this.match(XonParser.OPEN_PAREN);
						this.state = 244;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.AS) | (1 << XonParser.IN) | (1 << XonParser.IS) | (1 << XonParser.NOT))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (XonParser.ASSIGN - 38)) | (1 << (XonParser.ASTERISK - 38)) | (1 << (XonParser.CARET - 38)) | (1 << (XonParser.GREAT - 38)) | (1 << (XonParser.LESS - 38)) | (1 << (XonParser.MINUS - 38)) | (1 << (XonParser.MODULO - 38)) | (1 << (XonParser.PLUS - 38)) | (1 << (XonParser.SLASH - 38)) | (1 << (XonParser.SPREAD - 38)) | (1 << (XonParser.FLOAT_LITERAL - 38)) | (1 << (XonParser.INTEGER_LITERAL - 38)) | (1 << (XonParser.REGEX_LITERAL - 38)) | (1 << (XonParser.STRING_LITERAL - 38)))) !== 0) || _la === XonParser.ID) {
							{
							this.state = 233;
							(_localctx as InvokeExpressionContext)._expr = this.expr(0);
							(_localctx as InvokeExpressionContext)._args.push((_localctx as InvokeExpressionContext)._expr);
							this.state = 238;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
							while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
								if (_alt === 1) {
									{
									{
									this.state = 234;
									this.match(XonParser.COMMA);
									this.state = 235;
									(_localctx as InvokeExpressionContext)._expr = this.expr(0);
									(_localctx as InvokeExpressionContext)._args.push((_localctx as InvokeExpressionContext)._expr);
									}
									}
								}
								this.state = 240;
								this._errHandler.sync(this);
								_alt = this.interpreter.adaptivePredict(this._input, 30, this._ctx);
							}
							this.state = 242;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === XonParser.COMMA) {
								{
								this.state = 241;
								this.match(XonParser.COMMA);
								}
							}

							}
						}

						this.state = 246;
						this.match(XonParser.CLOSE_PAREN);
						}
						break;

					case 11:
						{
						_localctx = new IndexExpressionContext(new ExprContext(_parentctx, _parentState));
						(_localctx as IndexExpressionContext)._instance = _prevctx;
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 247;
						if (!(this.precpred(this._ctx, 18))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 18)");
						}
						this.state = 248;
						this.match(XonParser.OPEN_BRACKET);
						this.state = 260;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
						if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.AS) | (1 << XonParser.IN) | (1 << XonParser.IS) | (1 << XonParser.NOT))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (XonParser.ASSIGN - 38)) | (1 << (XonParser.ASTERISK - 38)) | (1 << (XonParser.CARET - 38)) | (1 << (XonParser.GREAT - 38)) | (1 << (XonParser.LESS - 38)) | (1 << (XonParser.MINUS - 38)) | (1 << (XonParser.MODULO - 38)) | (1 << (XonParser.PLUS - 38)) | (1 << (XonParser.SLASH - 38)) | (1 << (XonParser.SPREAD - 38)) | (1 << (XonParser.FLOAT_LITERAL - 38)) | (1 << (XonParser.INTEGER_LITERAL - 38)) | (1 << (XonParser.REGEX_LITERAL - 38)) | (1 << (XonParser.STRING_LITERAL - 38)))) !== 0) || _la === XonParser.ID) {
							{
							this.state = 249;
							(_localctx as IndexExpressionContext)._expr = this.expr(0);
							(_localctx as IndexExpressionContext)._args.push((_localctx as IndexExpressionContext)._expr);
							this.state = 254;
							this._errHandler.sync(this);
							_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
							while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
								if (_alt === 1) {
									{
									{
									this.state = 250;
									this.match(XonParser.COMMA);
									this.state = 251;
									(_localctx as IndexExpressionContext)._expr = this.expr(0);
									(_localctx as IndexExpressionContext)._args.push((_localctx as IndexExpressionContext)._expr);
									}
									}
								}
								this.state = 256;
								this._errHandler.sync(this);
								_alt = this.interpreter.adaptivePredict(this._input, 33, this._ctx);
							}
							this.state = 258;
							this._errHandler.sync(this);
							_la = this._input.LA(1);
							if (_la === XonParser.COMMA) {
								{
								this.state = 257;
								this.match(XonParser.COMMA);
								}
							}

							}
						}

						this.state = 262;
						this.match(XonParser.CLOSE_BRACKET);
						}
						break;

					case 12:
						{
						_localctx = new NullableExpressionContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 263;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 264;
						this.match(XonParser.QUESTION);
						}
						break;

					case 13:
						{
						_localctx = new MemberExpressionContext(new ExprContext(_parentctx, _parentState));
						this.pushNewRecursionContext(_localctx, _startState, XonParser.RULE_expr);
						this.state = 265;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 266;
						this.match(XonParser.DOT);
						this.state = 267;
						this.id();
						}
						break;
					}
					}
				}
				this.state = 272;
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
			this.state = 277;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.INTEGER_LITERAL:
				_localctx = new IntegerLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 273;
				this.match(XonParser.INTEGER_LITERAL);
				}
				break;
			case XonParser.FLOAT_LITERAL:
				_localctx = new FloatLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 274;
				this.match(XonParser.FLOAT_LITERAL);
				}
				break;
			case XonParser.STRING_LITERAL:
				_localctx = new StringLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 275;
				this.match(XonParser.STRING_LITERAL);
				}
				break;
			case XonParser.REGEX_LITERAL:
				_localctx = new RegexLiteralContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 276;
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
			this.state = 293;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 42, this._ctx) ) {
			case 1:
				_localctx = new SingleBodyContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 279;
				this.match(XonParser.COLON);
				this.state = 280;
				this.statement();
				}
				break;

			case 2:
				_localctx = new MultipleBodyContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 282;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COLON) {
					{
					this.state = 281;
					this.match(XonParser.COLON);
					}
				}

				this.state = 284;
				this.match(XonParser.NL);
				this.state = 285;
				this.match(XonParser.INDENT);
				this.state = 288;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					this.state = 288;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case XonParser.OPEN_BRACKET:
					case XonParser.OPEN_PAREN:
					case XonParser.OPEN_BRACE:
					case XonParser.ACTUAL:
					case XonParser.AS:
					case XonParser.BREAK:
					case XonParser.DO:
					case XonParser.EXPORT:
					case XonParser.FACTORY:
					case XonParser.FOR:
					case XonParser.IF:
					case XonParser.IMPORT:
					case XonParser.IN:
					case XonParser.IS:
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
						this.state = 286;
						this.statement();
						}
						break;
					case XonParser.NL:
						{
						this.state = 287;
						this.match(XonParser.NL);
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
					this.state = 290;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.OPEN_BRACKET) | (1 << XonParser.OPEN_PAREN) | (1 << XonParser.OPEN_BRACE) | (1 << XonParser.ACTUAL) | (1 << XonParser.AS) | (1 << XonParser.BREAK) | (1 << XonParser.DO) | (1 << XonParser.EXPORT) | (1 << XonParser.FACTORY) | (1 << XonParser.FOR) | (1 << XonParser.IF) | (1 << XonParser.IMPORT) | (1 << XonParser.IN) | (1 << XonParser.IS) | (1 << XonParser.MODEL) | (1 << XonParser.NOT) | (1 << XonParser.OBJECT))) !== 0) || ((((_la - 34)) & ~0x1F) === 0 && ((1 << (_la - 34)) & ((1 << (XonParser.RETURN - 34)) | (1 << (XonParser.WHILE - 34)) | (1 << (XonParser.ASSIGN - 34)) | (1 << (XonParser.ASTERISK - 34)) | (1 << (XonParser.CARET - 34)) | (1 << (XonParser.GREAT - 34)) | (1 << (XonParser.LESS - 34)) | (1 << (XonParser.MINUS - 34)) | (1 << (XonParser.MODULO - 34)) | (1 << (XonParser.PLUS - 34)) | (1 << (XonParser.SLASH - 34)) | (1 << (XonParser.SPREAD - 34)) | (1 << (XonParser.FLOAT_LITERAL - 34)))) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & ((1 << (XonParser.INTEGER_LITERAL - 66)) | (1 << (XonParser.REGEX_LITERAL - 66)) | (1 << (XonParser.STRING_LITERAL - 66)) | (1 << (XonParser.PREPROCESSOR - 66)) | (1 << (XonParser.ID - 66)) | (1 << (XonParser.NL - 66)))) !== 0));
				this.state = 292;
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
			this.state = 295;
			this.match(XonParser.NL);
			this.state = 296;
			this.match(XonParser.INDENT);
			this.state = 299;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				this.state = 299;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case XonParser.AS:
				case XonParser.IN:
				case XonParser.IS:
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
					this.state = 297;
					this.parameter();
					}
					break;
				case XonParser.NL:
					{
					this.state = 298;
					this.match(XonParser.NL);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				this.state = 301;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 12)) & ~0x1F) === 0 && ((1 << (_la - 12)) & ((1 << (XonParser.AS - 12)) | (1 << (XonParser.IN - 12)) | (1 << (XonParser.IS - 12)) | (1 << (XonParser.ASSIGN - 12)) | (1 << (XonParser.ASTERISK - 12)) | (1 << (XonParser.CARET - 12)))) !== 0) || ((((_la - 50)) & ~0x1F) === 0 && ((1 << (_la - 50)) & ((1 << (XonParser.GREAT - 50)) | (1 << (XonParser.LESS - 50)) | (1 << (XonParser.MINUS - 50)) | (1 << (XonParser.MODULO - 50)) | (1 << (XonParser.PLUS - 50)) | (1 << (XonParser.SLASH - 50)) | (1 << (XonParser.SPREAD - 50)) | (1 << (XonParser.ID - 50)) | (1 << (XonParser.NL - 50)))) !== 0));
			this.state = 303;
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
			this.state = 308;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 45, this._ctx) ) {
			case 1:
				{
				this.state = 305;
				this.expr(0);
				this.state = 306;
				this.match(XonParser.COLON);
				}
				break;
			}
			this.state = 310;
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
			this.state = 312;
			this.parameter();
			this.state = 317;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 313;
					this.match(XonParser.COMMA);
					this.state = 314;
					this.parameter();
					}
					}
				}
				this.state = 319;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 46, this._ctx);
			}
			this.state = 321;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === XonParser.COMMA) {
				{
				this.state = 320;
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
			this.state = 346;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 52, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 324;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.SPREAD) {
					{
					this.state = 323;
					this.match(XonParser.SPREAD);
					}
				}

				this.state = 326;
				this.id();
				this.state = 327;
				this.expr(0);
				this.state = 328;
				this.body();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 331;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.SPREAD) {
					{
					this.state = 330;
					this.match(XonParser.SPREAD);
					}
				}

				this.state = 333;
				this.id();
				this.state = 334;
				this.expr(0);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 337;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.SPREAD) {
					{
					this.state = 336;
					this.match(XonParser.SPREAD);
					}
				}

				this.state = 339;
				this.id();
				this.state = 340;
				this.body();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 343;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.SPREAD) {
					{
					this.state = 342;
					this.match(XonParser.SPREAD);
					}
				}

				this.state = 345;
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
			this.state = 348;
			_la = this._input.LA(1);
			if (!(((((_la - 14)) & ~0x1F) === 0 && ((1 << (_la - 14)) & ((1 << (XonParser.CLASS - 14)) | (1 << (XonParser.ENUM - 14)) | (1 << (XonParser.MODEL - 14)) | (1 << (XonParser.OBJECT - 14)) | (1 << (XonParser.TYPE - 14)))) !== 0))) {
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
			this.state = 352;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case XonParser.ID:
				{
				this.state = 350;
				_localctx._name = this.match(XonParser.ID);
				}
				break;
			case XonParser.AS:
			case XonParser.IN:
			case XonParser.IS:
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
				this.state = 351;
				this.operator();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 370;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 56, this._ctx) ) {
			case 1:
				{
				this.state = 354;
				this.match(XonParser.LESS);
				this.state = 355;
				this.match(XonParser.PIPE);
				this.state = 356;
				this.parameter();
				this.state = 361;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 54, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 357;
						this.match(XonParser.COMMA);
						this.state = 358;
						this.parameter();
						}
						}
					}
					this.state = 363;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 54, this._ctx);
				}
				this.state = 365;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === XonParser.COMMA) {
					{
					this.state = 364;
					this.match(XonParser.COMMA);
					}
				}

				this.state = 367;
				this.match(XonParser.PIPE);
				this.state = 368;
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
			this.state = 372;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << XonParser.AS) | (1 << XonParser.IN) | (1 << XonParser.IS))) !== 0) || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & ((1 << (XonParser.ASSIGN - 38)) | (1 << (XonParser.ASTERISK - 38)) | (1 << (XonParser.CARET - 38)) | (1 << (XonParser.GREAT - 38)) | (1 << (XonParser.LESS - 38)) | (1 << (XonParser.MINUS - 38)) | (1 << (XonParser.MODULO - 38)) | (1 << (XonParser.PLUS - 38)) | (1 << (XonParser.SLASH - 38)))) !== 0))) {
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03M\u0179\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x03" +
		"\x02\x03\x02\x07\x02\x1D\n\x02\f\x02\x0E\x02 \v\x02\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x07\x03(\n\x03\f\x03\x0E\x03+\v\x03\x03\x03" +
		"\x05\x03.\n\x03\x05\x030\n\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x05\x038\n\x03\x03\x03\x03\x03\x05\x03<\n\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x05\x03O\n\x03\x03\x03" +
		"\x03\x03\x03\x03\x05\x03T\n\x03\x03\x03\x03\x03\x03\x03\x06\x03Y\n\x03" +
		"\r\x03\x0E\x03Z\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x05\x03e\n\x03\x03\x03\x05\x03h\n\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x05\x03n\n\x03\x03\x03\x05\x03q\n\x03\x03\x03\x03\x03\x03\x03" +
		"\x03\x03\x05\x03w\n\x03\x03\x03\x03\x03\x05\x03{\n\x03\x03\x03\x03\x03" +
		"\x03\x03\x03\x03\x03\x03\x05\x03\x82\n\x03\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x07\x04\x8A\n\x04\f\x04\x0E\x04\x8D\v\x04\x03\x04" +
		"\x05\x04\x90\n\x04\x05\x04\x92\n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x07\x04\x99\n\x04\f\x04\x0E\x04\x9C\v\x04\x03\x04\x05\x04\x9F\n\x04" +
		"\x05\x04\xA1\n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x03\x04\x07\x04\xAD\n\x04\f\x04\x0E\x04\xB0\v\x04" +
		"\x03\x04\x05\x04\xB3\n\x04\x05\x04\xB5\n\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x07\x04\xBD\n\x04\f\x04\x0E\x04\xC0\v\x04\x03\x04" +
		"\x05\x04\xC3\n\x04\x05\x04\xC5\n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x05\x04\xCD\n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x07\x04\xEF\n\x04\f\x04\x0E\x04\xF2\v\x04\x03\x04\x05\x04\xF5\n\x04\x05" +
		"\x04\xF7\n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04" +
		"\xFF\n\x04\f\x04\x0E\x04\u0102\v\x04\x03\x04\x05\x04\u0105\n\x04\x05\x04" +
		"\u0107\n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x07\x04\u010F" +
		"\n\x04\f\x04\x0E\x04\u0112\v\x04\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05" +
		"\u0118\n\x05\x03\x06\x03\x06\x03\x06\x05\x06\u011D\n\x06\x03\x06\x03\x06" +
		"\x03\x06\x03\x06\x06\x06\u0123\n\x06\r\x06\x0E\x06\u0124\x03\x06\x05\x06" +
		"\u0128\n\x06\x03\x07\x03\x07\x03\x07\x03\x07\x06\x07\u012E\n\x07\r\x07" +
		"\x0E\x07\u012F\x03\x07\x03\x07\x03\b\x03\b\x03\b\x05\b\u0137\n\b\x03\b" +
		"\x03\b\x03\t\x03\t\x03\t\x07\t\u013E\n\t\f\t\x0E\t\u0141\v\t\x03\t\x05" +
		"\t\u0144\n\t\x03\n\x05\n\u0147\n\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n" +
		"\u014E\n\n\x03\n\x03\n\x03\n\x03\n\x05\n\u0154\n\n\x03\n\x03\n\x03\n\x03" +
		"\n\x05\n\u015A\n\n\x03\n\x05\n\u015D\n\n\x03\v\x03\v\x03\f\x03\f\x05\f" +
		"\u0163\n\f\x03\f\x03\f\x03\f\x03\f\x03\f\x07\f\u016A\n\f\f\f\x0E\f\u016D" +
		"\v\f\x03\f\x05\f\u0170\n\f\x03\f\x03\f\x03\f\x05\f\u0175\n\f\x03\r\x03" +
		"\r\x03\r\x02\x02\x03\x06\x0E\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02" +
		"\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x02\n\x05\x02\x1F\x1F" +
		"88<<\x05\x02))99??\x04\x0288<<\x04\x023467\x04\x0211::\x05\x02\x0E\x0E" +
		"\x1B\x1B\x1D\x1D\x07\x02\x10\x10\x13\x13\x1E\x1E  %%\v\x02\x0E\x0E\x1B" +
		"\x1B\x1D\x1D(),,4479<<??\x02\u01C8\x02\x1E\x03\x02\x02\x02\x04\x81\x03" +
		"\x02\x02\x02\x06\xCC\x03\x02\x02\x02\b\u0117\x03\x02\x02\x02\n\u0127\x03" +
		"\x02\x02\x02\f\u0129\x03\x02\x02\x02\x0E\u0136\x03\x02\x02\x02\x10\u013A" +
		"\x03\x02\x02\x02\x12\u015C\x03\x02\x02\x02\x14\u015E\x03\x02\x02\x02\x16" +
		"\u0162\x03\x02\x02\x02\x18\u0176\x03\x02\x02\x02\x1A\x1D\x05\x04\x03\x02" +
		"\x1B\x1D\x07I\x02\x02\x1C\x1A\x03\x02\x02\x02\x1C\x1B\x03\x02\x02\x02" +
		"\x1D \x03\x02\x02\x02\x1E\x1C\x03\x02\x02\x02\x1E\x1F\x03\x02\x02\x02" +
		"\x1F\x03\x03\x02\x02\x02 \x1E\x03\x02\x02\x02!\"\x07\x1A\x02\x02\"/\x05" +
		"\x06\x04\x02#$\x07.\x02\x02$)\x05\x06\x04\x02%&\x07/\x02\x02&(\x05\x06" +
		"\x04\x02\'%\x03\x02\x02\x02(+\x03\x02\x02\x02)\'\x03\x02\x02\x02)*\x03" +
		"\x02\x02\x02*-\x03\x02\x02\x02+)\x03\x02\x02\x02,.\x07/\x02\x02-,\x03" +
		"\x02\x02\x02-.\x03\x02\x02\x02.0\x03\x02\x02\x02/#\x03\x02\x02\x02/0\x03" +
		"\x02\x02\x020\x82\x03\x02\x02\x0212\x07\x15\x02\x022\x82\x05\x06\x04\x02" +
		"3;\x07\x18\x02\x0247\x05\x12\n\x0256\x07/\x02\x0268\x05\x12\n\x0275\x03" +
		"\x02\x02\x0278\x03\x02\x02\x0289\x03\x02\x02\x029:\x07\x1B\x02\x02:<\x03" +
		"\x02\x02\x02;4\x03\x02\x02\x02;<\x03\x02\x02\x02<=\x03\x02\x02\x02=>\x05" +
		"\x06\x04\x02>?\x05\n\x06\x02?\x82\x03\x02\x02\x02@A\x07&\x02\x02AB\x05" +
		"\x06\x04\x02BC\x05\n\x06\x02C\x82\x03\x02\x02\x02DE\x07\x11\x02\x02EF" +
		"\x05\n\x06\x02FG\x07&\x02\x02GH\x05\x06\x04\x02H\x82\x03\x02\x02\x02I" +
		"J\x07\x19\x02\x02JK\x05\x06\x04\x02KN\x05\n\x06\x02LM\x07\x12\x02\x02" +
		"MO\x05\n\x06\x02NL\x03\x02\x02\x02NO\x03\x02\x02\x02O\x82\x03\x02\x02" +
		"\x02P\x82\x07\x0F\x02\x02QS\x07$\x02\x02RT\x05\x06\x04\x02SR\x03\x02\x02" +
		"\x02ST\x03\x02\x02\x02T\x82\x03\x02\x02\x02UV\x07\f\x02\x02VX\x05\x06" +
		"\x04\x02WY\x07I\x02\x02XW\x03\x02\x02\x02YZ\x03\x02\x02\x02ZX\x03\x02" +
		"\x02\x02Z[\x03\x02\x02\x02[\\\x03\x02\x02\x02\\]\x07\x14\x02\x02]^\x05" +
		"\x06\x04\x02^\x82\x03\x02\x02\x02_\x82\x07G\x02\x02`a\x07\x1E\x02\x02" +
		"ad\x05\x16\f\x02bc\x07\x1D\x02\x02ce\x05\x16\f\x02db\x03\x02\x02\x02d" +
		"e\x03\x02\x02\x02eg\x03\x02\x02\x02fh\x05\f\x07\x02gf\x03\x02\x02\x02" +
		"gh\x03\x02\x02\x02h\x82\x03\x02\x02\x02ij\x07 \x02\x02jm\x05\x16\f\x02" +
		"kl\x07\x1D\x02\x02ln\x05\x16\f\x02mk\x03\x02\x02\x02mn\x03\x02\x02\x02" +
		"np\x03\x02\x02\x02oq\x05\f\x07\x02po\x03\x02\x02\x02pq\x03\x02\x02\x02" +
		"q\x82\x03\x02\x02\x02rs\x07\x17\x02\x02st\x05\x16\f\x02tv\x07\x07\x02" +
		"\x02uw\x05\x10\t\x02vu\x03\x02\x02\x02vw\x03\x02\x02\x02wx\x03\x02\x02" +
		"\x02xz\x07\b\x02\x02y{\x05\f\x07\x02zy\x03\x02\x02\x02z{\x03\x02\x02\x02" +
		"{\x82\x03\x02\x02\x02|}\x05\x16\f\x02}~\x07(\x02\x02~\x7F\x05\x06\x04" +
		"\x02\x7F\x82\x03\x02\x02\x02\x80\x82\x05\x06\x04\x02\x81!\x03\x02\x02" +
		"\x02\x811\x03\x02\x02\x02\x813\x03\x02\x02\x02\x81@\x03\x02\x02\x02\x81" +
		"D\x03\x02\x02\x02\x81I\x03\x02\x02\x02\x81P\x03\x02\x02\x02\x81Q\x03\x02" +
		"\x02\x02\x81U\x03\x02\x02\x02\x81_\x03\x02\x02\x02\x81`\x03\x02\x02\x02" +
		"\x81i\x03\x02\x02\x02\x81r\x03\x02\x02\x02\x81|\x03\x02\x02\x02\x81\x80" +
		"\x03\x02\x02\x02\x82\x05\x03\x02\x02\x02\x83\x84\b\x04\x01\x02\x84\xCD" +
		"\x05\x16\f\x02\x85\x91\x07\x05\x02\x02\x86\x8B\x05\x0E\b\x02\x87\x88\x07" +
		"/\x02\x02\x88\x8A\x05\x0E\b\x02\x89\x87\x03\x02\x02\x02\x8A\x8D\x03\x02" +
		"\x02\x02\x8B\x89\x03\x02\x02\x02\x8B\x8C\x03\x02\x02\x02\x8C\x8F\x03\x02" +
		"\x02\x02\x8D\x8B\x03\x02\x02\x02\x8E\x90\x07/\x02\x02\x8F\x8E\x03\x02" +
		"\x02\x02\x8F\x90\x03\x02\x02\x02\x90\x92\x03\x02\x02\x02\x91\x86\x03\x02" +
		"\x02\x02\x91\x92\x03\x02\x02\x02\x92\x93\x03\x02\x02\x02\x93\xCD\x07\x06" +
		"\x02\x02\x94\xA0\x07\t\x02\x02\x95\x9A\x05\x12\n\x02\x96\x97\x07/\x02" +
		"\x02\x97\x99\x05\x12\n\x02\x98\x96\x03\x02\x02\x02\x99\x9C\x03\x02\x02" +
		"\x02\x9A\x98\x03\x02\x02\x02\x9A\x9B\x03\x02\x02\x02\x9B\x9E\x03\x02\x02" +
		"\x02\x9C\x9A\x03\x02\x02\x02\x9D\x9F\x07/\x02\x02\x9E\x9D\x03\x02\x02" +
		"\x02\x9E\x9F\x03\x02\x02\x02\x9F\xA1\x03\x02\x02\x02\xA0\x95\x03\x02\x02" +
		"\x02\xA0\xA1\x03\x02\x02\x02\xA1\xA2\x03\x02\x02\x02\xA2\xCD\x07\n\x02" +
		"\x02\xA3\xA4\x07@\x02\x02\xA4\xCD\x05\x06\x04\x11\xA5\xA6\t\x02\x02\x02" +
		"\xA6\xCD\x05\x06\x04\x10\xA7\xCD\x05\b\x05\x02\xA8\xB4\x07\x07\x02\x02" +
		"\xA9\xAE\x05\x12\n\x02\xAA\xAB\x07/\x02\x02\xAB\xAD\x05\x12\n\x02\xAC" +
		"\xAA\x03\x02\x02\x02\xAD\xB0\x03\x02\x02\x02\xAE\xAC\x03\x02\x02\x02\xAE" +
		"\xAF\x03\x02\x02\x02\xAF\xB2\x03\x02\x02\x02\xB0\xAE\x03\x02\x02\x02\xB1" +
		"\xB3\x07/\x02\x02\xB2\xB1\x03\x02\x02\x02\xB2\xB3\x03\x02\x02\x02\xB3" +
		"\xB5\x03\x02\x02\x02\xB4\xA9\x03\x02\x02\x02\xB4\xB5\x03\x02\x02\x02\xB5" +
		"\xB6\x03\x02\x02\x02\xB6\xB7\x07\b\x02\x02\xB7\xCD\x05\x06\x04\x05\xB8" +
		"\xC4\x07\x05\x02\x02\xB9\xBE\x05\x12\n\x02\xBA\xBB\x07/\x02\x02\xBB\xBD" +
		"\x05\x12\n\x02\xBC\xBA\x03\x02\x02\x02\xBD\xC0\x03\x02\x02\x02\xBE\xBC" +
		"\x03\x02\x02\x02\xBE\xBF\x03\x02\x02\x02\xBF\xC2\x03\x02\x02\x02\xC0\xBE" +
		"\x03\x02\x02\x02\xC1\xC3\x07/\x02\x02\xC2\xC1\x03\x02\x02\x02\xC2\xC3" +
		"\x03\x02\x02\x02\xC3\xC5\x03\x02\x02\x02\xC4\xB9\x03\x02\x02\x02\xC4\xC5" +
		"\x03\x02\x02\x02\xC5\xC6\x03\x02\x02\x02\xC6\xC7\x07\x06\x02\x02\xC7\xCD" +
		"\x05\x06\x04\x04\xC8\xC9\x07\x07\x02\x02\xC9\xCA\x05\x06\x04\x02\xCA\xCB" +
		"\x07\b\x02\x02\xCB\xCD\x03\x02\x02\x02\xCC\x83\x03\x02\x02\x02\xCC\x85" +
		"\x03\x02\x02\x02\xCC\x94\x03\x02\x02\x02\xCC\xA3\x03\x02\x02\x02\xCC\xA5" +
		"\x03\x02\x02\x02\xCC\xA7\x03\x02\x02\x02\xCC\xA8\x03\x02\x02\x02\xCC\xB8" +
		"\x03\x02\x02\x02\xCC\xC8\x03\x02\x02\x02\xCD\u0110\x03\x02\x02\x02\xCE" +
		"\xCF\f\x0F\x02\x02\xCF\xD0\x07,\x02\x02\xD0\u010F\x05\x06\x04\x10\xD1" +
		"\xD2\f\x0E\x02\x02\xD2\xD3\t\x03\x02\x02\xD3\u010F\x05\x06\x04\x0F\xD4" +
		"\xD5\f\r\x02\x02\xD5\xD6\t\x04\x02\x02\xD6\u010F\x05\x06\x04\x0E\xD7\xD8" +
		"\f\f\x02\x02\xD8\xD9\x07>\x02\x02\xD9\u010F\x05\x06\x04\r\xDA\xDB\f\v" +
		"\x02\x02\xDB\xDC\t\x05\x02\x02\xDC\u010F\x05\x06\x04\f\xDD\xDE\f\n\x02" +
		"\x02\xDE\xDF\t\x06\x02\x02\xDF\u010F\x05\x06\x04\v\xE0\xE1\f\t\x02\x02" +
		"\xE1\xE2\t\x07\x02\x02\xE2\u010F\x05\x06\x04\n\xE3\xE4\f\b\x02\x02\xE4" +
		"\xE5\x07\r\x02\x02\xE5\u010F\x05\x06\x04\t\xE6\xE7\f\x07\x02\x02\xE7\xE8" +
		"\x07!\x02\x02\xE8\u010F\x05\x06\x04\b\xE9\xEA\f\x15\x02\x02\xEA\xF6\x07" +
		"\x07\x02\x02\xEB\xF0\x05\x06\x04\x02\xEC\xED\x07/\x02\x02\xED\xEF\x05" +
		"\x06\x04\x02\xEE\xEC\x03\x02\x02\x02\xEF\xF2\x03\x02\x02\x02\xF0\xEE\x03" +
		"\x02\x02\x02\xF0\xF1\x03\x02\x02\x02\xF1\xF4\x03\x02\x02\x02\xF2\xF0\x03" +
		"\x02\x02\x02\xF3\xF5\x07/\x02\x02\xF4\xF3\x03\x02\x02\x02\xF4\xF5\x03" +
		"\x02\x02\x02\xF5\xF7\x03\x02\x02\x02\xF6\xEB\x03\x02\x02\x02\xF6\xF7\x03" +
		"\x02\x02\x02\xF7\xF8\x03\x02\x02\x02\xF8\u010F\x07\b\x02\x02\xF9\xFA\f" +
		"\x14\x02\x02\xFA\u0106\x07\x05\x02\x02\xFB\u0100\x05\x06\x04\x02\xFC\xFD" +
		"\x07/\x02\x02\xFD\xFF\x05\x06\x04\x02\xFE\xFC\x03\x02\x02\x02\xFF\u0102" +
		"\x03\x02\x02\x02\u0100\xFE\x03\x02\x02\x02\u0100\u0101\x03\x02\x02\x02" +
		"\u0101\u0104\x03\x02\x02\x02\u0102\u0100\x03\x02\x02\x02\u0103\u0105\x07" +
		"/\x02\x02\u0104\u0103\x03\x02\x02\x02\u0104\u0105\x03\x02\x02\x02\u0105" +
		"\u0107\x03\x02\x02\x02\u0106\xFB\x03\x02\x02\x02\u0106\u0107\x03\x02\x02" +
		"\x02\u0107\u0108\x03\x02\x02\x02\u0108\u010F\x07\x06\x02\x02\u0109\u010A" +
		"\f\x13\x02\x02\u010A\u010F\x07=\x02\x02\u010B\u010C\f\x12\x02\x02\u010C" +
		"\u010D\x070\x02\x02\u010D\u010F\x05\x16\f\x02\u010E\xCE\x03\x02\x02\x02" +
		"\u010E\xD1\x03\x02\x02\x02\u010E\xD4\x03\x02\x02\x02\u010E\xD7\x03\x02" +
		"\x02\x02\u010E\xDA\x03\x02\x02\x02\u010E\xDD\x03\x02\x02\x02\u010E\xE0" +
		"\x03\x02\x02\x02\u010E\xE3\x03\x02\x02\x02\u010E\xE6\x03\x02\x02\x02\u010E" +
		"\xE9\x03\x02\x02\x02\u010E\xF9\x03\x02\x02\x02\u010E\u0109\x03\x02\x02" +
		"\x02\u010E\u010B\x03\x02\x02\x02\u010F\u0112\x03\x02\x02\x02\u0110\u010E" +
		"\x03\x02\x02\x02\u0110\u0111\x03\x02\x02\x02\u0111\x07\x03\x02\x02\x02" +
		"\u0112\u0110\x03\x02\x02\x02\u0113\u0118\x07D\x02\x02\u0114\u0118\x07" +
		"C\x02\x02\u0115\u0118\x07F\x02\x02\u0116\u0118\x07E\x02\x02\u0117\u0113" +
		"\x03\x02\x02\x02\u0117\u0114\x03\x02\x02\x02\u0117\u0115\x03\x02\x02\x02" +
		"\u0117\u0116\x03\x02\x02\x02\u0118\t\x03\x02\x02\x02\u0119\u011A\x07." +
		"\x02\x02\u011A\u0128\x05\x04\x03\x02\u011B\u011D\x07.\x02\x02\u011C\u011B" +
		"\x03\x02\x02\x02\u011C\u011D\x03\x02\x02\x02\u011D\u011E\x03\x02\x02\x02" +
		"\u011E\u011F\x07I\x02\x02\u011F\u0122\x07\x03\x02\x02\u0120\u0123\x05" +
		"\x04\x03\x02\u0121\u0123\x07I\x02\x02\u0122\u0120\x03\x02\x02\x02\u0122" +
		"\u0121\x03\x02\x02\x02\u0123\u0124\x03\x02\x02\x02\u0124\u0122\x03\x02" +
		"\x02\x02\u0124\u0125\x03\x02\x02\x02\u0125\u0126\x03\x02\x02\x02\u0126" +
		"\u0128\x07\x04\x02\x02\u0127\u0119\x03\x02\x02\x02\u0127\u011C\x03\x02" +
		"\x02\x02\u0128\v\x03\x02\x02\x02\u0129\u012A\x07I\x02\x02\u012A\u012D" +
		"\x07\x03\x02\x02\u012B\u012E\x05\x12\n\x02\u012C\u012E\x07I\x02\x02\u012D" +
		"\u012B\x03\x02\x02\x02\u012D\u012C\x03\x02\x02\x02\u012E\u012F\x03\x02" +
		"\x02\x02\u012F\u012D\x03\x02\x02\x02\u012F\u0130\x03\x02\x02\x02\u0130" +
		"\u0131\x03\x02\x02\x02\u0131\u0132\x07\x04\x02\x02\u0132\r\x03\x02\x02" +
		"\x02\u0133\u0134\x05\x06\x04\x02\u0134\u0135\x07.\x02\x02\u0135\u0137" +
		"\x03\x02\x02\x02\u0136\u0133\x03\x02\x02\x02\u0136\u0137\x03\x02\x02\x02" +
		"\u0137\u0138\x03\x02\x02\x02\u0138\u0139\x05\x06\x04\x02\u0139\x0F\x03" +
		"\x02\x02\x02\u013A\u013F\x05\x12\n\x02\u013B\u013C\x07/\x02\x02\u013C" +
		"\u013E\x05\x12\n\x02\u013D\u013B\x03\x02\x02\x02\u013E\u0141\x03\x02\x02" +
		"\x02\u013F\u013D\x03\x02\x02\x02\u013F\u0140\x03\x02\x02\x02\u0140\u0143" +
		"\x03\x02\x02\x02\u0141\u013F\x03\x02\x02\x02\u0142\u0144\x07/\x02\x02" +
		"\u0143\u0142\x03\x02\x02\x02\u0143\u0144\x03\x02\x02\x02\u0144\x11\x03" +
		"\x02\x02\x02\u0145\u0147\x07@\x02\x02\u0146\u0145\x03\x02\x02\x02\u0146" +
		"\u0147\x03\x02\x02\x02\u0147\u0148\x03\x02\x02\x02\u0148\u0149\x05\x16" +
		"\f\x02\u0149\u014A\x05\x06\x04\x02\u014A\u014B\x05\n\x06\x02\u014B\u015D" +
		"\x03\x02\x02\x02\u014C\u014E\x07@\x02\x02\u014D\u014C\x03\x02\x02\x02" +
		"\u014D\u014E\x03\x02\x02\x02\u014E\u014F\x03\x02\x02\x02\u014F\u0150\x05" +
		"\x16\f\x02\u0150\u0151\x05\x06\x04\x02\u0151\u015D\x03\x02\x02\x02\u0152" +
		"\u0154\x07@\x02\x02\u0153\u0152\x03\x02\x02\x02\u0153\u0154\x03\x02\x02" +
		"\x02\u0154\u0155\x03\x02\x02\x02\u0155\u0156\x05\x16\f\x02\u0156\u0157" +
		"\x05\n\x06\x02\u0157\u015D\x03\x02\x02\x02\u0158\u015A\x07@\x02\x02\u0159" +
		"\u0158\x03\x02\x02\x02\u0159\u015A\x03\x02\x02\x02\u015A\u015B\x03\x02" +
		"\x02\x02\u015B\u015D\x05\x16\f\x02\u015C\u0146\x03\x02\x02\x02\u015C\u014D" +
		"\x03\x02\x02\x02\u015C\u0153\x03\x02\x02\x02\u015C\u0159\x03\x02\x02\x02" +
		"\u015D\x13\x03\x02\x02\x02\u015E\u015F\t\b\x02\x02\u015F\x15\x03\x02\x02" +
		"\x02\u0160\u0163\x07H\x02\x02\u0161\u0163\x05\x18\r\x02\u0162\u0160\x03" +
		"\x02\x02\x02\u0162\u0161\x03\x02\x02\x02\u0163\u0174\x03\x02\x02\x02\u0164" +
		"\u0165\x077\x02\x02\u0165\u0166\x07;\x02\x02\u0166\u016B\x05\x12\n\x02" +
		"\u0167\u0168\x07/\x02\x02\u0168\u016A\x05\x12\n\x02\u0169\u0167\x03\x02" +
		"\x02\x02\u016A\u016D\x03\x02\x02\x02\u016B\u0169\x03\x02\x02\x02\u016B" +
		"\u016C\x03\x02\x02\x02\u016C\u016F\x03\x02\x02\x02\u016D\u016B\x03\x02" +
		"\x02\x02\u016E\u0170\x07/\x02\x02\u016F\u016E\x03\x02\x02\x02\u016F\u0170" +
		"\x03\x02\x02\x02\u0170\u0171\x03\x02\x02\x02\u0171\u0172\x07;\x02\x02" +
		"\u0172\u0173\x074\x02\x02\u0173\u0175\x03\x02\x02\x02\u0174\u0164\x03" +
		"\x02\x02\x02\u0174\u0175\x03\x02\x02\x02\u0175\x17\x03\x02\x02\x02\u0176" +
		"\u0177\t\t\x02\x02\u0177\x19\x03\x02\x02\x02;\x1C\x1E)-/7;NSZdgmpvz\x81" +
		"\x8B\x8F\x91\x9A\x9E\xA0\xAE\xB2\xB4\xBE\xC2\xC4\xCC\xF0\xF4\xF6\u0100" +
		"\u0104\u0106\u010E\u0110\u0117\u011C\u0122\u0124\u0127\u012D\u012F\u0136" +
		"\u013F\u0143\u0146\u014D\u0153\u0159\u015C\u0162\u016B\u016F\u0174";
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
	public FACTORY(): TerminalNode { return this.getToken(XonParser.FACTORY, 0); }
	public OPEN_PAREN(): TerminalNode { return this.getToken(XonParser.OPEN_PAREN, 0); }
	public CLOSE_PAREN(): TerminalNode { return this.getToken(XonParser.CLOSE_PAREN, 0); }
	public id(): IdContext {
		return this.getRuleContext(0, IdContext);
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
export class AndExpressionContext extends ExprContext {
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
export class OrExpressionContext extends ExprContext {
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
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
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
	public expr(): ExprContext {
		return this.getRuleContext(0, ExprContext);
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
	public AS(): TerminalNode | undefined { return this.tryGetToken(XonParser.AS, 0); }
	public IS(): TerminalNode | undefined { return this.tryGetToken(XonParser.IS, 0); }
	public IN(): TerminalNode | undefined { return this.tryGetToken(XonParser.IN, 0); }
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


