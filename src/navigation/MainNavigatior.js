import { StyleSheet,View,Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ShopStack from './ShopStack'
import CartStack from './CartStack'
import OrdersStack from './OrdersStack'
import colors from '../utils/globals/colors';
import TabBarIcon from '../components/TabBarIcon';