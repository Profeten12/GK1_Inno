import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8EDEB", // pastel pink
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  title: {
    fontSize: 28,
    color: "#A3C4BC", // pastel green
    marginBottom: 16,
    fontWeight: "600",
    letterSpacing: 1,
  },
  listItem: {
    backgroundColor: "#F9F5E3", // pastel yellow
    padding: 14,
    marginVertical: 6,
    borderRadius: 12,
    fontSize: 18,
    color: "#6B705C", // muted brown
    textAlign: "center",
    shadowColor: "#A3C4BC",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
});
