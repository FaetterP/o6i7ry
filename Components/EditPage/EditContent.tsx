type PropsType = {
  name: string;
  content: string;
  formik: any;
};

export default function EditContent({ name, content, formik }: PropsType) {
  return (
    <div>
      <textarea name={name} onChange={formik.handleChange} value={content} />
    </div>
  );
}
