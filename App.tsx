import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  SectionList,
  StatusBar,
  Switch,
} from "react-native";
import listData from "./src/data/listData";
import CustomCheckbox from "./src/components/CheckboxComponent";
import ListItem from "./src/components/ListItem";

const App:React.FC=()=> {
  const [isChecked, setChecked] = useState(false);
  const toggleCheckbox = () => {
    setChecked(!isChecked); }
  const [searchQuery, setSearchQuery] = useState('');
  const filteredData = listData.map((section) => ({
    ...section,
    data: section.data.filter((item) =>
      (
        item.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.bio && item.bio.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    ),
  })).filter(section => section.data.length > 0);
  const onChangeText = (value) => {
  setSearchQuery(value)
  }
  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="Search..."
        placeholderTextColor="#a2a6ab"
      /><View   style={{flexDirection:"row"}}>
        <CustomCheckbox isChecked={isChecked} onToggleCheckbox={toggleCheckbox} />
        <Text>Only show people with bio</Text>
        </View>
        {filteredData.length === 0 && (
        <Text>No results found</Text>
      )}
      <SectionList  sections={filteredData}
        renderItem={({ item }) => <ListItem item={item} showBioOnly={isChecked}/>}
      renderSectionHeader={({section: {title}}) => (
        <Text >Reacted with: {title}</Text>
      )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
    marginBottom:5,
  },
});

export default App