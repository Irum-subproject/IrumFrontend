import {SvgXml} from 'react-native-svg';
import IconPropsInterface from 'assets/icon/iconPropsInterface.ts';
import {useTheme} from 'styled-components';
import styled from 'styled-components/native';

function ArrowIcon({color, size, rotate}: IconPropsInterface) {
  const {palette} = useTheme();
  const paletteColor = palette[color as keyof typeof palette];
  const realSize = size ? size : 18;

  return (
    <IconContainer rotate={rotate} size={size}>
      <SvgXml
        width={realSize}
        height={realSize}
        xml={`
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <mask id="mask0_575_727" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="18" height="18">
            <rect width="18" height="18" transform="translate(18) rotate(90)" fill="white"/>
          </mask>
          <g mask="url(#mask0_575_727)">
            <path d="M4.53348 8.99996C4.53348 9.36994 4.67934 9.69367 4.97105 9.97116L11.3638 16.2999C11.5986 16.5347 11.8832 16.6521 12.2176 16.6521C12.5663 16.6521 12.8615 16.5311 13.1034 16.2892C13.3454 16.0544 13.4663 15.7663 13.4663 15.4248C13.4663 15.0833 13.3347 14.7809 13.0714 14.5176L7.4684 8.99996L13.0714 3.48232C13.3347 3.21906 13.4663 2.91668 13.4663 2.57516C13.4663 2.23364 13.3454 1.94193 13.1034 1.70002C12.8615 1.46523 12.5663 1.34783 12.2176 1.34783C11.8832 1.34783 11.5986 1.46523 11.3638 1.70002L4.97105 8.02877C4.82164 8.17819 4.71136 8.33116 4.64021 8.48769C4.56906 8.64422 4.53348 8.81498 4.53348 8.99996Z"
            fill=${color ? paletteColor : palette.gray400}/>
          </g>
        </svg>
      `}
      />
    </IconContainer>
  );
}

const IconContainer = styled.View<{
  rotate: number | undefined;
  size: number | undefined;
}>`
  transform: rotate(${props => props.rotate ?? 0}deg);
  ${props =>
    props.size &&
    `width: ${props.size}px;
    height: ${props.size}px;`}
`;

export default ArrowIcon;
