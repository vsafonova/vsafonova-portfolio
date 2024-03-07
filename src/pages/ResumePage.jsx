import Page from "../components/Page";
import ResumeData from "../components/ResumeData";

export default function ResumePage() {
  return (
    <Page
      sectionName={"resume"}
      heading={"Resume"}
      paragraph={"Download my resume"}
      containerClass={""}
    >
      <ResumeData />
    </Page>
  );
}
