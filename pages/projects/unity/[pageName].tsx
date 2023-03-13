import FirstCode from "Components/UnityTutorial/UnityTutorialPage";
import { GetServerSidePropsContext } from "next";
import { getUnityTutorial } from "services/firebase";

export default function FirstCodePage(props: any) {
  return (
    <>
      <FirstCode {...props} />
    </>
  );
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const { pageName } = ctx.query;
  //const page = await getUnityTutorial(pageName as string);

  const page = {
    title: "title",
    content: [
      [
        {
          type: "text",
          text: "Поведение объекта контролируется ",
        },
        { type: "b", text: "компонентами" },
        {
          type: "text",
          text: ", висящими на нём. Если мы повесим компонент Rigidbody, объект получит физику, повесим Light - начнёт светиться и т.д.",
        },
        { type: "br" },
        {
          type: "text",
          text: "Но мы можем писать свои компоненты, которые будут что-то делать с объектом.",
        },
      ],
      [
        {
          type: "text",
          text: "Для этого нужно в окне Project нажать ПКМ и создать скрипт.",
        },
        {type:"img", src:"https://i.ibb.co/pj67Wv9/Picture1.png"}
      ],
    ],
  };

  return {
    props: page,
  };
}
