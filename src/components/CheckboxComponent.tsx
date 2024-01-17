// CustomCheckbox.js

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface CustomCheckboxProps {
  isChecked: boolean;
  onToggleCheckbox: () => void;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ isChecked, onToggleCheckbox }) => {
  return (
    <TouchableOpacity onPress={onToggleCheckbox}>
      <View style={isChecked ? styles.checkedContainer : styles.uncheckedContainer}>
        {isChecked && <Text>X</Text>}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkedContainer: {
    width: 20,
    height: 20,
    backgroundColor: '#4287f5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
  uncheckedContainer: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,
  },
});

export default CustomCheckbox;
