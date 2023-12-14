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


#### React Native Android HID

Functional with Node.js version 20.9.0 using React Native 0.73.0 and React 18.2.0

Android Studio prerequisites (cf. [React Native doc](https://reactnative.dev/docs/environment-setup?os=macos&platform=android&guide=native&package-manager=npm#android-sdk)):
- Android 13 Tiramisu
- Android SDK Platform 33
- Intel x86 Atom_64 System Image or Google APIs Intel x86 Atom System Image or (for Apple M1 Silicon) Google APIs ARM 64 v8a System Image
- Android SDK Build-tools 33.0.0
- Install Java JRE and JDK: `brew install --cask zulu17`
- Set the environment variables:
```
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/platform-tools
```
Remove the install React Native command line.
Instead, in the Project Initialization part, run:
```
npx react-native@latest init myApp
cd myApp
```
Code implementation part:

Add the `babel.config.js` file in the code implementation

Dependencies installation: currently written `npm install --save @ledgerhq/hw-transport-webusb`
Change for the following: `npm install --save @ledgerhq/react-native-hid`

Add the following command: `npm install --save-dev babel-plugin-module-resolver`

Rxjs is not used