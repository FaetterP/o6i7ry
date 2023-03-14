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
        { type: "img", src: "https://i.ibb.co/bX04trs/Picture1.png" },
      ],
      [
        {
          type: "text",
          text: "Ну и как-нибудь называем этот файл.",
        },
        { type: "img", src: "https://i.ibb.co/pj67Wv9/Picture1.png" },
        { type: "br" },
        {
          type: "text",
          text: "Далее просто открываем его двойным нажатием ЛКМ.",
        },
        { type: "img", src: "https://i.ibb.co/yydLPmr/Picture3.png" },
        { type: "br" },
        {
          type: "text",
          text: "Здесь уже есть два метода: ",
        },
        { type: "b", text: "Start" },
        { type: "text", text: " и " },
        { type: "b", text: "Update" },
        { type: "text", text: ". Что это такое?" },
      ],
      [
        {
          type: "text",
          text: "В обычном программировании мы пишем код и он исполняется по очереди. В Unity же система скорее событийная. Т.е. Unity где-то там сам что-то делает, вызывает какие-то события, а мы лишь обрабатываем их. Мы можем обрабатывать столкновения, нажатие по объекту и кучу всего, про что поговорим позже. А пока рассмотрим те два метода, которые есть в пустом файле.",
        },
      ],
      [
        { type: "text", text: "Метод " },
        { type: "b", text: "Start" },
        {
          type: "text",
          text: " вызывается перед первым кадром после того, как объект появился на сцене.",
        },
        { type: "br" },
        { type: "text", text: "Метод " },
        { type: "b", text: "Update" },
        {
          type: "text",
          text: " вызывается перед каждым кадром. Для того, чтобы это проверить, напишем скрипт, который выводит в консоль какое-то сообщение.",
        },
        { type: "br" },
        {
          type: "text",
          text: "Чтобы выводить в консоль используется класс Debug.",
        },
        { type: "img", src: "https://i.ibb.co/N1pvXr1/Picture4.png" },
        { type: "bt" },
        { type: "text", text: "И его метод Log." },
        { type: "img", src: "https://i.ibb.co/SwjrDsJ/Picture5.png" },
      ],
      [
        {
          type: "text",
          text: "В итоге код будет выглядеть следующим образом:",
        },
        {
          type: "code",
          code: `public class TestComponent : MonoBehaviour
{
    void Start()
    {
        Debug.Log("Start");
    }

    void Update()
    {
        Debug.Log("Update");
    }
}`,
        },
      ],
      [
        {
          type: "text",
          text: "Далее можно вернуться в Unity. И подождать, пока он соберёт все скрипты.",
        },
        { typ: "img", src: "https://i.ibb.co/m9RYKmC/Picture6.png" },
      ],
      [
        {
          type: "text",
          text: "Теперь можно повесить этот скрипт на какой-то объект.",
        },
        { type: "br" },
        {
          type: "text",
          text: "ВАЖНО: чтобы скрипт можно было использовать как компонент, нужно чтобы соблюдалось три условия:",
        },
        { type: "br" },
        {
          type: "list",
          items: [
            [{ type: "text", text: "Название файла и название класса должны совпадать." }],
            [{ type: "text", text: "Класс должен унаследовать " },{type:"b",text:"MonoBehaviour"},{type:"text",text:"."}],
            [{ type: "text", text: "Должны быть выполнены все " },{type:"b",text:"RequireComponent"},{type:"text",text:"’ы (про них позже)."}],
          ],
        },
      ],
      [
        {type:"text",text:"Добавить скрипт можно как любой другой компонент через Add Component."},
        {type:"img",src:"https://i.ibb.co/qYnpKs6/Picture7.png"}
      ],
      [
        {type:"text",text:"У этого компонента нет никаких полей, нет ничего, поэтому в инспекторе он будет максимально без ничего."},
        {type:"img",src:"https://i.ibb.co/dgHxydd/Picture8.png"}
      ],
      [
        {type:"text",text:"Поскольку наш компонент выводит что-то в консоль, нужно открыть эту саму консоль. Для этого есть хоткей "},
        {type:"b",text:"Ctrl+Shift+C"},
        {type:"text",text:"."},
        {type:"br"},
        {type:"text",text:"И запускаем игру."}
      ]
    ],
  };

  return {
    props: page,
  };
}
