import Image from "next/image"
import about from '@/app/assets/Side Image.png'
import box from '@/app/assets/Frame 870.png'
import box01 from '@/app/assets/Frame 871.png'
import box02 from '@/app/assets/Frame 872.png'
import box03 from '@/app/assets/Frame 873.png'
import men from '@/app/assets/Frame 887.png'
import women from '@/app/assets/Frame 888.png'
import young from '@/app/assets/Frame 889.png'
import icon from '@/app/assets/icons.png'
import icon01 from '@/app/assets/icons01.png'
export default function About () {
    return(
        <div>
            <div className="flex">
                <div className="mt-40 ml-36">
                    <h1 className="text-[54px] font-semibold">Our Story</h1>
                    <p className="mt-16">Launced in 2015, Exclusive is South Asias premier online shopping <br /> makterplace with an active presense in Bangladesh. Supported <br /> by wide range of tailored marketing, data and service solutions, <br /> Exclusive has 10,500 sallers and 300 brands and serves 3 <br /> millioons customers across the region.</p>
                    <p className="mt-12">Exclusive has more than 1 Million products to offer, growing at a <br /> very fast. Exclusive offers a diverse assotment in categories <br /> ranging from consumer.</p>
                </div>
                <Image src={about} alt="about-img" className="mt-10 ml-12 w-[705px] h-[609px]"/>
            </div>

            <div className="flex justify-center gap-6 mt-28">
                <Image src={box} alt="box"/>
                <Image src={box01} alt="box"/>
                <Image src={box02} alt="box"/>
                <Image src={box03} alt="box"/>
            </div>

            <div className="flex justify-center gap-14 mt-20">
    <Image src={men} alt="icon"/>
    <Image src={women} alt="icon"/>
    <Image src={young} alt="icon"/>
    </div>

    <div className="flex justify-center gap-14 mt-20">
    <Image src={icon} alt="icon"/>
    <Image src={icon01} alt="icon"/>
    <Image src={icon01} alt="icon"/>
  </div>


        </div>
    )
}
