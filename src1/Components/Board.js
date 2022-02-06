import '../index.css';
export default function Board() {
    return <div className="board">
        This hook makes it super easy to subscribe to data in your Firestore database without having to worry
        about state management. Instead of calling Firestore's query.onSnapshot() method you simply pass a
        query to useFirestoreQuery() and you get back everything you need including status data and error.
        Your component will re-render when data changes and your subscription will be automatically removed
        when the component unmounts. Our example even supports dependent queries where you can wait on needed
        data by passing a falsy value to the hook. Read through the recipe and comments below to see how it works.
    </div>
}