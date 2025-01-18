// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

import { type IconProps } from '@expo/vector-icons/build/createIconSet';
import { type ComponentProps } from 'react';
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";

export function TabBarIcon({ style, ...rest }: IconProps<ComponentProps<typeof Ionicons>['name']>) {
  return <Ionicons size={28} style={[{ marginBottom: -3 }, style]} {...rest} />;
}

export const icons = {
  explore: (props)=> <Feather name="compass" size={26} {...props} />,
  bookings: (props)=> <AntDesign name="book" size={26} {...props} />,
  calendar: (props)=> <AntDesign name="calendar" size={26} {...props} />,
  inbox: (props)=> <AntDesign name="message1" size={26} {...props} />,
  profile: (props)=> <Ionicons name="person-circle-outline" size={26} {...props} />
}