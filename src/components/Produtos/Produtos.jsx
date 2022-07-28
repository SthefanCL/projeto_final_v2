import React from 'react';
import { Grid } from '@material-ui/core';

import Produto from './Produto/Produto';

const produtos = [
    {id: 1, name: 'Tenis', description: 'Tenis de correr', size: '38', price: '5', image :''},
    {id: 2, name: 'Tenis', description: 'Tenis de correr', size: '38', price: '5'},
    {id: 3, name: 'Tenis', description: 'Tenis de correr', size: '38', price: '5'},
    {id: 4, name: 'Tenis', description: 'Tenis de correr', size: '38', price: '5'},
    {id: 5, name: 'Tenis', description: 'Tenis de correr', size: '38', price: '5'},
    {id: 6, name: 'Tenis', description: 'Tenis de correr', size: '38', price: '5'},
    {id: 7, name: 'Tenis', description: 'Tenis de correr', size: '38', price: '5'},
    {id: 8, name: 'Tenis', description: 'Tenis de correr', size: '38', price: '5'},
];


const Produtos = () => {
    return (

    <main>
        <Grid container justify="center" spacing={5}>
            {produtos.map((produto) => (
                <Grid item key={produto.id} xs={10} sm={5} md={4} lg={3}>
                    <Produto produto={produto} />
                </Grid>
            ))}
        </Grid>
    </main>
    )
}

export default Produtos;