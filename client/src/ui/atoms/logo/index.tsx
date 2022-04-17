import { useLocation } from "react-router-dom";

import { useLocale } from "../../../hooks";

import { ReactComponent as MDNDocsLogo } from "../../../assets/nukaworks-docs-logo.svg";
import { ReactComponent as MDNLogo } from "../../../assets/nukaworks-logo.svg";

import "./index.scss";
import { isDocs } from "../../../utils";

export function Logo() {
  const locale = useLocale();
  const location = useLocation();
  const docs = isDocs(location.pathname);

  return (
    <a href={`/${locale}/`} className="logo" aria-label="NukaWorks Natsuu homepage">
      {(docs && <MDNDocsLogo />) || <MDNLogo />}
    </a>
  );
}
