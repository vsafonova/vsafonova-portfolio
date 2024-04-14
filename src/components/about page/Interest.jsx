export default function Interest({
  containerStyle,
  iconClassName,
  iconColor,
  heading,
}) {
  return (
    <div className={`col-lg-3 col-md-4 ${containerStyle}`}>
      <div className="icon-box">
        <i className={`bi ${iconClassName}`} style={{ color: iconColor }}></i>
        <h3>{heading}</h3>
      </div>
    </div>
  );
}
