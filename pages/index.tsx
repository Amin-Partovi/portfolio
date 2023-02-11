import AboutMe from "@/components/aboutMe/AboutMe";
import CaseStudies from "@/components/caseStudies/CaseStudies";
import { Inter } from "@next/font/google";

import Container from "../components/container/Container";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Container
      dynamicPart={
        <>
          <AboutMe />
          <CaseStudies />
        </>
      }
    ></Container>
  );
}
