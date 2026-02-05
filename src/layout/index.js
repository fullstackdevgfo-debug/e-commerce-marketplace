import { CommonFooter, CommonHeader } from "@/common";
//
import "@/styles/layout.css";
import "@/styles/homeBanner.css";
import "@/styles/hero.css";
import "@/styles/features.css";
import "@/styles/blogSection.css";
import "@/styles/brandSection.css";
import "@/styles/featureProduct.css";

export const Layout = ({ children }) => {
  return (
    <>
      <CommonHeader />
      {children}
      <CommonFooter />
    </>
  );
};
