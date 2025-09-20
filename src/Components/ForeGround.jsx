import React,{useRef} from 'react'
import Card from './Card'


const ForeGround = () => { 
    const ref=useRef(null)

    const data = [
      {
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        filesize: "0.9 Mb",
        close: false,
        tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
      },
      {
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        filesize: "0.9 Mb",
        close: true,
        tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" },
      },
      {
        desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
        filesize: "0.9 Mb",
        close: false,
        tag: { isOpen: false, tagTitle: "Upload", tagColor: "green" },
      },
    ];

  return (
    <div>
      <div ref={ref} className="fixed z-[3] w-full h-full top-0 left-0 flex gap-10 p-5 flex-wrap">
        {data.map((item,index)=>(
            <Card key={index} data={item} reference={ref}></Card>

        ))}
      </div>
    </div>
  );
}

export default ForeGround
