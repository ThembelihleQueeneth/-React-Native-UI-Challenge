import { FontAwesome } from "@expo/vector-icons";
import React, { useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function ProductScreen() {
  const [quantity, setQuantity] = useState(2);
  const [activeTab, setActiveTab] = useState("Relax");
  const [activePill, setActivePill] = useState(30);
  const [cartCount, setCartCount] = useState(3);

  const getBasePrice = () => {
    if (activePill === 30) return 25.50;
    if (activePill === 60) return 45.00;
    if (activePill === 90) return 60.00;
    return 25.50;
  };

  const totalPrice = (getBasePrice() * quantity).toFixed(2);

  // Dynamic styles based on tab
  const activeBgColor = activeTab === "Relax" ? "#F8C629" : "#4A90E2";
  const containerBgColor = activeTab === "Relax" ? "#D2E7F5" : "#1A2E44";

  return (
    <View style={[styles.container, { backgroundColor: containerBgColor }]}>
      <View style={[styles.topSection, { backgroundColor: activeBgColor }]}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={{ fontSize: 20, fontWeight: "600" }}>{"<"}</Text>
        </TouchableOpacity>

        <View style={styles.logoContainer}>
          <Image
            source={require("../../assets/images/logo2.png")}
            style={{ width: 50, height: 50 }}
            resizeMode="contain"
          />
          <Text style={[styles.logo, { color: activeTab === "Sleep" ? "#fff" : "#000" }]}>xefag</Text>
        </View>

        {/* Profile + Cart */}
        <View style={styles.topIcons}>
          <TouchableOpacity style={styles.iconCircle}>
            <FontAwesome name="user" size={20} color="white" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconCircleWhite}>
            <FontAwesome name="shopping-cart" size={20} color="black" />
            {cartCount > 0 && (
              <View style={styles.cartBadge}>
                <Text style={styles.badgeText}>{cartCount}</Text>
              </View>
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.tabs}>
          <TouchableOpacity
            style={activeTab === "Relax" ? styles.activeTabContainer : styles.inactiveTabContainer}
            onPress={() => setActiveTab("Relax")}
          >
            <FontAwesome name="smile-o" size={18} color={activeTab === "Sleep" ? "#fff" : "black"} />
            <Text style={[activeTab === "Relax" ? styles.activeTab : styles.inactiveTab, { color: activeTab === "Sleep" ? "#fff" : "#000" }]}>Relax</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={activeTab === "Sleep" ? styles.activeTabContainer : styles.inactiveTabContainer}
            onPress={() => setActiveTab("Sleep")}
          >
            <FontAwesome name="moon-o" size={18} color={activeTab === "Sleep" ? "#fff" : "black"} />
            <Text style={[activeTab === "Sleep" ? styles.activeTab : styles.inactiveTab, { color: activeTab === "Sleep" ? "#fff" : "#000" }]}>Sleep</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.pillContainer}>
          {[30, 60, 90].map((pill) => (
            <TouchableOpacity
              key={pill}
              style={activePill === pill ? styles.pillActive : styles.pill}
              onPress={() => setActivePill(pill)}
            >
              <Text style={activePill === pill ? styles.pillTextActive : styles.pillText}>{pill}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Image
          source={require("../../assets/images/wafers-removebg-preview.png")}
          style={{ width: 380, height: 230, alignSelf: "center", marginTop: 20 }}
          resizeMode="contain"
        />
      </View>

      <View style={styles.bottomCard}>
        <Text style={styles.title}>{activeTab} {activePill}</Text>
        <Text style={styles.titleSecond}>Dissolvable Wafers</Text>
        <Text style={styles.subtitle}>
          {activePill === 30 ? "250 mg" : activePill === 60 ? "500 mg" : "750 mg"}
        </Text>

        <View style={styles.priceRow}>
          <Text style={styles.price}>${totalPrice}</Text>

          <View style={styles.quantityRow}>
            <TouchableOpacity
              style={styles.qtyButton}
              onPress={() => setQuantity(Math.max(1, quantity - 1))}
            >
              <FontAwesome name="minus" size={20} color="white" />
            </TouchableOpacity>

            <Text style={styles.qtyText}>{quantity}</Text>

            <TouchableOpacity
              style={styles.qtyButton}
              onPress={() => setQuantity(quantity + 1)}
            >
              <FontAwesome name="plus" size={20} color="white" />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          style={[styles.buyButton, { backgroundColor: activeBgColor }]}
          onPress={() => setCartCount(cartCount + quantity)}
        >
          <FontAwesome name="shopping-bag" size={18} color={activeTab === "Sleep" ? "#fff" : "black"} />
          <Text style={[styles.buyText, { color: activeTab === "Sleep" ? "#fff" : "black" }]}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D2E7F5",
  },

  topSection: {
    backgroundColor: "#F8C629",
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 100,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    position: "relative",
  },

  backButton: {
    backgroundColor: "#fff",
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 15,
    gap: 8,
  },

  dottedCircle: {
    width: 30,
    height: 30,
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },

  dot: {
    width: 3,
    height: 3,
    borderRadius: 1.5,
    backgroundColor: "#000",
    position: "absolute",
  },

  logo: {
    fontSize: 32,
    fontWeight: "700",
    letterSpacing: -0.5,
  },

  topIcons: {
    position: "absolute",
    top: 50,
    right: 20,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },

  iconCircle: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
  },

  iconCircleWhite: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },

  cartBadge: {
    backgroundColor: "black",
    width: 20,
    height: 20,
    borderRadius: 10,
    position: "absolute",
    right: -2,
    top: -2,
    justifyContent: "center",
    alignItems: "center",
  },

  badgeText: {
    color: "white",
    fontSize: 11,
    fontWeight: "bold",
  },

  tabs: {
    flexDirection: "row",
    marginTop: 25,
    gap: 25,
  },

  activeTabContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },

  inactiveTabContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    opacity: 0.5,
  },

  activeTab: {
    fontSize: 18,
    fontWeight: "700",
  },

  inactiveTab: {
    fontSize: 18,
    fontWeight: "600",
  },

  pillContainer: {
    position: "absolute",
    right: 25,
    top: 180,
    gap: 10,
    alignItems: "center",
  },

  pill: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: "rgba(218, 165, 32, 0.6)",
    minWidth: 55,
    alignItems: "center",
  },

  pillActive: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    backgroundColor: "black",
    minWidth: 55,
    alignItems: "center",
  },

  pillText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },

  pillTextActive: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },

  bottomCard: {
    backgroundColor: "white",
    flex: 1,
    marginTop: -50,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 30,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    lineHeight: 32,
  },

  titleSecond: {
    fontSize: 28,
    fontWeight: "700",
    lineHeight: 32,
  },

  subtitle: {
    marginTop: 8,
    fontSize: 16,
    opacity: 0.5,
  },

  priceRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 25,
  },

  price: {
    fontSize: 32,
    fontWeight: "800",
  },

  quantityRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },

  qtyButton: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    backgroundColor: "#000",
    justifyContent: "center",
    alignItems: "center",
  },

  qtyText: {
    fontSize: 24,
    fontWeight: "700",
  },

  buyButton: {
    marginTop: 35,
    backgroundColor: "#F8C629",
    paddingVertical: 18,
    borderRadius: 30,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },

  buyText: {
    fontSize: 18,
    fontWeight: "700",
  },
});
