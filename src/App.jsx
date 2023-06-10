import Stories from "./Stories";
import SearchForm from "./SearchForm";
import Pagination from "./Pagination";
export default function App() {
  return (
    <main className="sm:w-[80%] w-[90%] mx-auto my-3 sm:mt-7 mb-28">
      <SearchForm />
      <Pagination />
      <Stories />
    </main>
  );
}
