import React from 'react';
import {SvgXml} from 'react-native-svg';
import {useTheme} from 'styled-components';
import IconPropsInterface from 'assets/icon/iconPropsInterface.ts';

function ChattingIcon({color}: IconPropsInterface) {
  const {palette} = useTheme();
  const paletteColor = palette[color as keyof typeof palette];

  return (
    <SvgXml
      xml={`
        <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="22" height="22" transform="translate(0.299988)" fill="${paletteColor}"/>
        </svg>
      `}
    />
  );
}

export default ChattingIcon;
