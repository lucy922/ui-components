import {
  faFacebookSquare,
  faInstagramSquare,
  faTwitterSquare,
  faGithubSquare,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <div className="flex justify-around mt-96 pb-9">
      <div>
        <h1 className="font-bold">MarketPlace</h1>
        <ul>
          <li>Trending</li>
          <li>Best selling</li>
          <li>Latest</li>
        </ul>
      </div>
      <div>
        <h1 className="font-bold">MarketPlace</h1>
        <ul>
          <li>Trending</li>
          <li>Best selling</li>
          <li>Latest</li>
        </ul>
      </div>
      <div>
        <h1 className="font-bold">Socials</h1>
        <ul className="flex justify-between w-full">
          <li className="pr-1">
            <FontAwesomeIcon icon={faFacebookSquare} />
          </li>
          <li className="pr-1">
            <FontAwesomeIcon icon={faInstagramSquare} />
          </li>
          <li className="pr-1">
            <FontAwesomeIcon icon={faTwitterSquare} />
          </li>
          <li className="pr-1">
            <FontAwesomeIcon icon={faGithubSquare} />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
