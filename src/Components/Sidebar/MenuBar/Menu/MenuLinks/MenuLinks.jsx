import NavLink from "./NavLink/NavLink";

const MenuLinks = (props) => {
  return (
    <ul className='menuLinks'>
      <NavLink classNameIcon='bxHomeAlt' textItem='Главная' />
      <NavLink classNameIcon='bxServices' textItem='Услуги' />
      <NavLink classNameIcon='bxAboutUs' textItem='О нас' />
      <NavLink classNameIcon='bxReviews' textItem='Отзывы' />
      <NavLink classNameIcon='bxMyRecords' textItem='Мои записи' />
      <NavLink classNameIcon='bxSettingsProfile' textItem='Настройки профиля' />
    </ul>
  );
};

export default MenuLinks;