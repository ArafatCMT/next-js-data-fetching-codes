'use server'
import { addProduct } from "@/prisma-db";
import { redirect } from "next/navigation";

type Errors = {
    title: string,
    price: string,
    description: string
};
export type FormState = {
    errors: Errors
};


export async function AddProductHandler(prevState:FormData, formData: FormData) {
    
    const title = formData.get('title') as string;
    const price = formData.get('price') as string;
    const description = formData.get('description') as string;

    const errors: Errors = {};

    if (!title) {
        errors.title = 'Title is required';
    }
    if (!price) {
        errors.price = "Price is required"
    };
    if (!description) {
        errors.description = "Description is required"
    }

    if (Object.keys(errors).length > 0) {
        // console.log('console.log :-', errors)
        return { errors }
    }
    
    await addProduct(title, Number(price), description);
    redirect('/products')
}