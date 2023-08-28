import styleClasses from './Content1.module.css'

const Content1 = (props) => {
  return (
    <div className={styleClasses.content}>
      <div className={styleClasses.header}>
        <h1>Автомойка "У пожарки"</h1>
      </div>
      <div className={styleClasses.line}></div>
      <div className={styleClasses.description}>
        Хотите получить отличный результат за небольшие деньги? Воспользуйтесь услугами нашей автомойки.
      </div>
      <div className={styleClasses.button}>
        Записаться
      </div>
    </div>
  )
}

export default Content1;