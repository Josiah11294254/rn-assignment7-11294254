import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons'; // Make sure to install expo vector icons or use another icon library

const ProductItem = ({ product, onAddToCart }) => {
  return (
    <View style={styles.productItem}>
      <View style={styles.imageContainer}>
        <Image source={product.image} style={styles.image} />
        <TouchableOpacity 
          style={styles.addButton} 
          onPress={() => onAddToCart(product)}
        >
          <Ionicons name="add-circle" size={24} color="white" />
        </TouchableOpacity>
      </View>
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  productItem: {
    margin: 6,
    width: "47%",
    padding: 6,
    borderRadius: 8,
  },
  imageContainer: {
    position: 'relative',
  },
  image: {
    width: "100%",
    height: 240,
    borderRadius: 8,
  },
  addButton: {
    position: 'absolute',
    right: 8,
    bottom: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 15,
    padding: 4,
  },
  name: {
    fontSize: 16,
    marginTop: 8,
    marginBottom: 4,
  },
  price: {
    fontSize: 14,
    marginBottom: 4,
    color: '#666',
  },
});

export default ProductItem;