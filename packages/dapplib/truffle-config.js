require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'heavy knock forward turtle crazy repeat magic method grid enroll slot gaze'; 
let testAccounts = [
"0xa558a84303c36d2a2da8b6fc9f2767350623f95fd2a350401969d446ed43833d",
"0x07ee91a4dd1cd9385d7fddb33d4df2e3d9b31a50bf820a56c3eaa5eca5592a86",
"0xe3cf6c27d2b5a7fa4e6d98fa4dbb593d652f0d2893c39a4893fb967319a413b9",
"0x3ff9c6f7fb5e1fa0c707d6663de94416b4b5e4934efc7d8b5bb2b38e20f020ad",
"0xfdf897908dd866f140af02e30de347f31158bdba2979e33d2eb17a68d16336df",
"0x80dbc6dd9693b321bf98a8edcc653403dee4ff07c071bad8fa2f6aa688455876",
"0xc62a57831ed10a019a0ed7399e89bd0a6949c464eeffc3cd8c079a9d2cc3227c",
"0xc9578c3167227713f916c50da4f25b7b725721a017ca5b5d09854b4d3e2cf33a",
"0x876a2d19e452a19695a3928d4b4449eb04c764c10340076c320b1773442be614",
"0x2377b4e85b952765eddf4e2c4a5939a36a692afb26609f332efa16c6f4e32c85"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

