import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome.js";
import { useRouter } from "expo-router";

const HeaderProfile = ({ user, logoff = null }) => {
  const router = useRouter();
  const handlePress = () => {
    router.back();
  };

  return (
    <View style={styles.root}>
      {logoff ? (
        <TouchableOpacity onPress={() => logoff()} style={styles.logoff}>
          <FontAwesome name="power-off" size={24} color="white" />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.backArrow} onPress={handlePress}>
          <FontAwesome name="chevron-left" size={24} color={"white"} />
        </TouchableOpacity>
      )}

      <Image style={styles.logo} source={{ uri: user?.image?.link }} />
      <ScrollView style={styles.info}>
        <Text
          style={styles.detail_login}
          adjustsFontSizeToFit
          numberOfLines={1}
        >
          {user?.login}
        </Text>
        <Text style={styles.details} adjustsFontSizeToFit numberOfLines={1}>
          Email: {user?.email}
        </Text>
        <Text style={styles.details}>Tél: {user?.phone}</Text>
        <Text style={styles.details}>
          Level: {user?.cursus_users[2] ? user?.cursus_users[2]?.level : '00.0'}
        </Text>
        <Text style={styles.details}>Correction: {user?.correction_point}</Text>
        <Text style={styles.details}>Wallet: {user?.wallet} ₳</Text>
      </ScrollView>
    </View>
  );
};

export default HeaderProfile;

const styles = StyleSheet.create({
  root: {
    backgroundColor: "rgba(198, 198, 198, 0.5)",
    alignItems: "center",
    justifyContent: 'center',
    flex: 0.2,
    flexDirection: "row",
    borderRadius: 10,
    marginHorizontal: 31,
    paddingHorizontal: 10,
  },
  logo: {
    width: 90,
    height: 90,
    borderRadius: 100,
    marginLeft: '10%',
    paddingHorizontal: 10,
  },
  info: {
    flexDirection: "column",
    paddingHorizontal: 10,
  },
  detail_login: {
    fontSize: 21,
    fontWeight: "700",
    color: "black",
    alignSelf: "center",
  },
  details: {
    fontSize: 15,
    fontWeight: "700",
    color: "black",
    alignSelf: "center",
  },
  logoff: {
    position: "absolute",
    top: "5%",
    right: "5%",
    zIndex: 999,
  },
  backArrow: {
    position: "absolute",
    top: "5%",
    left: "5%",
    zIndex: 999,
  },
});
