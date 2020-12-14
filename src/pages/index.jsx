import React from 'react'

const products =
  [
    {
      "Product ID": 1,
      "Active (0/1)": 1,
      "Name *": "Ampolleta 600w SHP Gro&Flo - Agrolite",
      "Price tax excluded": "20252,000",
      "Tax rules ID": 1,
      "Reference #": "BOMBIL3",
      "Manufacturer": "Agrolite",
      "Quantity": 100,
      "Summary": `Las bombillas de sodio de alta presión (SHP) de Agrolite son idóneas para el cultivo.` ,
      "Description": "Las <strong>bombillas de sodio de alta presión (SHP) de Agrolite</strong> son idóneas para el cultivo. Estas lámparas, que tienen una rosca E-40, son apropiadas para el crecimiento y la floración del follaje, puesto que espectro de color contiene poco azul, pero una gran cantidad de amarillo y naranja que las hace muy brillantes. Son un tipo de luminarias de espectro corregido y larga vida.<br><br><ul><li>Vatios: 600 W</li><li>Lúmenes: 20.000 lm</li><li>Vida: 15.000 h</li><li>Color: 2.100 Kº</li></ul>",
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

const Index = () => (
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
                          src={products[0]['Image URLs']} alt=""
                          title="" style={{width:"100%"}} itemProp="image" />
                      </div>

                    </div>
                  </div>
                </section>

              </div>
              <div className="col-md-7 product_middle">
                <h1 className="productpage_title" itemProp="name">{ products[0]['Name *'] }</h1>
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
                  <div id="product-description-short" itemProp="description" dangerouslySetInnerHTML={{ __html: products[0]['Summary']}}>
                      {/* PRODUCT SHORT DESCRIPTION dangerouslySetInnerHTML={{ __html: products[0]['Summary']}} */}
                  </div>
                </div>
              </div>
            </div>
            <section className="row">

              <div className="col-xs-12">
                <div id="tab-content">
                  <div id="description" role="tabpanel">
                    <strong>LARGE DESCRIPTION:</strong>
                    <div className="product-description" dangerouslySetInnerHTML={{ __html: products[0]['Description']}}>
                      {/* PRODUCT LARGE DESCRIPTION dangerouslySetInnerHTML={{ __html: products[0]['Description']}} */}
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

export default Index