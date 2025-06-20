import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const AddProducts = async () => {
    const ProductCount = await prisma.product.count();

    if (ProductCount === 0) {
        await prisma.product.createMany({
            data: [
                { title: 'Product 1', price: 450, description: 'description 1' },
                { title: 'Product 2', price: 850, description: 'description 2' },
                { title: 'Product 3', price: 500, description: 'description 3' },
            ]
        });
    };
};

AddProducts();

export async function getProducts() {
    await new Promise((reslove) => setTimeout(reslove, 1000))
    return prisma.product.findMany();
};

export async function getProduct(id: number) {
    await new Promise((reslove) => setTimeout(reslove, 1000))
    return prisma.product.findUnique({
        where: { id }
    })
};

export async function addProduct(title: string, price: number, description: string) {
    await new Promise((reslove) => setTimeout(reslove, 1000))
    return prisma.product.create({
        data: { title, price, description }
    });
};

export async function updataProduct(id: number, title: string, price: number, description: string) {
    await new Promise((reslove) => setTimeout(reslove, 1000))
    return prisma.product.update({
        where: { id },
        data: { title, price, description }
    })
};

export async function deleteProduct(id: number) {
    await new Promise((reslove) => setTimeout(reslove, 1000))

    return prisma.product.delete({
        where: { id }
    })
}