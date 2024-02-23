export default function Beers({ beers }) {
    return (
      <ul className="gif-list">
        {beers &&
          beers.map((beer) => (
            <li key={beer.id}>
                <img src={beer.image_url} />
                <p>{beer.name}</p>
                <p>{beer.first_brewed}</p>
                <p>{beer.tagline}</p>
            </li>
          ))}
      </ul>
    );
  }
  