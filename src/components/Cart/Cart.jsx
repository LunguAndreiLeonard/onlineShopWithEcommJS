import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core'
import { Link } from 'react-router-dom';
import useStyles from './styles'
import CartItem from './CartItem/CartItem';

const Cart = ({ cart, handleUpdateCartQuantity, handleRemoveFromCart, handleEmptyCart }) => {

    const classes = useStyles();

    const EmptyCart = () => (
        <Typography variant="subtitle1">Nu ai produse adaugate in cos!
            <Link to="/" className={classes.link}>Adauga produse</Link>
        </Typography>
    );

    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <CartItem className={classes.background} item={item} handleUpdateCartQuantity={handleUpdateCartQuantity} handleRemoveFromCart={handleRemoveFromCart} />
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant='h4'>
                    Subtotal : {cart.subtotal.formatted_with_symbol}
                </Typography>
                <div>
                    <Button className={classes.emptyButton} size='large' type='button' variant='contained' color='secondary' onClick={handleEmptyCart}>Goleste cosul de cumparaturi</Button>
                    <Button component={Link} to="/checkout" className={classes.checkoutButton} size='large' type='button' variant='contained' color='primary'>Cumpara!</Button>

                </div>
            </div>
        </>
    )
    if (!cart.line_items) return 'Loading...'
    return (
        <Container className={classes.background}>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant='h3'>Cosul tau de cumparaturi!</Typography>
            {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
        </Container>
    )
}

export default Cart