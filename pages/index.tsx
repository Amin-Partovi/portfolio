import AboutMe from "@/components/aboutMe/AboutMe";
import CaseStudies from "@/components/caseStudies/CaseStudies";
import ContactMe from "@/components/contactMe/ContactMe";
import Publications from "@/components/publications/Publications";
import ScrollProvider from "@/contexts/viewContext";


import Container from "../components/container/Container";



export default function Home() {
  return (
    <ScrollProvider>
      <Container
        dynamicPart={
          <>
            <AboutMe />
            <CaseStudies />
            <Publications />
          </>
        }
        fixedPart={
          <>
            <ContactMe />
          </>
        }
      ></Container>
    </ScrollProvider>
  );
}
