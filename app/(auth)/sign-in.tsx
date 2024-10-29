import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import FormField from "@/components/FormField";

function SignInPage() {
  const [form, setForm] = React.useState({
    email: "",
    password: "",
  });
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="px-4 my-6 w-full justify-center h-full">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[34px]"
          />
          <Text className="font-semibold font-psemibold mt-10 text-2xl text-white">
            Log in to Aora
          </Text>

          <FormField
            title="Email"
            placeholder="Enter your email"
            value={form.email}
            handleChangeText={(text: any) => setForm({ ...form, email: text })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            placeholder="Enter your password"
            value={form.password}
            handleChangeText={(text: any) => setForm({ ...form, email: text })}
            otherStyles="mt-7"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default SignInPage;
