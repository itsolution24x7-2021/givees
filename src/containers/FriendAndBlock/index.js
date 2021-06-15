import React, { useState } from "react"
import { View, Text, ImageBackground, Image, ScrollView, TouchableOpacity } from "react-native"
import { Images, Metrics, Fonts } from "../../theme"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import AntDesign from "react-native-vector-icons/AntDesign"
import { ButtonWithIcon, GoBackHeader } from "../../components"
import styles from "./style"

const FriendAndBlock = ({ navigation, route }) => {
    console.log(route.name, "RRRRRRRRRRRRRRRRRRRRRRR")
    const [block, setBlock] = useState(true)
    const { name } = route.params

    const unBlock = () => {
        // alert("called")
        setBlock(false)
    }

    const renderFriend = () => {
        return (
            <>
                <ImageBackground
                    source={Images.background}
                    style={{ height: Metrics.screenHeight * 0.45, width: null }}
                >
                    <GoBackHeader goBack={navigation.goBack} />

                    <View style={{ marginBottom: 10 }}>
                        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                            <View>
                                <Image source={Images.FriendsImage} style={styles.rounderIcon} />
                            </View>
                            <View style={{ justifyContent: "center", alignItems: "center", }}>

                                <View style={{ flexDirection: "row", marginTop: 15 }}>
                                    <TouchableOpacity
                                        style={{
                                            marginRight: 10,
                                            borderWidth: 1,
                                            flexDirection: "row",
                                            paddingHorizontal: 20,
                                            borderRadius: 20,
                                            paddingVertical: 5,
                                            borderColor: "white"
                                        }}

                                    >
                                        <Text style={{ fontSize: 15, color: "white", width: 100, textAlign: "center" }}>Add as friend</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={{
                                            borderWidth: 1, flexDirection: "row",
                                            paddingHorizontal: 15, borderRadius: 20, paddingVertical: 5,
                                            borderColor: "white",
                                            justifyContent: "center",
                                            alignItems: "center"
                                        }}
                                    >
                                        <Text style={{ fontSize: 15, color: "white", width: 80, textAlign: "center" }}>Block</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        <View style={{ marginLeft: Metrics.screenWidth * 0.04, justifyContent: "flex-end" }}>
                            <Text style={{ fontSize: 25, color: "white" }}>@MyHandle</Text>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={{ fontSize: 15, color: "white" }}>Toronto, Ontario</Text>

                            </View>
                        </View>
                    </View>
                </ImageBackground>

                <View style={{ justifyContent: "center", flex: 1, alignItems: "center" }}>
                    <View>
                        <Image source={Images.Private_Icon} />
                    </View>
                    <View style={{ marginTop: 1 }}>
                        <Text style={{ color: "#8F93A2", fontSize: 20, fontFamily: Fonts.type.ArialBold }}>This account is Private.</Text>
                    </View>
                    <View style={{ marginTop: 5 }}>
                        <Text style={{ color: "#000000", fontSize: 15, fontFamily: Fonts.type.ArialBold }}>Make a friend request to see full profile.</Text>
                    </View>
                </View>
            </>
        )
    }
    const renderBlock = () => {
        return (
            <>
                <ImageBackground
                    source={Images.background}
                    style={{ height: Metrics.screenHeight * 0.45, width: null }}
                >
                    <GoBackHeader goBack={navigation.goBack} />

                    <View style={{ marginBottom: 10, marginLeft: 10 }}>
                        <View >
                            <View>
                                <Image source={Images.unBock_Icon} style={styles.rounderIcon} />
                            </View>

                        </View>

                        <View style={{ marginLeft: Metrics.screenWidth * 0.04, justifyContent: "flex-end" }}>
                            <Text style={{ fontSize: 25, color: "white" }}>@MyHandle</Text>

                        </View>
                    </View>
                </ImageBackground>

                <View style={{ backgroundColor: "white", justifyContent: "center", flex: 1, alignItems: "center" }}>
                    <ButtonWithIcon
                        buttonText="UNBLOCK"
                        color="#3FA9F5"
                        image={Images.CircleNext}
                        method={unBlock}
                        screenName={route.name}
                    />
                </View>
            </>
        )
    }


    return (
        <View style={{ flex: 1 }}>
            {name == "unfriend" || !block ? renderFriend() : renderBlock()}
        </View>
    )
}

export default FriendAndBlock