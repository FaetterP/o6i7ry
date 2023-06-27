import Image from 'next/image'
import logoImage from '../../../public/Logo.svg'

export default function Logo() {
  return (
    <Image
      src={logoImage}
      alt="Picture of the author"
      width={112.5}
      height={34.5}
    />
  );
}