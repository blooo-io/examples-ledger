import { Contract } from 'ethers';
 
const getBlockchain = (provider) =>
  new Promise( async (resolve, reject) => {
    if(provider) {
      const simpleStorage = new Contract(
        "0x0f41b808032be6313171ffbf5f42278cc6aac85c",
        [
          {
            "inputs": [],
            "name": "readData",
            "outputs": [
              {
                "internalType": "uint256",
                "name": "",
                "type": "uint256"
              }
            ],
            "stateMutability": "view",
            "type": "function"
          },
          {
            "inputs": [
              {
                "internalType": "uint256",
                "name": "_data",
                "type": "uint256"
              }
            ],
            "name": "updateData",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
          }
        ],
        provider
      );
      resolve({simpleStorage});
      return;
    }
    reject('Provider not recognized');
  });
 
export default getBlockchain;