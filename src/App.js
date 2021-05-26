
import './App.css';

function App() {

  return (
    <div class= "container">
      <div class="text">
        <h1>Learn to code by watching others</h1>
        <p>See how experienced developers solve problems in real-time. Watching scripted tutorials is great, but understanding how developers think is invaluable. </p>
    </div>

    <div class="try">
        <p>
            <b>Try it free 7 days</b>
            then $20/mo. thereafter
        </p>
    </div>

    <div class="info">
        <form>
            <div class="form">
                <input type="text" name="first name" placeholder="First Name" required></input>              
            </div>
            <div class="form">
                <input type="text" name="Last" placeholder="Last Name" required></input>               
            </div>
            <div class="form">
                <input type="email" name="email address" placeholder="Email Address" required>
                  </input>                
            </div>
            <div class="form">
                <input type="text" name="password" placeholder="Password"
                required></input>                
            </div>
            <input type="submit" value="Claim Your Free Trial" class="btn btn-primary"></input>
        </form>
            <footer> <p>By clicking the button you are agreeing to our <a href="#" title="Terms and conditions">Terms and Conditions</a></p></footer>

    </div>

</div>
  );
}
export default App;
