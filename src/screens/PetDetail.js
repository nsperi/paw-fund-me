import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import colors from '../utils/golbals/colors'

const PetDetail = ({ item }) => {
  return (
    <View style={styles.card}>
      <View style={styles.container}>
        <Text style={styles.text}>{item.nombre}</Text>
        <Text style={styles.text2}>{item.descripcion}</Text>
        <Text style={styles.text2}>Necesitamos recaudar ${item.stock}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.bgcolor,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
  },
});

export default PetDetail;