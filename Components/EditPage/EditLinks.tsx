type PropsType = {
  links: {
    name: string;
    link: string;
  }[];
  formik: any;
};

export default function EditLinks({ links, formik }: PropsType) {
  if (!links.length) return <></>;

  function removeLink(index: number) {
    formik.setValues({
      ...formik.values,
      links: links!.filter((item, i) => i != index),
    });
  }

  return (
    <section>
      <h2>Ссылки:</h2>
      {links.map((item, index) => (
        <article key={`${index}-${item.link}`}>
          <input
            name={`links.${index}.name`}
            onChange={formik.handleChange}
            value={item.name}
          />
          <input
            name={`links.${index}.link`}
            onChange={formik.handleChange}
            value={item.link}
          />
          <button
            onClick={() => {
              removeLink(index);
            }}
          >
            Удалить ссылку
          </button>
        </article>
      ))}
    </section>
  );
}
