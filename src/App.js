import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Components/HomePage/HomePage';
import Contacts from './Components/ContactPage/ContactPage';
import ProductMain from './Components/ProductsPage/ProductsPage';
import ProductProfile from './Components/ProductProfile/ProductProfile';
import React from 'react';

class App extends React.Component{
    
    state = {
        
    User: {name:'Mark'},

   products: [
    {
        id: "001",
        name: "Camera",
        description: "This photographer's friend will help you capture your best moments.",
        icon: "📷",
        category: "electronics",
        technicalSpecs: "18 megapixels, 4K video recording at 60fps."
    },
    {
        id: "002",
        name: "Telescope",
        description: "Gaze into the cosmos and its many stars, planets and moons. They're far!",
        icon: "🔭",
        category: "gadgets",
        technicalSpecs: "5.1 inch aperture, fast f/5 focal ratio."
    },
    {
        id: "003",
        name: "Television",
        description: "Need to kick back and relax? Then this is the big glowing box for you.",
        icon: "📺",
        category: "electronics",
        technicalSpecs: "8K UHD resolution or 4K at 120Hz, 3 HDMI 2.1 ports."
    },
    {
        id: "004",
        name: "Microphone",
        description: "Make yourself heard in brilliant studio quality. Pairs well with a camera.",
        icon: "🎙",
        category: "electronics",
        technicalSpecs: "Cardioid polar pattern, 16 ohm impedance monitor output."
    },
    {
        id: "005",
        name: "Magnet",
        description: "Discover the laws of attraction with this polarized piece of metal.",
        icon: "🧲",
        category: "gadgets",
        technicalSpecs: "Solid horseshoe shape, 8x8in (20x20cm), 10oz (290 grams)."
    },
]
}


    render(){
       const {products} = this.state;
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={() => <Home Username={this.state.User.name}/>}/>
            <Route path="/contact" component={() => <Contacts Username={this.state.User.name}/>}/>
            <Route Path="/products" exact render={(routerProps) => <ProductMain products={products} {...routerProps}/>}/>
            <Route path="/products/:productId" render={(routerProps) => <ProductProfile products={products} {...routerProps} />} /> 
        </Switch>
        </BrowserRouter>
    );
}}

export default App;
