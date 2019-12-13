/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow strict
 */

// TODO(macOS ISS#2323203)

'use strict';

export type ColorValue = null | string;

export type NativeColorValue = Object; // flowlint-line unclear-type: off

export type ProcessedColorValue = number | NativeColorValue;

export const PlatformColor = (
  name: string,
  options?: Object /* flowlint-line unclear-type: off */,
): ColorValue => null;
