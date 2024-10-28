import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-100">
      <Text className="text-xl font-pmedium">Hello My App</Text>
      <StatusBar style="auto" />
      <Link href="/home" className="text-blue-500">
        <Text style={{ color: "blue" }}>Home</Text>
      </Link>
      <Link asChild href="/profile" className="text-blue-500">
        <Text>Profile</Text>
      </Link>
    </View>
  );
}