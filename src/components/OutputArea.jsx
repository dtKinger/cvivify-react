import '../styles/OutputArea.css'

function OutputArea ({children}) {
  return (
    <>
    <div className="output-container">
    <div className="scale-image">
        <div class='ruler'>
          <div class='in'>
            <div class='qi'></div>
            <div class='hi'></div>
            <div class='tqi'></div>
          </div>
          <div class='in'>
            <div class='qi'></div>
            <div class='hi'></div>
            <div class='tqi'></div>
          </div>
          <div class='in'>
            <div class='qi'></div>
            <div class='hi'></div>
            <div class='tqi'></div>
          </div>
          <div class='in'>
            <div class='qi'></div>
            <div class='hi'></div>
            <div class='tqi'></div>
          </div>
          <div class='in'>
            <div class='qi'></div>
            <div class='hi'></div>
            <div class='tqi'></div>
          </div>
          <div class='in'>
            <div class='qi'></div>
            <div class='hi'></div>
            <div class='tqi'></div>
          </div>
          <div class='in'>
            <div class='qi'></div>
            <div class='hi'></div>
            <div class='tqi'></div>
          </div>
          <div class='in'>
            <div class='qi'></div>
            <div class='hi'></div>
            <div class='tqi'></div>
          </div>
          <div class='in'>
            <div class='qi'></div>
            <div class='hi'></div>
          </div>
        </div>
      </div>
      {children}
    </div>
    
    </>
  )
}

export default OutputArea;