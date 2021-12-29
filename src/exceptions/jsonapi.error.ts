export default class JsonAPIError {
  private readonly _code: string = '';

  private readonly _title: string = '';

  private readonly _status: number = 500;

  private readonly _detail: string = '';

  private readonly _source: any = '';

  constructor(code: string, title: string, status: number, detail: string, source: any) {
    this._code = code;
    this._title = title;
    this._status = status;
    this._detail = detail;
    this._source = source;
  }

  get code(): string {
    return this._code;
  }

  get detail(): string {
    return this._detail;
  }

  get source(): string {
    return this._source;
  }

  get status(): number {
    return this._status;
  }

  get title(): string {
    return this._title;
  }
}
