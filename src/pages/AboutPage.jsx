import AboutMe from "../components/AboutMe";
import PageContainer from "../components/PageContainer";

export default function AboutPage() {
  return (
    <PageContainer
      sectionName={"about"}
      heading={"About"}
      paragraph={"Learn more about me"}
      containerClass={"about-me"}
    >
      <AboutMe />
    </PageContainer>
  );
}
