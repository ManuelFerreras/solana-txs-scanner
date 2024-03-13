const solanaWeb3 = require('@solana/web3.js');
const connection = new solanaWeb3.Connection(solanaWeb3.clusterApiUrl('mainnet-beta'), 'confirmed');

const getFirstTransaction = async (contractAddress) => {
    const publicKey = new solanaWeb3.PublicKey(contractAddress);
    const transactions = await connection.getConfirmedSignaturesForAddress2(publicKey, {limit: 1}, 'confirmed');
    if (transactions.length > 0) {
        console.log('First transaction:', transactions[0]);
    } else {
        console.log('No transactions found for this contract.');
    }
};

const contractAddress = '2zhPmLBug3b4NcGPPTZXdJ8AsNBePH4fX85Mu351DpCm'; // Replace with the actual contract address
getFirstTransaction(contractAddress);
