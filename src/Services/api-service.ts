export interface Parameters {
  [key: string]: string | number | null;
}
/**
 * Turn turn an object to key=value like 
 * @param value 
 * @param key 
 */
const turnToHttpParam =
  (key: string, value: string | number | null) => `${key}=${value}`;

export class ApiService {
  private apiUrl: URL;

  constructor (apiUrl: string) {
    this.apiUrl = new URL(apiUrl, `http://localhost:5000`);
  }

  private createGetParameters (parameters: Parameters) {
    const params =
      Object
        .keys(parameters)
        .filter(key => parameters[key] !== null)
        .map(key => turnToHttpParam(key, parameters[key]))
        .join("&");

    const result = params ? `?${params}` : ``;

    return result;
  }

  async get<T> (endpoint: string, params?: Parameters | null) {
    const parameterString = this.createGetParameters(params ?? {});
    const fullEndpoint = `${endpoint}${parameterString}`;

    const fullUrl = new URL(`${this.apiUrl}${fullEndpoint}`);

    const result = await fetch(fullUrl.toString());
    const data = await result.json();
    return data as T;
  }
}
