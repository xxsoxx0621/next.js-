import Layout from "../components/Layout";
import Link from "next/link";

const ProfileLink = props => (
    <div>
        <Link href={`/p/[profile]`} as={`/p/${props.profile}`}>
            <a>Go to {props.profile}`s profile</a>
        </Link>
    </div>
);

const Home = (props) => (
    <Layout>
        <h1>Friends List {props.profiles[0]}</h1>
        {
            props.profiles.map((profile, index) => (
                <ProfileLink key={index} profile={profile}/>
            ))
        }
    </Layout>
);

Home.getInitialProps = async function () {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();

    return {
        profiles: data.map(item => item.name)
    };
};
export default Home;
