export default function Products() {
    const items = ['a1','b2','c3'];
    return (
        <main style={{padding:24}}>
            <h1>Products</h1>
            <ul>{items.map(id => <li key={id}><a href={`/app/products/${id}/`}>{id}</a></li>)}</ul>
        </main>
    );
}