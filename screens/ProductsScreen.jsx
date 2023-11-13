import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import AppHeader from '../components/Header';
import {useTheme} from 'react-native-paper';
import Snackbar from 'react-native-snackbar';
import {InputField, PrimaryButton, VectorIcon} from '../components';
import firestore from '@react-native-firebase/firestore';

const ProductsScreen = ({navigation}) => {
  const [product, setProduct] = useState();
  const [item, setItem] = useState();
  const [brand, setBrand] = useState();
  const [volume, setVolume] = useState();
  const [barcode, setBarcode] = useState();
  const [price, setPrice] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const theme = useTheme();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'stretch',
    },
    content: {
      flex: 1,
      justifyContent: 'start',
      alignItems: 'center',
      padding: 20,
    },
  });
  const handleSubmit = () => {
    const obj = {
      product,
      item,
      brand,
      volume,
      barcode,
      price,
    };
    if (obj.item && obj.barcode && obj.brand) {
      setIsLoading(true);
      setProduct('');
      setItem('');
      setBrand('');
      setVolume('');
      setBarcode('');
      setPrice('');
      firestore()
        .collection('Products')
        .add(obj)
        .then(() => {
          Snackbar.show({
            text: 'Product added',
            duration: Snackbar.LENGTH_SHORT,
            backgroundColor: theme.colors.primary,
            textColor: 'white',
          });
          setIsLoading(false);
        });
    } else {
      Snackbar.show({
        text: 'Please provide Item name, Brand, Barcode',
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: theme.colors.error,
        textColor: 'white',
      });
    }
  };
  return (
    <View style={styles.container}>
      <AppHeader
        title={'Products Registeration'}
        rightElement={
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <VectorIcon
              iconFamily={'ET'}
              name={'menu'}
              size={25}
              color={theme.colors.primary}
            />
          </TouchableOpacity>
        }
      />
      <Text
        style={{
          textAlign: 'center',
          fontSize: 28,
          fontWeight: 'bold',
          marginTop: 40,
        }}>
        Register your products
      </Text>
      <View style={styles.content}>
        <View style={{width: '100%', marginBottom: 200}}>
          <InputField
            value={item}
            _elevation={2}
            placeholder={'Enter Item name (e.g., iPhone 12)'}
            onChangeText={text => setItem(text)}
          />
          <InputField
            value={product}
            _elevation={2}
            placeholder={'Enter Product type (e.g., Mobile)'}
            onChangeText={text => setProduct(text)}
          />
          <InputField
            value={brand}
            _elevation={2}
            placeholder={'Enter Brand (e.g., Apple)'}
            onChangeText={text => setBrand(text)}
          />
          <InputField
            value={volume}
            _elevation={2}
            placeholder={'Enter Volume (e.g., PCS, KG, Set, Ltr)'}
            onChangeText={text => setVolume(text)}
          />
          <InputField
            value={barcode}
            _elevation={2}
            placeholder={'Enter Code (e.g., AMIP12 or scan)'}
            onChangeText={text => setBarcode(text)}
          />
          <InputField
            value={price}
            _elevation={2}
            placeholder={'Sale price'}
            keyType={'phone-pad'}
            onChangeText={text => setPrice(text)}
          />
          <View style={{marginTop: 20}}>
            <PrimaryButton
              iconFamily="AA"
              iconName="pluscircleo"
              color="white"
              label={'Add Product'}
              variant={'contained'}
              onAction={handleSubmit}
              isLoading={isLoading}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductsScreen;
