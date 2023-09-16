"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "./ui/card";
import { Badge } from "./ui/badge";

import Link from "next/link";

const Projects = () => {
  return (
    <div className="pt-4 pb-20 space-y-4">
      <div>
        <Link href="https://outreacher.app/" target="_blank">
          <Card className="w-[600px] h-fit cursor-pointer">
            <CardHeader>
              <CardTitle>Outreacher</CardTitle>
              <CardDescription className="text-md">
                A web app that streamlines job searching and networking by
                helping users organize job applications, track contacts, and
                create personalized outreach message templates.
              </CardDescription>
            </CardHeader>
            <CardContent className="font-medium">
              <div className="w-full flex justify-center">
                <span className="text-center font-bold text-xl">
                  Technologies
                </span>
              </div>

              <div className="flex justify-center items-center pt-2 space flex-wrap">
                <Badge variant="outline" className="m-1">
                  Next.js
                </Badge>
                <Badge variant="outline" className="m-1">
                  React
                </Badge>
                <Badge variant="outline" className="m-1">
                  JavaScript
                </Badge>
                <Badge variant="outline" className="m-1">
                  Redux
                </Badge>
                <Badge variant="outline" className="m-1">
                  Tailwind CSS
                </Badge>
                <Badge variant="outline" className="m-1">
                  Next-Auth
                </Badge>
                <Badge variant="outline" className="m-1">
                  PostgreSQL
                </Badge>
                <Badge variant="outline" className="m-1">
                  Prisma
                </Badge>
                <Badge variant="outline" className="m-1">
                  Bcrypt
                </Badge>
                <Badge variant="outline" className="m-1">
                  Docker
                </Badge>
                <Badge variant="outline" className="m-1">
                  Git
                </Badge>
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>

      <div>
        <div>
          <Link href="https://geotemp.vercel.app/" target="_blank">
            <Card className="w-[600px] h-fit cursor-pointer">
              <CardHeader>
                <CardTitle>GeoTemp</CardTitle>
                <CardDescription className="text-md">
                  A web app for up-to-date weather information and 5-day
                  forecasts based on your location or search.
                </CardDescription>
              </CardHeader>

              <CardContent className="font-medium">
                <div className="w-full flex justify-center">
                  <span className="text-center font-bold text-xl">
                    Technologies
                  </span>
                </div>

                <div className="flex justify-center items-center pt-2 space flex-wrap">
                  <Badge variant="outline" className="m-1">
                    Next.js
                  </Badge>
                  <Badge variant="outline" className="m-1">
                    React
                  </Badge>
                  <Badge variant="outline" className="m-1">
                    JavaScript
                  </Badge>
                  <Badge variant="outline" className="m-1">
                    Recoil
                  </Badge>

                  <Badge variant="outline" className="m-1">
                    Git
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
