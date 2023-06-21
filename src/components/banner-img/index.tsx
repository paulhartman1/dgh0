import Image from "next/image"
import profilePic from "../../../public/artistProfile.png"
export default function BannerImg() {
    return (
       <div className="p-1 banner-image-back">
        <Image  className="banner-image"src={profilePic} alt="banner" />
       </div>
    )
}