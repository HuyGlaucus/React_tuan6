import { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Alert } from 'react-native'

const Hinh1 = () => {

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Image source={require('../assets/vs_blue.png')}
                style={styles.imageTop}/>
            </View>
            <View style={styles.bot}>
                <View style={styles.bot1}>
                    <View style={styles.text1}>
                        <Text style={styles.txt1}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
                    </View>
                    <View style={styles.text2}>
                        <Image source={require('../assets/star.png')} style={styles.imageStar}/>
                        <Image source={require('../assets/star.png')} style={styles.imageStar}/>
                        <Image source={require('../assets/star.png')} style={styles.imageStar}/>
                        <Image source={require('../assets/star.png')} style={styles.imageStar}/>
                        <Image source={require('../assets/star.png')} style={styles.imageStar}/>
                        <Text style={styles.txt2}>(Xem 828 đánh giá)</Text>
                    </View>
                    <View style={styles.text3}>
                        <Text style={styles.txt31}>1.790.000 đ</Text>
                        <Text style={styles.txt32}>&nbsp; &nbsp;1.790.000 đ</Text>
                    </View>
                    <View style={styles.text4}>
                        <Text style={styles.txt4}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
                        <Image source={require('../assets/Group1.png')} style={styles.imghoi} />
                    </View>
                </View>
                <View style={styles.bot2}>
                    <View style={styles.bot2top}>
                        <TouchableOpacity>
                            <Text style={styles.txt5}>4 MÀU-CHỌN MÀU                          > </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.bot2bot}>
                        <TouchableOpacity>
                            <Text style={styles.txt6}>CHON MUA</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}
export default Hinh1

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        flex: 1,
        alignItems: 'center',
    },
    top: {
        flex: 4/7,
        height: '100%',
        width: '80%',
        alignItems: 'center',
    },
    imageTop:{
        width: '100%',
        height: '100%',
    },
    bot:{
        flex: 3/7,
        height: '100%',
        width: '100%',
    },
    bot1:{
        flex: 3/5,
        height: '100%',
        width: '100%',

    },
    bot2:{
        flex: 2/5,
        height: '100%',
        width: '100%',
    },
    text1:{
        flex: 1/4,
        height: '100%',
        width: '100%',
        left: '22px',
    },
    txt1:{
        fontFamily: 'Roboto',
        fontSize: '15px',
        fontWeight: '400',
        lineHeight: '18px',
        letterSpacing: '0em',
        textAlign: 'left',
    },
    text2:{
        flex: 1/4,
        height: '100%',
        width: '100%',
        flexDirection:'row',
        left: '22px',
    },
    txt2:{
        fontFamily: 'Roboto',
        fontSize: '18px',
        fontWeight: '400',
        lineHeight: '18px',
        letterSpacing: '0em',
        textAlign: 'left',
        left: '40px',
    },
    imageStar:{
        width: '21px',
        height: '21px',
    },
    text3:{
        flex: 1/4,
        height: '100%',
        width: '100%',
        flexDirection:'row',
        left: '23px',
    },
    txt31:{
        fontFamily: 'Roboto',
        fontSize: '18px',
        fontWeight: '700',
        lineHeight: '21px',
        letterSpacing: '0em',
        textAlign: 'left',
        color:'black',
    },
    txt32:{
        fontFamily: 'Roboto',
        fontSize: '15px',
        fontWeight: '700',
        lineHeight: '18px',
        letterSpacing: '0em',
        textAlign: 'left',
        textDecorationLine:'line-through',
        left: '66px',
        color:'grey',
    },
    text4:{
        flex: 1/4,
        height: '100%',
        width: '100%',
        flexDirection:'row',
        left: '23px',
    },
    txt4:{
        fontFamily: 'Roboto',
        fontSize: '15px',
        fontWeight: '700',
        linehHeight: '14px',
        letterSpacing: '0em',
        textAlign: 'left',
        color:'red',
    },
    imghoi:{
        width: '20px',
        height: '20px',
        left: '12px',
    },
    bot2top:{
        flex: 1/3,
        height: '93%',
        width: '93%',
        left: '12px',
        top:'-16px',
        borderWidth:'1px',
        borderRadius:'5px',
        borderColor:'grey',
    },
    txt5:{
        fontFamily: 'Roboto',
        fontSize: '16px',
        fontWeight: '400',
        lineHeight: '18px',
        marginTop: '8px',
        letterSpacing: '0em',  
        justifyContent:'center',
        alignItems:'center',
        textAlign:'right',

    },
    bot2bot:{
        flex: 1/3,
        height: '93%',
        width: '93%',
        left: '12px',
        flexDirection:'column',
    },
    txt6:{
        alignItems: 'center',
        borderWidth: '1px',
        borderColor: 'gray',
        borderRadius: '5px',
        fontSize: 15,
        color: 'white',
        fontWeight: 600,
        padding: 10,
        marginTop: 30,
        backgroundColor : '#CA1536',
        textAlign:'center',
    }
})