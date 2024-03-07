import Header from "../components/Header";
import Page from "../components/Page";
import ResumeData from "../components/ResumeData";


export default function ResumePage() {
  return (
    <>
      <Header top />
      <Page
        sectionName={"resume"}
        heading={"Resume"}
        paragraph={"Download my resume"}
        containerClass={""}
      >
        <ResumeData />
      </Page>
    </>
  );
}
