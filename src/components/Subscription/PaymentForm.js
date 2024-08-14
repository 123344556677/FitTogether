import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { getSubscription } from 'Api/Api';
import { makeSubscription } from 'Api/Api';
import { errorAlert } from 'components/Alerts/Alerts';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'reactstrap';

function PaymentForm({planData,userData}) {
    console.log(userData,"user Data in payent form")
    const [subData, setSubData] = useState();
    const name = userData?.fname;
  const email = userData?.email;
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
   useEffect(()=>{
     const fetchSubInfo = async () => {
        const response = await getSubscription();
        console.log(response,"sub reponse----->")
        setSubData(response?.data?.subscription);
    };
    fetchSubInfo()
    },[])
  const createSubscription = async () => {  
        const paymentMethod = await stripe?.createPaymentMethod({
          type: 'card',
          card: elements?.getElement(CardElement),
          billing_details: {
            name,
            email,
          },
        });
        console.log(paymentMethod,"metidsd")
        if(paymentMethod?.error?.code==="incomplete_number"){
            errorAlert(paymentMethod?.error?.message)
        }
        else{
        const values={
            planId:planData?.planId,
            userId:userData?._id,
            type:planData?.type,
            token:"tok_visa",
            amount:planData?.planId==="1"?10:100
        }
        const reponse=await makeSubscription(values)
        if(reponse){
        console.log(reponse,"sub response-->")
        navigate('/user/home')
        }
    }
        

        // const response = await fetch(`${process.env.REACT_APP_API_URL}/stripe/create-subscription`, {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json',
        //   },
        //   body: JSON.stringify({
        //     paymentMethod: paymentMethod?.paymentMethod?.id,
        //     userData,
        //     priceId: props?.data?.priceId,
        //   }),
        // }).then((res) => res.json());

        // const confirmPayment = await stripe?.confirmCardPayment(response.clientSecret);

        // if (confirmPayment?.error) {
        //   showErrorAlert(confirmPayment.error.message);
        // } else {
        //   showSuccessAlert('Success! Check your email for the invoice.');
        //   navigate('/');
        // }
      
    
  };

  return (
    <div>
      <CardElement
        id="card-element"
        options={{
          style: {
            base: {
              fontSize: '20px',
              color: '#424770',
              '::placeholder': {
                color: 'lightblue', // Change placeholder color to light blue
                fontWeight: 'bold', // Make the placeholder text bold
              },
              backgroundColor: 'white',
              padding: '30px',
              borderRadius: '4px',
              boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.1)',
              cursor: 'pointer', // Add a cursor style to indicate interactivity
              transition: 'border-color 0.3s', // Add a smooth transition to border color
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <div className='text-center'>
      <Button
          className={
            planData?.planName === "Standard Plan"
              ? "mt-5 login-button-color auth-button w-75"
              : "mt-5 auth-button signUp-button-color w-75"
          }
          color="primary"
          type="button"
          onClick={createSubscription}
          disabled={planData?.planId===subData?.planId}
        >
          Buy Plan
        </Button>
        </div>
    </div>
  );
}

export default PaymentForm;
