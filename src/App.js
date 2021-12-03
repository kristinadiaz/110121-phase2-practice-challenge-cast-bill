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

   function castBill(bill) {
     setBills(bills.map((b) => (b.id === bill.id ? {...b, cast: true} : b)))
   }

   function removeBill(bill) {
    setBills(bills.map((b) => (b.id === bill.id ? {...b, cast: false} : b)))
   }

   function fireBill(bill) {
    setBills(bills.filter((b) => b.id !== bill.id))
     }
   

  return (
    <div>
      <BillsCast bills={bills} removeBill={removeBill} fireBill={fireBill} />
      <BillCollection bill={bills} castBill={castBill} fireBill={fireBill} />
    </div>
  );
}