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
      <div className="pt-2">
        <p>
          As a student at Hyper Island, all my projects are a reflection of my
          educational journey, <span> each a work in progress</span> awaiting
          review and improvement in alignment with my evolving skills.
        </p>
        <p>
          While some projects are still unfinished, I am dedicated to completing
          them. Therefore, you may notice that certain websites are only
          available on desktops as I work towards their completion and
          optimization.
        </p>
      </div>

      <Portfolio />
    </PageContainer>
  );
}
