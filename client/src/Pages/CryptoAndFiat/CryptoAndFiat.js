import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRates } from "./../../redux/actions/cryptoAndFiat";
import { Card, Row, Col } from "antd";
import Statistics from "../../Components/CryptoAndFiat/Statistics";
import Charts from "../../Components/CryptoAndFiat/Charts";

const CryptoAndFiat = () => {
  const cryptoAndFiat = useSelector((store) => store.cryptoAndFiat);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRates());
  }, []);

  const { totalCount, fiat, crypto, fiatCount, cryptoCount } = cryptoAndFiat;

  return (
    <>
      <Card>
        <Row justify="center">
          <Col>
            <Statistics
              totalCount={totalCount}
              fiatCount={fiatCount}
              cryptoCount={cryptoCount}
            />
          </Col>
        </Row>
        <Row justify="center">
          <Col>
            <Charts fiat={fiat} crypto={crypto} />
          </Col>
        </Row>
      </Card>
    </>
  );
};

export default CryptoAndFiat;
