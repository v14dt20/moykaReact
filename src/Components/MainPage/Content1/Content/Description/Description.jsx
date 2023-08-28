import styleClasses from "./Description.module.css";

const Description = (props) => {
  return (
    <div className={styleClasses.description}>
      Хотите получить отличный результат за небольшие деньги? Воспользуйтесь
      услугами нашей автомойки.
    </div>
  );
};

export default Description;
