import React from 'react';
import {SvgXml} from 'react-native-svg';

function OtherDidListIcon({color}: {color: string}) {
  return (
    <SvgXml
      xml={`
          <svg width="23" height="22" viewBox="0 0 23 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="22" height="22" transform="translate(0.299988)" fill="${color}"/>
          </svg>
      `}
    />
  );
}

export default OtherDidListIcon;