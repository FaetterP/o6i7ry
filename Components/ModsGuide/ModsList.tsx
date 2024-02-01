import ListItem from "./ListItem";
import styles from "./ModsList.module.scss";

export default function ModsList() {
  return (
    <>
      <div className="wrapper">
        <div className={styles.list}>
          <div>
            <h2>Botania</h2>
            <ListItem title="Небесное начало" link="botania-flowers" icon="local_florist" />
            <ListItem title="Очищающая маргаритка" link="botania-pure" icon="local_florist" />
            <ListItem title="Мана" link="botania-mana" icon="water" />
            <ListItem title="Нужно больше маны" link="botania-mana" icon="waves" />
            <ListItem title="Террасталь" link="botania-terrasteel" icon="dashboard" />
            <ListItem title="Эльфийский обмен" link="botania-elven-trade" icon="transform" />
            <ListItem title="Босс" link="botania-gaia" icon="face" />
            <ListItem title="Гайя 2" link="botania-gaia-2" icon="face_retouching_natural" />
            <ListItem title="Финал" link="botania-endgame" icon="done" />
            <ListItem title="Неизвестные вещи" link="botania-botania-secrets" icon="question_mark" />
          </div>
        </div>
      </div>
    </>
  );
}
