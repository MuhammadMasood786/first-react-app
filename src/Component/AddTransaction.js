import React from 'react';
import '../App.css'
import {Button ,Form, FormGroup, Label, Input,FormText } from 'reactstrap';

const AddTransaction = () => {
    return (
        <div>
            <h3>Add New Transaction</h3>
            <div>
                <Form >
                    <FormGroup>
                        <Label id="label" for="exampleEmail">Text</Label>
                        <Input type="text"  name="text" id="exampleEmail" placeholder="Enter Text..." size="30" />
                        <FormText>Amount</FormText>
                        <FormText>[Negative - Expense, Positive - Income]</FormText>
                        <Input type="text"  name="text" id="exampleEmail" placeholder="0" className="mt-3" size="30" />
                        <Button color="primary" size="lg"  className="mt-3" block>Block level button</Button>
                    </FormGroup>
                </Form>
            </div>
        </div>
    );
}

export default AddTransaction;