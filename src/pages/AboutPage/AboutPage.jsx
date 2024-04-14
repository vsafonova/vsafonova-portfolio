import AboutMe from "../../components/about page/AboutMe";
import PageContainer from "../../components/pageContainer/PageContainer";
import "./about.css";

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
