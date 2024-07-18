import { FormikProps } from "formik";
import dynamic from "next/dynamic";

type PropsType = {
  name: string;
  content: string;
  formik: FormikProps<any>;
};

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

export default function EditContent({ name, content, formik }: PropsType) {
  return (
    <MDEditor
      value={content}
      onChange={(value) => {
        console.log({ name, value }), formik.setFieldValue(name, value);
      }}
      preview="edit"
    />
  );
}
