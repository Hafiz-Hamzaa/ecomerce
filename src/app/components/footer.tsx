import Image from "next/image"
import top from '@/app/assets/top.png'
import top01 from '@/app/assets/top01.png'
import top02 from '@/app/assets/top02.png'
import top03 from '@/app/assets/top03.png'
import top04 from '@/app/assets/top04.png'
export default function Footer() {
    return(
        <div>
            <div className="bg-[black] flex justify-center flex-wrap gap-20 mt-20">
                <Image src={top} alt="footer" className="pt-10 w-[150px] h-[200px]"/>
                <Image src={top01} alt="footer" className="pt-10 w-[150px] h-[220px]"/>
                <Image src={top02} alt="footer" className="pt-10 w-[120px] h-[260px]"/>
                <Image src={top03} alt="footer" className="pt-10 w-[90px] h-[270px]"/>
                <Image src={top04} alt="footer" className="pt-10 w-[150px] h-[220px]"/>
            </div>
        </div>
    )
}