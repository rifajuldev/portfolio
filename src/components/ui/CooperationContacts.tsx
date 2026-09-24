import { contactInfo, cooperationAvatarUrl, hero, socialLinkList } from '@/constants'
import Image from 'next/image'
import { FaLinkedin } from 'react-icons/fa'
import { RiArrowRightUpLine, RiFileList3Line, RiGithubFill, RiMailLine } from 'react-icons/ri'
import PopButton from './PopButton'

const CooperationContacts = () => {
  const resumeUrl = hero.hero_pdf_url || '/Rifajul_Islam_Resume.pdf'
  const githubLink =
    socialLinkList.find((s) => s.name.toLowerCase().includes('github'))?.link || 'https://github.com/rifajuldev'
  const linkedinLink =
    socialLinkList.find((s) => s.name.toLowerCase().includes('linkedin'))?.link ||
    'https://www.linkedin.com/in/rifajuldev'

  return (
    <div className="mt-8 flex flex-col items-center gap-6 md:flex-row md:gap-8">
      {/* Avatar with status indicator */}
      <div className="border-border-1 relative z-0 h-31 w-31 shrink-0 rounded-full border">
        <div className="border-border-1 absolute top-1/2 left-1/2 z-10 h-20.5 w-20.5 -translate-x-1/2 -translate-y-1/2 rounded-full border">
          <div className="absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
            <div className="relative h-10 w-10">
              <Image
                className="h-full w-full rounded-full object-cover"
                width={40}
                height={40}
                src={cooperationAvatarUrl}
                alt="Rifajul Islam"
              />
              <svg
                className="text-primary-2 absolute inset-e-0 bottom-0"
                xmlns="http://www.w3.org/2000/svg"
                width="9"
                height="9"
                viewBox="0 0 5 6"
                fill="none"
              >
                <circle cx="2.5" cy="3" r="2.5" fill="#A8FF53"></circle>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* 3D Animated Pop Buttons Row - exactly matching reference design */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 md:justify-start">
        {/* GitHub */}
        <PopButton href={githubLink} target="_blank" variant="icon" aria-label="GitHub" title="GitHub">
          <RiGithubFill size={25} />
        </PopButton>

        {/* LinkedIn */}
        <PopButton href={linkedinLink} target="_blank" variant="icon" aria-label="LinkedIn" title="LinkedIn">
          <FaLinkedin size={23} />
        </PopButton>

        {/* Resume */}
        <PopButton href={resumeUrl} target="_blank" download={true} variant="icon" aria-label="Resume" title="Resume">
          <RiFileList3Line size={24} />
        </PopButton>

        {/* Email */}
        <PopButton href={`mailto:${contactInfo.email}`} variant="icon" aria-label="Email" title="Email">
          <RiMailLine size={24} />
        </PopButton>

        {/* Connect Me Animated Button */}
        <PopButton href="#contact" className="gap-2" aria-label="Connect with me" title="Connect with me">
          <span>CONNECT ME</span>
          <RiArrowRightUpLine size={18} />
        </PopButton>
      </div>
    </div>
  )
}

export default CooperationContacts
