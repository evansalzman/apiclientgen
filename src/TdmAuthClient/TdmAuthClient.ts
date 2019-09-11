import requestPromise from 'request-promise';
import * as log from 'winston';

export class TdmAuthClient {

  public apiServerUrl: string;

  /**
   * Authenticates user and generates a JWT token.
   * The token.oauth2 endpoint authenticates MyID users
   * and returns a JWT containing information that can be used to access TDM services.
   * 
   * Username and password information should only be posted as part of the request body, using SSL.
   * 
   * User information should NEVER be posted as a query string appended to the service URL.
   * @param username string Username to authenticate
   * @param password string Password used for authentication
   */
  public async PostToken.
  constructor (apiServerUrl: string) {
    this.apiServerUrl = apiServerUrl;
  }
oauth2 (username: string, password: string) {

    const logMessagePrefix = 'TdmAuthClient.PostToken.oauth2() ';

    const options = {
      body,
      headers: {
        'User-Agent': 'automated-testing-request',
        'X-Conversation-Id': 'automated-testing-request-id'
      },
      json: true,
      method: 'POST',
      url: `${this.apiServerUrl}/token.oauth2`
    };

    return await requestPromise (options)
      .then ((response: any) => {
        log.debug (`$[logMessagePrefix] API JSON response ${require ('util').inspect (response, {colors: true, depth: 2})}`);

        return response;
      })
      . catch ( (errorResponse: any) => {
        log.info (`$[logMessagePrefix] There was an error calling the API.`);
        log.debug (`$[logMessagePrefix] API JSON errorResponse ${require ('util').inspect (errorResponse, {colors: true, depth: 2})}`);

        return errorResponse;
      });

  }

}

/**
 * ITdmAuthToken
 * @property {string} [accessToken] - JWT access token for TDM services.
 * @property {string} [refreshToken] - Refresh token (not used).
 * @property {string} [tokenType] - Type of token.
 * @property {number} [expireSeconds] - Number of seconds TDMAuthToken is valid.
 */
export interface ITdmAuthToken {
  accessToken?: string;
  refreshToken?: string;
  tokenType?: string;
  expireSeconds?: number;
}
/**
 * IValidationError
 * @property {number} [code] - undefined
 * @property {string} [errorMessage] - undefined
 * @property {any[]} [errorCauses] - undefined
 */
export interface IValidationError {
  code?: number;
  errorMessage?: string;
  errorCauses?: any[];
}
/**
 * ITdmAppError
 * @property {number} [code] - undefined
 * @property {string} [message] - undefined
 */
export interface ITdmAppError {
  code?: number;
  message?: string;
}
