import React from "react";
import Heading from "./Heading";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  return (
    <div>
      <Heading />
      <CreateArea />
      <Note key={1} title="Note title" content="Note content" />
      <Footer />
    </div>
  );
}

export default App;



// import React from 'react'
// // import Heading from /'./Heading'
// import Footer from './Footer'
// import Heading from './Heading';
// import Note from './Note'
// // import contacts from './../contacts' 
// // import Card from './Props'
// const App = () => {

//     // function createCard(contact) {
//     //     // key is used to uniquely identified a single component and it
//     //     // has to be spell exactly 'key'(stated by react)
//     //     return(
//     //        <Card
//     //            key={contact.id}
//     //            id={contact.id}
//     //            name={contact.name}
//     //            img={contact.imgURL}
//     //            phone={contact.phone}
//     //            email={contact.email}
//     //        />
//     //     )
//     // }

//     return (
//         <div>
        
//         <Heading/>
//         <Note/>
//         <Footer/>

//             {/* <h1 className="heading">MY contacts</h1>
//             {contacts.map(createCard)} */}
//             {/* <Card 
//                 name={contacts[0].name}
//                 imgURL={contacts[0].imgURL}
//                 phone={contacts[0].phone}
//                 email={contacts[0].email}
//             />
//             <Card 
//                 name={contacts[0].name}
//                 imgURL={contacts[0].imgURL}
//                 phone={contacts[0].phone}
//                 email={contacts[0].email}
//             />
//             <Card 
//                 name={contacts[0].name}
//                 imgURL={contacts[0].imgURL}
//                 phone={contacts[0].phone}
//                 email={contacts[0].email}
//             /> */}
//         </div>
//     );
// }

// export default App