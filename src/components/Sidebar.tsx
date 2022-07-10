import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGaugeSimpleHigh,
  faMagnifyingGlass,
  faEnvelopeOpenText,
  faUser,
  faCalendarCheck,
  faComment,
  faGears,
  faCircleQuestion,
  faArrowRightFromBracket,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { StyledSidebar } from "./styles/Sidebar.styles";

export function Sidebar() {
  const showNavigationMenu = () => {};
  return (
    <>
      <StyledSidebar>
        <section>
          <FontAwesomeIcon
            icon={faBars}
            size={"2x"}
            onClick={showNavigationMenu}
          />
        </section>
        <div>
          <h4>Menu</h4>
          <nav>
            <a>
              <FontAwesomeIcon icon={faGaugeSimpleHigh} />
              <span>Dashboard</span>
            </a>
            <a>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
              <span>Discover Recipes</span>
            </a>
            <a>
              <FontAwesomeIcon icon={faEnvelopeOpenText} />
              <span>My Recipes</span>
            </a>
            <a>
              <FontAwesomeIcon icon={faUser} />
              <span>Clients</span>
            </a>
            <a>
              <FontAwesomeIcon icon={faCalendarCheck} />
              <span>Check-Ins</span>
            </a>
            <a>
              <FontAwesomeIcon icon={faComment} />
              <span>Messages</span>
              <small>999+</small>
            </a>
          </nav>
        </div>
        <div>
          <h4>Your Account</h4>
          <nav>
            <a>
              <FontAwesomeIcon icon={faGears} />
              <span>Account</span>
            </a>
            <a>
              <FontAwesomeIcon icon={faCircleQuestion} />
              <span>Help & Support</span>
            </a>
            <a>
              <FontAwesomeIcon icon={faArrowRightFromBracket} />
              <span>Log Out</span>
            </a>
          </nav>
        </div>
      </StyledSidebar>
    </>
  );
}
export default Sidebar;
