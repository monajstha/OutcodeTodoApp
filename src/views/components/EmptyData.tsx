import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors} from '../../utils/colors';

export const EmptyDataComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={{color: Colors.primaryBlack}}>
        No task has been added yet!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
});
