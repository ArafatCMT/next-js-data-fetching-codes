'use client'

import { useRouter } from "next/navigation"
import { useState, ChangeEvent, FormEvent } from "react"

export default function AddProduct() {
    const router = useRouter();
    const [formData, setFormData] = useState({
        title: '',
        price: '',
        description: ''
    })
    const [error,setError] = useState('');
    const [loading,setLoading] = useState(false);

    const handleChange = async (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = event.target;
        // console.log(event.target)
        // console.log(name,value)
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        console.log('handleSubmit')
        setLoading(true)
        try {
            const response = await fetch('/add-product/api',{
                method:"POST",
                headers:{"Content-Type":"applicaton/json"},
                body:JSON.stringify(formData)
            })
            if(!response.ok){
                throw new Error('Something went wrong!')
            }
            router.push('/products');
        }
        catch (err) {
            if(err instanceof Error){
                console.log(err.message);
                setError(err.message)
            }
        }
        finally {
            setLoading(false)
        }
    }

    return (
        <div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <form
                    onSubmit={handleSubmit}
                    style={{
                        backgroundColor: "#ffffff",
                        padding: "30px",
                        borderRadius: "10px",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        width: "350px",
                    }}
                >
                    <h2 style={{ textAlign: 'center', marginBottom: "50px" }}>Create Product</h2>
                    
                    <div style={{ marginBottom: "15px" }}>
                        <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
                            Title
                        </label>
                        <input
                            type="text"
                            value={formData.title}
                            name="title"
                            onChange={handleChange}
                            style={{
                                width: "100%",
                                padding: "8px",
                                border: "1px solid #ccc",
                                borderRadius: "5px",
                            }}
                        />
                    </div>

                    <div style={{ marginBottom: "15px" }}>
                        <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
                            Price
                        </label>
                        <input
                            type="text"
                            value={formData.price}
                            name="price"
                            onChange={handleChange}
                            style={{
                                width: "100%",
                                padding: "8px",
                                border: "1px solid #ccc",
                                borderRadius: "5px",
                            }}
                        />
                    </div>

                    <div style={{ marginBottom: "20px" }}>
                        <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
                            Description
                        </label>
                        <textarea
                            value={formData.description}
                            name="description"
                            onChange={handleChange}
                            // rows="3"
                            style={{
                                width: "100%",
                                padding: "8px",
                                border: "1px solid #ccc",
                                borderRadius: "5px",
                            }}
                        ></textarea>
                        {error && <p style={{textAlign:"center", color:"red"}}>{error}</p>}
                    </div>

                    <button
                        type="submit"
                        style={{
                            width: "100%",
                            padding: "10px",
                            backgroundColor: "#4f46e5",
                            color: "#fff",
                            border: "none",
                            borderRadius: "5px",
                            fontWeight: "bold",
                            cursor: "pointer",
                        }}
                    >
                        {loading?"Submitting...":"Submit"}
                    </button>
                </form>
            </div>

        </div>
    )
}