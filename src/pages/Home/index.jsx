import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, FlatList, Image, ScrollView } from 'react-native';
import CardCosmetico from '../../components/CardCosmetico';
import SessionTitle from "../../components/SessionTitle";
import { Entypo } from '@expo/vector-icons';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Home(){
    const navigation = useNavigation()

    const dadosProtetor = [
        {
            poster: require('../../assets/Bio Bio Protetor Solar.png'),
            nome: "SUNNATURE",
            preco: "R$ 124,90",
        },
        {
            poster: require('../../assets/Khor Protetor solar.png'),
            nome: "Khor FPS 15",
            preco: "R$ 79,30",
            link: {uri:'https://khorcosmetics.com/produtos/protetor-solar-natural-fps15-uva8-khor-50g/'}
        },
        {
            poster: require('../../assets/Mami wata.png'),
            nome: "Mami Wata FPS 30",
            preco: "R$ 99,90",
            link: {uri: 'https://mamiwata.eco.br/products/protetor-solar-mami-wata-30fps-60g'}
        }

    ]
    const dadosSerum = [
        {
            poster: require('../../assets/Baobá Serum.png'),
            nome: "Baobá 20 ml",
            preco: "R$ 52,00",
            link: {uri: 'https://www.baobasaboaria.com.br/serum-facial-peles-secas?variant_id=243'}
        },
        {
            poster: require('../../assets/Hidratante Calm Rose.png'),
            nome: "Hidratante Calm Rose",
            preco: "R$ 65,00",
            link: {uri: 'https://www.baobasaboaria.com.br/serum-facial-peles-secas?variant_id=243'}
        },
        {
            poster: require('../../assets/Simple Organic.png'),
            nome: "Simple Organic",
            preco: "R$ 135,00",
            link: {uri: 'https://simpleorganic.com.br/products/serum-facial#!'}
        }
    ]
    const dadosSabonete = [
        {
            poster: require('../../assets/Terral sabonete.png'),
            nome: "Sabonete Argila verm",
            preco: "R$ 34,60",
            link: {uri: 'https://terralnatural.com.br/collections/sabonete/products/sabonete-argila-vermelha'}
        },
        {
            poster: require('../../assets/Baobá sabonete.png'),
            nome: "Sabonete Barbatimão",
            preco: "R$ 22,00",
            link: {uri: 'https://www.baobasaboaria.com.br/sabonete-intimo-barbatimao-copaiba-tea-tree-e-geranio?parceiro=1101&gclid=CjwKCAjw3dCnBhBCEiwAVvLcuw89XIx6IY6O2mRDL7j01Tfmd7PAQ-TO5VHKS76VBB6_5V-1Feo-exoCqsgQAvD_BwE'}
        },
        {
            poster: require('../../assets/Expresso mata atlantiva sabonete.png'),
            nome: "Sabonete de Camomila",
            preco: "R$ 23,44",
            link: {uri: 'https://www.expressomataatlantica.com.br/sabonetes/sabonete-de-camomila-natural-artesanal-organico-e-vegano'}
        }
    ]
    return(
      
       <View showsVerticalScrollIndicator={true} style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.image} source={require('../../assets/BioCosmetique.png')} />
                <Pressable style={{position: 'absolute', right: 0, alignSelf: 'center' }} onPress={() => alert ("Em breve você terá uma melhor experiência com novas funcionalidades") }>
                    <Entypo
                        name="menu"
                        size={24}
                        color={'#32B1CA'}
                    />
                </Pressable>
               
            </View>
            <View style={styles.line}/>

            <ScrollView>
            <View style={styles.containerSession}>
                <SessionTitle>PROTETOR SOLAR</SessionTitle>
                <FlatList showsVerticalScrollIndicator={false} style={styles.section} horizontal data={dadosProtetor} renderItem={cosmetico => <CardCosmetico cosmetico={cosmetico} />}/>
               
                <SessionTitle>SÉRUNS FACIAL</SessionTitle>
                <FlatList showsVerticalScrollIndicator={false} style={styles.section} horizontal data={dadosSerum} renderItem={cosmetico => <CardCosmetico cosmetico={cosmetico} />}/>
                
                <Pressable onPress={() => navigation.navigate('Products')}>
                    <SessionTitle>SABONETES</SessionTitle>
                </Pressable>
                <FlatList showsVerticalScrollIndicator={false} style={styles.section} horizontal data={dadosSabonete} renderItem={cosmetico => <CardCosmetico cosmetico={cosmetico} />}/>
            </View>
            </ScrollView>
                <StatusBar style="auto" />
    
        </View>
    )
}

const styles = StyleSheet.create({


})