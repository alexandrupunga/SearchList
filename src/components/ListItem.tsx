import { View, Image, StyleSheet, Text } from "react-native";
import { ListPerson } from "../data/listData";

interface ListItemProps {
    item: ListPerson;
    showBioOnly: boolean; 
  }

const ListItem: React.FC< ListItemProps> = ({ item,showBioOnly}) => {
  return (!showBioOnly?
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{
          uri: item.image,
        }}
      />
      <View>
        <Text style={styles.nameText}>
          {item.firstName} {item.lastName}
        </Text>
        <Text style={{marginLeft:5}}>{item?.bio}</Text>
      </View>
    </View>:item.bio!==undefined?<View style={styles.container}>
      <Image
        style={styles.logo}
        source={{
          uri: item.image,
        }}
      />
      <View>
        <Text style={styles.nameText}>
          {item.firstName} {item.lastName}
        </Text>
        <Text style={{marginLeft:5}}>{item?.bio}</Text>
      </View>
    </View>:null
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    marginVertical: 20,
  },
  logo: {
    aspectRatio: 1,
    width: 90,
    borderRadius: 100,
  },
  nameText: {
    fontWeight: "bold",
    margin: 5,
  },
});

export default ListItem;
