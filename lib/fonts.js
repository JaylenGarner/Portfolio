import { Permanent_Marker } from "next/font/google";
import { Anton } from "next/font/google";
import { Rubik } from "next/font/google";

import { Roboto_Condensed } from "next/font/google";

const permanentMarker = Permanent_Marker({ subsets: ["latin"], weight: "400" });
const anton = Anton({ subsets: ["latin"], weight: "400" });
const robotoCondensed = Roboto_Condensed({ subsets: ["latin"], weight: "700" });

export { permanentMarker, anton, robotoCondensed };
