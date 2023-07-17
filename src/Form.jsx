
// 方法1: 分了三個state
import { useState } from "react";

export default function Form(){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [form, setForm] = useState({});

  function handleNameChange(e){
    setName(e.target.value);
  }

  function handleEmailChange(e){
    setEmail(e.target.value);
  }

  function handleSubmit(){
    if(!name || !email) {
      alert("Name跟email都要有值哦！")
      return false;
    }
    setForm({name, email})
  }

  return (
    <>
      <h1>My First React Form</h1>
      <label htmlFor="name">Name:</label>
      <input id="name" onChange={handleNameChange} />
      <label htmlFor="email">Email:</label>
      <input id="email" onChange={handleEmailChange} />
      <button onClick={handleSubmit}>Submit</button>
      <p className="name">{form.name}</p>
      <p>{form.email}</p>
    </>
  )
}


// 方法2: 把name跟email合為一個state
// import { useState } from "react";

// export default function Form(){
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [isShow, setIsShow] = useState(false);

//   function handleNameChange(e){
//     console.log('before render name:', name);
//     setName(e.target.value);
//   }

//   function handleEmailChange(e){
//     setEmail(e.target.value);
//   }

//   function handleSubmit(){
//     if(!name || !email) {
//       alert("Name或email要有值啦")
//       return false;
//     }
//     setIsShow(true);
//   }

//   console.log('name:', name);

//   return (
//     <>
//       <h1>My First React Form</h1>
//       <label htmlFor="name">Name:</label>
//       <input id="name" onChange={handleNameChange} />
//       <label htmlFor="email">Email:</label>
//       <input id="email" onChange={handleEmailChange} />
//       <button onClick={handleSubmit}>Submit</button>
      
//       {isShow &&
//       <div>
//         <p>{name}</p>
//         <p>{email}</p>
//       </div> }
//     </>
//   )
// }

// import { useState } from "react";

// export default function Form(){
//   // const [name, setName] = useState('');
//   // const [email, setEmail] = useState('');
//   const [form, setForm] = useState({name: '', email: ''});
//   const [isShow, setIsShow] = useState(false);

//   function handleNameChange(e){
//     console.log('before render name:', name);
//     setForm({
//       ...form,
//       name: e.target.value
//     });
//   }

//   function handleEmailChange(e){
//     setForm({
//       ...form,
//       email: e.target.value
//     });
//   }

//   function handleSubmit(){
//     const { name, email } = form;
//     if(!name || !email) {
//       alert("Name或email要有值啦")
//       return false;
//     }
//     setIsShow(true);
//   }

//   console.log('name:', name);

//   return (
//     <>
//       <h1>My First React Form</h1>
//       <label htmlFor="name">Name:</label>
//       <input id="name" onChange={handleNameChange} />
//       <label htmlFor="email">Email:</label>
//       <input id="email" onChange={handleEmailChange} />
//       <button onClick={handleSubmit}>Submit</button>
//       {isShow &&
//       <div>
//         <p>{form.name}</p>
//         <p>{form.email}</p>
//       </div> }
//     </>
//   )
// }