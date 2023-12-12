#### Node HID integration

The current walkthrough is suitable for a correct implementation

Functional with Node.js version 20.9.0

A change is needed in the main.js file on line 17:

      const appBtc = new AppBtc({ transport, currency: "bitcoin" });

Regarding the package.json file, the dependecies must be upgraded to the latest version (cf. present package.json file)



#### Web USB and Web HID

The current walkthrough is suitable for a correct implementation

Functional with Node.js version 20.9.0

A change is needed in the main.js file on line 23 for both usb and hid:

      const appBtc = new AppBtc({ transport, currency: "bitcoin" });

Regarding the package.json file, the dependecies must be upgraded to the latest version (cf. present package.json file)



#### Web Bluetooth

Using Next.js. Functional with Node.js version 18.18.2 and 20.9.0

Command to run: `npm run dev`



#### Transfer of Sol between accounts

The current walkthrough is suitable for a correct implementation

Functional with Node.js version 20.9.0



#### Transfer of Ether between accounts

Functional with Node.js version 20.9.0

Uses the Goerli network (see changes made in index.js file)

Added 'import ledgerservice' in index.js

In the package.json file: ether version @ 5.4.7 --> Run the following command when installing the packages:
`npm install --save ethers@5.4.7`


#### Sign a personal message

The current walkthrough is suitable for a correct implementation

Functional with Node.js version 20.9.0

For the last step "Verify on runkit.com", change the code to run with the following:
```
const { ethers } = require("ethers");
ethers.verifyMessage("test", "0xefb42c22baa0143b322e93b24b0903a0ef47a64b716fbb77debbea55a93dec3e4417aff7dce845723240916c6e34cf17c674828b3addfb0afad966334df5b6311b");
```

#### Call a smart contract

Using Next.js. Functional with Node.js version 20.9.0

Command to run: `npm run dev`

Uses the Goerli network (see changes made in index.js file)

Added 'import ledgerservice' in SmartContract.js

New smart contract used: cf. ethereum.js file
