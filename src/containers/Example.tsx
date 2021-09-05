import React from 'react';
import {
  Button,
  TextInfo,
  Telicon,
  SvgFromXml,
  SvgFromXmlFile,
  SvgFromXmlString,
  SizeProps,
} from '@dfhernandez/sds-react-native-components';
import { capitalize } from '@dfhernandez/js-utilities';
import type { ThemeProps } from '@dfhernandez/native-theme';
import styled, { useTheme } from 'styled-components/native';
import { Dimensions } from 'react-native';
import BallIcon from '@assets/dynamic-colors/ball.svg';
import AvatarIcon from '@assets/dynamic-colors/avatar.svg';
import HeartIcon from '@assets/dynamic-colors/heart.svg';

const { width } = Dimensions.get('window');
const iconSize = width * 0.15;

const colors = [
  'rgb(0, 0, 0)', // black
  'rgb(255, 159, 64)', // orange
  'brown',
  'rgb(255, 99, 132)', // pink
  'rgb(54, 162, 235)', // blue
  'rgb(0, 100, 192)', // green
  'rgb(255, 206, 86)', // yellow
  'rgb(153, 102, 255)', // purple
  '#45914f',
  '#205070',
  'orange',
  'lightgreen',
  'cyan',
  'darkblue',
  'darkcyan',
  '#47915d',
];
const sizes: { [key: number]: SizeProps; } = {
  // 0: 'default',
  0: 'xsmall',
  1: 'small',
  2: 'medium',
  3: 'large',
  4: 'xlarge',
};
const getIconSize = (idx: number): SizeProps => sizes[idx > 5 ? 5 : idx];

const xml = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
    <path d="M472.916 224h-24.909a24.534 24.534 0 0 0-23.417-18H398v-65.024a6.86 6.86 0 0 0-3.346-6.062L207.077 26.572a6.927 6.927 0 0 0-6.962 0L12.48 134.914A6.981 6.981 0 0 0 9 140.976v216.685a7 7 0 0 0 3.5 6.062l187.654 108.342a7 7 0 0 0 3.5.938 7.361 7.361 0 0 0 3.6-.938L306 415.108v41.174A29.642 29.642 0 0 0 335.891 486h137.025A29.807 29.807 0 0 0 503 456.282v-202.1A30.2 30.2 0 0 0 472.916 224zm-48.077-4A10.161 10.161 0 0 1 435 230.161v.678A10.161 10.161 0 0 1 424.839 241h-40.678A10.161 10.161 0 0 1 374 230.839v-.678A10.161 10.161 0 0 1 384.161 220zM203.654 40.717l77.974 45.018-173.642 100.252-77.973-45.018zM197 453.878L23 353.619V153.085l174 100.259zm6.654-212.658l-81.668-47.151L295.628 93.818l81.672 47.151zM306 254.182v144.761l-95 54.935V253.344l173-100.259V206h.217a24.533 24.533 0 0 0-23.417 18h-24.909A30.037 30.037 0 0 0 306 254.182zm183 202.1A15.793 15.793 0 0 1 472.916 472H335.891A15.628 15.628 0 0 1 320 456.282v-202.1A16.022 16.022 0 0 1 335.891 238h25.182a23.944 23.944 0 0 0 23.144 17h40.373a23.942 23.942 0 0 0 23.143-17h25.183A16.186 16.186 0 0 1 489 254.182z"/>
    <path d="M343.949 325h7.327a7 7 0 1 0 0-14H351v-19h19.307a6.739 6.739 0 0 0 6.655 4.727 7.019 7.019 0 0 0 7.038-6.984v-4.71a7.093 7.093 0 0 0-7.076-7.033h-32.975a6.985 6.985 0 0 0-6.949 7.033v32.975a6.95 6.95 0 0 0 6.949 6.992zm.051 64h33a7 7 0 0 0 7-7v-33a7 7 0 0 0-7-7h-33a7 7 0 0 0-7 7v33a7 7 0 0 0 7 7zm7-33h19v19h-19zm.277 83H351v-19h18.929a7.037 7.037 0 0 0 14.071.014v-6.745a7.3 7.3 0 0 0-7.076-7.269h-32.975a7.191 7.191 0 0 0-6.949 7.269v32.975a6.752 6.752 0 0 0 6.949 6.756h7.328a7 7 0 1 0 0-14z"/>
    <path d="M393.041 286.592l-20.5 20.5-6.236-6.237a7 7 0 1 0-9.9 9.9l11.187 11.186a7 7 0 0 0 9.9 0l25.452-25.452a7 7 0 0 0-9.9-9.9zm0 129.249l-20.5 20.5-6.236-6.237a7 7 0 1 0-9.9 9.9l11.187 11.186a7 7 0 0 0 9.9 0l25.452-25.452a7 7 0 0 0-9.9-9.9zM464.857 295h-43.966a7 7 0 0 0 0 14h43.966a7 7 0 0 0 0-14zm0 64h-43.966a7 7 0 0 0 0 14h43.966a7 7 0 0 0 0-14zm0 64h-43.966a7 7 0 0 0 0 14h43.966a7 7 0 0 0 0-14z"/>
</svg>
`;
const xml2 = `
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Livello_1" x="0px" y="0px" width="588px" height="588px" viewBox="20.267 102.757 588 588" enable-background="new 20.267 102.757 588 588" xml:space="preserve">
  <g>
    <path fill="#FFFFFF" stroke="#F1F2F2" stroke-width="3" stroke-miterlimit="10" d="M314.267,104.257h-0.006H314.267z" />
    <path fill="#FFFFFF" stroke="#F1F2F2" stroke-width="3" stroke-miterlimit="10" d="M593.641,309.856   c7.779,25.038,12.282,51.518,13.015,78.938C606.627,360.895,602.006,334.259,593.641,309.856z" />
    <path fill="#FFFFFF" stroke="#F1F2F2" stroke-width="3" stroke-miterlimit="10" d="M320.269,689.182   c-1.997,0.04-3.995,0.076-6.002,0.076C316.274,689.258,318.274,689.229,320.269,689.182z" />
    <path fill="#FFFFFF" stroke="#F1F2F2" stroke-width="3" stroke-miterlimit="10" d="M314.267,689.258   c-2.007,0-4.005-0.036-6.002-0.076C310.259,689.229,312.259,689.258,314.267,689.258z" />
    <path fill="#FFFFFF" stroke="#F1F2F2" stroke-width="3" stroke-miterlimit="10" d="M308.266,104.333   c1.995-0.04,3.991-0.076,5.995-0.076C312.256,104.257,310.258,104.286,308.266,104.333z" />
    <path fill="#FFFFFF" stroke="#F1F2F2" stroke-width="3" stroke-miterlimit="10" d="M314.268,104.257   C314.268,104.257,314.268,104.257,314.268,104.257c2.007,0,4.005,0.036,6.003,0.076   C318.275,104.286,316.275,104.257,314.268,104.257z" />

    <linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="241.3174" y1="737.666" x2="389.318" y2="5.6631" gradientTransform="matrix(1 0 0 -1 -6 797)">
      <stop offset="0.1" style="stop-color:#E62725" />
      <stop offset="0.3093" style="stop-color:#ED1C24" />
      <stop offset="1" style="stop-color:#1C1B1C" />
    </linearGradient>
    <path fill="url(#SVGID_1_)" stroke="#F1F2F2" stroke-width="3" stroke-miterlimit="10" d="M497.885,194.197   c-35.951-52.42-101.821-88.07-177.614-89.864c-1.998-0.041-3.996-0.076-6.004-0.076c-0.002,0-0.004,0-0.006,0   c-2.004,0-4,0.036-5.995,0.076c-127.188,2.562-234.438,86.301-272.078,201.532c18.136-49.932,52.107-90.06,94.523-111.756   c22.219-11.365,46.75-17.683,72.544-17.683c41.792,0,80.278,16.559,110.958,44.369c31.15,28.237,54.245,68.078,64.56,113.999   c3.892,17.322,5.973,35.505,5.973,54.259c0,24.827-3.645,48.653-10.319,70.803c43.404-10.909,81.033-33.316,108.05-63.098   c27.84-30.689,44.418-69.196,44.418-111.013C526.894,252.353,516.317,221.074,497.885,194.197z" />
    <path fill="#FFF200" stroke="#F1F2F2" stroke-width="3" stroke-miterlimit="10" d="M606.655,388.794   c-0.732-27.42-5.235-53.9-13.015-78.938c-36.443-117.287-144.715-202.931-273.37-205.523   c75.793,1.793,141.663,37.444,177.614,89.864c18.433,26.877,29.009,58.156,29.009,91.548c0,41.817-16.578,80.324-44.418,111.013   c-27.017,29.781-64.646,52.188-108.05,63.098c-19.077,4.795-39.263,7.38-60.159,7.38c-20.939,0-41.165-2.596-60.276-7.41   c11.732,38.949,32.869,72.69,60.221,97.485c30.68,27.81,69.165,44.369,110.956,44.369c31.125,0,60.417-9.186,86.018-25.359   c56.843-35.912,95.473-106.302,95.473-187.267C606.658,388.967,606.655,388.881,606.655,388.794z" />
    <g>

      <linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="309.9668" y1="107.8887" x2="314.2646" y2="107.8887" gradientTransform="matrix(1 0 0 -1 -6 797)">
        <stop offset="0" style="stop-color:#0090C7" />
        <stop offset="0.8326" style="stop-color:#2E3192" />
      </linearGradient>
      <path fill="url(#SVGID_2_)" stroke="#F1F2F2" stroke-width="3" stroke-miterlimit="10" d="M303.966,689.041    c1.429,0.059,2.862,0.106,4.298,0.141C306.828,689.152,305.398,689.091,303.966,689.041z" />

      <linearGradient id="SVGID_3_" gradientUnits="userSpaceOnUse" x1="27.7671" y1="364.2666" x2="384.7725" y2="364.2666" gradientTransform="matrix(1 0 0 -1 -6 797)">
        <stop offset="0" style="stop-color:#0090C7" />
        <stop offset="0.8326" style="stop-color:#2E3192" />
      </linearGradient>
      <path fill="url(#SVGID_3_)" stroke="#F1F2F2" stroke-width="3" stroke-miterlimit="10" d="M249.646,334.825    c20.38-5.543,42.089-8.545,64.622-8.545c22.49,0,44.159,2.99,64.505,8.513c-10.314-45.92-33.409-85.761-64.56-113.999    c-30.68-27.81-69.166-44.369-110.958-44.369c-25.794,0-50.325,6.318-72.544,17.683c-42.417,21.696-76.387,61.824-94.523,111.756    c-8.998,27.543-14.013,56.882-14.375,87.344c-0.014,1.183-0.045,2.361-0.045,3.547c0,158.094,125.431,286.855,282.199,292.285    c-84.513-3.441-156.088-48.998-186.572-112.624c-10.147-21.179-15.754-44.354-15.754-68.649c0-41.816,16.579-80.322,44.418-111.01    C172.146,368.001,208.125,346.119,249.646,334.825z" />
    </g>

    <linearGradient id="SVGID_4_" gradientUnits="userSpaceOnUse" x1="282.7324" y1="647.4258" x2="404.7324" y2="161.4258" gradientTransform="matrix(1 0 0 -1 -6 797)">
      <stop offset="0.6047" style="stop-color:#006838" />
      <stop offset="1" style="stop-color:#538B2E" />
    </linearGradient>
    <path fill="url(#SVGID_4_)" stroke="#F1F2F2" stroke-width="3" stroke-miterlimit="10" d="M606.767,396.756   c0-2.662-0.04-5.315-0.111-7.961c0,0.086,0.003,0.172,0.003,0.259c0,80.965-38.63,151.355-95.473,187.267   c-25.601,16.174-54.893,25.359-86.018,25.359c-41.791,0-80.276-16.56-110.956-44.369c-27.353-24.795-48.489-58.536-60.221-97.485   c-6.669-22.141-10.311-45.956-10.311-70.772c0-18.743,2.079-36.915,5.965-54.228c-41.521,11.294-77.5,33.176-103.587,61.933   c-27.84,30.688-44.418,69.193-44.418,111.01c0,24.296,5.607,47.471,15.754,68.649c31,64.702,104.491,110.721,190.87,112.765   c1.997,0.04,3.995,0.076,6.002,0.076s4.005-0.036,6.002-0.076c1.438-0.034,2.87-0.082,4.301-0.141   C481.337,683.61,606.767,554.849,606.767,396.756z" />

    <linearGradient id="SVGID_5_" gradientUnits="userSpaceOnUse" x1="249.6802" y1="400.2422" x2="390.7451" y2="400.2422" gradientTransform="matrix(1 0 0 -1 -6 797)">
      <stop offset="0" style="stop-color:#FFFFFF" />
      <stop offset="1" style="stop-color:#000000" />
    </linearGradient>
    <path fill="url(#SVGID_5_)" fill-opacity="0" d="M378.772,334.793c-20.346-5.523-42.015-8.513-64.505-8.513   c-22.533,0-44.242,3.002-64.622,8.545c-3.887,17.313-5.965,35.485-5.965,54.228c0,24.816,3.641,48.631,10.311,70.772   c19.111,4.814,39.337,7.41,60.276,7.41c20.896,0,41.082-2.585,60.159-7.38c6.675-22.15,10.319-45.977,10.319-70.803   C384.745,370.298,382.664,352.115,378.772,334.793z" />
  </g>
</svg>
`;

const Container = styled.SafeAreaView<ThemeProps>`
  flex: 1;
  background-color: ${(props: ThemeProps) =>
    props.theme.colors.background.main};
  justify-content: center;
  align-items: center;
  padding: 20px;
  padding-top: 80px;
`;
const IconContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  padding-top: 20px;
`;
const StyledSlider = styled.Slider`
  margin-top: 30px;
  width: 90%;
`;
const Divider = styled.View`
  border-bottom-color: ${({ theme }) => theme.colors.main};
  border-bottom-width: 1px;
  width: 70%;
  padding: 20px;
`;

export function Example ({
  setThemeMode,
}: {
  setThemeMode: (lastTheme: any) => void;
}) {
  const theme = useTheme();

  const [colorIndex, setColorIndex] = React.useState(1);
  const [sizeIndex, setSizeIndex] = React.useState(0);
  const primaryColor = colors[colorIndex - 1];
  const secondaryColor = colors[colorIndex % colors.length];

  return (
    <Container>
      {/* Example of Text */}
      <TextInfo
        color={theme.colors.font.main}
        size="xlarge"
        content={`You are using ${capitalize(theme.mode)} mode`}
      />

      {/* Example of Button */}
      <Button
        onPress={() => setThemeMode('dark')}
        title="Active dark mode"
        color="#000"
        size="xsmall"
      />
      <Button
        title="Testing button"
        onPress={() => console.log('I\'m a button')}
      />

      <Button
        onPress={() => setThemeMode('light')}
        title="Active light mode"
        color="#fff"
        size="xsmall"
      />
      <Button
        onPress={() =>
          setThemeMode((lastTheme: string) =>
            lastTheme === 'dark' ? 'light' : 'dark'
          )
        }
        title="Toggle theme mode"
        color={theme.colors.button.secondary}
        size="xsmall"
      />

      <Divider />

      {/* Example of Telicon */}
      <IconContainer>
        <Telicon
          name="star"
          // size="large"
          size={getIconSize(sizeIndex + 3)}
          fill={theme.colors.icon.main}
          fillSecondary="#630007"
        />
        <Telicon
          name="star"
          // size="large"
          size={getIconSize(sizeIndex + 2)}
          fill={theme.colors.icon.main}
          fillSecondary="#630007"
        />
        <Telicon
          name="star"
          // size="large"
          size={getIconSize(sizeIndex + 1)}
          fill={theme.colors.icon.secondary}
          fillSecondary="#630007"
        />
        <Telicon
          name="star"
          // size="large"
          size={getIconSize(sizeIndex)}
          fill={theme.colors.icon.secondary}
          fillSecondary="#630007"
        />
      </IconContainer>

      <StyledSlider
        step={1}
        minimumValue={0}
        maximumValue={5}
        onValueChange={setSizeIndex}
      />

      <Divider />

      {/* Example of SvgFromXml using app's configuration */}
      <IconContainer>
        <BallIcon
          width={iconSize}
          height={iconSize}
          fill={primaryColor}
          fillSecondary={secondaryColor}
        />
        <AvatarIcon
          width={iconSize}
          height={iconSize}
          fill={primaryColor}
          fillSecondary={secondaryColor}
        />
        <HeartIcon
          width={iconSize}
          height={iconSize}
          fill={primaryColor}
          fillSecondary={secondaryColor}
        />
      </IconContainer>

      <Divider />

      {/* Example of SvgFromXml */}
      <IconContainer>
        <SvgFromXml
          xml={xml}
          width={iconSize}
          height={iconSize}
          size="small"
          fill={primaryColor}
          fillSecondary={secondaryColor}
        />
        <SvgFromXml
          xml={AvatarIcon}
          size="small"
          fill={primaryColor}
          fillSecondary={secondaryColor}
        />
        <SvgFromXmlString
          xml={xml2}
          width={theme.sizes.icon.medium}
          height={theme.sizes.icon.medium}
          size="medium"
          fill={primaryColor}
          fillSecondary={secondaryColor}
        />
        <SvgFromXmlFile
          Xml={HeartIcon}
          width={theme.sizes.icon.small}
          height={theme.sizes.icon.small}
          size="large"
          fill={primaryColor}
          fillSecondary={secondaryColor}
        />
      </IconContainer>

      <StyledSlider
        step={1}
        minimumValue={0}
        maximumValue={colors.length}
        onValueChange={setColorIndex}
      />

      <Button
        onPress={() => setColorIndex((idx) => idx + 1)}
        title="Next color"
      />
    </Container>
  );
}

export default Example;
