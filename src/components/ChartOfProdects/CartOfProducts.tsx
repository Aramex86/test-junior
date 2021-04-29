import React, { useContext, useEffect, useState } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { Link } from 'react-router-dom';
import { ProductsContext } from 'Context';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    table: {
      minWidth: 650,
    },
    button: {
      background: '#55f555b5',
      color: '#fff',
      minWidth: 30,
      height: 30,
      fontSize: 12,
      '&:hover': {
        color: '#000',
      },
    },
    btnRemove: {
      background: '#ff0000a6',
      margin: 10,
    },
    noItems: {
      textAlign: 'center',
    },
  }),
);

const ChartOfProducts = () => {
  const classes = useStyles();
  const items = useContext(ProductsContext);

  const { cartItems, removeItem } = items;

  const [qty, setQty] = useState<number>();

  const addQty = (id: number) => {
    cartItems.find((item) => {
      if (item.id === id) {
        setQty((item['qty'] += 1));
      }
    });
  };

  const removeDuplicates = cartItems.filter((item, index) => cartItems.indexOf(item) === index);

  return (
    <>
      <Link to="/">
        <Button variant="contained" color="primary">
          Back
        </Button>
      </Link>
      <TableContainer component={Paper}>
        <Table className={classes.table} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell sortDirection="desc">Categogy</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">Price</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {removeDuplicates.length > 0 ? (
              removeDuplicates.map(({ id, name, category, price, qty }) => (
                <TableRow key={id}>
                  <TableCell component="th" scope="row">
                    {category.name}
                  </TableCell>
                  <TableCell align="right">{name}</TableCell>
                  <TableCell align="right">{qty}</TableCell>
                  <TableCell align="right">{qty > 1 ? price * qty : price}</TableCell>
                  <TableCell align="right">
                    <Button className={`${classes.button} ${classes.btnRemove}`} onClick={() => removeItem(id)}>
                      Remove
                    </Button>
                    <Button className={classes.button} onClick={() => addQty(id)}>
                      Qty++
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell align="center" />
                <TableCell align="center" />
                <TableCell align="center">
                  <div className={classes.noItems}>No items</div>
                </TableCell>
                <TableCell align="center" />
                <TableCell align="center" />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ChartOfProducts;
