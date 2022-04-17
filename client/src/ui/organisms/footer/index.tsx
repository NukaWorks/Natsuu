import * as React from "react";
import { useLocale } from "../../../hooks";
import "./index.scss";
import { useLocation } from "react-router-dom";

import { ReactComponent as NatsuuLogo } from "../../../assets/natsuu-logo.svg";
import { ReactComponent as NukaLogo } from "../../../assets/nukalogo.svg";
const DARK_NAV_ROUTES = [/\/plus\/?$/i];

export function Footer() {
  const locale = useLocale();
  const location = useLocation();
  const route = location.pathname.substring(location.pathname.indexOf("/", 1));
  const dark = DARK_NAV_ROUTES.some((r) => route.match(r));

  return (
    <footer id="nav-footer" className={`page-footer${dark ? " dark" : ""}`}>
      <div className="page-footer-grid">
        <div className="page-footer-logo-col">
          <a href="/" className="nukaworks-footer-logo" aria-label="NukaWorks Natsuu homepage">
            <NatsuuLogo />
          </a>
          <p>
            <b>Natsuu</b>, the official developer documentation center from <b>NukaWorks.</b>
          </p>
          <ul className="social-icons">
            <li>
              <a
                className="icon icon-github-mark-small"
                href="https://github.com/NukaWorks/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="visually-hidden">NukaWorks on Github</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="page-footer-nav-col-1">
          <h2 className="footer-nav-heading">NukaWorks</h2>
          <ul className="footer-nav-list">
            <li className="footer-nav-item">
              <a href={`/en-US/about`}>About</a>
            </li>
            <li className="footer-nav-item">
              <a
                href="https://hacks.mozilla.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hacks Blog
              </a>
            </li>
            <li className="footer-nav-item">
              <a
                href="https://www.mozilla.org/en-US/careers/listings/?team=Marketing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Careers
              </a>
            </li>
          </ul>
        </div>

        <div className="page-footer-nav-col-2">
          <h2 className="footer-nav-heading">Support</h2>
          <ul className="footer-nav-list">
            <li className="footer-nav-item">
              <a
                className="footer-nav-link"
                href={`/${locale}/docs/MDN/Contribute/Feedback#documentation_issues`}
              >
                Report a page issue
              </a>
            </li>
            <li className="footer-nav-item">
              <a
                className="footer-nav-link"
                href={`/${locale}/docs/MDN/Contribute/Feedback#site_issues`}
              >
                Report a site issue
              </a>
            </li>
          </ul>
        </div>

        <div className="page-footer-nav-col-3">
          <h2 className="footer-nav-heading">Our communities</h2>
          <ul className="footer-nav-list">
            <li className="footer-nav-item">
              <a className="footer-nav-link" href={`/en-US/community`}>
                MDN Community
              </a>
            </li>
            <li className="footer-nav-item">
              <a
                className="footer-nav-link"
                href="https://discourse.mozilla.org/c/nukaworks/236"
                target="_blank"
                rel="noopener noreferrer"
              >
                MDN Forum
              </a>
            </li>
            <li className="footer-nav-item">
              <a
                className="footer-nav-link"
                href="https://wiki.mozilla.org/Matrix"
                target="_blank"
                rel="noopener noreferrer"
              >
                MDN Chat
              </a>
            </li>
          </ul>
        </div>

        <div className="page-footer-nav-col-4">
          <h2 className="footer-nav-heading">Developers</h2>
          <ul className="footer-nav-list">
            <li className="footer-nav-item">
              <a className="footer-nav-link" href={`/${locale}/docs/Web`}>
                Web Technologies
              </a>
            </li>
            <li className="footer-nav-item">
              <a className="footer-nav-link" href={`/${locale}/docs/Learn`}>
                Learn Web Development
              </a>
            </li>
          </ul>
        </div>

        <div className="page-footer-moz">
          <a
            href="https://nuka.works/"
            className="footer-moz-logo-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <NukaLogo />
          </a>

          <div className="page-footer-legal">
            <p id="license" className="page-footer-legal-text">
              <i><b>NukaWorks</b> - Build a powerful ecosystem.</i>
              <br />
              Logos and Trademarks are ©2019–{new Date().getFullYear()} - by NukaWorks.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
