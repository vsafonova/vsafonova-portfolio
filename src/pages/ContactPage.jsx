import Page from "../components/Page";
import Contacts from "../components/Contacts";

export default function ContactPage() {
  return (
    <Page
      sectionName={"contact"}
      heading={"Contact"}
      paragraph={"Contact me"}
      containerClass={""}
    >
      <Contacts />
    </Page>
  );
}
