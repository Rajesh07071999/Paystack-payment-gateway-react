import { useState } from "react";
import Paystackpop from "@paystack/inline-js";
const Payment = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [amount, setAmount] = useState("");

  const handelPayment = (event) => {
    event.preventDefault();
    const paystack = new Paystackpop();
    paystack.newTransaction({
      key: "pk_********************************",
      amount: amount * 100,
      username,
      email,
      firstname,
      lastname,
      onSuccess(transaction) {
        let message = `Payment complete ${transaction.reference}`;
        alert(message);
      },
      onCancel() {
        alert("You have cancel the payment");
      },
    });
    setUsername("");
    setAmount("");
    setEmail("");
    setFirstname("");
    setLastname("");
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <form onSubmit={handelPayment}>
                <h5>Paystack Payment</h5>
                <br />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  onChange={(e) => setUsername(e.target.value)}
                  value={username}
                />{" "}
                <br />
                <input
                  className="form-control"
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
                <br />
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                  onChange={(e) => setFirstname(e.target.value)}
                  value={firstname}
                />
                <br />
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                  onChange={(e) => setLastname(e.target.value)}
                  value={lastname}
                />
                <br />
                <input
                  type="number"
                  className="form-control"
                  placeholder="Amount"
                  onChange={(e) => setAmount(e.target.value)}
                  value={amount}
                />
                <br />
                <br />
                <button type="submit" className="btn btn-success">
                  Make Payment
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
