import s from './App.module.css'
import dots from '/dots.png'
import file from '/file.jpg'
import prof from '/profile.jpg'
import menu from '/menu.png'
import logo from '/logo.png'

function App() {
  return (
    <>
      <div className={s.classTitle}>
        <img width={30} src={menu} alt="" />
        <img width={30} src={logo} alt="" />
        <div>SALA DE AULA</div>
      </div>

      <div className={s.card}>
        <div className={s.titles}>
          <h2>*Nome da Materia</h2>
          <p>*Nome do Professor</p>
        </div>
        <div className={s.info}>
          
        </div>
        <div className={s.options}>
          <img width={30} src={prof} alt="" />
          <img width={30} src={file} alt="" />
          <img width={22.5} height={22.5} src={dots} alt="" />
        </div>
      </div>
    
      <div className={s.card}>
        <div className={s.titles}>
          <h2>*Nome da Materia</h2>
          <p>*Nome do Professor</p>
        </div>
        <div className={s.info}>
          
        </div>
        <div className={s.options}>
          <img width={30} src={prof} alt="" />
          <img width={30} src={file} alt="" />
          <img width={22.5} height={22.5} src={dots} alt="" />
        </div>
      </div>

      <div className={s.card}>
        <div className={s.titles}>
          <h2>*Nome da Materia</h2>
          <p>*Nome do Professor</p>
        </div>
        <div className={s.info}>
          
        </div>
        <div className={s.options}>
          <img width={30} src={prof} alt="" />
          <img width={30} src={file} alt="" />
          <img width={22.5} height={22.5} src={dots} alt="" />
        </div>
      </div>

      <div className={s.card}>
        <div className={s.titles}>
          <h2>*Nome da Materia</h2>
          <p>*Nome do Professor</p>
        </div>
        <div className={s.info}>
          
        </div>
        <div className={s.options}>
          <img width={30} src={prof} alt="" />
          <img width={30} src={file} alt="" />
          <img width={22.5} height={22.5} src={dots} alt="" />
        </div>
      </div>

    </>
  )
}

export default App
