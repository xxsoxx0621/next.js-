import Layout from "../components/Layout";
import Link from "next/link";

const rowStyle = {
    padding: 20,
    borderBottom: "1px solid #DDD",
};

const Home = (props) => (
    <Layout>
        <h1>Friends List</h1>
        {
            props.profiles.map((profile, index) => (
                <div key={index} style={rowStyle}>
                    <Link href={{
                        pathname: `/p/[profile]`,
                        query: {post: JSON.stringify(profile)},
                    }}
                          as={`/p/${profile.name}`}
                          passHref>
                        <a>Go to {profile.username}`s profile</a>
                    </Link>
                </div>
            ))
        }
    </Layout>
);

Home.getInitialProps = async function () {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    return {
        profiles: data
    };
};

export default Home;
