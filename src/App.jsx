function App() {

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="p-8 bg-white rounded-xl shadow-xl text-center space-y-4">
          <h1 className="text-4xl font-extrabold text-blue-600">
            ✅ Tailwind fonctionne !
          </h1>
          <p className="text-gray-600">
            Si tu vois ce bloc avec fond blanc, coins arrondis et ombre, tout est bon.
          </p>
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            Clique ici pour confirmer 😄
          </button>
        </div>
      </div>
    </>
  )
}

export default App
