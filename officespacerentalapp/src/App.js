import office from "./office.jpg";

function App() {

  const heading = "Office Space";

  const offices = [
    {
      Name: "DBS",
      Rent: 50000,
      Address: "Chennai"
    },
    {
      Name: "Regus",
      Rent: 75000,
      Address: "Bangalore"
    },
    {
      Name: "WeWork",
      Rent: 90000,
      Address: "Hyderabad"
    }
  ];

  return (
    <div style={{ marginLeft: "100px" }}>

      <h1>{heading}, at Affordable Range</h1>

      {offices.map((officeItem, index) => (

        <div key={index} style={{ marginBottom: "30px" }}>

          <img
            src={office}
            alt="Office Space"
            width="250"
            height="250"
          />

          <h2>Name: {officeItem.Name}</h2>

          <h3
            style={{
              color: officeItem.Rent <= 60000 ? "red" : "green"
            }}
          >
            Rent Rs. {officeItem.Rent}
          </h3>

          <h3>
            Address: {officeItem.Address}
          </h3>

        </div>

      ))}

    </div>
  );
}

export default App;