import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const HeaderProfile = ({ user }) => {
  return (
    <View style={styles.root}>
      <Image style={styles.logo} source={{ uri: user.image.link }} />
      <View style={styles.info}>
        <Text style={styles.detail_login}>{user.login}</Text>
        <Text style={styles.details} adjustsFontSizeToFit numberOfLines={1}>
          Email: {user.email}
        </Text>
        <Text style={styles.details}>Tél: {user.phone}</Text>
        <Text style={styles.details}>Level: {user.cursus_users[2].level}</Text>
        <Text style={styles.details}>Wallet: {user.wallet} ₳</Text>
      </View>
    </View>
  );
};

export default HeaderProfile;

const styles = StyleSheet.create({
  root: {
    backgroundColor: "rgba(198, 198, 198, 0.5)",
    alignItems: "center",
    justifyContent: "left",
    flex: 0.2,
    flexDirection: "row",
    borderRadius: 10,
    marginHorizontal: 31,
    paddingLeft: 21,
    top: 42,
  },
  logo: {
    width: 90,
    height: 90,
    borderRadius: 100,
    marginRight: 21,
  },
  info: {
    width: "64%",
    flexDirection: "column",
  },
  detail_login: {
    fontSize: 21,
    fontWeight: "700",
    color: "black",
    alignSelf: "center",
    marginRight: 42,
  },
  details: {
    fontSize: 15,
    fontWeight: "700",
    color: "black",
    alignSelf: "center",
    marginRight: 42,
  },
});
