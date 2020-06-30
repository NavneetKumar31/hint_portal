import React from "react";
import { useLocation, Link } from "react-router-dom";

import "./breadcrumb.scss";

const Breadcrumb = () => {
  const locations = useLocation().pathname.split("/");
  const getClasses = (breadcrumb) => {
    if (breadcrumb.last) {
      return "breadcrumb-item last";
    }
    return "breadcrumb-item";
  };

  const breadcrumbs = [
    {
      _id: "bdcb0",
      name: "home",
      link: "/",
      last: false,
    },
  ];
  locations.map((location, i) => {
    const breadcrumb = {
      _id: "",
      name: "",
      link: "",
      last: false,
    };
    if (i !== 0) {
      breadcrumb._id = `bdcb${i}`;
      breadcrumb.name = location;
      breadcrumb.link = breadcrumbs[i - 1].link + location + "/";
      breadcrumbs.push(breadcrumb);
    }

    if (i === locations.length - 1) {
      breadcrumb.last = true;
    }
    return null;
  });

  return (
    <nav className="breadcrumb-wrapper" aria-label="breadcrumb">
      <ol className="breadcrumb">
        {breadcrumbs.map((b) => (
          <li key={b._id} className={getClasses(b)}>
            <Link to={b.link}>{b.name}</Link>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
