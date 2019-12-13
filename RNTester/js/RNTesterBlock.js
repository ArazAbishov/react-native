/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow
 */

'use strict';

const React = require('react');
const {PlatformColor, StyleSheet, Text, View} = require('react-native'); // TODO(macOS ISS#2323203)
import Platform from '../../Libraries/Utilities/Platform'; // TODO(macOS ISS#2323203)

type Props = $ReadOnly<{|
  children?: React.Node,
  title?: ?string,
  description?: ?string,
|}>;

type State = {|
  description: ?string,
|};

class RNTesterBlock extends React.Component<Props, State> {
  state = {description: null};

  render() {
    const description = this.props.description ? (
      <Text style={styles.descriptionText}>{this.props.description}</Text>
    ) : null;

    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{this.props.title}</Text>
          {description}
        </View>
        <View style={styles.children}>{this.props.children}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 3,
    borderWidth: 0.5,
    ...Platform.select({
      macos: {
        borderColor: PlatformColor('separatorColor'),
        backgroundColor: PlatformColor('windowBackgroundColor'),
      },
      ios: {
        borderColor: PlatformColor('separatorColor'),
        backgroundColor: PlatformColor('tertiarySystemBackgroundColor'),
      },
      default: {
        borderColor: '#d6d7da',
        backgroundColor: '#ffffff',
      },
    }),
    margin: 10,
    marginVertical: 5,
    overflow: 'hidden',
  },
  titleContainer: {
    borderBottomWidth: 0.5,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 2.5,
    ...Platform.select({
      macos: {
        borderBottomColor: PlatformColor('separatorColor'),
        backgroundColor: PlatformColor('controlBackgroundColor'),
      },
      ios: {
        borderBottomColor: PlatformColor('separatorColor'),
        backgroundColor: PlatformColor('tertiarySystemBackgroundColor'),
      },
      default: {
        borderBottomColor: '#d6d7da',
        backgroundColor: '#f6f7f8',
      },
    }),
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  titleText: {
    ...Platform.select({
      macos: {
        color: PlatformColor('labelColor'),
      },
      ios: {
        color: PlatformColor('labelColor'),
      },
      default: undefined,
    }),
    fontSize: 14,
    fontWeight: '500',
  },
  descriptionText: {
    fontSize: 14,
  },
  children: {
    margin: 10,
  },
});

module.exports = RNTesterBlock;
