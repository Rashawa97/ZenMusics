import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ArtistsStack from './Stacks/ArtistsStack';
import AlbumsStack from './Stacks/AlbumsStack';
import TracksStack from './Stacks/TracksStack';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Tracks"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>

      <BottomTab.Screen
        name="Tracks"
        component={TracksStack}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-musical-note" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Albums"
        component={AlbumsStack}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ios-albums" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Artists"
        component={ArtistsStack}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="md-microphone" color={color} />,


        }}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

