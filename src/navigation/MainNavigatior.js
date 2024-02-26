import { StyleSheet,View,Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ShopStack from './ShopStack'
import CartStack from './CartStack'
import OrderStack from './OrderStack'
import colors from '../utils/golbals/colors'
import TabBarIcon from '../components/TabBarIcon';

const Tab = createBottomTabNavigator();

const MainNavigator = () =>{
    return(
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName='ShopStack'
                screenOptions={{
                    headerShown:false,
                    tabBarShowLabel:false,
                    tabBarStyle:styles.tabBar
                }}
            >
                 <Tab.Screen 
                name='ShopStack'
                component={ShopStack}
                options={{
                    tabBarIcon: ({focused}) => 
                    <TabBarIcon title="Pets" nameIcon="home" focused={focused}/>
                }}
                />

                <Tab.Screen
                    name='CartStack'
                    component={CartStack}
                    options={{
                        tabBarIcon: ({focused}) => <TabBarIcon title='Ordenes' nameIcon='list' focused={focused}/>
                    }}
                />
                
                

            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default MainNavigator

const styles = StyleSheet.create({
    tabBar:{
        backgroundColor:colors.bgcolor,
        height:80,
        position:"absolute",
        left:20,
        right:20,
        bottom:25,
        borderRadius:15,
        elevation:4,
        /*Shadow IOS*/
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62, 
    }
})