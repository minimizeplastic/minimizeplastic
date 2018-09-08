import React, { Component } from "react";
import styled from "styled-components";
import "./App.css";
import { cards } from './data';
import Fuse from 'fuse.js';

const Wrapper = styled.div`
margin:0;
width:100%;
height: 100vh;
`;

const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-flow: column;
  align-items: center;
  grid-gap: 10px;
  background-color: #388E3C;
  color: white;
  padding: 10px;

  @media(max-width:600px){
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 10px;
  }
`;

const Footer = styled.div`
  width:98%;
  border-top: 4px solid  #388E3C;
  padding: 10px;
  margin:20px auto;
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
  margin: 20px;
  min-height: 60vh;
`;

const Card = styled.div`
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: grid;
  grid-template-columns: 150px 1fr;
  grid-gap: 10px;
  align-items: center;
  font-weight: 100;
`;

const Link = styled.a`
  text-decoration: none;
`;


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
            <h2>Löydä tuotteita, joista tulee vähemmän muovia!</h2>
            <div className="search-container">
            <label htmlFor="search"></label>
            <input placeholder="suodataa esim. pavu" type="text" onChange={(event) => this.handleSearch(event.target.value)}/>
            <div className="search"></div>
            </div>
            
          </div>
        </Header>
        <Container>
          
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
<p>Kerro meille tällä lomakkeella, jos tiedät tuotteita, joista tulee vähemmän muovia <a href="https://goo.gl/forms/n7MZSDlw2KOSK1b62">tämän lomakella</a></p>
          <p className="footer-text">
            <Link href="https://github.com/minimizeplastic">
              {" "}
              (github){" "}
            </Link>
          </p>
        </Footer>
      </Wrapper>
    );
  }
}

export default App;
