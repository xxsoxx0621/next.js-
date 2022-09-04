import {useRouter} from "next/router";
import Layout from "../../components/Layout";
import Card from "../../components/Card";

const Profile = () => {
    const router = useRouter();
    const {post} = router.query;
    const data = JSON.parse(post);

    return (
        <Layout>
            <h2>{data.username}`s Profile </h2>
            <h4>Hello, my name is {data.username}.</h4>
            <Card>
                <p><b>email : </b>{data.email}</p>
                <p><b>address :</b>{data.address.street} {data.address.suite} {data.address.city}</p>
                <p><b>zipcode :</b>{data.address.zipcode}</p>
                <p><b>phone :</b> {data.phone}</p>
            </Card>
        </Layout>
    )
}

export default Profile;