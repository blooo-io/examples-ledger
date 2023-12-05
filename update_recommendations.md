Node HID integration

The current walkthrough is suitable for a correct implementation

Functional with Node.js version 20.9.0

A change is needed in the main.js file on line 17:

      const appBtc = new AppBtc({ transport, currency: "bitcoin" });

Regarding the package.json file, the dependecies must be upgraded to the latest version (cf. present package.json file)



Web USB and Web HID

The current walkthrough is suitable for a correct implementation

Functional with Node.js version 20.9.0

A change is needed in the main.js file on line 23 for both usb and hid:

      const appBtc = new AppBtc({ transport, currency: "bitcoin" });

Regarding the package.json file, the dependecies must be upgraded to the latest version (cf. present package.json file)


Web Bluetooth

Using Next.js. Functional with Node.js version 18.18.2 and 20.9.0

Command to run:
      npm run dev


Transfer if Sol between accounts

The current walkthrough is suitable for a correct implementation

Functional with Node.js version 20.9.0
