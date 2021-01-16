import {Author, getAuthors} from './../services/author';
import Layout from './../components/layout';

const Page = (props) => {
    console.info(props.authors);

    const handleClick = async (e) => {
        console.info('hello');
    }

    return (
        <Layout>
            <h1>Test</h1>

            <button onClick={handleClick} type="button">Hello</button>

            {props.authors && props.authors.map((author: Author) => (
                <div key={author.id}>{author.name} ({author.created.toLocaleDateString()})</div>
            ))}
        </Layout>
    )
}

export async function getStaticProps() {
    const authors = await getAuthors();

    return {
        props: {
            authors: authors
        }
    }
}

export default Page;
