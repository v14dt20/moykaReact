import styleClasses from "./Name.module.css";

const Name = (props) => {
  return (
    <div className={styleClasses.header}>
      <h1>Автомойка "У пожарки"</h1>
    </div>
  );
};

export default Name;