import Particles from "react-particles-js";
import React from "react";
import "./styles.css";

const particlesObj = {
  particles: {
    line_linked: {
        shadow: {
            enable: true,
            color: "#3CA9D1",
            blur: 5
        }
    },
    
    move: {
        speed: 7,
        random: false
    },
    number: {
      value: 100
    },
    size: {
      value: 10
    }
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      },
      onresize: {
          enable: true,
          density_auto: true,
          density_area: 400
      }
    }
  }
};


/* autoplay */
class App extends React.Component {
  render() {
    return (
    <div class="body-particles">
            <div class="box">
                <h1>Particles - Mouse Attractor</h1>
                <h2><i>Time and Space is Only Illusion...</i></h2>
                <p>Move your Mouse Cursor to attract the particles</p>
            </div>
        <Particles params={particlesObj} />  
        <footer><iframe width="30%" height="100" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/197884273&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe></footer>
    </div>
    
    );
  }
}

export default App;
