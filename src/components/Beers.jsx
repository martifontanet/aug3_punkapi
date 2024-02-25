export default function Beers({ beers }) {
    return (
      <div className="beerList">
        {beers &&
          beers.map((beer) => (
            <div key={beer.id} className="beerCard">
              <img className="beerImage" src={beer.image_url} alt={beer.name} />
              <h3 className="beerTxt name">{beer.name}</h3>
                  <p className="beerTxt tag">{beer.tagline}</p>
              <div className="info">
                <p><i class="material-icons">help_outline</i> More info</p>
                <div className="popup-info">
                  <p className="beerTxt date orange2">First Brewed Date:</p>
                  <p className="beerTxt date">{beer.first_brewed}</p>
                  <p className="beerTxt ingredients orange2">Ingredients:</p>
                  <div className="ingredients">
                  {Object.keys(beer.ingredients).map((ingredientType, index) => (
                    <p className="beerTxt ingredientTxt ">{ingredientType}</p>
                  ))}
                  </div>
                  <p className="beerTxt descr orange2">Descrition:</p>
                  <p className="beerTxt descr">{beer.description}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    );
  }
  