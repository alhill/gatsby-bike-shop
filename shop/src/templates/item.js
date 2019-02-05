import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout' 
import ImageGallery from 'react-image-gallery'
import "react-image-gallery/styles/css/image-gallery.css"

const ItemTemplate = ({ data }) => (
  <Layout>
    <h1>{data.strapiItem.titulo}</h1>
    <div className="col-12" key={data.strapiItem.id}>
        {/*<img style={{ objectFit: "cover", width: "100%" }} alt="Tienda de motos" src={ "http://localhost:1337" + ( data.strapiItem.imagenes[0] !== undefined ? data.strapiItem.imagenes[0].url : "/uploads/placeholder.png" )} />*/}
        <ImageGallery 
            items={
                data.strapiItem.imagenes.map(img => ({
                    original: "http://localhost:1337" + img.url,
                    thumbnail: "http://localhost:1337" + img.url,
                }))
            } 
        />
        <h2>{data.strapiItem.titulo}</h2>
        <p>{data.strapiItem.descripcion}</p>
    </div>
  </Layout>
)

export default ItemTemplate

export const query = graphql`
query ItemTemplate($slug: String!) {
    strapiItem(slug: {eq: $slug}) {
        id
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
`