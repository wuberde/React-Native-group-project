import { ViewStyle, TextStyle, Platform } from 'react-native';

export const BG_COLOR = '#b152fe';
export const HIGHLIGHT_BG_COLOR = 'yellow'; //the color doesn't work

export const TEXT: TextStyle = {
  color: 'white',
  textAlign: 'center',
};

export const TEXT_LABEL: TextStyle = {
  fontSize: 15,
  textAlign: 'center',
  color: 'white',
  fontWeight: 'bold',
};

export const TEXT_VALUE: TextStyle = {
  ...TEXT,
  fontFamily: Platform.OS === 'ios' ? 'Helvetica Neue' : null,
  fontSize: 45,
  lineHeight: 55,
  fontWeight: 'bold',
};

export const ROW: ViewStyle = {
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'space-between',
};

export const CENTER: ViewStyle = {
  justifyContent: 'center',
  alignItems: 'center',
};

export const BOX: ViewStyle = {
  flex: 1.2,
  backgroundColor: BG_COLOR,
  padding: 15,
  borderRadius: 40, //purple boxes showing age and weight
};
