import { Text, View, ScrollView, StyleSheet } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";

export default function Transactions() {
  const [transactions, setTransactions] = useState([
    { id: 1, msg: "EPC Bill", type: "out", time: "Jul 6, 2024" },
    { id: 2, msg: "Deposit", type: "in", time: "Jul 5, 2024" },
    { id: 3, msg: "Transfer", type: "in", time: "Jul 5, 2024" },
    { id: 4, msg: "Wifi Bill", type: "out", time: "Jul 4, 2024" },
    { id: 5, msg: "Payment", type: "in", time: "Jul 4, 2024" },
    { id: 6, msg: "Online Shopping", type: "out", time: "Jul 3, 2024" },
    { id: 7, msg: "Refund", type: "in", time: "Jul 3, 2024" },
    { id: 8, msg: "Restaurant", type: "out", time: "Jul 2, 2024" },
    { id: 9, msg: "Salary", type: "in", time: "Jul 2, 2024" },
    { id: 10, msg: "Fuel", type: "out", time: "Jul 1, 2024" },
    { id: 11, msg: "Bonus", type: "in", time: "Jun 30, 2024" },
    { id: 12, msg: "Mobile Bill", type: "out", time: "Jun 29, 2024" },
    { id: 13, msg: "Groceries", type: "out", time: "Jun 28, 2024" },
    { id: 14, msg: "Deposit", type: "in", time: "Jun 27, 2024" },
    { id: 15, msg: "Rent", type: "out", time: "Jun 26, 2024" },
    { id: 16, msg: "Interest", type: "in", time: "Jun 25, 2024" },
    { id: 17, msg: "Gym", type: "out", time: "Jun 24, 2024" },
    { id: 18, msg: "Deposit", type: "in", time: "Jun 23, 2024" },
    { id: 19, msg: "Transfer", type: "in", time: "Jun 22, 2024" },
    { id: 20, msg: "Medical", type: "out", time: "Jun 21, 2024" },
    { id: 21, msg: "Deposit", type: "in", time: "Jun 20, 2024" },
    { id: 22, msg: "Utilities", type: "out", time: "Jun 19, 2024" },
    { id: 23, msg: "Dining", type: "out", time: "Jun 18, 2024" },
    { id: 24, msg: "Deposit", type: "in", time: "Jun 17, 2024" },
    { id: 25, msg: "Travel", type: "out", time: "Jun 16, 2024" },
    { id: 26, msg: "Bonus", type: "in", time: "Jun 15, 2024" },
    { id: 27, msg: "Insurance", type: "out", time: "Jun 14, 2024" },
    { id: 28, msg: "Deposit", type: "in", time: "Jun 13, 2024" },
    { id: 29, msg: "Transfer", type: "in", time: "Jun 12, 2024" },
    { id: 30, msg: "EPC Bill", type: "out", time: "Jun 11, 2024" },
    { id: 31, msg: "Deposit", type: "in", time: "Jun 10, 2024" },
    { id: 32, msg: "Payment", type: "in", time: "Jun 9, 2024" },
    { id: 33, msg: "Internet Bill", type: "out", time: "Jun 8, 2024" },
    { id: 34, msg: "Deposit", type: "in", time: "Jun 7, 2024" },
    { id: 35, msg: "Transfer", type: "in", time: "Jun 6, 2024" },
    { id: 36, msg: "Shopping", type: "out", time: "Jun 5, 2024" },
    { id: 37, msg: "Refund", type: "in", time: "Jun 4, 2024" },
    { id: 38, msg: "Dining", type: "out", time: "Jun 3, 2024" },
    { id: 39, msg: "Salary", type: "in", time: "Jun 2, 2024" },
    { id: 40, msg: "Fuel", type: "out", time: "Jun 1, 2024" },
    { id: 41, msg: "Deposit", type: "in", time: "May 31, 2024" },
    { id: 42, msg: "Medical", type: "out", time: "May 30, 2024" },
    { id: 43, msg: "Groceries", type: "out", time: "May 29, 2024" },
    { id: 44, msg: "Deposit", type: "in", time: "May 28, 2024" },
    { id: 45, msg: "Transfer", type: "in", time: "May 27, 2024" },
    { id: 46, msg: "Entertainment", type: "out", time: "May 26, 2024" },
    { id: 47, msg: "Bonus", type: "in", time: "May 25, 2024" },
    { id: 48, msg: "Utilities", type: "out", time: "May 24, 2024" },
    { id: 49, msg: "Deposit", type: "in", time: "May 23, 2024" },
    { id: 50, msg: "Payment", type: "out", time: "May 22, 2024" },
  ]);

  return (
    <ScrollView>
      {transactions.map((transaction) => {
        return (
          <View style={styles.transaction} key={transaction.id}>
            <MaterialIcons
              name="compare-arrows"
              size={32}
              color={transaction.type === "in" ? "green" : "brown"}
            />
            <View>
              <Text style={styles.text.payment}>{transaction.msg}</Text>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  transaction: {
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 10,
  },
  text: {
    payment: {
      fontSize: 21,
    },
    muted: {
      color: "#888",
    },
  },
});
