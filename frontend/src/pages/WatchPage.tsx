import { useParams } from 'react-router-dom';

function WatchPage() {
    const { id } = useParams<{ id: string }>();

    return (
        <div>
        <h1>Watch Page</h1>
        <p>ID: {id}</p>
        </div>
    )
}

export default WatchPage;