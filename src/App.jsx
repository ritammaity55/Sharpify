import Home from './components/Home'

function App() {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100 py-8 px-4'>
      <div className='text-center mb-8'>
        <h1 className='text-5xl font-bold text-gray-800'>Sharpify</h1>
        <p className='text-lg text-gray-500'>Enhance your image in seconds with the power of AI!</p>
      </div>
      <Home/>
      <div className='text-lg text-gray-500 mt-6'>
        Powered by PicWish AI 
      </div>
    </div> 
  )
}

export default App;
