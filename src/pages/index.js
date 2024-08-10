import React from "react";
import Header from '../components/header';
import Footer from '../components/footer';
import BodyPrincipal from '../components/body_principal';

function Index() {
  return(
    <div className="d-flex flex-column min-vh-100">
    <Header />
    <div className="flex-grow-1">
      <BodyPrincipal />
    </div>
    <Footer />
  </div>
  );
}
export default Index;