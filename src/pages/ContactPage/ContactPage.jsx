import PageContainer from "../../components/pageContainer/PageContainer";
import Contacts from "../../components/contact page/Contacts";
import "./contact.css";

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
