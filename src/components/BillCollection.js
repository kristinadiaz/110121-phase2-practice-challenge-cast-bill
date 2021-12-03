import React from 'react';
import BillCard from './BillCard';

export default function BillCollection( { bill, castBill, fireBill } ) {
  // console.log(bill) 

  return (
    <div className="ui four column grid">
      <div className="row">
        {
          bill.map((bill) => <BillCard key={bill.id} bill={bill} handleClick={castBill} fireBill={fireBill} />)
        }
      </div>
    </div>
  );
}