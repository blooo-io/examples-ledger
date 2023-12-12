import { StyleSheet, Text, View } from 'react-native';
import { listen } from '@ledgerhq/logs'

import TransportHID from '@ledgerhq/react-native-hid/lib';
import AppEth from "@ledgerhq/hw-app-eth";

export default function Test() {

    state = {
        transport: null
      };

    onSelectDevice = async () => {
        try {
            const transport = await TransportHID.create();
            listen(log => console.log(log));
            const eth = new AppEth(transport);
            const path = "44'/60'/0'/0/0"; // HD derivation path
            const { address } = await eth.getAddress(path, false);
            this.setState({ transport: address });
            await eth.getAddress(path, true);
        } catch (e) {
            throw new Error(e);
          }
        };
        
            const { transport } = this.state;
             if(!transport){
               return (
                <View style={styles.header}>
                  <Text style={styles.headerTitle}>Scanning for Ledger...</Text>
                  <Text style={styles.headerSubtitle} onPress={() => {this.onSelectDevice()}}>
                    Power up your Ledger and enter your pin. Then tap the screen
                  </Text>
                </View>
              );
            }else{
              return (<View style={styles.header}>
                <Text style={styles.title}>Ledger Live Ethereum Account 1</Text>
                <Text style={styles.headerTitle}>
                  {transport}
                </Text>
              </View>
              );
            }
          };

          const styles = StyleSheet.create({
            header: {
              paddingTop: 80,
              paddingBottom: 36,
              alignItems: "center"
            },
            headerTitle: {
              fontSize: 22,
              marginBottom: 16
            },
            headerSubtitle: {
              fontSize: 12,
              color: "#999"
            },
            list: {
              flex: 1
            },
            errorTitle: {
              color: "#c00",
              fontSize: 16,
              marginBottom: 16
            }
          });