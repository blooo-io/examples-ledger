import { useState } from 'react';
import { useEffect, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, Alert, FlatList, SafeAreaView, TouchableOpacity, PermissionsAndroid } from 'react-native';
import { BleManager } from 'react-native-ble-plx';
import "./polyfill.js";
import TransportBLE from '@ledgerhq/react-native-hw-transport-ble';
import { Observable } from 'rxjs';
import DeviceSelectionScreen from './src/DeviceSelectionScreen.js';
import ShowAddressScreen from './src/ShowAddressScreen.js';

// const bleManager = new BleManager();

//Je pense que pour pouvoir avoir une flatlist avec les appareils auxquels tu peux te connecter, il faut que tu fasses un useQqchose qui va scanner les appareils et les mettre dans un tableau, et ensuite tu fais une flatlist avec ce tableau.
//Pour chaque appareil, tu fais un TouchableOpacity qui te permet de te connecter à l'appareil en question.

const App = () => {

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
   
    render() ;{
      const { transport } = this.state;
      if (!transport) {
        return <DeviceSelectionScreen onSelectDevice={this.onSelectDevice} />;
      }
      return <ShowAddressScreen transport={transport} />;
    }
  }
   
  export default App;
 
  // onSelectDevice = async device => {
  //   const transport = await TransportBLE.open(device);
  //   transport.on("disconnect", () => {
  //     // Intentionally for the sake of simplicity we use a transport local state
  //     // and remove it on disconnect.
  //     // A better way is to pass in the device.id and handle the connection internally.
  //     this.setState({ transport: null });
  //   });
  //   this.setState({ transport });
  // };

  // DeviceItem = () => {
  //   const [pending, setPending] = useState(false);
  //   onPress = async () => {
  //     setPending(true);
  //     try {
  //       await this.props.onSelect(this.props.device);
  //     } finally {
  //       pending;
  //     }
  //   };
  // }



  // const [devices, setDevices] = useState([])

  // const addDeviceToTheList = (device) => {
     
  // }

  
    
  
  
  // onSelectDevice = async device => {
  //   if (Platform.OS === "android") {
  //     await PermissionsAndroid.request(
  //       PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
  //     );
  //   }
    
  
  //   transport.on("disconnect", () => {
  //     // Intentionally for the sake of simplicity we use a transport local state
  //     // and remove it on disconnect.
  //     // A better way is to pass in the device.id and handle the connection internally.
  //     this.setState({ transport: null });
  //   });
  //   this.setState({ transport });
  // };

    

  // const subscription = new Observable (TransportBLE.observeState).subscribe({
  //   complete: () => {
  //     this.setState({refreshing: false});
  //   },
  //   next: (device) => {
  //     if (device.name === 'Nano X 445F') {
  //       console.log("Found", device.name, device.localName);
  //     }
  //   },
  //   error: error => {
  //     console.log("error: ", error);
  //   }
  // });

  

  // const transport = await TransportBLE.open(device);
  // console.log(transport);

  // const transport = await TransportBLE.open(device)
  // console.log(transport);


  // const [deviceID, setDeviceID] = useState(null);
  // const [connectionStatus, setConnectionStatus] = useState('Searching');
  // const [allDevices, setAllDevices] = useState([]);

  

  // const deviceAlreadyInList = (devices, nextDevice) => {
  //   devices.findIndex(device => nextDevice.id === device.id) > -1
  // }

  // const scanAndConnect = () => {
  //   bleManager.startDeviceScan(null, null, (error, device) => {
  //     if (error) {
  //       console.error(error);
  //       setConnectionStatus('Error searching for devices');
  //       return
  //     }
  //     console.log("Found", device.name, device.localName);
  //     if (device.name === 'Nano X 445F') {
  //       bleManager.stopDeviceScan();
  //       setConnectionStatus('Connecting to device...');
  //       connectToDevice(device);
  //     }

      // if (device) {
      //   // setAllDevices((currentState) => {
      //   //   if (!deviceAlreadyInList(currentState, device)) {
      //   //     return [...currentState, device];
      //   //   }
      //   //   return currentState;
      //   // })
      //   // console.log("allDevices", allDevices);
      //   console.log(device.name);
      // }
        // Stop scanning as it's not necessary if you are scanning for one device.
      //   if (device.name === 'JBL Xtreme') {
      //   bleManager.stopDeviceScan()
      //   setConnectionStatus('Connecting to device...')
      //   connectToDevice(device);
      // }
  //   })
  // }

  // useEffect(() => {
  //   scanAndConnect();
  // }, []);

  // const connectToDevice = (device) => {
  //   return device
  //   .connect()
  //   .then((device) => {
  //     setDeviceID(device.id);
  //     setConnectionStatus("Connected");
  //     return device.discoverAllServicesAndCharacteristics();
  //   })
  //   .then((device) => {
  //     return device.services();
  //   })
  //   .then((services) => {
  //     console.log(services);
  //     // Do work on device with services and characteristics
  //   })
  //   .catch((error) => {
  //     // Handle errors
  //     console.error(error);
  //     setConnectionStatus('Error connecting to device');
  //   });
  //}
//   render () 
//   const { transport } = this.state;
//     if (!transport) {
//   return (
//       <DeviceSelectionScreen onSelectDevice={this.onSelectDevice} />);
//     }
//     return (<ShowAddressScreen transport={transport} />);
  
// }

{/* // <SafeAreaView style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    // </SafeAreaView> */}
{/* <Text>{connectionStatus}</Text> */}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   input: {
//     height: 40,
//     width: 200,
//     borderWidth: 1,
//     padding: 10,
//     borderColor: 'pink',
//   },
//   item: {
//     backgroundColor: 'lightblue',
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//     borderRadius: 10,
//   },
//   list: {
//     alignSelf: 'stretch',
//   },
//   itemText: {
//     fontSize: 15,
//     color: 'purple'
//   },
//   itemTextCompleted: {
//     color: 'purple',
//     textDecorationLine: 'line-through',
//   }
// });


