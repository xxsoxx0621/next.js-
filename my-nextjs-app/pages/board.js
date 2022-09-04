import Layout from "../components/Layout";
import Link from "next/link";

const rowStyle = {
    padding: 20,
    borderBottom: "1px solid #DDD",
};

const Board = (props) => (
    <Layout>
        <h1>Board</h1>
        {
            props.posts.map((item, index) => (
                <div key={index} style={rowStyle}>
                    <Link
                        href={{
                            pathname: `/b/[detail]`,
                            query: {posts: JSON.stringify(item)},
                        }}
                        as={`/b/${item.id}`}
                        passHref>
                        <a> {index + 1} : {item.title}</a>
                    </Link>
                </div>
            ))}
    </Layout>
);

Board.getInitialProps = async function () {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    return {
        posts: data
    };
};

export default Board;