const util = require('util');

/**
 * 
 * @param {ActionInputs} inputs The inputs from the action.
 * @returns {Promise<ActionOutputs>} The outputs from the action.
 */
async function publishModel(inputs) {
}

module.exports = {
  publishModel,
};

/**
 * The complete set of action inputs
 * @typedef {Object} ActionInputs
 * @property {string} clarifaiToken The token used to authenticate with the Clarifai API
 * @property {string} userId The id of the user or organization that owns the app
 * @property {string} appId The id of the app that owns the model
 * @property {string} modelId The id of the model to publish
 * @property {...string} modelVersionId The id of the model version. This is optional and will be generated if not provided.
 * @property {string} modelTypeId The type of model being published. See 
 */

/**
 * The complete set of action outputs
 * @typedef {Object} ActionOutputs
 * @property {number} statusCode The status code of the final response
 * @property {string} statusMessage The description of the status of the final response
 * @property {string} fullResponse The full response from the API encoded as JSON.
 */
