import './Footer.scss'
import Socials from "@/components/Socials/index.js";
import Logo from "@/components/Logo/index.js";
import clsx from "clsx";

export default () => {
  const menuItems = [
    {label: 'Recipes', href: '/recipes'},
    {label: 'Blog', href: '/blog'},
    {label: 'Contact', href: '/contact'},
    {label: 'About us', href: '/about'},
  ]
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__body">
          <div className="footer__info">
            <Logo className="footer__logo" />
            <div className="footer__description">
              <p>Lorem ipsum dolor sit amet, consectetuipisicing elit</p>
            </div>
          </div>
          <nav className="footer__menu">
            <ul className="footer__menu-list">
              {menuItems.map(({ label, href}) => (
                <li className="footer__menu-item" key={label}>
                  <a
                    className="footer__menu-link"
                    href={href}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="footer__extra">
          <div className="footer__copyright">
            © <time dataTime={currentYear}>{currentYear}</time> Edapovkusu. Разработал:&nbsp;<a href="https://alexanderfilichev.ru/" target="_blank">alexanderfilichev</a>
          </div>
          <Socials className="footer__soc1al" />
        </div>
      </div>
    </footer>
  )
}
