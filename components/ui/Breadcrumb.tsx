import { faAngleRight, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Breadcrumb = () => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <a
            className="text-gray-700 hover:text-gray-900 ml-1 md:ml-2 text-sm font-medium"
            href="/"
          >
            <FontAwesomeIcon className="w-3 h-3" icon={faHome} />
            <span className="ml-2">Home</span>
          </a>
        </li>
        <li className="inline-flex items-center">
          <div>
            <FontAwesomeIcon className="w-3 h-3" icon={faAngleRight} />
            <a
              className="text-gray-700 hover:text-gray-900 ml-1 md:ml-2 text-sm font-medium"
              href="#"
            >
              Projects
            </a>
          </div>
        </li>
        <li className="inline-flex items-center" aria-current="page">
          <div>
            <FontAwesomeIcon className="w-3 h-3" icon={faAngleRight} />
            <span className="text-gray-400 ml-1 md:ml-2 text-sm font-medium">
              Docs
            </span>
          </div>
        </li>
      </ol>
    </nav>
  );
};
