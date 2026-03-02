import Container from "@/app/_components/container";
import { gitURL, linkedInURL } from "@/lib/constants";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import {EnvelopeIcon} from '@heroicons/react/24/solid'
export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 dark:bg-slate-800">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-[2.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Sarah Q. Ortiz
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            
            <a href={linkedInURL}>
              <FontAwesomeIcon icon={faSquareLinkedin} size="xl" />
            </a>
            <a
              href={gitURL}
              className="mx-3 font-bold"
            >
              <FontAwesomeIcon icon={faSquareGithub} size="xl"/>
            </a>
            <a href="mailto:sarahqortiz@gmail.com">
              <EnvelopeIcon className="w-6 h-6 mx-3" />
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
