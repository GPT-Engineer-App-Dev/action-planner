import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

const CityPopulations = () => {
  const data = [
    { city: "New York", population: "8,804,190" },
    { city: "Los Angeles", population: "3,898,747" },
    { city: "Chicago", population: "2,746,388" },
    { city: "Houston", population: "2,304,580" },
    { city: "Phoenix", population: "1,608,139" },
  ];

  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>City</Th>
          <Th>Population</Th>
        </Tr>
      </Thead>
      <Tbody>
        {data.map(({ city, population }) => (
          <Tr key={city}>
            <Td>{city}</Td>
            <Td isNumeric>{population}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default CityPopulations;
