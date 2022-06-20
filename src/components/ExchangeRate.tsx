import * as React from "react";
import {connect, ConnectedProps} from "react-redux";
import {State} from "../redux/store";
import {fetchExchangeRate} from "../redux/actions";
import {useEffect} from "react";
import {Box, Grid} from "@mui/material";

const mapState = (state: State) => {
  return {
    fetchedExchangeRates: state.converter.fetchedExchangeRates
  };
};
const mapDispatch = {
  fetchExchangeRate,
}

const connector = connect(mapState, mapDispatch);
type PropsFromRedux = ConnectedProps<typeof connector>

interface Props extends PropsFromRedux {
  color?: string
}

function ExchangeRate(props: Props) {

  useEffect(() => {
    props.fetchExchangeRate();
  },[])

  return (
    <Box component="section" sx={{
      backgroundColor: '#2c2c3b',
      color: '#fff',
      p: 2,
    }}>
      <Box sx={{
        width: '14rem',
        margin: '0 auto',
      }}>
        <Grid container sx={{color: '#93939e', mb: 1, fontSize: '0.9rem'}}>
          <Grid item xs={4} />
          <Grid item xs={4}>
            purchase
          </Grid>
          <Grid item xs={4}>
            selling
          </Grid>
        </Grid>
        {props.fetchedExchangeRates.map((item) => {
          if (item.ccy === 'USD' || item.ccy ==='EUR') {
            return (
              <Grid container key={item.ccy}>
                <Grid item xs={4} sx={{color: '#93939e'}}>
                  {item.ccy}
                </Grid>
                <Grid item xs={4}>
                  {(+item.buy).toFixed(2)}
                </Grid>
                <Grid item xs={4}>
                  {(+item.sale).toFixed(2)}
                </Grid>
              </Grid>
            )
          }
        })
        }
      </Box>
    </Box>
  );
}

export default connector(ExchangeRate)