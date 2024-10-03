import Button from "./components/Button/Button"
import Footer from "./components/Footer/Footer"
import jessica_img from './assets/avatar-jessica.jpeg'

function App() {
  return (
    <div className="bg-cinza-900 h-screen flex justify-center items-center flex-col gap-2">
      <div className="bg-cinza-800 w-full max-w-xs sm:max-w-md py-5 px-10 h-4/6 rounded-xl flex flex-col justify-center items-center gap-5">
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="flex flex-col items-center justify-center gap-0.5">
            <img src={jessica_img} className="rounded-full h-1/2"/>
            <h1 className="text-branco-100 text-3xl font-bold">Jessica Randall</h1>
            <p className="text-verde-100 text-[14px] font-bold">London, United Kingdom</p>
          </div>
          <span className="text-branco-100 font-light text-[14px] sm:text-md">"Front-end developer and avid reader"</span>
        </div>
        <div className="flex flex-col gap-2 w-full justify-center items-center">
          <Button href="#" social="GitHub"/>
          <Button href="#" social="Frontend Mentor"/>
          <Button href="#" social="LinkedIn"/>
          <Button href="#" social="Twitter"/>
          <Button href="#" social="Instagram"/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default App
