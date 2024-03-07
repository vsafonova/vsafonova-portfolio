import Header from "../components/Header";
import Page from "../components/Page";
import Contacts from "../components/Contacts";

export default function ContactPage() {
  return (
    <>
      <Header top />
      <Page
        sectionName={"contact"}
        heading={"Contact"}
        paragraph={"Contact me"}
        containerClass={""}
      >
        <Contacts />
      </Page>
    </>
  );
}
