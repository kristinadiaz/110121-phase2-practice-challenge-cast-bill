import React, { useEffect, useState } from 'react';
import BillCollection from './components/BillCollection';
import BillsCast from './components/BillsCast';

const API = 'http://localhost:8002/bills';

export default function App() {
  const [bills, setBills] = useState([]);

  useEffect(() => {
    fetch(API)
      .then(res => res.json())
      .then(json => setBills(json))
  }, []);
  
  function castBill(bill, isCast = true) {
    setBills(bills.map((b) => (b.id === bill.id ? {...b, cast: isCast} : b)));
  }

  function fireBill(bill) {
    setBills(bills.filter(b => b.id !== bill.id));
  }

  return (
    <div>
      <BillsCast 
      bills={bills.filter(b => b.cast)} 
      removeBill={(bill) => castBill(bill, false)}  fireBill={fireBill}/>
      <BillCollection bills={bills} castBill={castBill} fireBill={fireBill}/>
    </div>
  );
}