import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

import { useAuth } from "../../context/AuthProvider.jsx";

const Profile = () => {
  const { setToken } = useAuth();

  const handlePress = () => {
    setToken(null);
  };

  return (
    <View>
      <TouchableOpacity onPress={() => handlePress()}>
        <Text>{`Log off`}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
