require("@nomicfoundation/hardhat-toolbox");

require("dotenv").config();

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
    const accounts = await hre.ethers.getSigners();

    for (const account of accounts) {
        console.log(account.address);
    }
});

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
    solidity: "0.8.4",
    networks: {
        rinkeby: {
            url: process.env.ALCHEMY_RINKEBY_URL,
            accounts: [process.env.ACCOUNT_01_PRIVATE_KEY, process.env.ACCOUNT_02_PRIVATE_KEY],
        },
        goerli: {
            url: process.env.ALCHEMY_GOERLI_URL,
            accounts: [process.env.ACCOUNT_01_PRIVATE_KEY, process.env.ACCOUNT_02_PRIVATE_KEY],
        }
    },
    etherscan: {
        apiKey: {
            rinkeby: process.env.ETHERSCAN_API_KEY
        }
    }
};
