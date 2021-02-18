import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
} from 'react-native';



import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

const CustomSidebarMenu = (props) => {
  const BASE_PATH =
    'https://icons8.com/icon/82054/couple-target';
  const proileImage = 'name image';

  return (
    <View  style={styles.container}>
    <SafeAreaView style={{ flex: 1 }}>
      <Image
          source={{
            uri:
              "http://thenewcode.com/assets/images/thumbnails/homer-simpson.svg",
          }}
          style={{ justifyContent: 'center',
                   alignItems: 'center',
                   width: 150, 
                   height: 150,
                   padding: 5, 
                  }}
        />
      <Image
        source={{ uri: BASE_PATH + proileImage }}
        style={styles.sideMenuProfileIcon}
      />
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        
          <Image
            source={{ uri: BASE_PATH + 'img.png' }}
            style={styles.iconStyle}
          />
       
      </DrawerContentScrollView>
      <Text style={{ backgroundColor: '#D753F6',fontSize: 16, textAlign: 'center', color: 'grey' }}>
        foot
      </Text>
    </SafeAreaView>
    </View> 
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 100,
    height: 100,
    borderRadius: 100 / 2,
    alignSelf: 'center',
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
    color: '#F3F4F9',
    
  },
  container:{
    backgroundColor: '#D753F6',
    height: '100%',
    color: '#F3F4F9',
  },
   customItem: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
   },
});

export default CustomSidebarMenu;
