import Button from "./Button/Button";
import styleClasses from "./Content.module.css";
import Description from "./Description/Description";
import Line from "./Line/Line";
import Name from "./Name/Name";

const Content = (props) => {
  return (
    <div className={styleClasses.content}>
      <Name />
      <Line />
      <Description />
      <Button />
    </div>
  );
};

export default Content;
