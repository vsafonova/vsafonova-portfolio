import AboutMe from "../components/AboutMe";
import Page from "../components/Page";

export default function AboutPage() {
  return (
    <Page
      sectionName={"about"}
      heading={"About"}
      paragraph={"Learn more about me"}
      containerClass={"about-me"}
    >
      <AboutMe />
    </Page>
  );
}
