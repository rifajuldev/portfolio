import { RiArrowLeftLine, RiArrowRightLine } from 'react-icons/ri'
import { useSwiper } from 'swiper/react'

const ProjectsSliderNavButton = () => {
  const swiper = useSwiper()
  return (
    <div className="absolute right-0 -bottom-4 z-40 hidden gap-2 pr-8 pb-12 md:flex">
      {/* Prev Button */}
      <button
        onClick={() => swiper.slidePrev()}
        className="bg-border-1 text-neutral-0 hover:text-primary-2 shadow-custom-shadow relative flex h-[50px] w-[50px] rounded-[30px] p-[10px] text-[24px]"
      >
        <RiArrowLeftLine size={30} />
      </button>

      {/* Next Button */}
      <button
        onClick={() => swiper.slideNext()}
        className="bg-border-1 text-neutral-0 hover:text-primary-2 shadow-custom-shadow relative flex h-[50px] w-[50px] rounded-[30px] p-[10px] text-[24px]"
      >
        <RiArrowRightLine size={30} />
      </button>
    </div>
  )
}

export default ProjectsSliderNavButton
