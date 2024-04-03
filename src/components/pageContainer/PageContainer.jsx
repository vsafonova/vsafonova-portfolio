import Header from "../header/Header";
import "./page.css";

export default function PageContainer({
  sectionName,
  heading,
  paragraph,
  children,
  containerClass,
}) {
  return (
    <>
      <Header top />
      <section className={`${sectionName} section-show `}>
        <div className={`${containerClass} container`}>
          <div className="section-title">
            <h2>{heading}</h2>
            <p>{paragraph}</p>
          </div>
          {children}
        </div>
      </section>
    </>
  );
}
