import React from 'react'
import CartWidget from '../cartWidget/CartWidget'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-expand-md navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Musicación</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Clasicos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">Novedades</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">Recomendados</a>
        </li>
        <li className="text-light nav-item">
          <a className="nav-link active" href="#"><CartWidget/></a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search"/>
        <button className="btn btn-outline-secondary" type="submit">Buscar</button>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Navbar