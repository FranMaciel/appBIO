import { View, Image, Text, StyleSheet } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";



export default function CardCosmetico({cosmetico}){
  const [favorito, setFavorito] = useState(false)
  const {navigate} = useNavigation()

  
  return (         
    <View style={styles.card}>
        <Pressable onPress={() => navigate('Details')}>
          <Image style={styles.poster} source={cosmetico.item.poster }></Image>
        </Pressable>
        <View style={styles.nome} >
          <Pressable onPress={() => setFavorito(!favorito)}>
            <MaterialIcons name={favorito ? 'favorite' : 'favorite-border'} size={20} color="red" />
          </Pressable>
          <Text style={styles.nome}>{cosmetico.item.nome}</Text>
        </View>
        <View style={styles.preco} >
          <Text style={styles.preco}>{cosmetico.item.preco}</Text>
        </View>
    </View>
        
  )
}



const styles = StyleSheet.create({
  poster: {
    height: 140,
    width: 120,
    borderRadius: 5,
  },

  card:{
      backgroundColor: '#fff',
      display:'flex',
      width: 122,
      height: 'flex',
      borderRadius: 5,
      margin: 15,
      alignItems: 'center',
      
  },

  nome:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 4
  },

  preco:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 4
  },

});