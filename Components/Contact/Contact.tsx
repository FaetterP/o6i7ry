import { useFormik } from "formik";
import styles from "./Contact.module.scss";

export default function Contact() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="wrapper">
        <div className={styles.textContainer}>
          <h1>Get in touch</h1>
          <h2>
            Do you fancy saying hi to me or you want bug report and you need my
            help? Feel free to contact me
          </h2>
        </div>
        <div className={styles.inputContainer}>
          <textarea
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            className={styles.textarea}
            placeholder="name"
          />
          <textarea
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            className={styles.textarea}
            placeholder="email"
          />
          <textarea
            name="subject"
            onChange={formik.handleChange}
            value={formik.values.subject}
            className={styles.textarea}
            placeholder="subject"
          />
          <div>
            <textarea
              name="message"
              onChange={formik.handleChange}
              onBlur={(event) => {
                const message = event.target.value.substring(0, 1000);
                formik.setFieldValue("message", message);
              }}
              value={formik.values.message}
              className={`${styles.textarea} ${styles.message}`}
              placeholder="message"
              maxLength={1000}
            />
            <div
              className={`${styles.counter} ${
                formik.values.message.length >= 1000
                  ? styles["counter--error"]
                  : ""
              }`}
            >
              {formik.values.message.length}/1000
            </div>
          </div>
          <button type="submit" className={styles.button}>
            Отправить
          </button>
        </div>
      </div>
    </form>
  );
}
