import { getPostData } from '../utility/GetPostData';

export default function Home({ post }) {
    return (
        <div>
            <h1>{post.data.title}</h1>
            <div>{post.content}</div>
        </div>
    );
}

export async function getStaticProps() {
    const post = getPostData();
    return {
        props: { post },
    };
}
