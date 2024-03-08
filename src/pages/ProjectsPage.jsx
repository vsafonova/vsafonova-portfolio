import PageContainer from "../components/PageContainer";
import Portfolio from "../components/Portfolio";

export default function ProjectsPage() {
  return (
    <PageContainer sectionName={"portfolio"} heading={"Projects"} containerClass={""}>
      <Portfolio />
    </PageContainer>
  );
}
