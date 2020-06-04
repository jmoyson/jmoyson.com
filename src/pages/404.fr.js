import React from "react";
import Layout from "../components/Layout";
import NotFound from "../components/NotFound";

const NotFoundPage = ({ location }) => (
  <Layout location={location}>
    <NotFound />
  </Layout>
);

export default NotFoundPage;
