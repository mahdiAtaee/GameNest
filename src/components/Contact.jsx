import Button from "../partials/Button";

const ImageClipBox = ({ src, clipClass }) => (
    <div className={clipClass}>
        <img src={src} />
    </div>
)

const Contact = () => {
    return (
        <div id="contact" className="my-20 px-10 min-h-96 w-screen">
            <div className="relative bg-black py-24 text-blue-50 rounded-lg sm:overflow-hidden">
                <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
                    <ImageClipBox src="/img/contact-1.webp" clipClass="contact-clip-path-1" />
                    <ImageClipBox src="/img/contact-2.webp" clipClass="contact-clip-path-2 translate-y-60 lg:translate-y-40" />
                </div>
                <div className="absolute -top-44 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
                    <ImageClipBox src="/img/swordman-partial.webp" clipClass="absolute md:scale-125" />
                    <ImageClipBox src="/img/swordman.webp" clipClass="sword-man-clip-path md:scale-125" />
                </div>
                <div className="flex flex-col items-center text-center">
                    <p className="font-general text-sm md:text-[10px] uppercase">Join us</p>
                    <p className="special-font mt-10 w-full font-zentry text-5xl leading-[0.9] md:text-[6rem]">
                        Let B<b>u</b>ild the <br /> New era of <br /> g<b>a</b>ming t<b>o</b>gether
                    </p>
                    <Button title="Contact Us" ContainerClass="mt-10 cursor-pointer" />
                </div>
            </div>
        </div>
    )
}

export default Contact