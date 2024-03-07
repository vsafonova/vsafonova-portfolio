import AboutMe from "../components/AboutMe";
import Header from "../components/Header";
import Page from "../components/Page";

export default function AboutPage() {
  return (
    <>
      <Header top />
      <Page
        sectionName={"about"}
        heading={"About"}
        paragraph={"Learn more about me"}
        containerClass={"about-me"}
      >
        <AboutMe/>
      </Page>
    </>
  );
}
