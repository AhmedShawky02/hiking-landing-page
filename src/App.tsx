import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Section from "./Components/Section/Section";

import image_1 from "./assets/Section_Images/image_1.png"
import image_2 from "./assets/Section_Images/image_2.png"
import image_3 from "./assets/Section_Images/image_3.png"

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Section
        section_number="01"
        h3_subtitle="GEt Started"
        h2_title="What level of  hiker are you?"
        p_description="Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker?"
        button_label="read more"
        image={image_1}
      />
      <Section
        section_number="02"
        h3_subtitle="Hiking Essentials"
        h2_title="Picking the right Hiking Gear!"
        p_description="The nice thing about beginning hiking is that you don’t really need any special gear, you can probably get away with things you already have. Let’s start with clothing. A typical mistake hiking beginners make is wearing jeans and regular clothes, which will get heavy and chafe wif they get sweaty or wet."
        button_label="read more"
        image={image_2}
        image_dir_right
      />
      <Section
        section_number="03"
        h3_subtitle="where you go is the key"
        h2_title="Understand Your Map & Timing"
        p_description="To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, I’ll read the guide and know that say, in a mile, I make a right turn at the junction.."
        button_label="read more"
        image={image_3}
        nomargin
      />
      <Footer />
    </>
  );
}

export default App;