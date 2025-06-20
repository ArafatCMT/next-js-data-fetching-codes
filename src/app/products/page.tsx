import { getProducts } from '@/prisma-db'

type product = {
    id: string,
    title: string,
    price: string,
    description: string
}


export default async function Products() {
    const products: product = await getProducts()
    // console.log(products)
    return (
        <div>
            <h2 style={{ textAlign: 'center', marginBottom: '50px' }}>Products</h2>
            <div>
                {
                    products.map((product) => {
                        return (
                            <div key={product.id}
                                style={{
                                    backgroundColor: '#fff',
                                    padding: '16px',
                                    marginBottom: '16px',
                                    borderRadius: '10px',
                                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                                    border: '1px solid #e0e0e0',
                                    transition: 'box-shadow 0.3s ease-in-out',
                                    cursor: 'default',
                                }}
                            >
                                <h5>Title: {product.title}</h5>
                                <p>Price: {product.price}</p>
                                <p>Description: {product.description}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}