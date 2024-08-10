import React from "react";
import Header from '../components/header';
import BodyProductosTodoArticulos from '../components/body_productos_todos_articulos';
import Footer from '../components/footer';

function TodoArticulos() {
    return (
        <div className="d-flex flex-column min-vh-100">
          <Header />
          <div className="flex-grow-1">
            <BodyProductosTodoArticulos />
          </div>
          <Footer />
        </div>
      );
}
export default TodoArticulos;