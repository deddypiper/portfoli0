// import { useState } from "react";
// import { Container, Left, Img, Right, H2, Form, Input, Textarea, Button, Span } from "./ContactStyles.js";
// import shake from '../../assets/shake.svg'

// export default function Contact() {
//   const [message, setMessage] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setMessage(true);
//     e.target.reset()
//   };
//   return (
//     <Contact>
//       <Left className="left">
//         <Img src={shake} alt="shake" />
//       </Left>
//       <Right className="right">
//         <H2>Contact.</H2>
//         <Form onSubmit={handleSubmit}>
//           <Input type="text" name="name" placeholder="Name" />
//           <Input type="text" name="contact" placeholder="contact" required />
//           <Input type="text" name="email" placeholder="Email" required/>
//           <Textarea placeholder="Message"></Textarea>
//           <Button type="submit">Send</Button>
//           {message && <span>Thanks, I'll reply ASAP!</span>}
//         </Form>
//       </Right>
//     </Contact>
//   );
// }
