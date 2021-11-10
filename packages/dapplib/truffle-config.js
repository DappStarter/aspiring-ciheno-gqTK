require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture oppose bottom tooth notice crime remain honey half clock orange gauge'; 
let testAccounts = [
"0x96c87769d20df23329a7ace5396d5ed8e0400511a74093485cf379de5c0c44be",
"0xaa06a3ac615594e53bfe27c9d3f417200489045c00689559e5344e1697d81025",
"0x5e746f2d3def9ee0380a8b4960cc1d04bfaaa5a2b10168be7575bed13cbe72b6",
"0x8ade7a425fee20811c1fd0354c49b7b18011d9a230451c7254482e6c95042b29",
"0x3c9909dcdb4c5e390878eb4c80985cc928255fe8887b34178daac0dff31e2782",
"0xd77c68f7f186b042e7cc69b99831015d57644f4be1cc525ac68efe792bd1be56",
"0x72dbfe3d43ebd98dc96760e59042efd194bfabfa2e9b31fa760a619086e63035",
"0x578a80de5fe0dcc80ae0f38673327c26493e9bc1f3ad228b68d522507fa3f3df",
"0xab23761ed3610a020a22d2cc6f45a305e32bdf89ca6bfd9ae134f7b7225d87ad",
"0xf78c861a1b89a7653f5c4fb70a26b300bdc6aa2d8d8c680343cda00c6976c3b2"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

