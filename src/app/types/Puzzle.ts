export class Puzzle {
  private _operandOne: number;
  private _operandTwo: number;
  private _operator: string;
  private _solution: number;
  private _operators: string[];

  constructor(limit: number) {
    this._operators = ['+', '-', '×', '÷'];
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
    return Number(solution).toFixed(2) === this._solution.toFixed(2);
  }

  private generateRandomOperator(): string {
    let randomIndex;
    if (this._operandTwo === 0)
      randomIndex = Math.floor(Math.random() * (this._operators.length - 1));
    else randomIndex = Math.floor(Math.random() * this._operators.length);
    return this._operators[randomIndex];
  }

  private generateAnswer(
    operandOne: number,
    operandTwo: number,
    operator: string
  ): number {
    switch (operator) {
      case '+':
        return operandOne + operandTwo;
      case '-':
        return operandOne - operandTwo;
      case '×':
        return operandOne * operandTwo;
      case '÷':
        return operandOne / operandTwo;
      default:
        return 0;
    }
  }
}
