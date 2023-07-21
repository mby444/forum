import Search from "../../components/Search";
import Thread from "../../components/Thread";

export default function Body() {
  return (
    <div className="body-container">
        <div className="search-container">
          <Search />
        </div>
        <div className="thread-container">
          <Thread />
        </div>
    </div>
  );
}
