import React from 'react'
import CyberBoomerAvatar from "@/app/img/cyberboomer.jpg"
import Image from "next/image";

const AvatarCyberBoomer = () => {
  return (
    <div className="avatar">
        <div className="w-16 rounded">
            <Image
            src={CyberBoomerAvatar}
            alt="CyberBoomerLogo"
            />
        </div>
    </div>
  )
}

export default AvatarCyberBoomer