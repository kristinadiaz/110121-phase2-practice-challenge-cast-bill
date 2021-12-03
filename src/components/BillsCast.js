import React from 'react';
import BillCard from './BillCard';

export default function BillsCast({bills, removeBill, fireBill }) {
  // Your code here

  return (
    <div className="ui segment inverted blue bill-cast">
      <div className="ui five column grid">
        <div className="row bill-cast-row">
        {
        bills
        .filter((bill) => {
        if (bill.cast) {
           return bill.cast
        }
        })
        .map((bill) => <BillCard key={bill.id} bill={bill} handleClick={removeBill} fireBill={fireBill} />)
        }
        </div>
      </div>
    </div>
  );
}


