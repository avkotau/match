import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Screenshot: undefined;
  ScreenshotsCardScreen: undefined;
  Paywall: undefined;
};

export type NavigationProps<RouteName extends keyof RootStackParamList> = {
  navigation: NativeStackNavigationProp<RootStackParamList, RouteName>;
  route: RouteProp<RootStackParamList, RouteName>;
} & Record<string, any>; // add all props

export type HomeProps = Partial<NavigationProps<'Home'>>;
export type PaywallProps = Partial<NavigationProps<'Paywall'>>;
export type ScreenshotProps = Partial<NavigationProps<'Screenshot'>>;
export type ScreenshotsCardScreenProps = Partial<
  NavigationProps<'ScreenshotsCardScreen'>
>;

export type Theme = {
  headerColor: string;
};

export type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};
