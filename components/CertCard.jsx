"use client";

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Link from "next/link";
import Tilt from "react-parallax-tilt";

const CertCard = ({ cert }) => {
  return (
    <Tilt
      glareEnable
      glarePosition="all"
      glareColor="#384E5C"
      glareMaxOpacity={0.5}
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      transitionSpeed={2000}
      scale={1.05}
    >
      <Link href={cert.certificate} target="_blank">
        <Card className="card">
          <CardHeader>
            <CardTitle className="max-break-2:text-xl">{cert.name}</CardTitle>
          </CardHeader>

          <CardContent className="font-medium max-break-2:text-sm">
            <img
              src={cert.certificate}
              alt={cert.alt}
              className="rounded-lg"
            ></img>
          </CardContent>
        </Card>
      </Link>
    </Tilt>
  );
};

export default CertCard;
