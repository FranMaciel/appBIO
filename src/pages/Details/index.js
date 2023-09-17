import React from "react";
import { View, Text, Image, StyleSheet, Button, Linking, ScrollView} from "react-native";

function Link(){
    Linking.openURL('https://biobio.com.br/products/protetor-solar-fisico-mineral-sunnature-fps30-1')
}


export default function Details ({ navigation }){
    navigation.setOptions({
        headerTitle: "DETALHES"
    })

    return(

        <View style={styles.container}>
            <Image
            source={require('../../assets/BioBioProtetorSolar.png')}
            style={styles.image}
            resizeMode="cover"
            />
            <ScrollView>
            <View>
                <View>
                    <Text style={[styles.title, { fontSize: 24 }]}>SUNNATURE</Text>
                </View>
                <View>
                    <Text style={[{ fontSize: 24 }]}>R$ 124,90</Text>
                </View>
                <View style={styles.detalhes}>
                    <Text>Indicado para todos os tipos de pele, O SUNNATURE foi desenvolvido com ativos naturais (vegetais e orgânicos) com uma combinação exclusiva de filtros físicos, ideal para ser usado diariamente. Além disso, sua fórmula  biodegradável (sem silicone ou filtros hidrossolúveis) limita os danos ambientais.</Text> 
                </View>
                <View style={styles.detalhes}>
                    <Text>COMPOSIÇÃO: Aqua, Aloe barbadensis leaf juice, Xanthan gum Glycerin, Glyceryl stearate, Cetearyl alcohol, Stearic acid, Sodium cocoyl glutamate, Cetyl alcohol, Caprylic/capric triglyceride, Olea europaea fruit oil, Calendula officinalis flower oil, Cetearyl olivate, Sorbitan olivate, Heptyl undecylenate, Butyrospermum parkii (shea) butter extract, Argania spinosa kernel oil, Spent grain wax, Tocopherol, Hydrogenated vegetable oil, Titanium dioxide, Silica, Zinc oxide, Salvia officinalis leaf extract, Camellia sinensis leaf extract, Lonicera caprifolium extract, Lonicera japônica (honeysuckle) flower extract, Coco caprylate/caprate, Chamomilla recutita flower extract, Fucus vesiculosus extract, Porphyra umbilicalis extract, Sodium lactate, Sodium benzoate, Lavandula officinalis flower oil, Cymbopogon flexuosus leaf oil, Rosmarinus officinalis leaf oil and Citric acid. NONANO.</Text> 
                </View>
                <View style={styles.button} >
                   <Button
                    title="CLIQUE AQUI PARA SER DIRECIONADO PARA O SITE" 
                    color= '#32B1CA'
                    onPress={(Link)}
                   />
                </View>
            </View>
           </ScrollView>
        </View> 

    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,      
        width: '100%',
        paddingHorizontal: '3%',
        backgroundColor: '#FFF'
    },
    image:{
        width: '100%',
        height: '40%',
    },
    title:{
        backgroundColor:'#32B1CA',
    },
    detalhes:{
        textAlign: 'center',
        fontSize: 16,
        lineHeight: 25,
        marginVertical: '2%',
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 5, 
    },
    button:{
        marginVertical: '2%',
    }
})