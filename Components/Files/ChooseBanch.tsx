import { useRouter } from "next/router";

export default function ChooseBranch() {
  const router = useRouter();

  function handleChange(event: any) {
    router.push(`/files/OLN/${event.target.value}`);
  }

  return (
    <>
      <select onChange={handleChange}>
        <option>Magic</option>
        <option>HiTech</option>
        <option>TechnoMagic</option>
        <option>Other</option>
      </select>
    </>
  );
}
