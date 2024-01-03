import { useState } from 'react';
import { useEffect, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, Alert, FlatList, SafeAreaView, TouchableOpacity } from 'react-native';
import { BleManager } from 'react-native-ble-plx';

const bleManager = new BleManager();

//Je pense que pour pouvoir avoir une flatlist avec les appareils auxquels tu peux te connecter, il faut que tu fasses un useQqchose qui va scanner les appareils et les mettre dans un tableau, et ensuite tu fais une flatlist avec ce tableau.
//Pour chaque appareil, tu fais un TouchableOpacity qui te permet de te connecter à l'appareil en question.

const App = () => {

  const [deviceID, setDeviceID] = useState(null);
  const [connectionStatus, setConnectionStatus] = useState('Searching');

  const scanAndConnect = () => {
    bleManager.startDeviceScan(null, null, (error, device) => {
      if (error) {
        console.error(error);
        setConnectionStatus('Error searching for devices');
        return
      }
      // if (device.name === 'TI BLE Sensor Tag' || device.name === 'SensorTag') {
        // Stop scanning as it's not necessary if you are scanning for one device.
        if (device.name === 'JBL Xtreme') {
        bleManager.stopDeviceScan()
        setConnectionStatus('Connecting to device...')
        connectToDevice(device);
      }
    })
  }

  useEffect(() => {
    scanAndConnect();
  }, []);

  const connectToDevice = (device) => {
    return device
    .connect()
    .then((device) => {
      setDeviceID(device.id);
      setConnectionStatus("Connected");
      return device.discoverAllServicesAndCharacteristics();
    })
    .then((device) => {
      return device.services();
    })
    .then((services) => {
      console.log(services);
      // Do work on device with services and characteristics
    })
    .catch((error) => {
      // Handle errors
      console.error(error);
      setConnectionStatus('Error connecting to device');
    });
  }


  return (
    <SafeAreaView style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>{connectionStatus}</Text>
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: 200,
    borderWidth: 1,
    padding: 10,
    borderColor: 'pink',
  },
  item: {
    backgroundColor: 'lightblue',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
  },
  list: {
    alignSelf: 'stretch',
  },
  itemText: {
    fontSize: 15,
    color: 'purple'
  },
  itemTextCompleted: {
    color: 'purple',
    textDecorationLine: 'line-through',
  }
});
