const APIAggregatorConsumer = artifacts.require("APIAggregatorConsumer");

const config = require('../truffle.js');
const helper = require('../scripts/helper');

module.exports = function(deployer, network) {
  let job = config.networks[helper.getNetwork(network)].apiAggregatorJob;
  if (!job.oracle) return;
  deployer.deploy(
      APIAggregatorConsumer,
      helper.getLinkToken(network),
      job.oracle,
      web3.utils.utf8ToHex(job.id)
  );
};
