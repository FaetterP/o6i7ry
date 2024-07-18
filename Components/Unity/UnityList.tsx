import ListItem from "./ListItem";
import styles from "./UnityList.module.scss";

export default function UnityList() {
  return (
    <>
      <div className="wrapper">
        <section className={styles.list}>
          <article>
            <h2>Начало работы с Unity</h2>
            <ListItem title="Установка Unity, создание проекта" link="install-unity" icon="get_app" />
            <ListItem title="Основные окна" link="base-windows" icon="tab" />
            <ListItem title="Фишечки редактора" link="editor-chips" icon="auto_fix_high" />
            <ListItem title="Создание простейшей сцены" link="simple-scene" icon="view_in_ar" />
          </article>
          <article>
              <h2>Введение в код</h2>
              <ListItem title="Установка пакета для VisualStudio" link="vs-addon" icon="get_app" />
              <ListItem title="Начало кодинга" link="first-code" icon="code" />
              <ListItem title="Обработка нажатий" link="input" icon="keyboard" />
              <ListItem title="Добавление полей в инспектор" link="fields-inspector" icon="tab" />
              <ListItem title="Создание объектов" link="create-object" icon="add_home_work" />
              <ListItem title="Фишечки кода" link="code-chips" icon="auto_fix_high" />
          </article>
          <article>
            <h2>Работа с освещением</h2>
            <ListItem title="Базовое освещение" link="light" icon="lightbulb" />
            <ListItem title="Запекание освещения" link="light-bake" icon="lightbulb" />
            <ListItem title="Light probe" link="light-probe" icon="lightbulb" />
          </article>
          <article>
            <h2>Terrain</h2>
            <ListItem title="Рельеф" link="terrain" icon="terrain" />
            <ListItem title="Раскрашивание террейна" link="terrain-paint" icon="format_paint" />
            <ListItem title="Настройки террейна" link="terrain-settings" icon="settings" />
            <ListItem title="Ветер" link="wind" icon="air" />
            <ListItem title="Кастомные деревья" link="tree" icon="park" />
          </article>
          <article>
            <h2>Текстуры</h2>
            <ListItem title="Спрайты" link="sprite" icon="image" />
            <ListItem title="Атласы" link="atlas" icon="auto_awesome_mosaic" />
            <ListItem title="Tilemap" link="tilemap" icon="grid_on" />
            <ListItem title="Материалы" link="material" icon="tonality" />
            <ListItem title="Skybox" link="skybox" icon="filter_drama" />
          </article>
          <article>
            <h2>Шейдеры</h2>
            <ListItem title="Шейдеры" link="shader-basics" icon="gradient" />
            <ListItem title="Переменные в шейдерах" link="shader-variables" icon="numbers" />
            <ListItem title="Пост-эффекты" link="shader-post-effect" icon="video_camera_back" />
            <ListItem title="Изменение материала из кода" link="shader-update" icon="code" />
          </article>
          <article>
            <h2>Асинхронное выполнение</h2>
            <ListItem title="Корутины" link="coroutine" icon="access_time" />
            <ListItem title="События" link="event" icon="play_for_work" />
            <ListItem title="UniRx" link="unirx" icon="rocket_launch" />
            <ListItem title="Jobs" link="job" icon="account_tree" />
          </article>
          <article>
            <h2>Физика</h2>
            <ListItem title="Коллайдеры" link="collider" icon="crop_square" />
            <ListItem title="Физика" link="rigidbody" icon="diversity_2" />
            <ListItem title="Столкновение объектов" link="collider-enter" icon="compare_arrows" />
            <ListItem title="Joint" link="joint" icon="link" />
            <ListItem title="Эффекторы" link="effector" icon="landslide" />
          </article>
          <article>
            <h2>Анимации</h2>
            <ListItem title="Анимация" link="animation" icon="video_file" />
            <ListItem title="Аниматор" link="animator" icon="animation" />
            <ListItem title="Кривые" link="curve" icon="show_chart" />
            <ListItem title="Костная анимация" link="bone-animation" icon="timeline" />
            <ListItem title="Инверсная кинематика" link="inverse-kinematics" icon="insights" />
          </article>
          <article>
            <h2>Звуки</h2>
            <ListItem title="Звуки" link="audio" icon="video_file" />
            <ListItem title="Audio mixer" link="audio-mixer" icon="animation" />
          </article>
          <article>
            <h2>UI</h2>
            <ListItem title="Canvas" link="canvas" icon="branding_watermark" />
            <ListItem title="Маска" link="mask" icon="tab_unselected" />
          </article>
          <article>
            <h2>Визуальные эффекты</h2>
            <ListItem title="Частицы" link="particles" icon="auto_awesome" />
            <ListItem title="Post-Processing" link="post-processing" icon="camera" />
            <ListItem title="HDRP" link="hdrp" icon="hdr_on" />
          </article>
          <article>
            <h2>Релиз</h2>
            <ListItem title="Сборка" link="build" icon="build" />
            <ListItem title="Переход между сценами" link="change-scene" icon="login" />
            <ListItem title="Управление для телефона" link="input-touch" icon="touch_app" />
            <ListItem title="Input System" link="input-system" icon="keyboard_alt" />
            <ListItem title="Bundle" link="bundle" icon="backpack" />
            <ListItem title="Сохранение" link="saving" icon="save" />
          </article>
          <article>
            <h2>Прочее</h2>
            <ListItem title="Параллакс" link="parallax" icon="compare_arrows" />
            <ListItem title="Префабы" link="prefab" icon="view_in_ar" />
            <ListItem title="Scriptable Object" link="scriptable-object" icon="view_in_ar" />
            <ListItem title="Object pooling" link="object-pooling" icon="inventory" />
            <ListItem title="LOD" link="lod" icon="qr_code" />
            <ListItem title="Скриншоты" link="screenshot" icon="screenshot_monitor" />
            <ListItem title="Timeline" link="timeline" icon="auto_awesome_motion" />
            <ListItem title="NavMesh" link="nav-mesh" icon="timeline" />
            <ListItem title="Raycast" link="raycast" icon="podcasts" />
            <ListItem title="Gizmos" link="gizmos" icon="query_stats" />
          </article>
          <article>
            <h2>Кастомные инструменты редактора</h2>
            <ListItem title="Запуск кода в инспекторе" link="run-code-in-inspector" icon="launch" />
          </article>
          <article>
            <h2>Best practices</h2>
            <ListItem title="ООП" link="oop" icon="code" />
            <ListItem title="SOLID" link="solid" icon="data_object" />
            <ListItem title="Чистые функции" link="pure-functions" icon="code_off" />
            <ListItem title="Математика" link="math" icon="functions" />
            <ListItem title="Zenject" link="zenject" icon="functions" />
          </article>
        </section>
      </div>
    </>
  );
}
