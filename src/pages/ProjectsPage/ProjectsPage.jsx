import PageContainer from "../../components/pageContainer/PageContainer";
import Portfolio from "../../components/portfolio page/Portfolio";
import "./projects.css";

export default function ProjectsPage() {
  return (
    <PageContainer
      sectionName={"portfolio"}
      heading={"Projects"}
      containerClass={""}
    >
      <Portfolio />
    </PageContainer>
  );
}
