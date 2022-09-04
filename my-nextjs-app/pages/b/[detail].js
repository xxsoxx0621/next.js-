import {useRouter} from "next/router";
import Layout from "../../components/Layout";
import Card from "../../components/Card";

const Detail = () => {
    const router = useRouter();
    const {posts} = router.query;
    const data = JSON.parse(posts);

    return (
        <Layout>
            <h3 style={{textAlign: "center"}}>title : {data.title}</h3>
            <Card>
                <b>contents:</b>
                <div>{data.body}</div>
            </Card>
        </Layout>
    )
}

export default Detail;