import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import logo from "./logo.png"
import { faDiscord, faInstagram } from "@fortawesome/free-brands-svg-icons"

const particle = require("./particle.json")

function App() {
  const particlesInit = async (main) => {
    console.log(main)
    await loadFull(main)
  }

  const particlesLoaded = (container) => {
    console.log(container)
  }

  return (
    <div className="w-scren h-screen overflow-hidden flex justify-center items-center" style={{background: "linear-gradient(124deg, var(--primary) 0%, var(--secondary))"}}>
      <Particles className="absolute" options={particle} id="particles" init={particlesInit} loaded={particlesLoaded} ></Particles>
      <div className="lg:w-1/3 lg:h-2/3 w-full h-full p-5 flex justify-center items-center flex-col">
        <img src={logo} alt="logo" className="w-1/3 z-10"></img>
        <div className="text-4xl text-center font-bold text-white flex flex-col gap-3">
          <span>#EnJoyTheBoost</span>
          <span className="uppercase tracking-widest text-6xl">Coming Soon</span>
        </div>
        <div className="z-10 flex flex-wrap flex-row gap-3 justify-center items-center text-3xl mt-5 cursor-pointer text-white">
          <a className="hover:text-neutral-300 transition-colors" href="https://discord.gg/5YS7UhQVNp">
            <FontAwesomeIcon className="hover:text-neutral-200" icon={faDiscord} />
          </a>
          <a className="hover:text-neutral-300 transition-colors" href="https://www.instagram.com/TheJoyPadz/">
            <FontAwesomeIcon className="hover:text-neutral2300" icon={faInstagram} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
