import React, { useState } from "react";
import { Box, Button, Grid, Text } from "@chakra-ui/react";

const Calculator = () => {
  const [display, setDisplay] = useState("0");
  const [operator, setOperator] = useState(null);
  const [firstOperand, setFirstOperand] = useState(null);

  const handleDigitClick = (digit) => {
    setDisplay((prevDisplay) => (prevDisplay === "0" ? digit : prevDisplay + digit));
  };

  const handleOperatorClick = (op) => {
    setOperator(op);
    setFirstOperand(parseFloat(display));
    setDisplay("0");
  };

  const handleEqualsClick = () => {
    const secondOperand = parseFloat(display);
    let result;

    switch (operator) {
      case "+":
        result = firstOperand + secondOperand;
        break;
      case "-":
        result = firstOperand - secondOperand;
        break;
      case "*":
        result = firstOperand * secondOperand;
        break;
      case "/":
        result = firstOperand / secondOperand;
        break;
      default:
        return;
    }

    setDisplay(result.toString());
    setOperator(null);
    setFirstOperand(null);
  };

  const handleClearClick = () => {
    setDisplay("0");
    setOperator(null);
    setFirstOperand(null);
  };

  return (
    <Box>
      <Text fontSize="2xl" textAlign="right" mb={4}>
        {display}
      </Text>
      <Grid templateColumns="repeat(4, 1fr)" gap={2}>
        <Button onClick={() => handleDigitClick("7")}>7</Button>
        <Button onClick={() => handleDigitClick("8")}>8</Button>
        <Button onClick={() => handleDigitClick("9")}>9</Button>
        <Button onClick={() => handleOperatorClick("/")}>/</Button>
        <Button onClick={() => handleDigitClick("4")}>4</Button>
        <Button onClick={() => handleDigitClick("5")}>5</Button>
        <Button onClick={() => handleDigitClick("6")}>6</Button>
        <Button onClick={() => handleOperatorClick("*")}>*</Button>
        <Button onClick={() => handleDigitClick("1")}>1</Button>
        <Button onClick={() => handleDigitClick("2")}>2</Button>
        <Button onClick={() => handleDigitClick("3")}>3</Button>
        <Button onClick={() => handleOperatorClick("-")}>-</Button>
        <Button onClick={() => handleDigitClick("0")}>0</Button>
        <Button onClick={handleEqualsClick}>=</Button>
        <Button onClick={handleClearClick}>C</Button>
        <Button onClick={() => handleOperatorClick("+")}>+</Button>
      </Grid>
    </Box>
  );
};

export default Calculator;