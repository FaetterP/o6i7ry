import { useFormik } from "formik";
import EditLinks from "./EditLinks";
import EditContent from "./EditContent";
import UnityTutorial from "Components/Unity/UnityTutorial";
import axios from "axios";

export default function EditPage(props: {
  content: string;
  moreContent?: string;
  links?: {
    name: string;
    link: string;
  }[];

  host: string;
  page: string;
}) {
  const { page, host, ...contentFromProps } = props;
  const formik = useFormik({
    initialValues: {
      links: [],
      moreContent: "",
      ...contentFromProps,
    },
    onSubmit: (values) => {
      axios.patch(`${host}/api/firebase/saveUnity`, { page, data: values });
    },
  });

  function addLink() {
    formik.setValues({
      ...formik.values,
      links: [...formik.values.links!, { name: "", link: "" }],
    });
  }

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <EditContent
            name="content"
            content={formik.values.content}
            formik={formik}
          />
        </div>
        <hr />
        <div>
          <EditContent
            name="moreContent"
            content={formik.values.moreContent}
            formik={formik}
          />
        </div>
        <hr />
        <div>
          <EditLinks links={formik.values.links} formik={formik} />
          <button onClick={addLink}>add link</button>
        </div>

        <button type="submit">Save form</button>
      </form>

      <UnityTutorial {...formik.values} />
    </div>
  );
}
