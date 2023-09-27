import '../styles/OutputArea.css'

function OutputArea ({children}) {
  return (
    <>
    <div className="output-container">
    <div className="scale-image">
        <div className='ruler'>
          <div className='in'>
            <div className='qi'></div>
            <div className='hi'></div>
            <div className='tqi'></div>
          </div>
          <div className='in'>
            <div className='qi'></div>
            <div className='hi'></div>
            <div className='tqi'></div>
          </div>
          <div className='in'>
            <div className='qi'></div>
            <div className='hi'></div>
            <div className='tqi'></div>
          </div>
          <div className='in'>
            <div className='qi'></div>
            <div className='hi'></div>
            <div className='tqi'></div>
          </div>
          <div className='in'>
            <div className='qi'></div>
            <div className='hi'></div>
            <div className='tqi'></div>
          </div>
          <div className='in'>
            <div className='qi'></div>
            <div className='hi'></div>
            <div className='tqi'></div>
          </div>
          <div className='in'>
            <div className='qi'></div>
            <div className='hi'></div>
            <div className='tqi'></div>
          </div>
          <div className='in'>
            <div className='qi'></div>
            <div className='hi'></div>
            <div className='tqi'></div>
          </div>
          <div className='in'>
            <div className='qi'></div>
            <div className='hi'></div>
          </div>
        </div>
      </div>
      {children}
    </div>
    
    </>
  )
}

export default OutputArea;