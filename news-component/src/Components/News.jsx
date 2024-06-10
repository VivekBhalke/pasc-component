import Body from "./Body";
import { Head } from "./Head";
const News = () => {
  return (
    //1
    <div className=" w-[full] px-5 md:px-12 lg:px-14" style={{}}>
        {/* 2 */}
        <div className="">
          <Head></Head>
          <Body></Body>
        </div>
    </div>
  )
}

export default News;