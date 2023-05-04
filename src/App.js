import productos from './mocks/products.json'
import { Products } from './components/Products'

function App () {
  return (
    <Products products={productos.products} />
  )
}
export default App
