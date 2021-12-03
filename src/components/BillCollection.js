import React from 'react';
import BillCard from './BillCard';

export default function BillCollection({ bills, castBill, fireBill }) {
  // console.log(bills)

  return (
    <div className="ui four column grid">
      <div className="row">
        {bills.map(bill => 
        <BillCard key={bill.id} bill={bill} handleClick={castBill} fireBill={fireBill}/>)}
      </div>
    </div>
  );
}