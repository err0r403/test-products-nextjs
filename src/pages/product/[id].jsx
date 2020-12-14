import { useRouter } from 'next/router'


const products = [
  {
    "Product ID": 1,
    "Active (0/1)": 1,
    "Name *": "Ampolleta 600w SHP Gro&Flo - Agrolite",
    "Price tax excluded": "20252,000",
    "Tax rules ID": 1,
    "Reference #": "BOMBIL3",
    "Manufacturer": "Agrolite",
    "Quantity": 100,
    "Summary": "<div id=\"short_description_content\" class=\"rte align_justify\" itemprop=\"description\">Las <strong>bombillas</strong> de sodio de alta presión (SHP) de Agrolite son idóneas para el cultivo. Estas lámparas, que tienen una rosca E-40, son apropiadas para el crecimiento y la floración del follaje, puesto que espectro de color contiene poco azul, pero una gran cantidad de amarillo y naranja que las hace muy brillantes. Son un tipo de luminarias de espectro corregido y larga vida.<br>Vatios: 600 W<br>Lúmenes: 20.000 lm<br>Vida: 15.000 h<br>Color: 2.100 Kº<br></div>",
    "Description": "<h3 class=\"page-product-heading\">Más</h3><div class=\"rte\">Las bombillas de sodio de alta presión (SHP) de Agrolite son idóneas para el cultivo. Estas lámparas, que tienen una rosca E-40, son apropiadas para el crecimiento y la floración del follaje, puesto que espectro de color contiene poco azul, pero una gran cantidad de amarillo y naranja que las hace muy brillantes. Son un tipo de luminarias de espectro corregido y larga vida.<br>Vatios: 600 W<br>Lúmenes: 20.000 lm<br>Vida: 15.000 h<br>Color: 2.100 Kº<br></div>",
    "Meta description": "",
    "Image URLs": "http://siembratienda.com/20-large_default/bombilla-agrolite-600w-shp-groflo-25-uds-x-caja.jpg",
    "Category": "Ampolletas;Iluminación;"
  },
  {
    "Product ID": 2,
    "Active (0/1)": 1,
    "Name *": "Ampolleta 250w SHP Gro&Flo - Agrolite",
    "Price tax excluded": "9244,000",
    "Tax rules ID": 1,
    "Reference #": "BOMBIL4",
    "Manufacturer": "Agrolite",
    "Quantity": 100,
    "Summary": "<div id=\"short_description_content\" class=\"rte align_justify\" itemprop=\"description\">Las bombillas de sodio de alta presión (SHP) de Agrolite son idóneas para el cultivo. Estas lámparas, que tienen una rosca E-40, son apropiadas para el crecimiento y la floración del follaje, puesto que espectro de color contiene poco azul, pero una gran cantidad de amarillo y naranja que las hace muy brillantes. Son un tipo de luminarias de espectro corregido y larga vida. Vatios: 250 W Lúmenes: 20.000 lm Vida: 15.000 h Color: 2.100 Kº</div>",
    "Description": "<h3 class=\"page-product-heading\">Más</h3><div class=\"rte\">Las bombillas de sodio de alta presión (SHP) de Agrolite son idóneas para el cultivo. Estas lámparas, que tienen una rosca E-40, son apropiadas para el crecimiento y la floración del follaje, puesto que espectro de color contiene poco azul, pero una gran cantidad de amarillo y naranja que las hace muy brillantes. Son un tipo de luminarias de espectro corregido y larga vida. Vatios: 250 W Lúmenes: 20.000 lm Vida: 15.000 h Color: 2.100 Kº</div>",
    "Meta description": "",
    "Image URLs": "http://siembratienda.com/18-large_default/bombilla-agrolite-250w-shp-groflo-25-uds-x-caja.jpg",
    "Category": "Ampolletas;Iluminación;"
  }
]

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  // const res = await fetch('https://.../posts')
  const prods = products

  console.log('typeof', typeof (prods))
  console.log('prods', prods)
  // Get the paths we want to pre-render based on posts
  const paths = prods.map((prod) => `/product/${prod['Product ID']}`)

  console.log('paths', paths)

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {

  const { id } = params

  const product = JSON.stringify(products[id-1])

  console.log(product)

  return {
    props: {
      product,
    },
  }
}


const Product = ({ product }) => {

  const router = useRouter()
  const { id } = router.query

  product = JSON.parse(product)


  return (
    <section id="wrapper">

      <div className="container asd">

        <div id="columns_inner">

          <div id="content-wrapper" className="right-column col-xs-12">

            <section id="main">

              <div className="row">
                <div className="col-md-5 product_main_img">

                  <section className="page-content" id="content">
                    <div className="product-leftside">
                      <ul className="product-flags">
                      </ul>

                      <div className="images-container">

                        <div className="product-cover">

                          {/* <img className="js-qv-product-cover"
                          src="https://i.ibb.co/1GL6Z8K/fast-food-organico-750ml-bac.jpg" alt=""
                          title="" style={{width:"100%"}} itemProp="image" /> */}

                          <img className="js-qv-product-cover"
                            src={product['Image URLs']} alt=""
                            title="" style={{ width: "100%" }} itemProp="image" />
                        </div>

                      </div>
                    </div>
                  </section>

                </div>
                <div className="col-md-7 product_middle">
                  <h1 className="productpage_title" itemProp="name">{product['Name *']}</h1>
                  {/* <h1 className="productpage_title" itemProp="name">Fast Food Orgánico 750mL - B.A.C.</h1> */}
                  <div className="product-information">
                    <div className="product-prices">

                      <div className="product-price h5 ">

                        <div className="current-price">
                          <span>15.990&nbsp;$</span>

                        </div>

                      </div>


                      <div className="tax-shipping-delivery-label">
                        Impuestos incluidos
                  </div>
                      <strong>SHORT DESCRIPTION:</strong>
                    </div>
                    <div id="product-description-short" itemProp="description" dangerouslySetInnerHTML={{ __html: product['Summary'] }}>
                      {/* PRODUCT SHORT DESCRIPTION dangerouslySetInnerHTML={{ __html: product['Summary']}} */}
                    </div>
                  </div>
                </div>
              </div>
              <section className="row">

                <div className="col-xs-12">
                  <div id="tab-content">
                    <div id="description" role="tabpanel">
                      <strong>LARGE DESCRIPTION:</strong>
                      <div className="product-description" dangerouslySetInnerHTML={{ __html: product['Description'] }}>
                        {/* PRODUCT LARGE DESCRIPTION dangerouslySetInnerHTML={{ __html: product['Description']}} */}
                      </div>

                    </div>
                  </div>
                </div>

              </section>

            </section>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Product