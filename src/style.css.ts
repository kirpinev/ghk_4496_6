import { style } from "@vanilla-extract/css";

const container = style({
  display: "flex",
  padding: "1rem",
  flexDirection: "column",
  gap: "1rem",
});

const box = style({
  display: "flex",
  flexDirection: "column",
  gap: ".5rem",
  borderRadius: "24px",
  border: "2px solid #F8F8F8",
  overflow: "hidden",
  textAlign: "center",
  paddingTop: "1rem",
  backgroundColor: "#F8F8F8",
});

const subscription = style({
  display: "flex",
  alignItems: "center",
  border: "2px solid #F3F4F5",
  borderRadius: "24px",
  boxSizing: "border-box",
  padding: "1rem",
  justifyContent: "space-evenly",
  gap: "1.2rem",
});

const subscriptionText = style({
  fontSize: "15px",
  lineHeight: "20px",
});

const bottomBtn = style({
  position: "fixed",
  zIndex: 2,
  width: "100%",
  padding: "12px",
  bottom: 0,
  backgroundColor: "white",
});

const productsTitle = style({
  fontSize: "22px",
  marginBottom: "1rem",
});

const products = style({
  display: "flex",
  flexWrap: "wrap",
});

const product = style({
  border: "2px solid #F8F8F8",
  borderRadius: "1rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.2rem",
  position: "relative",
  height: "100%",
});

const productTitle = style({
  marginBottom: "0.3rem",
});

const productIcon = style({
  display: "block",
});

const productText = style({
  marginBottom: 0,
});

const statusBadge = style({
  position: "absolute",
  top: "8px",
  right: "8px",
});

const selection = style({
  width: "24px",
  height: "24px",
  backgroundColor: "white",
  borderRadius: "100%",
  border: "1px solid #F0F0F0",
});

const gridRow = style({
  marginBottom: "0.5rem",
});

export const appSt = {
  bottomBtn,
  container,
  box,
  subscription,
  subscriptionText,
  productsTitle,
  products,
  productTitle,
  product,
  productIcon,
  productText,
  statusBadge,
  selection,
  gridRow,
};
