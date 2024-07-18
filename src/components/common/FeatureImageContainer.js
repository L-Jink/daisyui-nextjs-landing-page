import { useState } from "react"
import Image from 'next/image'
import assets from "public/res/assets"


function FeatureImageContainer({imageUrl}){

    const [toggleActive, setToogleActive] = useState(true)

    const onChangeHandler = () => {

    }
    
    return(
        <div className="mt-6 ">
            <Image width={assets.mediaSize.imageSize} height={assets.mediaSize.imageSize} src={imageUrl} className="  h-5/6 object-contain w-full rounded-lg"/>
        </div>
    )
    
}

export default FeatureImageContainer