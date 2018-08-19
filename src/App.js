import React, { Component } from "react";
import styled from "styled-components";
import "./App.css";

const Wrapper = styled.div`
margin:0;
width:100%;
height: 100vh;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        {
          brand: "GoGreen",
          productFamily: "Pavut",
          productName: "Suuret valkoiset luomupavut",
          shops: "S-market, K-market",
          img: "http://www.gogreen.fi/Handlers/TransformedImage.ashx?w=377&h=406&url=%2fGlobal%2fprodukter%2feko-stora-vita-bonor-285g-2.png"
        },
        {
          brand: "GoGreen",
          productFamily: "Pavut",
          productName: "Luomu kidneypavut",
          shops: "S-market, K-market",
          img: "http://www.gogreen.fi/Handlers/TransformedImage.ashx?w=377&h=406&url=%2fGlobal%2fprodukter%2feko-kidneybonor-285g-ny.png"
        },
        {
          brand: "GoGreen",
          productFamily: "Pavut",
          productName: "Luomu papumix",
          shops: "S-market, K-market",
          img: "http://www.gogreen.fi/Handlers/TransformedImage.ashx?w=377&h=406&url=%2fGlobal%2fprodukter%2feko-bonmix-285g-ny.png"
        },
        {
          brand: "GoGreen",
          productFamily: "Pavut",
          productName: "Mustapavut",
          shops: "S-market, K-market",
          img: "http://www.gogreen.fi/Handlers/TransformedImage.ashx?w=377&h=406&url=%2fGlobal%2fprodukter%2fsvarta-bonor-285g-ny2.png"
        },
        {
          brand: "GoGreen",
          productFamily: "Pavut",
          productName: "Mungpavut (kuivat)",
          shops: "S-market, K-market",
          img: "http://www.gogreen.fi/Handlers/TransformedImage.ashx?w=377&h=406&url=%2fGlobal%2fprodukter%2fmungbonor-ny.png"
        },
        {
          brand: "GoGreen",
          productFamily: "Pavut",
          productName: "Ruskeita papuja",
          shops: "S-market, K-market",
          img: "http://www.gogreen.fi/Handlers/TransformedImage.ashx?w=377&h=406&url=%2fGlobal%2fprodukter%2fbruna-bonor-ny.png"
        },
        {
          brand: "GoGreen",
          productFamily: "Linssit",
          productName: "Vihreät linssit",
          shops: "S-market, K-market",
          img: "http://www.gogreen.fi/Handlers/TransformedImage.ashx?w=377&h=406&url=%2fGlobal%2fprodukter%2fgrona-linser-285g-ny2.png"
        },
        {
          brand: "GoGreen",
          productFamily: "Linssit",
          productName: "Vihreät linssit (kuivat)",
          shops: "S-market, K-market",
          img: "http://www.gogreen.fi/Handlers/TransformedImage.ashx?w=377&h=406&url=%2fGlobal%2fprodukter%2fgrona-linser-ny.png"
        },
        {
          brand: "GoGreen",
          productFamily: "Linssit",
          productName: "Punaiset linssit",
          shops: "S-market, K-market",
          img: "http://www.gogreen.fi/Handlers/TransformedImage.ashx?w=377&h=406&url=%2fGlobal%2fprodukter%2froda-linser-290g-ny2.png"
        },
        {
          brand: "GoGreen",
          productFamily: "Herneet",
          productName: "Luomu kikherneet",
          shops: "S-market, K-market",
          img: "http://www.gogreen.fi/Handlers/TransformedImage.ashx?w=377&h=406&url=%2fGlobal%2fprodukter%2feko-kikartor-290g-ny.png"
        },
        {
          brand: "GoGreen",
          productFamily: "Herneet",
          productName: "Vihreät luomuherneet",
          shops: "S-market, K-market",
          img: "http://www.gogreen.fi/Handlers/TransformedImage.ashx?w=377&h=406&url=%2fGlobal%2fprodukter%2feko-grona-arter-ny.png"
        },
        {
          brand: "GoGreen",
          productFamily: "Herneet",
          productName: "Kikherneet (kuivat)",
          shops: "S-market, K-market",
          img: "http://www.gogreen.fi/Handlers/TransformedImage.ashx?w=377&h=406&url=%2fGlobal%2fprodukter%2fkikarter-ny.png"
        },
        {
          brand: "GoGreen",
          productFamily: "Siemenet",
          productName: "Auringonkukan siemenet",
          shops: "S-market, K-market",
          img: "http://www.gogreen.fi/Handlers/TransformedImage.ashx?w=377&h=406&url=%2fGlobal%2fprodukter%2fsolroskarnor-ny.png"
        },
        {
          brand: "GoGreen",
          productFamily: "Siemenet",
          productName: "Pellavansiemenet (kokonaisina)",
          shops: "S-market, K-market",
          img: "http://www.gogreen.fi/Handlers/TransformedImage.ashx?w=377&h=406&url=%2fGlobal%2fprodukter%2flinfro-ny.png"
        },
        {
          brand: "GoGreen",
          productFamily: "Siemenet",
          productName: "Kuorettomat seesaminsiemenet",
          shops: "S-market, K-market",
          img: "http://www.gogreen.fi/Handlers/TransformedImage.ashx?w=377&h=406&url=%2fGlobal%2fprodukter%2fskalat-sesamfro-ny.png"
        },
        {
          brand: "GoGreen",
          productFamily: "Siemenet",
          productName: "Kuorimattomat seesaminsiemenet",
          shops: "S-market, K-market",
          img: "http://www.gogreen.fi/Handlers/TransformedImage.ashx?w=377&h=406&url=%2fGlobal%2fprodukter%2foskalat-sesamfro-ny.png"
        },
        {
          brand: "GoGreen",
          productFamily: "Siemenet",
          productName: "Rouhitut pellavansiemenet",
          shops: "S-market, K-market",
          img: "http://www.gogreen.fi/Handlers/TransformedImage.ashx?w=377&h=406&url=%2fGlobal%2fprodukter%2fkrossat-linsfro-260g-ny.png"
        },
        {
          brand: "GoGreen",
          productFamily: "Vihannekset",
          productName: "Vihreät luomuherneet",
          shops: "S-market, K-market",
          img: "http://www.gogreen.fi/Handlers/TransformedImage.ashx?w=377&h=406&url=%2fGlobal%2fprodukter%2feko-grona-arter-ny.png"
        },
        {
          brand: "GoGreen",
          productFamily: "Vihannekset",
          productName: "Luomu tomaattimurska",
          shops: "S-market, K-market",
          img: "http://www.gogreen.fi/Handlers/TransformedImage.ashx?w=377&h=406&url=%2fGlobal%2fprodukter%2feko-krossade-tomater-300g-ny.png"
        },
        {
          brand: "GoGreen",
          productFamily: "Vihannekset",
          productName: "Luomumaissi",
          shops: "S-market, K-market",
          img: "http://www.gogreen.fi/Handlers/TransformedImage.ashx?w=377&h=406&url=%2fGlobal%2fprodukter%2feko-majskorn-280g-ny.png"
        },
        {
          brand: "GoGreen",
          productFamily: "Salsakastikkeet",
          productName: "Salsa Original",
          shops: "S-market, K-market",
          img: "http://www.gogreen.fi/Handlers/TransformedImage.ashx?w=377&h=406&url=%2fGlobal%2fprodukter%2fprodukt%2fsalsa-original-ny.png"
        },
        {
          brand: "GoGreen",
          productFamily: "Salsakastikkeet",
          productName: "Chili sin Carne",
          shops: "S-market, K-market",
          img: "http://www.gogreen.fi/Handlers/TransformedImage.ashx?w=377&h=406&url=%2fGlobal%2fprodukter%2fprodukt%2fchili-sin-carne-ny.png"
        },
        {
          brand: "GoGreen",
          productFamily: "Ruokajyvät ja suurimot",
          productName: "Bulgur-vehnää",
          shops: "S-market, K-market",
          img: "http://www.gogreen.fi/Handlers/TransformedImage.ashx?w=377&h=406&url=%2fGlobal%2fprodukter%2fbulgur-ny.png"
        },
        {
          brand: "GoGreen",
          productFamily: "Ruokajyvät ja suurimot",
          productName: "Couscous (täysjyvä)",
          shops: "S-market, K-market",
          img: "http://www.gogreen.fi/Handlers/TransformedImage.ashx?w=377&h=406&url=%2fGlobal%2fprodukter%2ffullkorns-couscous-ny.png"
        },
        {
          brand: "GoGreen",
          productFamily: "Ruokajyvät ja suurimot",
          productName: "Kokonaisia tattarisuurimoita",
          shops: "S-market, K-market",
          img: "http://www.gogreen.fi/Handlers/TransformedImage.ashx?w=377&h=406&url=%2fGlobal%2fprodukter%2fhelt-bovete-ny.png"
        },
        {
          brand: "GoGreen",
          productFamily: "Ruokajyvät ja suurimot",
          productName: "Kvinoa",
          shops: "S-market, K-market",
          img: "http://www.gogreen.fi/Handlers/TransformedImage.ashx?w=377&h=406&url=%2fGlobal%2fprodukter%2fquinoa-ny.png"
        },
        {
          brand: "GoGreen",
          productFamily: "Ruokajyvät ja suurimot",
          productName: "Ohralisukkeet",
          shops: "S-market, K-market",
          img: "http://www.gogreen.fi/Handlers/TransformedImage.ashx?w=377&h=406&url=%2fGlobal%2fprodukter%2fkorngryn-ny.png"
        },
      ]
    };
  }
  render() {
    return (
      <Wrapper>
        <div className="header">
          <div className="header-container">
            <h2>Plastic-Free</h2>
            <div className="search-container">
            <label htmlFor="search"></label>
            <input type="text" id="search"/>
            <button className="search"></button>
            </div>
            
          </div>
          <button className="menu__item">Home</button>
          <button className="menu__item">About</button>
          <button className="menu__item">Info</button>
        </div>
        <div className="container">
          {this.state.cards.map((card,i) => {
            return (
              <div className="card" key={i}>
                <img className="card__img" src={card.img} alt={card.productName} />
                <div className="card__details">
                  <h3 className="product__title">{card.productName}</h3>
                  <p className="card__family">{card.productFamily}</p>
                  <p className="card__brand">{card.brand}</p>
                </div>
              </div>
            );
          })}
        </div>
        <footer className="footer">
          <p className="footer-text">
            Plastic-Free is a free and open source{" "}
            <a href="https://github.com/niloomotita" className="link">
              {" "}
              (github){" "}
            </a>
            service that helps you pick plastic-free packaging while shopping
            <a
              href="https://github.com/niloomotita/"
              target="blank"
              className="link"
            >
              {" "}
              Niloo
            </a>{" "}
            and{" "}
            <a href="https://github.com/omidfi" target="blank" className="link">
              Omid.
            </a>{" "}
          </p>
        </footer>
      </Wrapper>
    );
  }
}

export default App;
