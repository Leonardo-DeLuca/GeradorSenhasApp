import { StatusBar } from "expo-status-bar";
import React from "react";
import {Text, View} from "react-native"
import styles from "./Style";
import Logo from "../../component/Logo/Logo";
import { BatTextInput } from "../../component/BatTextInput/BatTextInput";
import { BatButton } from "../../component/BatButton/BatButton";


export default function Home(){
    return (
        <View style={styles.appContainer}>
            <View style={styles.logoContainer}>
                <Logo/>
            </View>

            <View style={styles.inputContainer}>
                <BatButton/>
            </View>
            <StatusBar style="light"/>
        </View>
    )
}