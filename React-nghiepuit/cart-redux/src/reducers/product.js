var initialState = [
    {
        id: 1,
        name: 'iPhone 7 Plus',
        description: 'Sản phẩm do Apple sản xuất',
        price: 300,
        inventory: 10
    },
    {
        id: 2,
        name: 'iPhone 8 Plus',
        description: 'Sản phẩm do Apple sản xuất',
        price: 400,
        inventory: 15
    },
    {
        id: 3,
        name: 'iPhone XS Max',
        description: 'Sản phẩm do Apple sản xuất',
        price: 500,
        inventory: 20
    }
];

const product = (state = initialState, action) => {
    switch(action.type) {
        default: return [...state]
    }
}

export default product;