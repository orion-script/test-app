import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Animated,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { faker } from "@faker-js/faker";

export const YoloPlayScreen: React.FC = () => {
  const [isFrozen, setIsFrozen] = useState(false);
  const opacity = new Animated.Value(isFrozen ? 0.3 : 1);

  const toggleFreeze = () => {
    setIsFrozen(!isFrozen);
    Animated.timing(opacity, {
      toValue: isFrozen ? 1 : 0.3,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const fakeCardNumber = faker.finance.creditCardNumber("#### #### #### ####");
  const cardNumberParts = fakeCardNumber.split(" ");
  const fakeCardHolder = faker.person.fullName();
  const fakeExpiry = faker.date.future().toLocaleDateString("en-US", {
    month: "2-digit",
    year: "2-digit",
  });
  const fakeCvv = faker.finance.creditCardCVV();
  console.log(fakeExpiry);
  console.log(fakeCardNumber);
  console.log(fakeCardHolder);
  console.log(fakeCvv);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>select payment mode</Text>
      <Text style={styles.subTitle}>
        choose your preferred payment method to make payment.
      </Text>
      <View style={styles.paymentOptions}>
        <TouchableOpacity style={styles.gradientButton}>
          <Text style={styles.optionText}>Pay</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.gradientButtonRed}>
          <Text style={styles.optionTextRed}>Card</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.subHeader}>Your Digital Debit Card</Text>

      <View style={styles.cardOuterContainer}>
        <Animated.View style={[styles.cardContainer]}>
          <Image
            source={
              isFrozen
                ? require("../../assets/frozen_card.png")
                : require("../../assets/Design_Layer.png")
            }
            style={styles.cardImage}
          />

          {!isFrozen && (
            <View style={styles.cardDetails}>
              <View style={styles.cardDetailsInner}>
                <View>
                  <Text
                    style={{
                      color: "white",
                      fontFamily: "mono",
                      fontSize: 20,
                      fontWeight: "bold",
                    }}
                  >
                    {cardNumberParts[0]}
                  </Text>
                  <Text
                    style={{
                      color: "white",
                      fontFamily: "mono",
                      fontSize: 20,
                      fontWeight: "bold",
                      marginTop: 10,
                    }}
                  >
                    {cardNumberParts[1]}
                  </Text>
                  <Text
                    style={{
                      color: "white",
                      fontFamily: "mono",
                      fontSize: 20,
                      fontWeight: "bold",
                      marginTop: 10,
                    }}
                  >
                    {cardNumberParts[2]}
                  </Text>
                  <Text
                    style={{
                      color: "white",
                      fontFamily: "mono",
                      fontSize: 20,
                      fontWeight: "bold",
                      marginTop: 8,
                    }}
                  >
                    {cardNumberParts[3]}
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: "column",
                    marginLeft: 33,
                  }}
                >
                  <View>
                    <Text
                      style={{
                        color: "white",
                        fontFamily: "mono",
                        fontSize: 16,
                        fontWeight: "400",
                        //   marginTop: 8,
                      }}
                    >
                      expiry
                    </Text>
                    <Text
                      style={{
                        color: "white",
                        fontFamily: "mono",
                        fontSize: 14,
                        fontWeight: "400",
                        //   marginTop: 8,
                      }}
                    >
                      {fakeExpiry}
                    </Text>
                  </View>
                  <Text
                    style={{
                      color: "white",
                      fontFamily: "mono",
                      fontSize: 16,
                      fontWeight: "400",
                      marginTop: 40,
                    }}
                  >
                    cvv
                  </Text>
                </View>
              </View>
            </View>
          )}
        </Animated.View>

        <TouchableOpacity style={styles.freezeButton} onPress={toggleFreeze}>
          <View
            style={{
              width: 58,
              height: 58,
              borderRadius: 70,
              alignItems: "center",
              justifyContent: "center",
              borderTopWidth: 1,
              borderLeftWidth: 1,
              borderRightWidth: 1,
              borderBottomWidth: isFrozen ? 1 : 0,
              marginBottom: 10,
              borderColor: isFrozen ? "#A90808" : "#222222",
            }}
          >
            <Ionicons
              name="snow"
              size={24}
              color={isFrozen ? "red" : "white"}
            />
          </View>

          <Text style={{ color: isFrozen ? "red" : "white" }}>
            {isFrozen ? "unfreeze" : "Freeze"}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    paddingTop: Platform.OS === "android" ? 40 : 0,
  },
  header: {
    fontSize: 30,
    fontWeight: "600",
    color: "#fff",
    marginHorizontal: 20,
  },
  subTitle: {
    fontSize: 20,
    fontWeight: "400",
    color: "#828282",
    marginTop: 16,
    marginBottom: 24,
    marginHorizontal: 20,
  },
  paymentOptions: {
    flexDirection: "row",
    // marginVertical: 20,
    marginBottom: 48,
    marginHorizontal: 20,
  },
  gradientButton: {
    width: 96,
    height: 40,
    marginRight: 10,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "#FFFFFF",
    borderRadius: 40,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  gradientButtonRed: {
    width: 96,
    height: 40,
    marginRight: 10,
    borderTopWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "#A90808",
    borderRadius: 40,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  optionText: {
    fontSize: 16,
    fontWeight: "600",
    color: "white",
    textAlign: "center",
  },
  optionTextRed: {
    fontSize: 16,
    fontWeight: "600",
    color: "#A90808",
    textAlign: "center",
  },
  selectedText: {
    color: "black",
    textAlign: "center",
  },
  subHeader: {
    fontSize: 18,
    fontWeight: "600",
    color: "#828282",
    marginBottom: 10,
    marginHorizontal: 20,
    textTransform: "uppercase",
  },
  cardOuterContainer: {
    flexDirection: "row",
    marginTop: 16,
    alignItems: "center",
  },
  cardContainer: {
    position: "relative",
    width: 320,
    height: 440,
    alignItems: "center",
    justifyContent: "center",
  },
  cardDetails: {
    position: "absolute",
    padding: 20,
    top: 25,
    left: 15,
    width: 220,
    height: 350,
  },
  cardDetailsInner: {
    position: "absolute",
    top: 70,
    left: 10,
    flexDirection: "row",
  },
  cardImage: {
    width: "100%",
    height: "100%",
    cursor: "pointer",
  },
  freezeButton: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: -50,
    // marginHorizontal: 20,
    marginLeft: -30,
  },
});
