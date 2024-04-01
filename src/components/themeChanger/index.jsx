import React from 'react'
import UseLocalStroage from './useLocalStroage';
import "./style.css"
const ThemeChanger = () => {

    const [theme, setTheme] = UseLocalStroage('theme', "dark")


    function handleToggleTheme(){
        setTheme(theme === 'light'? 'dark' : 'light')
    }
    console.log(theme)


  return (
    <>
        <div className='main' data-theme={theme}>
            <div >
                <p className=''>
                    Hello World!
                </p>
                <button className='' onClick={handleToggleTheme}>Change Theme</button>
            </div>
        </div>

    </>
  )
}

export default ThemeChanger;