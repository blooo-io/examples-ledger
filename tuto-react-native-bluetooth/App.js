import "./polyfill";
import "@react-native-anywhere/polyfill-base64";
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['new NativeEventEmitter']); // Ignore log notification by message

import 'react-native-get-random-values';
import React, { Component } from "react";
import DeviceSelectionScreen from "./DeviceSelectionScreen";
import ShowAddressScreen from "./ShowAddressScreen";

import TransportBLE from "@ledgerhq/react-native-hw-transport-ble";

// This is helpful if you want to see BLE logs. (only to use in dev mode)

class App extends Component {
  state = {
    transport: null
  };

  onSelectDevice = async device => {
    const transport = await TransportBLE.open(device);
    transport.on("disconnect", () => {
      // Intentionally for the sake of simplicity we use a transport local state
      // and remove it on disconnect.
      // A better way is to pass in the device.id and handle the connection internally.
      this.setState({ transport: null });
    });
    this.setState({ transport });
  };

  render() {
    const { transport } = this.state;
    if (!transport) {
      return <DeviceSelectionScreen onSelectDevice={this.onSelectDevice} />;
    }
    return <ShowAddressScreen transport={transport} />;
  }
}

export default App;