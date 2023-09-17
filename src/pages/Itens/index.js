
import React from "react";
import { View, StyleSheet, FlatList, ScrollView} from "react-native";
import CardCosmetico from "../../components/CardCosmetico";

export default function Itens ({navigation}){
    navigation.setOptions({
        headerTitle: "SABONETES",
    })

    const dadosSabonete = [
        {
            poster: require('../../assets/TerralSabonete.png'),
            nome: "Sabonete Argila verm",
            preco: "R$ 34,60",
            link: {uri: 'https://terralnatural.com.br/collections/sabonete/products/sabonete-argila-vermelha'}
        },
        {
            poster: require('../../assets/NakuanSabonete-ArgilaRosa.jpg'),
            nome: "Sabonete Argila Rosa",
            preco: "R$ 9,90",
            link: {uri: 'https://www.elo7.com.br/sabonete-vegano-de-argila-rosa/dp/1420E3E?pp=18&pn=1&nav=sch_pd_sr_1_18&qrid=1a1tE0bKBGxz#dvbc=1&dwhc=1&dcc=0&lpfcm=1&sedk=1&osrlt7=0&sek=0&fsfv=0&wch=0&sbc=1&wcld=1&oppb=0&ses=1&pssb=0&pso=up&seb=0&dtm1=1&usb=1&dvsbs=1&sei=1&pcpe=1&dtm2=1&df=d&hpa=0&hsotb=0&srwv=1&sewb=0&sepi=0&vpl=1&wppbd=0&wsld=1&utp=0&dld=1&uje=0&carf=1&lvbbpm=1&sgta=1&wpm=0&sed=1&sea=0&pdp=0&wppbm=0&doar=0&csdm=0&dhbc=0&sep=1&osrl=0&disc=1&sew=0&psedm=0&hsv=1&cscws=0&uso=d&vsbs=1&deac=0&droam=0&lvbbob=0&psews=0&set=0&accb=1&sseov=0'}
        },
        {
            poster: require('../../assets/ExpressoMataAtlantivaSabonete.png'),
            nome: "Sabonete de Camomila",
            preco: "R$ 23,44",
            link: {uri: 'https://www.expressomataatlantica.com.br/sabonetes/sabonete-de-camomila-natural-artesanal-organico-e-vegano'}
        }
        ]
        const dadosSabonetes = [

        {
            poster: require('../../assets/ArteCosmeticaSaboneteCapimLimaoArgilaRosa.jpg'),
            nome: "Sabonete Capim Limão",
            preco: "R$ 5,90",
            link: {uri: 'https://www.elo7.com.br/mini-sabonete-natural-de-capim-limao-e-argila-rosa-30g/dp/1B00C38?pp=7&pn=1&nav=sch_pd_sr_1_7&qrid=1a1tE0bKBGxz#dvbc=1&dwhc=1&dcc=0&lpfcm=1&sedk=1&osrlt7=0&sek=0&fsfv=0&wch=0&sbc=1&wcld=1&oppb=0&ses=1&pssb=0&pso=up&seb=0&dtm1=1&usb=1&dvsbs=1&sei=1&pcpe=1&dtm2=1&df=d&hpa=0&hsotb=0&srwv=1&sewb=0&sepi=0&vpl=1&wppbd=0&wsld=1&utp=0&dld=1&uje=0&carf=1&lvbbpm=1&sgta=1&wpm=0&sed=1&sea=0&pdp=0&wppbm=0&doar=0&csdm=0&dhbc=0&sep=1&osrl=0&disc=1&sew=0&psedm=0&hsv=1&cscws=0&uso=d&vsbs=1&deac=0&droam=0&lvbbob=0&psews=0&set=0&accb=1&sseov=0'}
        },
        {
            poster: require('../../assets/BaobaSabonete.png'),
            nome: "Sabonete Barbatimão",
            preco: "R$ 22,00",
            link: {uri: 'https://www.baobasaboaria.com.br/sabonete-intimo-barbatimao-copaiba-tea-tree-e-geranio?parceiro=1101&gclid=CjwKCAjw3dCnBhBCEiwAVvLcuw89XIx6IY6O2mRDL7j01Tfmd7PAQ-TO5VHKS76VBB6_5V-1Feo-exoCqsgQAvD_BwE'}
        },
        {
            poster: require('../../assets/EssenciaSaboneteArgilaRosa.jpg'),
            nome: "Sabonete de Argila Rosa",
            preco: "R$ 14,00",
            link: {uri: 'https://www.elo7.com.br/sabonete-facial-de-argila-rosa-90g-essencia/dp/134471D?pp=2&pn=1&nav=sch_pd_sr_1_2&qrid=1a1tE0bKBGxz#dvbc=1&dwhc=1&dcc=0&lpfcm=1&sedk=1&osrlt7=0&sek=0&fsfv=0&wch=0&sbc=1&wcld=1&oppb=0&ses=1&pssb=0&pso=up&seb=0&dtm1=1&usb=1&dvsbs=1&sei=1&pcpe=1&dtm2=1&df=d&hpa=0&hsotb=0&srwv=1&sewb=0&sepi=0&vpl=1&wppbd=0&wsld=1&utp=0&dld=1&uje=0&carf=1&lvbbpm=1&sgta=1&wpm=0&sed=1&sea=0&pdp=0&wppbm=0&doar=0&csdm=0&dhbc=0&sep=1&osrl=0&disc=1&sew=0&psedm=0&hsv=1&cscws=0&uso=d&vsbs=1&deac=0&droam=0&lvbbob=0&psews=0&set=0&accb=1&sseov=0'}
        }
    ]

    return(

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', backgroundColor: '#FFF' }}>
                <FlatList showsVerticalScrollIndicator={false} style={styles.section} data={dadosSabonete} renderItem={cosmetico => <CardCosmetico cosmetico={cosmetico} />} />
                <FlatList showsVerticalScrollIndicator={false} style={styles.section} data={dadosSabonetes} renderItem={cosmetico => <CardCosmetico cosmetico={cosmetico} />} />
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
    containerSession:{
        display: 'flex',
    },
    section: {
        flexGrow: 0,
        flexRow: 3,
        display: 'flex',
    },
    headerImage:{
        height: '10%',
    }
})