// Definición clase constructora.
class ProductManager {
    constructor() {
        this.products = [];
    }

    // Método que retorna el array 'products'.
    getProducts = () => {
        return this.products;
    };

    // Método que agrega los productos con sus correspondientes variables.
    addProduct = (title, description, price, thumbnail, code, stock) => {
        const product = {
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
            products: []
        };

        // Estructura que define el número de 'id' del producto.
        if (this.products.length === 0) {
            product.id = 1;
        } else {
            product.id = this.products[this.products.length - 1].id + 1;
        }

        this.products.push(product);
    };

    // Método que busca determinado producto según su 'id'.
    getProductById = (idProduct) => {
        const productIndex = this.products.findIndex((product) => product.id === idProduct);
        this.products[productIndex].products.push(idProduct);
    };
}

const productInput = new ProductManager();

productInput.addProduct('Ají Cacho de Cabra', 'Semilla de ají del sur de Chile, principalmente usado para la elaboración de merkén.', 2000, 'https://images.pexels.com/photos/4084633/pexels-photo-4084633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'ajiPqt', 23);

productInput.addProduct('Romero', 'Semilla de romero, hierba para cocina usada en casi todo el mundo', 1000, 'https://images.pexels.com/photos/135168/pexels-photo-135168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'rmrPqt', 34);

productInput.addProduct('Albahaca', 'Semilla de albahaca, hierba para cocina usada en casi todo el mundo', 3000, 'https://images.pexels.com/photos/1437424/pexels-photo-1437424.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', 'albPqt', 14);

productInput.getProductById(1);
productInput.getProductById(2);
productInput.getProductById(3);

console.log(productInput.getProducts());