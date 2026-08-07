interface CooperationHeadingProps {
  sectionName?: string
  headings?: Array<{ title?: string; span?: string }>
  center?: boolean
}

const CooperationHeading: React.FC<CooperationHeadingProps> = ({ sectionName, headings = [], center }) => {
  return (
    <>
      <div className={`flex items-center ${center ? 'justify-center' : ''}`}>
        <svg
          className="text-primary-2 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          width="5"
          height="6"
          viewBox="0 0 5 6"
          fill="none"
        >
          <circle cx="2.5" cy="3" r="2.5" fill="#A8FF53" />
        </svg>
        <span className="text-linear-4 flex items-center">{sectionName}</span>
      </div>

      {headings.map((heading, index) => (
        <h3
          key={index}
          className={`mb-0 text-[23px] leading-tight font-medium md:text-[35px] ${center ? 'text-center' : ''}`}
        >
          {heading.title} <span className="text-neutral-300">{heading.span}</span>
        </h3>
      ))}
    </>
  )
}

export default CooperationHeading
