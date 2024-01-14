// pages/payment.js

"use client";
import { useState } from 'react';
import { useSession } from 'next-auth/react';

const PaymentPage = () => {
  const { data: session } = useSession();
  const [selectedPlan, setSelectedPlan] = useState(null);

  const handlePlanSelection = (plan) => {
    setSelectedPlan(plan);
  };

  const handlePayment = () => {
    alert(`Payment successful for ${selectedPlan} plan!`);
    // You would typically integrate with a payment processing service here
  };

  return (
    <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', padding: '20px', border: '1px solid #141414', borderRadius: '8px', background: '#141414', color: '#fff', fontSize: '20px' }}>
      <h1 style={{ color: '#e50914', fontSize: '30px', marginBottom: '20px' }}>Choose a Subscription Plan</h1>
      <div style={{ marginBottom: '15px' }}>
        <label>
          <input
            type="radio"
            value="Basic Plan (£4.99/month)"
            checked={selectedPlan === 'Basic Plan (£4.99/month)'}
            onChange={() => handlePlanSelection('Basic Plan (£4.99/month)')}
          />
          Basic Plan (£4.99/month)
        </label>
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>
          <input
            type="radio"
            value="Standard Plan (£9.99/month)"
            checked={selectedPlan === 'Standard Plan (£9.99/month)'}
            onChange={() => handlePlanSelection('Standard Plan (£9.99/month)')}
          />
          Standard Plan (£9.99/month)
        </label>
      </div>
      <div style={{ marginBottom: '15px' }}>
        <label>
          <input
            type="radio"
            value="Premium Plan (£17.99/month)"
            checked={selectedPlan === 'Premium Plan (£17.99/month)'}
            onChange={() => handlePlanSelection('Premium Plan (£17.99/month)')}
          />
          Premium Plan (£17.99/month)
        </label>
      </div>
      <button
        style={{ marginTop: '20px', padding: '15px 30px', backgroundColor: '#e50914', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '24px' }}
        disabled={!selectedPlan}
        onClick={handlePayment}
      >
        Pay Now
      </button>
    </div>
  );
};

export default PaymentPage;
