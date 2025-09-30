"use client";
import Link from "next/link";
import "./globals.css";

export default function Navbar() {
  return (
    <div className="latarr">
    <nav className={"navbar"}>
      <div className="logo">
  <img src="yes.jpeg" className="fot" />
</div>
      <ul className={"navLinks"}>
        <li><Link href="/">HOME</Link></li>
        <li><Link href="/about">ABOUT</Link></li>
        <li><Link href="/news">NEWS</Link></li>
        <li><Link href="/contact">CONTACT</Link></li>
        <li>
        </li>
      </ul>
    </nav>
     <div className="namaa"> <h2> Halo saya, </h2></div>
     <div className="namaaa"> <h2>Alfiraji Halyb </h2></div>
     <div className="namaaaa"> <h2> Dari XI FRONTEND</h2></div>
    <div className="deskripsi"><p>  zaidan sirmannur</p></div>
   <div className="circle-container">
  <div className="circle"></div>
  <div className="circle"></div>
  <div className="circle"></div>
  <div className="circle"></div>
</div>
 <div className="tombol"> <h1 style={{marginTop:9}} className="hanya"> More About Me</h1> </div>
 <div className="gajo">
 <img src="personal.jpg" alt="ya" className="avatar" />
 </div>
  <div className="kedua"> 
    <div className="bah"> <h2>About Me</h2></div>
    <div className="bahh"> <p>Ohh (Vibez)
Pa pa ri, pi pa pa ri pa
Pa pa ri, pi pa pa ri pa
Pa pa ri, pa
Sabi girl no dey too like talk
Animals dey in human form
Padi man nobody like work
But you must hustle if you wan chop
E no finish, dem wan fight us
If them they run them no fit catch up
I no dey form say I too righteous
No come dey form say you too like us
Me no getty time for the hate and the bad energy
Got mi mind on my money
       </p> 
    </div>
  </div>
  <div className="juken">
     <img src="profile.png" alt="jugen" className="avatar2" />
  </div>
  <div className="tihga">  
    <div className="ahlian">
      <h1 className="judul"> Ahmad </h1> 
      <p className="dess"> Take a look inside your heart, is there any room for me?
I won't have to hold my breath 'til you get down on one knee
Because you only want to hold me when I'm looking good enough
Did you ever feel me?, Would you ever picture us?
Every time I pull my hair, well, it's only out of fear
That you'll find me ugly and one day you'll disappear because
What's the point of crying? It was never even love
Did you ever want me?, Was I ever good enough?</p>
    <div className="tomboll"> 
      <h1 style={{marginTop:9}}> Contact Me</h1>
       </div>
       </div>
       <div className="ahlian">
      <h1 className="judul"> Zaidan </h1> 
      <p className="dess"> Record man play my song on the radio
You too busy tryna find that blue-eyed soul
I let my black hair grow and my weed smoke
And I swear too much on the regular
We gon' let them hits fly, we gon' let it go
If it ain't XO then it gotta go
I just won a new award for a kids show
Talkin' 'bout a face numbin' off a bag of blow
I'm like goddamn bitch, I am not a Teen Choice.</p>
    <div className="tomboll"> 
      <h1 style={{marginTop:9}}> Contact Me</h1>
       </div>
       </div>
       <div className="ahlian">
      <h1 className="judul"> Sirmannur </h1> 
      <p className="dess"> I would die for you, I would lie for you
Keep it real with you, I would kill for you
My baby
I'm just sayin', yeah
I would die for you, I would lie for you
Keep it real with you, I would kill for you
My baby
Na-na-na, na-na-na, na-na, ooh
Even though we're goin' through it
And it makes you feel alone
Just know that I would die for you
Baby, I would die for you, yeah.</p>
    <div className="tomboll"> 
      <h1 style={{marginTop:9}}> Contact Me</h1>
       </div>
       </div>











  </div>
    







    </div>
  );
}