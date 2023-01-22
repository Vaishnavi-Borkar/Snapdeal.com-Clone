import { useState, useEffect } from 'react';

import { styled, Box, Typography, Grid } from '@mui/material';

import ProductDetail from './ProductDetail';
import ActionItem from './ActionItem';
import { useParams } from 'react-router-dom';
// import { getData } from '../../Products/action';
 import { useDispatch, useSelector } from 'react-redux';

 import { getProductDetails } from '../../redux/action/productAction';

const Component = styled(Box)`
    margin-top: 55px;
    background: #F2F2F2;
`;

const Container = styled(Grid)(({ theme }) => ({
    background: '#FFFFFF',
    display: 'flex',
    [theme.breakpoints.down('md')]: {
        margin: 0
    }
}))

const RightContainer = styled(Grid)`
    margin-top: 50px;
    & > p {
        margin-top: 10px;
    }
`;

const DetailView = () => {
    
    const { id } = useParams();

    const { loading, product } = useSelector(state => state.getProductDetails);

    const dispatch = useDispatch();
    
    useEffect(() => {
        if(product && id !== product.id)   
            dispatch(getProductDetails(id));
    }, [dispatch, product, id, loading]);

    return (
      
        <Component>
           <h3>Single Product Page</h3>
            {/* { product && Object.keys(product).length && */}
                <Container > 
                    <Grid item lg={4} md={4} sm={8} xs={12}>
                        <ActionItem  />
                    </Grid>
                    <RightContainer item lg={8} md={8} sm={8} xs={12}>
                        <Typography></Typography>
                        <Typography style={{marginTop: 5, color: '#878787', fontSize: 14 }}>
                            8 Ratings & 1 Reviews
                          
                        </Typography>
                        <Typography>
                            <span style={{ fontSize: 28 }}>₹price.cost</span>&nbsp;&nbsp;&nbsp; 
                            <span style={{ color: '#878787' }}><strike>₹mrp</strike></span>&nbsp;&nbsp;&nbsp;
                            <span style={{ color: '#388E3C' }}>discount off</span>
                        </Typography>
                        <ProductDetail />
                    </RightContainer>
                </Container>
              
        </Component>
    )
}

export default DetailView;