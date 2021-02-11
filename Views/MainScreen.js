/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import HigherOrderScreen from '../Helpers/HigherOrderScreen';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import colors from '../Helpers/colors';
import dim from '../Helpers/heightWidth';

function MainScreen() {
  return (
    <HigherOrderScreen>
      <ScrollView bounces={false}>
        <Text>sadas</Text>
        <View style={styles.searchBtnWrap}>
          <TouchableOpacity
            style={{
              zIndex: 5,
              position: 'absolute',
              height: '50%',
              width: '100%',
              backgroundColor: colors.primary,
              borderBottomRightRadius: 6,
              borderBottomLeftRadius: 6,
              elevation: 3,
              alignItems: 'flex-start',
              justifyContent: 'flex-end',
              paddingBottom: dim.height * 0.015,
              paddingLeft: dim.width * 0.02,
            }}>
            <EvilIcons
              name="search"
              size={dim.width * 0.07}
              color={colors.secondary}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </HigherOrderScreen>
  );
}

const border = {
  borderColor: 'red',
  borderWidth: 1,
};

export default MainScreen;

const styles = StyleSheet.create({
  searchBtnWrap: {
    width: dim.width * 0.13,
    height: dim.height * 0.125,
    margin: 80,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 6,
    borderBottomRightRadius: 50,
    position: 'relative',
    overflow: 'hidden',
  },
});
