import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link'

import useSWR from 'swr'

import dynamic from 'next/dynamic'
const TextEditor = dynamic(import('../../components/texteditor/TextEditor'), {
  ssr: false
})

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
  const [summary, setSummary] = useState([''])
  const [description, setDescription] = useState([''])
  const prev = (id == 1) ? 138 : parseInt(id) - 1
  const next = (id == 138) ? 0 : parseInt(id) + 1

  const { data, error } = useSWR(
    () => id && `/api/products/${id}`,
    fetcher, { refreshInterval: 2 }
  )


  useEffect(() => {

    if (data) {
      setSummary(data['Summary'])
      setDescription(data['Description'])
    }

  }, [data])

  function onChangeSummary(code) {
    setSummary(code);
  }

  function onChangeDescription(code) {
    setDescription(code);
  }


  if (error) return <div>{error.message}</div>
  if (!data) return <div>Loading...</div>

  return (
    <section id="wrapper">

      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-right">
            <h1>Producto: {id}</h1>{' '}
            <Link href={`/product/${prev}`}>
              <a className="prev">Prev</a>
            </Link>{' '}
            |{' '}
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
                          <span>$ {Math.ceil((parseInt(data['Price tax excluded'])))}</span>
                        </div>
                      </div>
                      <p><strong>Impuestos excluidos</strong></p>

                      <div className="product-price h5 ">
                        <div className="current-price">
                          <span>$ {Math.ceil((parseInt(data['Price tax excluded']) * 1.19))}</span>
                        </div>
                      </div>
                      <p><strong>Impuestos incluidos</strong></p>

                      <p><strong>Manufacturer:</strong> {data['Manufacturer']}</p>
                      <p><strong>Quantity:</strong> {data['Quantity']}</p>
                      <strong>SHORT DESCRIPTION:</strong>
                    </div>
                    <div id="product-description-short" itemProp="description" dangerouslySetInnerHTML={{ __html: summary }}>
                      {/* PRODUCT SHORT DESCRIPTION dangerouslySetInnerHTML={{ __html: summary}} */}
                    </div>
                    {/* <TextEditor
                      mode='html'
                      theme="monokai"
                      onChange={onChangeSummary}
                      name={`summary-${id}`}
                      value={summary}
                      height='200px'
                    /> */}
                  </div>
                </div>
              </div>
              <section className="row">

                <div className="col-xs-12">
                  <div id="tab-content">
                    <div id="description" role="tabpanel">
                      <strong>LARGE DESCRIPTION:</strong>
                      <div className="product-description" dangerouslySetInnerHTML={{ __html: description }}>
                        {/* PRODUCT LARGE DESCRIPTION dangerouslySetInnerHTML={{ __html: description}} */}
                      </div>
                      {/* <TextEditor
                        mode='html'
                        theme="monokai"
                        onChange={onChangeDescription}
                        name={`description-${id}`}
                        value={description}
                        height='800px'
                      /> */}

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