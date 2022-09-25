import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer>
      <div className="social">
        <ul>
          <li>
            <Link href="https://github.com/hainguyengithub/">
              <a>
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://www.linkedin.com/in/hai-nguyen-03ab7b193/">
              <a>
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
