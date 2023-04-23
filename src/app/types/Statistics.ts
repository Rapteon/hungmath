export class Statistics {
  private _correctSolutionsCount: number;
  private _wrongSolutionsCount: number;

  constructor() {
    this._correctSolutionsCount = 0;
    this._wrongSolutionsCount = 0;
  }

  correctSolution(): void {
    this._correctSolutionsCount += 1;
  }

  wrongSolution(): void {
    this._wrongSolutionsCount += 1;
  }

  get correctSolutionsCount(): number {
    return this._correctSolutionsCount;
  }

  get wrongSolutionsCount():number {
    return this._wrongSolutionsCount;
  }
}
