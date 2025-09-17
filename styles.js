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

  // Shared text styles
  errorText: {
    color: "#6B705C",
    marginBottom: 8,
  },
  aboutParagraph: {
    color: "#6B705C",
    fontSize: 18,
    textAlign: "center",
    marginTop: 12,
  },

  // Map styles
  map: {
    width: "100%",
    height: 350,
    borderRadius: 16,
    marginBottom: 24,
  },
  markerBadge: {
    backgroundColor: "#F9F5E3",
    borderRadius: 24,
    padding: 8,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#A3C4BC",
  },
  calloutContainer: {
    alignItems: "center",
    padding: 12,
    backgroundColor: "#fff",
    borderRadius: 16,
    minWidth: 140,
    elevation: 4,
    shadowColor: "#A3C4BC",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.18,
    shadowRadius: 6,
    marginBottom: 32,
  },
  calloutTitle: {
    fontWeight: "bold",
    marginBottom: 6,
    color: "#6B705C",
  },

  // Buttons
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  actionButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 1,
  },
  actionButton: {
    backgroundColor: "#A3C4BC",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 16,
    alignSelf: "center",
    marginTop: 8,
    shadowColor: "#A3C4BC",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },
  actionButtonPressed: {
    backgroundColor: "#6B705C",
  },
  smallButton: {
    backgroundColor: "#A3C4BC",
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 12,
    marginTop: 2,
    shadowColor: "#A3C4BC",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.12,
    shadowRadius: 2,
  },
  smallButtonPressed: {
    backgroundColor: "#6B705C",
  },

  // List styles
  listCard: {
    backgroundColor: "#F9F5E3",
    borderRadius: 18,
    padding: 18,
    marginBottom: 18,
    shadowColor: "#A3C4BC",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 6,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  listLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  listTitle: {
    fontSize: 20,
    color: "#6B705C",
    fontWeight: "600",
  },
  iconRightMargin: {
    marginRight: 12,
  },
});
