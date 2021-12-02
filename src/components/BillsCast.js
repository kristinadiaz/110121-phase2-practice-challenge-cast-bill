import React from 'react';

export default function BillsCast({ casts = [], enlist }) {
  console.log(casts)

  return (
    <div className="ui segment inverted blue bill-cast">
      <div className="ui five column grid">
        <div className="row bill-cast-row">
        {/* {enlist ? null : <img src={bill.photo} alt={bill.name} width="100%" /> } */}
        </div>
      </div>
    </div>
  );
}

