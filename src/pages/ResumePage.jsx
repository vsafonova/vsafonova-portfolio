import PageContainer from "../components/PageContainer";
import ResumeData from "../components/ResumeData";

export default function ResumePage() {
  return (
    <PageContainer
      sectionName={"resume"}
      heading={"Resume"}
      paragraph={"Download my resume"}
      containerClass={""}
    >
      <ResumeData />
    </PageContainer>
  );
}
