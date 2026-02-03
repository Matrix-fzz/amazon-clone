import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { useSearch } from '../context/SearchContext';
import '../styles/pages/index.css';

const Home = () => {
  const { searchQuery } = useSearch();

  const filteredProducts = products.filter((product) => {
    const searchTerm = searchQuery.toLowerCase();
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm) ||
      product.keywords.some((keyword) => keyword.toLowerCase().includes(searchTerm));
    return matchesSearch;
  });

  return (
    <div className="home-page">
      <div className="products-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <div className="no-results">No products found for "{searchQuery}"</div>
        )}
      </div>
    </div>
  );
};

export default Home;
