import Head from 'next/head';

const titleDefault = 'Bar Business';
const description = 'E-Commerce Website for a Bar Business';
const author = 'Phan Huy Manh';

export const BusisnessConfig = {
  address: 'ktx khu A - ĐHQG, đường Linh Trung, Thủ Đức',
};

export default function Header({ title = titleDefault }) {
  return (
    <Head>
      {/* Recommended Meta Tags */}
      <meta charSet="utf-8" />
      <meta name="language" content="english" />
      <meta httpEquiv="content-type" content="text/html" />
      <meta name="author" content={author} />
      <meta name="designer" content={author} />
      <meta name="publisher" content={author} />

      {/* Search Engine Optimization Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="" />
      <meta name="distribution" content="web" />
    </Head>
  );
}
