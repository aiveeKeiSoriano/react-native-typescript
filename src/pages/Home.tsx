
import React, { useEffect } from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { NavigationScreenProp } from 'react-navigation'
import { useDispatch, useSelector } from 'react-redux'
import { CoinData, fetchCoin } from '../actions/action'
import { State } from '../reducers/reducer'

interface Props {
    navigation: NavigationScreenProp<any,any>
}

const Home:React.FC<Props> = ({navigation}) => {

    const coin: CoinData = useSelector((state: State) => state.coin)
    const dispatch = useDispatch()

    const fetchInfo = () => {
        dispatch(fetchCoin())
    }

    useEffect(() => {
        fetchInfo()
        let interval = setInterval(() => fetchInfo(), 60000)
        return () => clearInterval(interval)
    }, [])

    const goToWallet = () => {
        navigation.navigate('Wallet')
    }

    return (
        <View style={styles.container}>
            {coin.name !== "" && 
                <View style={styles.innerContainer}>
                    <Image source={{ uri: coin.image }} style={styles.image} />
                    <Text style={styles.title}>{coin.name}</Text>
                    <Text style={styles.price}>{"\u20B1"}{coin.price}</Text>
                    <TouchableOpacity style={styles.walletBtn} onPress={goToWallet}>
                        <Text style={styles.walletTxt}>       View Wallet   →</Text>
                    </TouchableOpacity>
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fdcd4a',
      alignItems: 'center',
      justifyContent: 'center',
    },
    innerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: "rgb(0, 69, 49)",
        borderWidth: 10,
        margin: 10,
        width: "95%",
        borderRadius: 5
    },
    image: {
        width: 150,
        height: 150,
        marginBottom: 15,

    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        marginBottom: 2,
        color: "rgb(66,198,144)",
        fontFamily: "carter"
    },
    price: {
        fontSize: 40,
        fontWeight: "bold",
        color: "rgb(66,198,144)",
        textShadowColor:'#ffffff',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 20
    },
    walletBtn: {
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "rgb(192,127,90)",
        width: 200,
        height: 40,
        borderRadius: 20,
    },
    walletTxt: {
        color: "white",
        fontSize: 25,
        fontWeight: "bold",
        fontFamily: "carter"
    }
});
  

export default Home