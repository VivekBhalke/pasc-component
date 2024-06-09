
import Card from "./Card"
const Body = () => {
  return (
    // <div className=" h-[678px] mt-[10px] grid grid-rows-3 grid-cols-2">
    <div className="flex flex-row mx-auto sm:px-0 flex-wrap gap-8 justify-center">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
    </div>
  )
}

export default Body