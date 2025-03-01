// const heading = React.createElement("h1", {}, "This is the first React Program!");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);


{/* <div>
    <div>
        <h1>Shahnawaz Alam</h1>
    </div>
</div> */}


const parent = React.createElement("div",{id:"parent"},
    [React.createElement("div",{id:"child1"},
    [React.createElement("h1",{},"Shahnawaz Alam"),React.createElement("h2",{},"Shahnawaz Alam")]
), 
    React.createElement("div",{id:"child2"},
    [React.createElement("h1",{},"Shahnawaz Alam"),React.createElement("h2",{},"Shahnawaz Alam")]
)]
   
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);