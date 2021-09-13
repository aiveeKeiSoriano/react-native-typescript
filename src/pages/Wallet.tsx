
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'
import { CoinData } from '../actions/action'
import { State } from '../reducers/reducer'

interface Props {

}

const Wallet: React.FC<Props> = () => {

    const coin: CoinData = useSelector((state: State) => state.coin)

    return (
        <View style={styles.container}>
            <View style={styles.inGameContainer}>
                <View style={styles.mainText}>
                    <Text style={styles.titleText}>In Game</Text>
                    <Text style={styles.text}>
                        <Text style={{ fontWeight: "bold" }}>Quantity:</Text>
                        <Text> 1367 slp</Text>
                    </Text>
                    <Text style={styles.text}>
                        <Text style={{ fontWeight: "bold" }}>Price:</Text>
                        <Text> {"\u20B1"}{(coin.price * 1367).toFixed(2)}</Text>
                    </Text>
                    <View style={styles.textGroup}>
                        <Text style={styles.secondaryTxt}>Scholar's percentage (30%)</Text>
                        <Text style={styles.text}>
                            <Text style={{ fontWeight: "bold" }}>Quantity:</Text>
                            <Text> {Math.ceil(1376 * .3)} slp</Text>
                        </Text>
                        <Text style={styles.text}>
                            <Text style={{ fontWeight: "bold" }}>Price:</Text>
                            <Text> {"\u20B1"}{(Math.ceil(1376 * .3) * coin.price).toFixed(2)}</Text>
                        </Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.newTotal}>
                    <Text style={styles.newTotalTxt}>Input new total</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.roninContainer}>
                <View style={styles.mainText}>
                    <Text style={styles.titleText}>Ronnin</Text>
                    <Text style={styles.text}>
                        <Text style={{ fontWeight: "bold" }}>Quantity:</Text>
                        <Text> 668 slp</Text>
                    </Text>
                    <Text style={styles.text}>
                        <Text style={{ fontWeight: "bold" }}>Price:</Text>
                        <Text> {"\u20B1"}{(coin.price * 668).toFixed(2)}</Text>
                    </Text>
                </View>
                <TouchableOpacity style={styles.newTotal}>
                    <Text style={styles.newTotalTxt}>Input new total</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Wallet

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgb(192,127,90)"
    },
    inGameContainer: {
        flex: 1,
        backgroundColor: "#ffb300",
        margin: 10,
        marginBottom: 0,
        borderRadius: 10,
        padding: 20,
    },
    roninContainer: {
        flex: 1,
        backgroundColor: "#13b0c9",
        margin: 10,
        borderRadius: 10,
        padding: 20,
    },
    titleText: {
        color: "white",
        fontWeight: "bold",
        marginBottom: 10,
        fontSize: 30
    },
    text: {
        color: "black",
        fontSize: 20,
    },
    textGroup: {
        marginTop: 10
    },
    newTotal: {
        alignSelf: "flex-end",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "rgb(192,127,90)",
        width: "100%",
        height: 40,
        borderRadius: 20
    },
    newTotalTxt: {
        color: "white",
        fontSize: 20,
        fontWeight: "bold"
    },
    mainText: {
        flex: 1
    },
    secondaryTxt: {
        color: "white",
        fontWeight: "bold",
        fontSize: 20
    }
})