import React from "react";
import NavBar from "./../Header/Navbar.js";

function Layout({ children }) {
  return (
    <div>
      {/* Here we add our navbar */}
      <NavBar />

      {/* Here goes our layout and its*/}
      {/* childrens that is body of the pages */}
      {children}

      {/* Here we can add page footer */}ī
      {/* But... for now, we really does not need it */}
    </div>
  );
}

export default Layout;
