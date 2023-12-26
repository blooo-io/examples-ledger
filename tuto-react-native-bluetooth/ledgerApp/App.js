import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import "./polyfill";
import DeviceSelectionScreen from './src/DeviceSelectionScreen';
// import ShowAddressScreen from './src/ShowAddressScreen';

import TransportBLE from "@ledgerhq/react-native-hw-transport-ble";

export default function App() {

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
 
    const { transport } = this.state;
    if (!transport) {
      return <Text>No device selected</Text>;
      // return <DeviceSelectionScreen onSelectDevice={this.onSelectDevice} />;
    }
    return <ShowAddressScreen transport={transport} />;

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
