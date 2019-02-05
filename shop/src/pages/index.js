import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'

const IndexPage = ({ data }) => (
    <Layout>
      <div className="container">
        <div className="row">
          <h1>Motos en stock</h1>
        </div>
        <div className="row">
          {data.allStrapiItem.edges.filter(document => document.node.disponible === true && document.node.visible === true ).map(document => (
            <div className="col-12 col-md-6" key={document.node.id}>
              <img style={{ width: "100%", height: 250, objectFit: "cover" }} alt="" src={ "http://localhost:1337" + ( document.node.imagenes[0] !== undefined ? document.node.imagenes[0].url : "/uploads/placeholder.png" )} />
              <h4>
                <Link to={`/item/${document.node.slug}`} state={{ id: document.node.id }}>{document.node.titulo}</Link>
              </h4>
              <ul>
                <li><h4>Año: { document.node.year }</h4></li>
                <li><h5>Kms: { document.node.kilometros.toLocaleString() }</h5></li>
                <li><h5>{ document.node.precio.toLocaleString() }€</h5></li>
              </ul>
            </div>
          ))}
        </div>
        <div className="row">
          <h1>Las que ya no están con nosotros...</h1>
        </div>
        <div className="row">
          {data.allStrapiItem.edges.filter(document => ( document.node.disponible === false && document.node.visible === true )).map(document => (
            <div className="col-12 col-sm-6" key={document.node.id}>
              <img style={{ width: "100%", height: 250, objectFit: "cover" }} alt={"Tienda de motos - " + document.node.titulo} src={ "http://localhost:1337" + ( document.node.imagenes[0] !== undefined ? document.node.imagenes[0].url : "/uploads/placeholder.png" )} />
              <h4>
                <Link to={`/item/${document.node.slug}`}>{document.node.titulo}</Link>
              </h4>
              <ul>
                <li><h5>Año: { document.node.year }</h5></li>
                <li><h5>Kms: { document.node.kilometros.toLocaleString() }</h5></li>
                <li><h3>{ document.node.precio.toLocaleString() }€</h3></li>
              </ul>
            </div>
          ))}
        </div>
        <Link to="/page-2/">Go to page 2</Link>
      </div>
    </Layout>
)

export default IndexPage

export const pageQuery = graphql`  
  query IndexQuery {
    allStrapiItem {
      edges {
        node {
          id
          slug
          titulo
          descripcion
          imagenes {
            id
            url
          }
          kilometros
          precio
          disponible
          visible
          year
        }
      }
    }
  }
`