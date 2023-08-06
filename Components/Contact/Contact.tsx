import { useFormik } from "formik";
import styles from "./Contact.module.scss";
import axios from "axios";

export default function Contact() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    onSubmit: async (values) => {
      try {
        const response = await axios.post("/api/mail/send", values);
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <div className="wrapper">
      <div className={styles.parentContainer}>
        <div className={styles.textContainer}>
          <h1>Get in touch</h1>
          <h2>
            Do you fancy saying hi to me or you want bug report and you need my
            help? Feel free to contact me
          </h2>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className={styles.inputContainer}>
            <input
              type="text"
              inputMode="text"
              autoComplete="nickname"
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
              className={styles.textarea}
              placeholder="name"
              maxLength={100}
            />
            <input
              type="email"
              inputMode="email"
              autoComplete="email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              className={styles.textarea}
              placeholder="email"
              maxLength={100}
            />
            <input
              type="text"
              inputMode="text"
              autoComplete="text"
              name="subject"
              onChange={formik.handleChange}
              value={formik.values.subject}
              className={styles.textarea}
              placeholder="subject"
              maxLength={100}
            />
            <div>
              <input
                type="text"
                inputMode="text"
                autoComplete="text"
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
                    ? styles.counterError
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
        </form>
      </div>
    </div>
  );
}
