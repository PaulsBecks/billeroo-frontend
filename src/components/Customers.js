import React, { useState } from "react";
import { useCustomers, useGA } from "../hooks";
import { customer as customerSceleton } from "../sceletons";
import { Table, Button, Modal } from "semantic-ui-react";
import CustomerForm from "./CustomerForm/CustomerForm";
import DeleteAckModal from "./DeleteAckModal";

export default () => {
  const [
    customers,
    addCustomer,
    removeCustomer,
    updateCustomer,
    customersLength,
  ] = useCustomers();
  const [customer, setCustomer] = useState();
  useGA();

  const saveCustomer = () => {
    if (customer.id >= customersLength) {
      addCustomer(customer);
    } else {
      updateCustomer(customer);
    }
    setCustomer();
  };

  return (
    <div>
      <Button
        onClick={() =>
          setCustomer({ ...customerSceleton, id: customersLength })
        }
        primary
      >
        Neuer Kunde
      </Button>
      {customer && (
        <Modal onClose={() => setCustomer()} open={true}>
          <Modal.Header>Kunde</Modal.Header>
          <Modal.Content>
            <CustomerForm customer={customer} setCustomer={setCustomer} />
          </Modal.Content>
          <Modal.Actions>
            <Button
              onClick={() => setCustomer()}
              content="Abbrechen"
              negative
              icon="close"
              labelPosition="right"
            ></Button>
            <Button
              onClick={saveCustomer}
              content="Speichern"
              primary
              icon="check"
              labelPosition="right"
            ></Button>
          </Modal.Actions>
        </Modal>
      )}
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Rechnungsadresse</Table.HeaderCell>
            <Table.HeaderCell>Lieferadresse</Table.HeaderCell>
            <Table.HeaderCell>Rabatt</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {customers.map((c) => (
            <Table.Row key={c._id}>
              <Table.Cell>{c.name}</Table.Cell>
              <Table.Cell>
                <div dangerouslySetInnerHTML={{ __html: c.invoiceAddress }} />
              </Table.Cell>
              <Table.Cell>
                <div dangerouslySetInnerHTML={{ __html: c.shippingAddress }} />
              </Table.Cell>
              <Table.Cell>{c.discount}</Table.Cell>
              <Table.Cell>
                <Button
                  onClick={() => setCustomer(c)}
                  primary
                  icon="edit"
                ></Button>
                <DeleteAckModal
                  onDelete={() => removeCustomer(c._id)}
                  type="Kunde"
                />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};
