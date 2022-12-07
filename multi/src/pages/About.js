import styles from './About.module.css';

const About = () => {
  return(
      <>
   
  <div className={styles.aboutSection}>
  <h1 >About Us</h1>
  <p>We are a company that is engaged to bring affordable home entertainment to our clients.</p>
  <p>Your experience with us will be above expectations.</p>
   </div>



<h2 className= {styles.ourTeam}>Our Team</h2>


<div className={styles.row}>
  <div className={styles.column}>
    <div className={styles.card}>
      <div className={styles.container}>
        <h2>Jane Doe</h2>
        <p className={styles.title}>CEO & Founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>jane@example.com</p>
        <p><button className={styles.button}>Contact</button></p>
      </div>
    </div>
  </div>
  


<div className={styles.column}>
    <div className={styles.card}>
      <div className={styles.container}>
        <h2>Mike Ross</h2>
        <p className={styles.title}>Co-founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>mike@example.com</p>
        <p><button className={styles.button}>Contact</button></p>
      </div>
    </div>
  </div>


<div className={styles.column}>
    <div className={styles.card}>
      <div className={styles.container}>
        <h2>John Doe</h2>
        <p className={styles.title}>Web Designer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>john@example.com</p>
        <p><button className={styles.button}>Contact</button></p>
      </div>
    </div>
  </div>
</div>


<div className="footer">
    <p>https://github.com/Garuma25/CP3-cs260.git</p>
    </div>
  
   </>
      );
};

export default About;