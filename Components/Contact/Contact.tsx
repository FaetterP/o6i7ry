import { useFormik } from "formik";
import styles from "./Contact.module.scss";
import axios from "axios";
import * as Yup from "yup";

export default function Contact() {
  const validationSchema = Yup.object({
    name: Yup.string().required("Имя обязательно для заполнения"),
    email: Yup.string()
      .email("Введите корректный email")
      .required("Email обязателен для заполнения"),
    subject: Yup.string().required("Тема обязательна для заполнения"),
    message: Yup.string()
      .required("Сообщение обязательно для заполнения")
      .max(1000, "Сообщение не должно превышать 1000 символов"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        if (formik.isValid) {
          const response = await axios.post("/api/mail/send", values);
          console.log(response);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="wrapper">
      <section className={styles.parentContainer}>
        <div className={styles.textContainer}>
          <h1>Get in touch</h1>
          <p>
            Do you fancy saying hi to me or you want bug report and you need my
            help? Feel free to contact me
          </p>
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
              className={`${styles.input} ${styles.text}`}
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
              className={`${styles.input} ${styles.email}`}
              placeholder="email"
              maxLength={100}
            />
            <input
              inputMode="text"
              autoComplete="text"
              name="subject"
              onChange={formik.handleChange}
              value={formik.values.subject}
              className={`${styles.input} ${styles.subject}`}
              placeholder="subject"
              maxLength={100}
            />
            <div>
              <textarea
                inputMode="text"
                autoComplete="text"
                name="message"
                onChange={formik.handleChange}
                onBlur={(event) => {
                  const message = event.target.value.substring(0, 1000);
                  formik.setFieldValue("message", message);
                }}
                value={formik.values.message}
                className={`${styles.input} ${styles.message}`}
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
      </section>
    </div>
  );
}
