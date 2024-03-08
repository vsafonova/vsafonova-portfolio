import Contacts from "../components/Contacts";
import PageContainer from "../components/PageContainer";

export default function ContactPage() {
  return (
    <PageContainer
      sectionName={"contact"}
      heading={"Let's work together"}
      paragraph={"Contact me"}
      containerClass={""}
    >
      <Contacts />
    </PageContainer>
  );
}
