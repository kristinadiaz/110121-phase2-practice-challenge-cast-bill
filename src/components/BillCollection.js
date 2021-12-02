import React from 'react';
import BillSpecs from './BillSpecs';

export default function BillCollection({ bill, clickBill }) {
  // console.log(bill)

  return (
    <div className="ui four column grid">
      <div className="row">
        {
          bill.map((bill) => 
          <BillSpecs key={bill.id} bill={bill} handleClick={clickBill}/>
          )}
      </div>
    </div>
  );
}
