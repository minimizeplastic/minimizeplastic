import React, { Component } from "react";
import "./App.css";
import { cards } from '../../data/products';
import Fuse from 'fuse.js';
import { Footer } from "../Footer";
import { Container } from "../Container";
import { Wrapper } from "../Wrapper";
import { Header } from "../Header";
import { Card } from "../Card";
import { Link } from "../Link/Link";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards,
      searchString: ''
    };
  }

  componentDidMount() {
    const options = {
      shouldSort: true,
      tokenize: true,
      matchAllTokens: true,
      findAllMatches: true,
      threshold: 0.3,
      location: 0,
      distance: 100,
      maxPatternLength: 32,
      minMatchCharLength: 1,
      keys: [
        "productName",
        "shops",
        "productFamily",
        "brand"
    ]
    };

    this.searchIndex = new Fuse(cards, options);
  }

  handleSearch = (searchText) => {
    if(searchText) {
      this.setState({
        cards: this.searchIndex.search(searchText)
      });
    } else {
      this.setState({
        cards
      });
    }
  }

  render() {
    const { cards } = this.state;
    return (
      <Wrapper>
        <Header>
          <div className="header-container">
            <h1 className="header__title">Minimoi Muovi</h1>
            <div className="search-container">
            <label htmlFor="search"></label>
            <input placeholder="hae tästä esim. pavut" type="text" onChange={(event) => this.handleSearch(event.target.value)}/>
            <div className="search"></div>
            </div>
          </div>
        </Header>

        <Container>
          <h2 className="container__title">Löydä tuotteita, joista tulee vähemmän muovia!</h2>

          {cards.map((card) => {
            const { id, img, productName, productFamily, brand, shops} = card
            return (
              <Card key={id}>
                <img className="card__img" src={img} alt={productName} />
                <div className="card__details">
                  <h3 className="product__title">{productName}</h3>
                  <p className="card__family">{productFamily}</p>
                  <p className="card__brand">{brand}</p>
                  <p className="card__brand">{shops&& shops.join(', ')}</p>
                </div>
              </Card>
            );
          })}
          {cards.length === 0 && <p>Ei tuloksia</p>}
        </Container>

        <Footer>
          <p>
            Kerro meille <a href="https://goo.gl/forms/n7MZSDlw2KOSK1b62">palautelomakkeella</a>,
            jos tiedät tuotteita, joista tulee vähemmän muovia.
          </p>
          <p className="footer-text">
            <Link href="https://github.com/minimizeplastic">
              {" "}
              (GitHub){" "}
            </Link>
          </p>
        </Footer>
      </Wrapper>
    );
  }
}

export default App;
