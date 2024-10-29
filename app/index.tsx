import { Image, ScrollView, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import CustomButton from "@/components/CustomButton";
import { Redirect, router } from "expo-router";

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
          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">Where creative meets innovation: embark on a journey of limitless exploration with Aora</Text>

          <CustomButton
          title="Continue with Email"
          handlePress={() => router.push("/sign-in")}
          containerStyles="mt-7 bg-secondary rounded-xl min-h-[62px] justify-center items-center w-full"
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor={"#161622"} barStyle="light-content" />
    </SafeAreaView>
  );
}