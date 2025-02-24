import Header from "../_components/header"

const NotebookCrud = () => {
  return (
    <div className="flex flex-col justify-center">
      <Header />
      <div className="mr-4 flex w-[80%] flex-col justify-center gap-4 border-solid p-8">
        <h1>Suas músicas preferidas</h1>
      </div>
      <div className="ml-4 justify-center">
        <h2>Escolhas as suas músicas preferidas </h2>
      </div>
    </div>
  )
}

export default NotebookCrud
