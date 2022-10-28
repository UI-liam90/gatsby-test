import * as React from "react";
import { graphql } from "gatsby";

const IndexPage = ({ data }) => {
  return (
    <main>
      {data.allWpPage.nodes.map((node) => (
        <div>
          <p>{node.title}</p>
          <div dangerouslySetInnerHTML={{ __html: node.content }} />
        </div>
      ))}
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;

export const pageQuery = graphql`
  query {
    allWpPage(sort: { fields: [date] }) {
      nodes {
        title
        slug
        content
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
