import PageContainer from "../../components/pageContainer/PageContainer";
import ResumeData from "../../components/resume page/ResumeData";
import "./resume.css";

export default function ResumePage() {
  return (
    <PageContainer
      sectionName={"resume"}
      heading={"Resume"}
      containerClass={""}
    >
      <ResumeData />
    </PageContainer>
  );
}
