import { CommonFooter, CommonHeader } from "@/common";
//
import "@/styles/layout.css";
import "@/styles/homeBanner.css";
import "@/styles/hero.css";
import "@/styles/features.css";

export const Layout = ({ children }) => {
  return (
    <>
      <CommonHeader />
      {children}
      <CommonFooter />
    </>
  );
};
