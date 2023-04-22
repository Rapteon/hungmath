export class Puzzle {
  private _operandOne: number;
  private _operandTwo: number;
  private _operator: string;
  private _solution: number;
  private _operators: string[];

  constructor(limit: number) {
    this._operators = ['+', '-', '÷', '×'];
    this._operandOne = Math.floor(Math.random() * limit);
    this._operandTwo = Math.floor(Math.random() * limit);
    this._operator = this.generateRandomOperator();
    this._solution = this.generateAnswer(
      this._operandOne,
      this._operandTwo,
      this._operator
    );
    console.log(this._operator);
  }

  get operandOne(): number {
    return this._operandOne;
  }

  get operandTwo(): number {
    return this._operandTwo;
  }

  get operator(): string {
    return this._operator;
  }

  public check(solution: string): boolean {
    console.log(Number(solution));
    console.log(this._solution);
    return Number(solution) === this._solution;
  }

  private generateRandomOperator(): string {
    const randomIndex = Math.floor(Math.random() * this._operators.length);
    return this._operators[randomIndex];
  }

  private generateAnswer(
    operandOne: number,
    operandTwo: number,
    operator: string
  ): number {
    switch(operator) {
        case '+': return operandOne + operandTwo;
        case '-': return operandOne - operandTwo;
        case '×': return operandOne * operandTwo;
        case '÷': return Number.parseFloat((operandOne / operandTwo).toFixed(2));
        default: return 0;
    }
  }
}
