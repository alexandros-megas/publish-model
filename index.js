const Action = require('@actions/core');
const { publishModel } = require('./publish-model');
// const Github = require('@actions/github');

async function main() {
  const inputs = {
    clarifaiToken: Action.getInput('clarifaiToken'),
    userId: Action.getInput('userId'),
    appId: Action.getInput('appId'),
    modelId: Action.getInput('modelId'),
    modelVersionId: Action.getInput('modelVersionId'),
    modelTypeId: Action.getInput('modelTypeId'),
  }

  const output = await publishModel(inputs);

  Action.setOutput('statusCode', output.statusCode);
  Action.setOutput('statusMessage', output.statusMessage);
  Action.setOutput('fullResponse', output.fullResponse);
}

main().catch((error) => {
  Action.setFailed(error.message);
});
