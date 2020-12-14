import Document, { Head, Html, Main, NextScript } from 'next/document'


export default class MyDocument extends Document {
  render () {
    return (
      <Html>
        <Head>

        </Head>
        <body>
          <div className='root'>
            <Main/>
          </div>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"/>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"/>
          <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"/>
          <NextScript />
        </body>
      </Html>
    )
  }
}