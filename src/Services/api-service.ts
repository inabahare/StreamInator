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
    this.apiUrl = new URL("/", apiUrl);
  }

  private createGetParameters (parameters: Parameters) {
    return Object
      .keys(parameters)
      .filter(key => parameters[key] !== null)
      .map(key => turnToHttpParam(key, parameters[key]))
      .join("&");
  }

  async get<T> (endpoint: string, params: Parameters) {
    const parameterString = this.createGetParameters(params);
    const fullEndpoint = `${endpoint}?${parameterString}`;
    const fullUrl = new URL(fullEndpoint, this.apiUrl);
    const result = await fetch(fullUrl.toString());
    const data = await result.json();
    return data as T;
  }
}
