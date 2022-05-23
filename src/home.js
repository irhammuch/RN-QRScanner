import React from 'react';
import {StyleSheet, Button, View, SafeAreaView} from 'react-native';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Button title="SCAN QR" onPress={() => navigation.navigate('Scan')} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
});

export default Home;
