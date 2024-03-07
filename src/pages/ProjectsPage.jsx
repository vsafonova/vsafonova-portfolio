import Page from "../components/Page";
import Portfolio from "../components/Portfolio";

export default function ProjectsPage() {
  return (
    <Page sectionName={"portfolio"} heading={"Projects"} containerClass={""}>
      <Portfolio />
    </Page>
  );
}
