import React, { Component } from 'react';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import './App.css';

class App extends Component {
  render() {
    return (
      <div style={{height: '300px', position: 'relative'}}>
    <Layout style={{background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover'}}>
        <Header transparent title="Menu" style={{color: 'white'}}>
            <Navigation>
                <a href="#">Accueil</a>
                <a href="#">A Propos</a>
                <a href="#">Projet</a>
                <a href="#">Contact</a>
            </Navigation>
        </Header>
        <Drawer title="Menu">
            <Navigation>
                <a href="#">Accueil</a>
                <a href="#">A Propos</a>
                <a href="#">Projet</a>
                <a href="#">Contact</a>
            </Navigation>
        </Drawer>
        <Content />
    </Layout>
</div>
    );
  }
}

export default App;
