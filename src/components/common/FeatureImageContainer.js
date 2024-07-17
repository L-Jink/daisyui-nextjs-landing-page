import { useState } from "react"
import Image from 'next/image'


function FeatureImageContainer({imageUrl}){

    const [toggleActive, setToogleActive] = useState(true)

    const onChangeHandler = () => {

    }
    
    return(
        <div className="mt-6 ">
            <Image
            src={imageUrl}
            className="  h-5/6 object-contain w-full rounded-lg"
            />
        </div>
    )
    
}

export default FeatureImageContainer