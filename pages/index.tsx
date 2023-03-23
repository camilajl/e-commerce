import React from "react";
// import styles from '../styles/Home.module.css'
import Products from '../components/Products'
import Layout from './layout/Layout'
import initialState from "../src/initialState";

export default function App() {
  return (
    <Layout>
    <div > 
        <h1>Hello world </h1>
     
    </div>

    {/* <Products products  = {initialState.products}/> */}
    </Layout>
  )

 
}

