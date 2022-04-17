import {Button} from "../../atoms/button";
import {LanguageMenu} from "../../molecules/language-menu";
import {Doc} from "../../../document/types";

import "./index.scss";

export const ArticleActions = ({
                                 doc,
                                 showArticleActionsMenu,
                                 setShowArticleActionsMenu,
                               }: {
  doc: Doc;
  showArticleActionsMenu: boolean;
  setShowArticleActionsMenu: (show: boolean) => void;
}) => {
  const translations = doc.other_translations || [];
  const {native} = doc;

  function toggleArticleActionsMenu() {
    setShowArticleActionsMenu(!showArticleActionsMenu);
  }

  // @TODO we will need the following when including the language drop-down
  // const translations = doc.other_translations || [];

  return (
    (((translations && !!translations.length)) && (
      <>
        <div
          className={`article-actions${
            showArticleActionsMenu ? " show-actions" : ""
          }`}
        >
          <Button
            type="action"
            extraClasses="article-actions-toggle"
            onClickHandler={toggleArticleActionsMenu}
            icon={showArticleActionsMenu ? "cancel" : "ellipses"}
          >
            <span className="article-actions-dialog-heading">
              Article Actions
            </span>
          </Button>
          <ul className="article-actions-entries">
            <>
              {translations && !!translations.length && (
                <li className="article-actions-entry">
                  <LanguageMenu
                    onClose={toggleArticleActionsMenu}
                    translations={translations}
                    native={native}
                  />
                </li>
              )}
            </>
          </ul>
        </div>
      </>
    )) ||
    null
  );
};
