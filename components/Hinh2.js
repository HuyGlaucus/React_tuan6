import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native'

const Hinh2 = () => {

    return (
        <View style={styles.container}>
           <View style={styles.top}>
                <View style={styles.img}>
                    <Image source={require('../assets/vs_blue.png')} style={styles.imagblue}/>
                </View>
                <View style={styles.text1}>
                    <Text style={styles.txt1}>Điện Thoại Vsmart Joy 3 Hàng chính hãng</Text>
                </View>
           </View>
           <View style={styles.bot}>
                <View style={styles.text2}>
                    <Text style={styles.txt2}>Chọn một màu bên dưới:</Text>
                </View>
                <View style={styles.img1}>
                    <Image source={require('../assets/Rectangle4.png')} style={styles.img14}/>
                    <Image source={require('../assets/Rectangle5.png')} style={styles.img15}/>
                    <Image source={require('../assets/Rectangle6.png')} style={styles.img16}/>
                    <Image source={require('../assets/Rectangle7.png')} style={styles.img17}/>
                </View>
                <View style={styles.bot1}>
                    <TouchableOpacity>
                        <Text style={styles.txt3}>XONG</Text>
                    </TouchableOpacity>
                </View>
           </View>
        </View>
    )
}
export default Hinh2
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flex: 1,
        alignItems: 'center',
    },
    top: {
        flex: 1/5,
        height: '100%',
        width: '100%',
        justifyContent:'center',
        flexDirection:'row',

    },
    img:{
        width:'33%',
        height:'100%',
    },
    imagblue:{
        width: '112px',
        height: '132px',
        left: '6px',
    },
    text1:{
        height: '100%',
        width: '67%',
    },
    txt1:{
        fontFamily: 'Roboto',
        fontSize: '15px',
        fontWeight: '400',
        lineHeight: '18px',
        letterSpacing: '0em',
        textAlign: 'left',
        top:'11px',
    },
    bot:{
        flex: 4/5,
        height: '100%',
        width: '100%',
        backgroundColor:'grey',
    },
    text2:{
        flex:1/20,
        height: '100%',
        width: '100%',
    },
    txt2:{
        fontFamily: 'Roboto',
        fontSize: '18px',
        fontWeight: '400',
        lineHeight: '21px',
        letterSpacing: '0em',
        textAlign:'left',
        left:'15px',
    },
    img1:{
        flex:16/20,
        width:'25%',
        height:'100%',
        flexDirection:'column',
        justifyContent:'space-evenly',
        alignItems:'center',

    },
    img14:{
        height:'103px',
        width:'103px',
        left: '145px',
    },
    img15:{
        height:'100px',
        width:'100px',
        left: '145px',
    },
    img16:{
        height:'100px',
        width:'100px',
        left: '145px',
    },
    img17:{
        height:'100px',
        width:'100px',
        left: '145px',
    },
    bot1:{
        flex: 2/20,
        height: '93%',
        width: '93%',
        left: '12px',
    },
    txt3:{
        alignItems: 'center',
        borderWidth: '1px',
        borderColor: 'red',
        borderRadius: '10px',
        fontSize: 20,
        color: 'white',
        fontWeight: 700,
        padding: 10,
        marginTop: 25,
        backgroundColor : '#1952E294',
        textAlign:'center',
    }
})