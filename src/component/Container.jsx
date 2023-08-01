import "./Container.css"
import "./Images/lallantoplogo.png"

function Container(){

 
    return(
        <>


<div class="container">
    <div class="image-container">
      <img src={require('./Images/lallantoplogo.png')} alt="Example Image"/>
    </div>
    <div class="text-container">
      <h2>Product Name</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et eleifend felis, nec venenatis dui.</p>
    </div>
  </div>

        </>
    );
}

export default Container;