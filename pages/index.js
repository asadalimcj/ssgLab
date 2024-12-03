import { getPostData } from "../utility/GetPostData";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>My Static Site</title>
        <meta name="description" content="This is a sample static site." />
        <meta property="og:title" content="My Static Site" />
        <meta
          property="og:description"
          content="This is a sample static site using 
    Next.js."
        />
      </Head>
      <h1>Welcome to My Static Site</h1>
      <img
        src="https://www.bing.com/images/search?view=detailV2&ccid=FfV2KSeU&id=1656AE84F48A11E8909A7591415EBB02C614FBF0&thid=OIP.FfV2KSeUEkIZjTlQymjt4wHaE8&mediaurl=https%3a%2f%2fcdn.wallpapersafari.com%2f95%2f5%2f37fpTD.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.15f5762927941242198d3950ca68ede3%3frik%3d8PsUxgK7XkGRdQ%26pid%3dImgRaw%26r%3d0&exph=2880&expw=4320&q=sky&simid=607986895541850589&FORM=IRPRST&ck=CB0DB43C59B1A280B9A53CCAE368D243&selectedIndex=1&itb=0"
        alt="Example Image"
        loading="lazy"
      />
    </>
  );
}

export async function getStaticProps() {
  const post = getPostData();
  return {
    props: { post },
  };
}
