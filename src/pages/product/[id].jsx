import { useRouter } from 'next/router'
import Link from 'next/link'

import useSWR from 'swr'

const fetcher = async (url) => {
  const res = await fetch(url)
  const data = await res.json()

  if (res.status !== 200) {
    throw new Error(data.message)
  }
  return data
}


const Product = ({ product }) => {

  const router = useRouter()
  const { id } = router.query
  let prev = parseInt(id)-1 
  let next = parseInt(id)+1

  if(id == 1) prev = id
  
  const { data, error } = useSWR(
    () => id && `/api/products/${id}`,
    fetcher, { refreshInterval: 2 }
  )

  if (error) return <div>{error.message}</div>
  if (!data) return <div>Loading...</div>

  return (
    <section id="wrapper">

      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <Link href={`/product/${prev}`}>
              <a className="prev">Prev</a> 
            </Link>{' '}
            |{ ' ' }
            <Link href={`/product/${next}`}>
              <a className="next">Next</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="container">

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
                            src={data['Image URLs']} alt=""
                            title="" style={{ width: "100%" }} itemProp="image" />
                        </div>

                      </div>
                    </div>
                  </section>

                </div>
                <div className="col-md-7 product_middle">
                  <h1 className="productpage_title" itemProp="name">{data['Name *']}</h1>
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
                    <div id="product-description-short" itemProp="description" dangerouslySetInnerHTML={{ __html: data['Summary'] }}>
                      {/* PRODUCT SHORT DESCRIPTION dangerouslySetInnerHTML={{ __html: data['Summary']}} */}
                    </div>
                  </div>
                </div>
              </div>
              <section className="row">

                <div className="col-xs-12">
                  <div id="tab-content">
                    <div id="description" role="tabpanel">
                      <strong>LARGE DESCRIPTION:</strong>
                      <div className="product-description" dangerouslySetInnerHTML={{ __html: data['Description'] }}>
                        {/* PRODUCT LARGE DESCRIPTION dangerouslySetInnerHTML={{ __html: data['Description']}} */}
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