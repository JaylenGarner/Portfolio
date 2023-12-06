import { Permanent_Marker } from "next/font/google";
import { Anton } from "next/font/google";
import { Rubik } from "next/font/google";

const permanentMarker = Permanent_Marker({ subsets: ["latin"], weight: "400" });
const anton = Anton({ subsets: ["latin"], weight: "400" });
const rubik = Rubik({
  subsets: ["latin"],
  weight: "400",
});

export { permanentMarker, anton, rubik };
