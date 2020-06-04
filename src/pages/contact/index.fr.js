import React from "react";
import Layout from "../../components/Layout";
import Contact from "../../components/Contact";

const ContactPage = ({ location }) => (
  <Layout location={location}>
    <Contact />
  </Layout>
);

export default ContactPage;
