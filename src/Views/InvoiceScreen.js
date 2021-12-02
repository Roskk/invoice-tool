import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Button } from "../components/Button/Button";

const initialItemData = {
  description: "",
  cost: 0,
  quantity: 0,
  price: null,
};
export const InvoiceScreen = () => {
  const [addItemData, setAddItemData] = useState(initialItemData);
  const [invoiceData, setInvoiceData] = useState([]);
  const [invoiceTotal, setInvoiceTotal] = useState(0);

  const handleAddItem = async () => {
    const price = addItemData.quantity * addItemData.cost;
    addItemData.price = price;
    const newItem = [...invoiceData, addItemData];
    await setInvoiceData(newItem);
    setAddItemData(initialItemData);
  };

  const handleSubmit = () => {
    console.log(invoiceData);
  };

  useEffect(() => {
    setInvoiceTotal(invoiceData.map((i) => i.price).reduce((a, b) => a + b, 0));
  }, [invoiceData]);
  return (
    <PageWrapper>
      <h1>Create Invoice</h1>
      <AddItemContainer>
        <div>
          <label>Description</label>
          <input
            onChange={(e) =>
              setAddItemData({ ...addItemData, description: e.target.value })
            }
            value={addItemData.description}
          />
        </div>
        <div>
          <label>Cost</label>
          <input
            onChange={(e) =>
              setAddItemData({ ...addItemData, cost: +e.target.value })
            }
            value={addItemData.cost}
          />
        </div>
        <div>
          <label>Quantity</label>
          <input
            onChange={(e) =>
              setAddItemData({ ...addItemData, quantity: +e.target.value })
            }
            value={addItemData.quantity}
          />
        </div>
        <Button secondary text={"Add item"} handleClick={handleAddItem} />
      </AddItemContainer>
      <GridTableContainer>
        <thead>
          <tr>
            <th>Description</th>
            <th>Cost</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {invoiceData.map((item, i) => (
            <tr>
              <td>{item.description}</td>
              <td>{item.cost}</td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
            </tr>
          ))}
        </tbody>
      </GridTableContainer>
      <Summary>
        <InvoiceTotal>Total: ${invoiceTotal}</InvoiceTotal>
        <Button text={"Submit Invoice"} handleClick={handleSubmit} />
      </Summary>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  max-width: 800px;
`;
const AddItemContainer = styled.div`
  display: flex;
  gap: 12px;
  input {
    padding: 0px 0.8rem;
    line-height: 3rem;
    width: calc(100% - 29px);
  }
  label {
    position: absolute;
    top: -14px;
    font-size: 0.7rem;
  }
  div {
    position: relative;
  }
  div:first-of-type {
    flex-grow: 1;
  }
`;

const GridTableContainer = styled.table`
  display: grid;
  border-collapse: collapse;
  min-width: 100%;
  margin-top: 20px;
  grid-template-columns:
    minmax(150px, 1fr)
    minmax(150px, 1fr)
    minmax(150px, 1fr)
    minmax(150px, 1fr);
  thead,
  tbody,
  tr {
    display: contents;
  }

  th,
  td {
    padding: 15px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  th {
    position: sticky;
    top: 0;
    background: #6c7ae0;
    text-align: left;
    font-weight: normal;
    font-size: 1.1rem;
    color: white;
  }
  th:last-child {
    border: 0;
  }
  td {
    padding-top: 10px;
    padding-bottom: 10px;
    color: #808080;
  }
  tr:nth-child(even) td {
    background: #f8f6ff;
  }
`;

const Summary = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  margin: 30px 0;
  gap: 10px;
`;
const InvoiceTotal = styled.div`
  width: 100%;
  text-align: right;
  font-size: 1.25rem;
`;
