import { Image, ScrollView, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";

export default function App() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{
        height: "100%",
      }}
      >
        <View className="w-full h-full px-4 flex items-center justify-center">
          <Image source={images.logo} resizeMode="contain" className="w-[130px] h-[84px]"/>
          
          <Image source={images.cards} resizeMode="contain" className="max-w-[380px] w-full h-[300px]"/>

          <View className="relative mt-5">
            <Text className="font-bold text-center text-3xl text-white">Discover EndlessPossibilities with{' '}<Text className=" text-secondary-200">Aora </Text> </Text>
            
            <Image
            source={images.path}
            className="absolute -bottom-2 -right-8 w-[136px] h-[15px]"
            resizeMode="contain"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}