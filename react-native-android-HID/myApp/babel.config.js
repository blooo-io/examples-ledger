module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          "@ledgerhq/domain-service/signers": "./node_modules/@ledgerhq/domain-service/lib/signers",
          "@ledgerhq/evm-tools/message": "./node_modules/@ledgerhq/evm-tools/lib/message",
          "@ledgerhq/cryptoassets/data": "./node_modules/@ledgerhq/cryptoassets/lib/data",
          "@ledgerhq/live-network/network": "./node_modules/@ledgerhq/live-network/lib/network",
        },
      },
    ],
  ],
};