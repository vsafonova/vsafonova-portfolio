import Page from "../components/Page";
import Header from "../components/Header";
import Portfolio from "../components/Portfolio";

export default function ProjectsPage() {
  return (
    <>
      <Header top />
      <Page sectionName={"portfolio"} heading={"Projects"} containerClass={""}>
        <Portfolio />
      </Page>
    </>
  );
}
