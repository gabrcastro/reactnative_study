import { HeaderComponent } from "@/src/components/header";
import { ScrollView, StyleSheet, View } from "react-native";
import Constants from "expo-constants";
import { BannerComponent } from "@/src/components/banner";
import { SearchInput } from "@/src/components/search";
import { Section } from "@/src/components/section";
import { SectionTypeEnum } from "@/src/data/enums";
import { TrandingFood } from "@/src/components/trandingFood";
import { Restaurants } from "@/src/components/restaurants";

const statusBarHeight = Constants.statusBarHeight;

export default function Home() {
  return (
    <ScrollView style={s.safeArea} showsVerticalScrollIndicator={false}>
      <View style={s.header}>
        <HeaderComponent />

        <BannerComponent />

        <SearchInput />
      </View>

      <Section
        title="Comidas em alta"
        suffixText="Veja todas"
        showSuffixText
        type={SectionTypeEnum.POPULAR}
        suffixAction={() => {}}
      >
        <TrandingFood />
      </Section>

      <Section
        title="Famosos no DevFood"
        suffixText="Veja todas"
        showSuffixText
        type={SectionTypeEnum.DEFAULT}
        suffixAction={() => {}}
      >
        <Restaurants />
      </Section>

      {/* <Section
        title="Restaurantes"
        showSuffixText={false}
        type={SectionTypeEnum.DEFAULT}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            display: "flex",
            flexDirection: "row",
            marginBottom: 50,
          }}
        >
          <Company name="McDonald's" points="4.2" />
          <Company name="KFC" points="4.2" />
          <Company name="Outback" points="4.2" />
          <Company name="Sushi Dev" points="4.2" />
          <Company name="Burger King" points="4.2" />
        </ScrollView>
      </Section> */}
    </ScrollView>
  );
}

const s = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#e8ecf4",
    width: "100%",
    height: "100%",
    paddingTop: 20,
  },
  header: {
    marginTop: statusBarHeight,
    paddingHorizontal: 20,
  },
});
