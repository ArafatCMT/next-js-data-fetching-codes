import { addProduct } from "@/prisma-db";

export async function POST(request:Request) {
    const postData = await request.json();
    console.log(postData);
    const {title, price, description} = postData;
    const newProduct = await addProduct(title, Number(price), description);
    return new Response(JSON.stringify({
        message:"Product added successfully!",
        product:newProduct
    }),{
        headers:{"Content-Type":"application/json"}
    })
}