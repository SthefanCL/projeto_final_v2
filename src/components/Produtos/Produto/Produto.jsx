import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import useStyle from './styles'

const Produto = ({produto}) => {
    const classes = useStyle();
  return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={produto.image} title={produto.name} />
            <CardContent>
                <div className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
                {produto.name}
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
                Tamanho: {produto.size}
            </Typography>
            <Typography gutterBottom variant="h5" component="h2">
                R${produto.price}
            </Typography>

                </div>
                <Typography variant="body2" color='textSecondary'>{produto.description}</Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label="Add to Cart">
                    
                    <AddShoppingCart/>

                </IconButton>
            </CardActions>
        </Card>
  )
}

export default Produto