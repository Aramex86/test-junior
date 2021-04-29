import React, { useContext, useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom';
import { ProductsContext } from 'Context';

const useStyles = makeStyles({
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
  btnCart: {
    marginLeft: 'auto',
    marginBottom: 15,
    display: 'block',
  },
  btnRemove: {
    background: '#ff0000a6',
  },
});

const ListOfProducts = () => {
  const classes = useStyles();
  const items = useContext(ProductsContext);
  const { products, addItem, removeItem } = items;
  const [sort, setSort] = useState<boolean>(false);

  const sortProd: any = [...products];

  sortProd.sort((a: any, b: any) => {
    if (a.price - b.price && sort === false) return -1;
    if (b.price - a.price && sort === true) return 1;
  });

  console.log(sortProd);
  console.log(sort);
  // console.log(sortByPrice());

  const handaleSort = () => {
    setSort(!sort);
  };

  return (
    <>
      <Link to="/cart">
        <Button variant="contained" color="primary" className={classes.btnCart}>
          Cart
        </Button>
      </Link>
      <TableContainer component={Paper}>
        <Table className={classes.table} size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell align="right" onClick={handaleSort}>
                Categogy
              </TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right" onClick={handaleSort}>
                Price
              </TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortProd?.map((item: any) => (
              <TableRow key={item.id}>
                <TableCell component="th" scope="row">
                  {item.category.name}
                </TableCell>
                <TableCell align="right">{item.name}</TableCell>
                <TableCell align="right">{item.price}</TableCell>
                <TableCell align="right">
                  <Button className={`${classes.button} ${classes.btnRemove}`} onClick={() => removeItem(item.id)}>
                    remove
                  </Button>{' '}
                  <Button className={classes.button} onClick={() => addItem(item.id)}>
                    add
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ListOfProducts;
