import { View, FlatList } from "react-native";
import SiteItem from "./SiteItem";

function SiteList(props) {
  console.log(`props.sites = ${props.sites}`);
  return (
    <View>
      <FlatList
        data={props.sites}
        renderItem={(itemData) => {
          console.log(itemData.item);
          return <SiteItem item={itemData.item} />;
        }}
        keyExtractor={(siteData) => siteData.id}
      />
    </View>
  );
}

export default SiteList;
