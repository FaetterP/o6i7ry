import Link from "next/link";
import { Project } from "types/general";
import ProjectBlock from "./ProjectBlock";
import styles from "./Projects.module.scss";

export default function Projects() {
  const projects: Project[] = [
    {
      icon: "https://i.ibb.co/SfHKt92/OLN.jpg",
      name: "OLN",
      type: "Resourcepack",
      urlName: "oln",
    },
    {
      icon: "https://i.ibb.co/8zf6f3R/Lilys-Well.jpg",
      name: "Lily's Well Русификатор",
      type: "Rus",
      urlName: "lilys-well",
    },
    {
      icon: "https://i.ibb.co/t3WbXVX/Disillusion.jpg",
      name: "Disillusion Русификатор",
      type: "Rus",
      urlName: "disillusion",
    },
        {
      icon: "https://i.ibb.co/bndg2Bc/Disillusion-ST.png",
      name: "Disillusion ST Русификатор",
      type: "Rus",
      urlName: "disillusion-st",
    },
    {
      icon: "https://i.ibb.co/SvQ0y4N/SkyFyre.jpg",
      name: "SkyFyre",
      type: "Unity",
      urlName: "skyfyre",
    },
    {
      icon: "https://svgshare.com/i/18Wv.svg",
      name: "OsuEditor Android",
      type: "Unity",
      urlName: "osu-editor",
    },
    {
      icon: "https://svgshare.com/i/18Wb.svg",
      name: "Unity tutorial",
      type: "Tutorial",
      urlName: "unity",
    },
    {
      icon: "https://avatars.steamstatic.com/499d7ec1f1704e210b3da39bf1a8c5df45ac4485_medium.jpg",
      name: "NieR Automata map",
      type: "Minecraft",
      urlName: "nier-automata",
    },
    {
      icon: "https://i.ibb.co/xzPCBj3/AI.png",
      name: "AI-Draw",
      type: "AI",
      urlName: "ai-anime",
    },
    {
      icon: "https://i.ibb.co/xzPCBj3/AI.png",
      name: "CNN-GAN",
      type: "AI",
      urlName: "cnn-gan",
    },
    {
      icon: "https://i.ibb.co/GPmvsmH/Genshin-Tarot.png",
      name: "Genshin Tarot",
      type: "Game",
      urlName: "genshin-tarot",
    },
    {
      icon: "https://ftbwiki.org/images/thumb/5/55/Block_Teru_Teru_Bozu.png/192px-Block_Teru_Teru_Bozu.png",
      name: "Minecraft tutorials",
      type: "Minecraft",
      urlName: "mods-guide",
    },
    {
      icon: "https://pnggallery.com/wp-content/uploads/opensearch-logo-03.png",
      name: "OpenSearch Sequelize",
      type: "JS",
      urlName: "opensearch-sequelize",
    },
    {
      icon: "https://i.ibb.co/tzhP85H/Sequelize.png",
      name: "Sequelize Models Validator",
      type: "JS",
      urlName: "sequelize-models-validator",
    },
  ];

  return (
    <div className="wrapper">
      <section className={styles.projects}>
        {projects.map((item) => (
          <article>
            <Link key={item.name} href={`/projects/${item.urlName}`}>
              <ProjectBlock
                title={item.name}
                type={item.type}
                src={item.icon}
              />
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
}
