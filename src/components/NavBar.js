import React from "react";

function NavBar() {
  return (
    <div className="pos-f-t">
      <div className="collapse" id="navbarToggleExternalContent">
        <div className="bg-dark p-4">
          <h4 className="text-white">Collapsed content</h4>
          <span className="text-muted">Toggleable via the navbar brand.</span>
        </div>
      </div>
      <nav className="navbar navbar-dark bg-info">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <h5 className="text-white">Resume Builder</h5>
        <h4 className="text-white mr-3 ">
          <button class="btn-secondary rounded">Login</button>
        </h4>
      </nav>
    </div>
  );
}

export default NavBar;
