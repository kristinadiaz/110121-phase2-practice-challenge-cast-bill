import React, { useEffect, useState } from 'react';
import BillCollection from './components/BillCollection';
import BillsCast from './components/BillsCast';

const API = 'http://localhost:8002/bills';

 function App() {
  const [bills, setBills] = useState([]);

  useEffect(
    () => {
      fetch(API)
        .then(res => res.json())
        .then(json => setBills(json))
    }, []
  );

  function clickBill(cast) {
    if (cast.enlist) {
      return;
    }

    setBills(
      bills.map(b => b.id === cast.id ? {...cast, enlist: true} : b)
    )

    // console.log('hello');
    // if enlist = true
    // add enlist to BillsCast
  }

  return (
    <div>
      <BillsCast casts={bills.filter(b => b.enlist)}/>
      <BillCollection bill={bills} clickBill={clickBill}/>
    </div>
  );
}

export default App;