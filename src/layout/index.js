import { CommonFooter, CommonHeader } from "@/common";
//
import "@/styles/layout.css";
import "@/styles/homeBanner.css";

export const Layout = ({ children }) => {
  return (
    <>
      <CommonHeader />
      {children}
      <CommonFooter />
    </>
  );
};
