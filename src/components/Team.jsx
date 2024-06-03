import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const Team = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    rtl: false,
  };

  return (
    <div>
      <h1 className="font-bold text-[#101010] md:text-6xl text-center">People who trust us!</h1>
      <p className="text-center my-4">They’ve known us & they’ve seen us delivering to you!</p>
      <Slider {...settings}>
        <div>
          <div className="flex items-center gap-10">
            <img className="w-52 h-52 rounded-full" src="https://img.freepik.com/free-photo/close-up-portrait-curly-handsome-european-male_176532-8133.jpg?t=st=1717422027~exp=1717425627~hmac=b830783728787d9612ab0a92a5afadd5a09bcbe4f491226d5e9164d7601620fd&w=1060" alt="" />
            <div>
              <h1 className="text-4xl font-bold">"I’m a strong advocate against consultancy firms.."</h1>
              <p>I’m a strong advocate against consultancy firms that take financial advantage of Bangladeshi students with little knowledge regarding studying in the US. However, DP Tutorials is the only mentoring services with online courses that I feel comfortable forwarding students to during their study abroad knowledge discovery journey. I truly appreciate the work that you’re putting in to help thousands of students!</p>
            </div>
          </div>
          <div className="flex gap-64 mt-4">
            <div></div>
            <div>
              <p className="text-2xl font-bold">Nuzhat Minhaz</p>
              <p className="text-xl">Product Manager, Microsoft. RIT '23</p>
            </div>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-10">
            <img className="w-52 h-52 rounded-full" src="https://img.freepik.com/premium-vector/handsome-businessman-suit_88465-811.jpg?w=740" alt="" />
            <div>
              <h1 className="text-4xl font-bold">"I have witnessed its growth from day one..."</h1>
              <p>"I recommend it to everyone who wants to pursue a foreign education." I have seen DP Tutorials grow rapidly ever since its first SAT Batch started back in 2020. Since then, they have built a very informative online course & maintained high quality SAT cohorts. I recommend it to everyone who wants to pursue a foreign education.</p>
            </div>
          </div>
          <div className="flex gap-64 mt-4">
            <div></div>
            <div>
              <p className="text-2xl font-bold">Seeam Shahid Noor</p>
              <p className="text-xl">Product Manager, IBM. Harvard '19</p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Team;
