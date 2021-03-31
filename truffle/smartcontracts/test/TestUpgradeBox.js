const { deployProxy, upgradeProxy } = require('@openzeppelin/truffle-upgrades');

const Box = artifacts.require('Box');
const BoxV2 = artifacts.require('BoxV2');

// truffle test ./test/TestUpgradeBox.js
contract('TestUpgradeBox', (accounts) => {
    it('works', async () => {
        const box = await deployProxy(Box, [42]);
        const box2 = await upgradeProxy(box.address, BoxV2);
        const value = await box2.retrieve();
        assert.equal(value.toString(), '42');
    });
});