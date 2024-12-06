import Image from "next/image";
import whislit from '@/app/assets/Wishlist.png'
import cart from '@/app/assets/Cart1 with buy.png'
import user from '@/app/assets/user.png'
import Link from "next/link";


const Navbar = () => {
  return (
    <div>
    <div className="bg-black h-[48px] text-center py-4 text-white">
      Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
    </div>
    <nav className="mt-9 flex gap-[160px]">
        <div className="text-[24px] text-black ml-24 font-bold">Exclusive</div>
        <div className="flex justify-center items-center gap-12">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/signup">Signup</Link>
        </div>
        <div className="bg-[#F5F5F5] w-[343px] h-[38px] rounded py-2 flex justify-center items-center">
          <input type="text" placeholder="What are you looking for?" className="bg-[#F5F5F5] relative right-12 text-[14px] font-normal text-gray-400 text-center"/>
        
        </div>
        <div className="flex gap-4 mr-24">
        <Image src={whislit} alt="logo"/>
        <Image src={cart} alt="logo"/>
        <Image src={user} alt="logo"/>
        </div>
    </nav>
    </div>
  );
};

export default Navbar;
