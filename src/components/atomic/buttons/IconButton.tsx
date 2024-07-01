import React from 'react';
import {GestureResponderEvent, TouchableOpacity} from 'react-native';

function IconButton({
  children,
  handler,
}: {
  children: React.ReactNode;
  handler: (e?: GestureResponderEvent) => void;
}) {
  return (
    <TouchableOpacity onPress={e => handler(e)}>{children}</TouchableOpacity>
  );
}

export default IconButton;
