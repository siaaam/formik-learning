import React from "react";
import { useFormik } from "formik";
// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues

const validate = (values) => {
  const { name, email, channel } = values;
  const errors = {};
  if (!name) {
    errors.name = "required name";
  } else if (name.length < 10) {
    errors.name = "name must be 10 characters long";
  }

  if (!email) {
    errors.email = "required email";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errors.email = "invalid email address";
  }

  if (!channel) {
    errors.channel = "required channel";
  } else if (channel.length > 20) {
    errors.channel = "long channel. we dont need this";
  }

  return errors;
};

const YoutubeForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      channel: "",
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  console.log(formik);

  return (
    <div className="p-12">
      <div>
        <form onSubmit={formik.handleSubmit}>
          <div>
            <label className="block" htmlFor="name">
              Name
            </label>
            <input
              className="border"
              type="text"
              id="name"
              name="name"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            {formik.errors.name ? (
              <p className="text-red-400">{formik.errors.name}</p>
            ) : null}
          </div>
          <div>
            <label className="block" htmlFor="email">
              Email
            </label>
            <input
              className="border"
              type="email"
              id="email"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.errors.email ? (
              <p className="text-red-400">{formik.errors.email}</p>
            ) : null}
          </div>
          <div>
            <label className="block" htmlFor="channel">
              Channel
            </label>
            <input
              className="border"
              type="text"
              id="channel"
              name="channel"
              onChange={formik.handleChange}
              values={formik.values.channel}
            />
            {formik.errors.channel ? (
              <p className="text-red-400">{formik.errors.channel}</p>
            ) : null}
          </div>
          <button className="border" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default YoutubeForm;
