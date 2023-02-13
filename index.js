const element = (
  // Write your code here.
  <div className="shadow bg-container">
    <h1 className="heading">Congratulations</h1>
    <div className="card-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
        className="personImage"
      />
      <h1 className="personName">Kiran V</h1>
      <p className="clgName">
        Vishnu Institute of Computer Education and Technology, Bhimavaram
      </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
        className="watchImage"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
