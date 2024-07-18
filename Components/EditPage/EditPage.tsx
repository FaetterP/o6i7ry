import { useFormik } from "formik";
import EditLinks from "./EditLinks";
import EditContent from "./EditContent";
import axios from "axios";

export default function EditPage(props: {
  content: string;
  moreContent?: string;
  links?: {
    name: string;
    link: string;
  }[];

  host: string;
  endpoint: string;
  page: string;
}) {
  const { page, host, endpoint, ...contentFromProps } = props;
  const formik = useFormik({
    initialValues: {
      links: [],
      moreContent: "",
      ...contentFromProps,
    },
    onSubmit: (values) => {
      axios.patch(`${host}${endpoint}`, { page, data: values });
    },
  });

  function addLink() {
    formik.setValues({
      ...formik.values,
      links: [...formik.values.links!, { name: "", link: "" }],
    });
  }

  return (
    <form onSubmit={formik.handleSubmit}>
      <section>
        <EditContent
          name="content"
          content={formik.values.content}
          formik={formik}
        />
      </section>
      <hr />
      <section>
        <EditContent
          name="moreContent"
          content={formik.values.moreContent}
          formik={formik}
        />
      </section>
      <hr />
      <section>
        <EditLinks links={formik.values.links} formik={formik} />
        <button onClick={addLink}>Добавить ссылку</button>
      </section>

      <button type="submit">Save form</button>
    </form>
  );
}
