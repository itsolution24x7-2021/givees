// @flow
import { StyleSheet } from "react-native";
import { Colors } from "../../theme";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white
  },
  heading: {
    fontSize: 38,
    fontWeight: "800",
    textTransform: "uppercase",
    letterSpacing: -2
  },
  cardContainer: {
    flexGrow: 1
  },
  card: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  subCategoryList: {

  },
  body: {
    fontSize: 20,
    lineHeight: 20 * 1.5,
    textAlign: "center"
  }
});
