import Photo1 from "../../assets/pic/Photo1.jpg";
// import Photo2 from "../../assets/pic/photo2.jpg";
// import Photo3 from "../../assets/pic/photo3.jpg";
import { Slide, Fade } from "react-awesome-reveal";

const CardsData = [
    {
        id: 1,
        img: Photo1,
        title: "Sunset",
        desc: "Each character will appear one by one",
    },
    {
        id: 2,
        img: Photo1,
        title: "Dog",
        desc: "Each character will appear one by one",
    },
    {
        id: 3,
        img: Photo1,
        title: "Sunrise",
        desc: "Each character will appear one by one",
    },
];
const AnimatedCard = () => {
    return (
        <div className="container mx-auto">
            {/* cards section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-6">
                {CardsData.map(({ id, img, title, desc }) => {
                    return (
                        <div
                            key={id}
                            className="text-white shadow-md rounded-lg overflow-hidden relative group"
                        >
                            <div className="bg-black w-full max-w-[300px] h-[350px]">

                                {/* <div className="absolute font-bold bottom-10 left-4 ">
                {title}
              </div> */}
                                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 to-transparent p-4">
                                    <div className="font-bold">{title}</div>
                                </div>

                                <img
                                    src={img}
                                    alt=""
                                    className="h-full w-full object-cover rounded-lg bg-contain"
                                />

                            </div>
                            {/* overlay section */}
                            <div className="absolute left-0 bottom-[-100%] opacity-0 group-hover:opacity-100 group-hover:bottom-[0] p-4 w-full h-full bg-black/60 group-hover:backdrop-blur-sm duration-500">
                                <div className="space-y-4">
                                    <Slide cascade>
                                        <h1 className="text-3xl font-bold">{title}</h1>
                                        <Fade cascade damping={0.05}>
                                            {desc}
                                        </Fade>
                                        <div>
                                            <button className="border border-white px-4 py-2 rounded-lg hover:bg-black/20 duration-300">
                                                View
                                            </button>
                                        </div>
                                    </Slide>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default AnimatedCard;