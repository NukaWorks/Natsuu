import {DisplayH2, DisplayH3} from "./utils";
import NoteCard from "../../ui/molecules/notecards";

export function SpecificationSection({
  id,
  title,
  isH3,
  specifications,
  query,
}: {
  id: string;
  title: string;
  isH3: boolean;
  specifications: Array<{
    title: string;
    bcdSpecificationURL: string;
  }>;
  query: string;
}) {
  return (
    <>
      {title && !isH3 && <DisplayH2 id={id} title={title} />}
      {title && isH3 && <DisplayH3 id={id} title={title} />}

      {specifications.length > 0 ? (
        <table className="standard-table">
          <thead>
            <tr>
              <th scope="col">Specification</th>
            </tr>
          </thead>
          <tbody>
            {specifications.map((spec) => (
              <tr key={spec.bcdSpecificationURL}>
                <td>
                  <a href={spec.bcdSpecificationURL}>
                    {spec.title} <br />
                    {spec.bcdSpecificationURL.includes("#") && (
                      <small>
                        # {`${spec.bcdSpecificationURL.split("#")[1]}`}
                      </small>
                    )}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <NoteCard type="warning">
          <h4>No specification found</h4>
          <p>
            No specification data found for <code>{query}</code>.<br />
            <a href="#on-github">Check for problems with this page</a> or
            contribute a missing <code>spec_url</code> to{" "}
            <a href="https://github.com/NukaWorks/browser-compat-data">
              nukaworks/browser-compat-data
            </a>
            . Also make sure the specification is included in{" "}
            <a href="https://github.com/w3c/browser-specs">w3c/browser-specs</a>
            .
          </p>
        </NoteCard>
      )}
    </>
  );
}
