import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import PagerView from "react-native-pager-view";

const { width } = Dimensions.get("window");

export function BannerComponent() {
  const images = [
    require("@/assets/images/banner1.png"),
    require("@/assets/images/banner2.png"),
  ];
  return (
    <View style={s.container}>
      <PagerView style={s.pagerView} initialPage={0} pageMargin={14}>
        {images.map((image) => (
          <Pressable
            style={s.pagerViewPressable}
            key={image}
            onPress={() => console.log("Clicked")}
          >
            <Image source={image} style={s.bannerImage} />
          </Pressable>
        ))}
      </PagerView>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    width: "100%",
    height: width > 768 ? 240 : 145,
    borderRadius: 15,
    marginTop: 20,
    marginBottom: 16,
  },
  pagerView: {
    flex: 1,
  },
  pagerViewPressable: {
    width: "100%",
    height: width > 768 ? 240 : 145,
    borderRadius: 15,
  },
  bannerImage: {
    width: "100%",
    height: width > 768 ? 240 : 145,
    borderRadius: 15,
  },
});
