import React from "react";
import {useLocation} from "react-router-dom";

import {PageContentContainer} from "../ui/atoms/page-content";
import "./index.scss";

export function PageNotFound() {
  const location = useLocation();
  const [url, setURL] = React.useState("");

  React.useEffect(() => {
    // If we're in a useEffect, this means we're in a client-side rendering
    // and in that case the current window.location is realistic.
    // When it's server-side rendered, the URL is "fake" just to generate
    // the "empty template" page.
    setURL(location.pathname);
  }, [location]);

  return (
    <div className="page-not-found">
      <PageContentContainer>
        {/* This string should match the `pageTitle` set in ssr/render.js */}
        <h1>Page not found</h1>

        {url && (
          <p className="sorry-message">
            Sorry, the page <code>{url}</code> could not be found.
          </p>
        )}

        <p>
          <a href="/">Go back to the home page</a>
        </p>
      </PageContentContainer>
    </div>
  );
}
