import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from '../../utils/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {DashboardStack} from '../../route/DashboardRoute';

interface Props {
  backBtn?: boolean;
  title: string;
}

const Header = (props: Props) => {
  const navigation = useNavigation<StackNavigationProp<DashboardStack>>();
  return (
    <View style={[styles.container]}>
      {props?.backBtn && (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={25} color={Colors.primaryWhite} />
        </TouchableOpacity>
      )}
      <Text style={[styles.headerText, {marginLeft: props?.backBtn ? 12 : 0}]}>
        {props?.title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    backgroundColor: '#2c3e50',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 16,
  },
  headerText: {
    fontSize: 18,
    fontWeight: '800',
    color: Colors.primaryWhite,
    // padding: 16,
  },
});

export default Header;
