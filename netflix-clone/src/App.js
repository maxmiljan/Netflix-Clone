import "./App.css";
import Row from "./components/Row";
import extensions from "./API/key";
import Banner from "./components/Banner";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        isLargeRow
        fetchUrl={extensions.fetchNetflixOriginals}
      />
      <Row title="Trending Now" fetchUrl={extensions.fetchTrending} />
      <Row title="Top Rated" fetchUrl={extensions.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={extensions.fetchTopActionMovies} />
      <Row title="Comedy Movies" fetchUrl={extensions.fetchTopComedyMovies} />
      <Row title="Horror Movies" fetchUrl={extensions.fetchTopHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={extensions.fetchTopRomanceMovies} />
      <Row title="Documentarires" fetchUrl={extensions.fetchTopDocumentaries} />
    </div>
  );
}

export default App;
