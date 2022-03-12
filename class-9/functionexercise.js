const product = {
    name: 'T-Shirt',
    price: '$10',
    showInfo() {
        return `${this.name}-${this.price}`
    }
}

const info = product.showInfo()

console.log(info)

const product2 = ['t-shirt' , 10 , 0 , true];

const [name, price , ...others] = product2

console.log(name, price, others)