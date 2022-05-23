import React from 'react';
import {StyleSheet, Button, View, SafeAreaView, Text} from 'react-native';

const Finish = ({route, navigation}) => {
  const {data} = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>SCAN SUCCESS!</Text>
        <Text style={styles.title}>{data}</Text>
        <Button title="BACK TO HOME" onPress={() => navigation.popToTop()} />
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
    marginVertical: 16,
  },
});

export default Finish;
