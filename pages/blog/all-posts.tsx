import Head from "next/head";
import Alert from "../../components/alert";
import Layout, { siteTitle } from "../../components/layout";

export default function AllPosts() {
    return (
        <Layout home={false}>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            {/* 
                Just to learn how we can inject external script in our project with optmization things.
            <Script
                src="https://connect.facebook.net/en_US/sdk.js"
                strategy='lazyOnload'
                onLoad={() => console.log('Script loaded correctly, window.fb has been populated')}
            /> */}
            <Alert type="success"> 
                <div>Alert with success</div>
            </Alert>
            <Alert type="error"> 
                <div>Error message</div>
            </Alert>
        </Layout>
    );
}