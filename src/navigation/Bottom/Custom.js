import { defaultTo } from "lodash"
import React from "react"
import { View, Text, FlatList } from "react-native"
import { Images } from "../../theme"

const data = [
    {
        title: "home",
        Icon: Images.HomeIcon
    },
    {
        title: "merchant",
        Icon: Images.MerchantIcon
    },
    {
        title: "notification",
        Icon: Images.NotificationIcon
    },
    {
        title: "cart",
        Icon: Images.CartIcon
    },

]

const BottomTabNavigator = () => {

    const renderItem = (item, index) => {
    }
    return (
        <FlatList
            data={data}
            renderItem={renderItem}
        />
    )
}

export default BottomTabNavigator