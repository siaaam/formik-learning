import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import TextError from "./TextError";

const initialValues = {
  name: "",
  email: "",
  channel: "",
  comments: "",
  address: "",
  social: {
    facebook: "",
    twitter: "",
  },
};

const validationSchema = Yup.object({
  name: Yup.string()
    .max(15, "cannot go higher than 15 character")
    .required("required"),
  email: Yup.string().email("Invalid Email Address").required("required"),
  channel: Yup.string().required("required"),
  comments: Yup.string().required("Required"),
  address: Yup.string().required("required"),
});

const onSubmit = (values) => {
  console.log(values);
};

const YoutubeForm = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <div className="p-12">
        <div className="w-[500px] mx-auto">
          <Form>
            <div className="mb-3">
              <label className="block" htmlFor="name">
                Name
              </label>
              <Field
                className="border border-green-500 w-full focus:outline-none px-3 py-3 rounded-md shadow-md"
                type="text"
                id="name"
                name="name"
              />
              <ErrorMessage name="name" component={TextError} />
            </div>
            <div className="mb-3">
              <label className="block" htmlFor="email">
                Email
              </label>
              <Field
                className="border border-green-500 w-full focus:outline-none px-3 py-3 rounded-md shadow-md"
                type="email"
                id="email"
                name="email"
              />
              {/* render props method */}
              <ErrorMessage name="email">
                {(errMsg) => {
                  return <p className="text-red-500">{errMsg}</p>;
                }}
              </ErrorMessage>
            </div>
            <div className="mb-3">
              <label className="block" htmlFor="channel">
                Channel
              </label>
              <Field
                className="border border-green-500 w-full focus:outline-none px-3 py-3 rounded-md shadow-md"
                type="text"
                id="channel"
                name="channel"
                placeholder="Youtube channel name"
              />
              <ErrorMessage name="channel" />
            </div>
            <div className="mb-3">
              <label className="block" htmlFor="comments">
                Comments
              </label>
              <Field
                as="textarea"
                className="border border-green-500 w-full focus:outline-none px-3 py-3 rounded-md shadow-md"
                type="text"
                id="comments"
                name="comments"
              />
              <ErrorMessage name="comments" />
            </div>
            <div className="mb-3">
              <label htmlFor="address">Address</label>
              <Field type="text" name="address" id="address">
                {(props) => {
                  const { field, form, meta } = props;
                  console.log(meta);
                  return (
                    <div>
                      <input
                        className="border border-green-500 w-full focus:outline-none px-3 py-3 rounded-md shadow-md"
                        type="text"
                        id="address"
                        {...field}
                      />
                      {meta.touched && meta.error ? <p>{meta.error}</p> : null}
                    </div>
                  );
                }}
              </Field>
            </div>

            <div className="mb-3">
              <label htmlFor="facebook">Facebook Profile</label>
              <Field
                className="border border-green-500 w-full focus:outline-none px-3 py-3 rounded-md shadow-md"
                type="text"
                id="facebook"
                name="social.facebook"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="twitter">Twitter Profile</label>
              <Field
                className="border border-green-500 w-full focus:outline-none px-3 py-3 rounded-md shadow-md"
                type="text"
                id="twitter"
                name="social.twitter"
              />
            </div>

            <button
              className="rounded-md border px-4 py-2 bg-gray-400 hover:bg-gray-500 text-white hover:text-slate-100 w-full"
              type="submit"
            >
              Submit
            </button>
          </Form>
        </div>
      </div>
    </Formik>
  );
};

export default YoutubeForm;
