import '../assets/styles/components/header.scss';
import Logo from '../assets/images/Matic-Logo.png';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img className="header__logo__img" src={Logo} alt="Matic Logo" />
      </div>
      <a
        className="header__button"
        href="https://github.com/awakatedev/matic-logic-test"
        target="_blank"
      >
        Github Repo
      </a>
    </header>
  );
};

export default Header;
