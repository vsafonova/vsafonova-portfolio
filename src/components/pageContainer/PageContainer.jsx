import { useEffect, useState } from "react";
import Header from "../header/Header";
import "./page.css";

export default function PageContainer({
  sectionName,
  heading,
  paragraph,
  children,
  containerClass,
}) {
  const [sectionShown, setSectionShown] = useState(false)
  const [] =useState()

  useEffect(() => {
    setTimeout(() => {
      setSectionShown(true)
    },350)
  }, [])

  return (
    <>
      <Header top={sectionShown}/>
      <section className={`${sectionName} ${sectionShown ? "section-show" : ""}`}>
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
