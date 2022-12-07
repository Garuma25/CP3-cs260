import styles from './Home.module.css';
import {MoviesGrid} from  './MoviesGrid';

const Home = () => {
  return (
      <>

      <header>
      <h1 className= {styles.title}>Movies to Rent</h1>
      </header>
      
      <main>
        <MoviesGrid />
    
      </main>
      
  
    
     <div className="footer">
    <p>https://github.com/Garuma25/CP3-cs260.git</p>
    </div>
  
   </>
      );
};

export default Home;