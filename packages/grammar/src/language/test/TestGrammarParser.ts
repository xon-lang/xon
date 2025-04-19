// Generated from grammars/test/TestGrammar.g4 by ANTLR 4.13.2
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'antlr4';
import TestGrammarListener from "./TestGrammarListener.js";
// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class TestGrammarParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly NEWLINE = 7;
	public static readonly INT = 8;
	public static override readonly EOF = Token.EOF;
	public static readonly RULE_prog = 0;
	public static readonly RULE_expr = 1;
	public static readonly literalNames: (string | null)[] = [ null, "'*'", 
                                                            "'/'", "'+'", 
                                                            "'-'", "'('", 
                                                            "')'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null, 
                                                             null, null, 
                                                             null, null, 
                                                             null, "NEWLINE", 
                                                             "INT" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"prog", "expr",
	];
	public get grammarFileName(): string { return "TestGrammar.g4"; }
	public get literalNames(): (string | null)[] { return TestGrammarParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return TestGrammarParser.symbolicNames; }
	public get ruleNames(): string[] { return TestGrammarParser.ruleNames; }
	public get serializedATN(): number[] { return TestGrammarParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, TestGrammarParser._ATN, TestGrammarParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public prog(): ProgContext {
		let localctx: ProgContext = new ProgContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, TestGrammarParser.RULE_prog);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 4;
			this.expr(0);
			this.state = 5;
			this.match(TestGrammarParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
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
		let localctx: ExprContext = new ExprContext(this, this._ctx, _parentState);
		let _prevctx: ExprContext = localctx;
		let _startState: number = 2;
		this.enterRecursionRule(localctx, 2, TestGrammarParser.RULE_expr, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 13;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 8:
				{
				this.state = 8;
				this.match(TestGrammarParser.INT);
				}
				break;
			case 5:
				{
				this.state = 9;
				this.match(TestGrammarParser.T__4);
				this.state = 10;
				this.expr(0);
				this.state = 11;
				this.match(TestGrammarParser.T__5);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 23;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 2, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 21;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 1, this._ctx) ) {
					case 1:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, TestGrammarParser.RULE_expr);
						this.state = 15;
						if (!(this.precpred(this._ctx, 4))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 4)");
						}
						this.state = 16;
						_la = this._input.LA(1);
						if(!(_la===1 || _la===2)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 17;
						this.expr(5);
						}
						break;
					case 2:
						{
						localctx = new ExprContext(this, _parentctx, _parentState);
						this.pushNewRecursionContext(localctx, _startState, TestGrammarParser.RULE_expr);
						this.state = 18;
						if (!(this.precpred(this._ctx, 3))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 3)");
						}
						this.state = 19;
						_la = this._input.LA(1);
						if(!(_la===3 || _la===4)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 20;
						this.expr(4);
						}
						break;
					}
					}
				}
				this.state = 25;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 2, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}

	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 1:
			return this.expr_sempred(localctx as ExprContext, predIndex);
		}
		return true;
	}
	private expr_sempred(localctx: ExprContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 4);
		case 1:
			return this.precpred(this._ctx, 3);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,8,27,2,0,7,0,2,1,
	7,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,3,1,14,8,1,1,1,1,1,1,1,1,1,1,1,
	1,1,5,1,22,8,1,10,1,12,1,25,9,1,1,1,0,1,2,2,0,2,0,2,1,0,1,2,1,0,3,4,27,
	0,4,1,0,0,0,2,13,1,0,0,0,4,5,3,2,1,0,5,6,5,0,0,1,6,1,1,0,0,0,7,8,6,1,-1,
	0,8,14,5,8,0,0,9,10,5,5,0,0,10,11,3,2,1,0,11,12,5,6,0,0,12,14,1,0,0,0,13,
	7,1,0,0,0,13,9,1,0,0,0,14,23,1,0,0,0,15,16,10,4,0,0,16,17,7,0,0,0,17,22,
	3,2,1,5,18,19,10,3,0,0,19,20,7,1,0,0,20,22,3,2,1,4,21,15,1,0,0,0,21,18,
	1,0,0,0,22,25,1,0,0,0,23,21,1,0,0,0,23,24,1,0,0,0,24,3,1,0,0,0,25,23,1,
	0,0,0,3,13,21,23];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!TestGrammarParser.__ATN) {
			TestGrammarParser.__ATN = new ATNDeserializer().deserialize(TestGrammarParser._serializedATN);
		}

		return TestGrammarParser.__ATN;
	}


	static DecisionsToDFA = TestGrammarParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class ProgContext extends ParserRuleContext {
	constructor(parser?: TestGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expr(): ExprContext {
		return this.getTypedRuleContext(ExprContext, 0) as ExprContext;
	}
	public EOF(): TerminalNode {
		return this.getToken(TestGrammarParser.EOF, 0);
	}
    public get ruleIndex(): number {
    	return TestGrammarParser.RULE_prog;
	}
	public enterRule(listener: TestGrammarListener): void {
	    if(listener.enterProg) {
	 		listener.enterProg(this);
		}
	}
	public exitRule(listener: TestGrammarListener): void {
	    if(listener.exitProg) {
	 		listener.exitProg(this);
		}
	}
}


export class ExprContext extends ParserRuleContext {
	constructor(parser?: TestGrammarParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public INT(): TerminalNode {
		return this.getToken(TestGrammarParser.INT, 0);
	}
	public expr_list(): ExprContext[] {
		return this.getTypedRuleContexts(ExprContext) as ExprContext[];
	}
	public expr(i: number): ExprContext {
		return this.getTypedRuleContext(ExprContext, i) as ExprContext;
	}
    public get ruleIndex(): number {
    	return TestGrammarParser.RULE_expr;
	}
	public enterRule(listener: TestGrammarListener): void {
	    if(listener.enterExpr) {
	 		listener.enterExpr(this);
		}
	}
	public exitRule(listener: TestGrammarListener): void {
	    if(listener.exitExpr) {
	 		listener.exitExpr(this);
		}
	}
}
