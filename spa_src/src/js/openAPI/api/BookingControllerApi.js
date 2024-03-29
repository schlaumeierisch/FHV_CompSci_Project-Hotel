/**
 * OpenAPI definition
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import BookingDTO from '../model/BookingDTO';

/**
* BookingController service.
* @module api/BookingControllerApi
* @version v0
*/
export default class BookingControllerApi {

    /**
    * Constructs a new BookingControllerApi. 
    * @alias module:api/BookingControllerApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the book operation.
     * @callback module:api/BookingControllerApi~bookCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/BookingDTO} bookingDTO 
     * @param {module:api/BookingControllerApi~bookCallback} callback The callback function, accepting three arguments: error, data, response
     */
    book(bookingDTO, callback) {
      let postBody = bookingDTO;
      // verify the required parameter 'bookingDTO' is set
      if (bookingDTO === undefined || bookingDTO === null) {
        throw new Error("Missing the required parameter 'bookingDTO' when calling book");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/rest/booking/book', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
