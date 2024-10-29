import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { icons, images } from "@/constants";

const FormField: React.FC<any> = ({
  title,
  placeholder,
  value,
  handleChangeText,
  otherStyles,
  ...props
}) => {
    const [showPassword, setShowPassword] = React.useState(false);
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={handleChangeText}
          style={styles.input}
          placeholderTextColor="#FFFFFF" // Adjust if needed
          secureTextEntry={title === "Password" && !showPassword}
        />

        {title === "Password" && (
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                <Image source={!showPassword ? icons.eye : icons.eyeHide} className="w-6 h-6" resizeMode="contain" style={{ width: 24, height: 24 }} />
            </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 8, // equivalent to `space-y-2`
  },
  title: {
    fontSize: 16,
    color: "#D1D5DB", // gray-100
    fontFamily: "pmedium",
  },
  inputContainer: {
    width: "100%",
    height: 64,
    paddingHorizontal: 16,
    borderWidth: 2,
    borderColor: "#E5E7EB", // black-200
    borderRadius: 16,
    justifyContent: "center",
  },
  input: {
    flex: 1,
    width: "100%",
    color: "#FFFFFF",
    fontFamily: "psemibold",
    fontSize: 16,
    marginTop: 5,
  },
});

export default FormField;
