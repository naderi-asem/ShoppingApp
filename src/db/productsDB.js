// use nanoid to create id for component key. 
//It quickly generates short non-sequential url-friendly unique ids.
import { nanoid } from 'nanoid';

const idCreator = (text) => ({
    completed: false,
    id: nanoid(),
    text
})

export const productsData = [
    {
        id: idCreator().id,
        title: "this product number is 1",
        quantity: 1,
        description: "this product number is 1",
        availableSize: ["S", "X", "L", "M", "XL", "XXL"],
        price: 100,
        isFreeShipping: true
    },
    {
        id: idCreator().id,
        title: "this product number is 2",
        quantity: 1,
        description: "this product number is 2",
        availableSize: ["S", "X", "L", "M", "XL"],
        price: 110,
        isFreeShipping: true
    },
    {
        id: idCreator().id,
        title: "this product number is 3",
        quantity: 1,
        description: "this product number is 3",
        availableSize: [ "X", "L", "XXL"],
        price: 90,
        isFreeShipping: true
    },
    {
        id: idCreator().id,
        title: "this product number is 4",
        quantity: 1,
        description: "this product number is 4",
        availableSize: ["M", "XL"],
        price: 120,
        isFreeShipping: true
    },
    {
        id: idCreator().id,
        title: "this product number is 5",
        quantity: 1,
        description: "this product number is 5",
        availableSize: ["S", "X", "L", "M", "XL"],
        price: 80,
        isFreeShipping: true
    },
    {
        id: idCreator().id,
        title: "this product number is 6",
        quantity: 1,
        description: "this product number is 6",
        availableSize: ["S", "M", "XL"],
        price: 130,
        isFreeShipping: true
    },
    {
        id: idCreator().id,
        title: "this product number is 7",
        quantity: 1,
        description: "this product number is 7",
        availableSize: ["S", "X", "L", "M"],
        price: 70,
        isFreeShipping: true,
        discount: <p>discount is 15%</p>
    },
    {
        id: idCreator().id,
        title: "this product number is 8",
        quantity: 1,
        description: "this product number is 8",
        availableSize: ["S", "XXL"],
        price: 140,
        isFreeShipping: true
    },
    {
        id: idCreator().id,
        title: "this product number is 9",
        quantity: 1,
        description: "this product number is 9",
        availableSize: ["M", "XL", "XXL"],
        price: 60,
        isFreeShipping: true
    },
    {
        id: idCreator().id,
        title: "this product number is 10",
        quantity: 1,
        description: "this product number is 10",
        availableSize: ["L", "M", "XL", "XXL"],
        price: 150,
        isFreeShipping: true
    }
]