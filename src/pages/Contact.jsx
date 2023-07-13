import React from "react";
import { Form, redirect, useActionData } from "react-router-dom";

export default function Contact() {
  const data = useActionData();
  return (
    <div>
      <h3>Contact Us</h3>
      <Form method="post" action="/help/contact">
        <input type="email" name="email" placeholder="Enter Name" required />
        <br /> <br />
        <textarea
          name="textarea"
          id=""
          cols="30"
          rows="3"
          placeholder="Enter Question"
          required
        ></textarea>
        {data && data.error && <p>{data.error}</p>}
        <br />
        <br />
        <button>Submit</button>
      </Form>
    </div>
  );
}

export const contactAction = async ({ request }) => {
  const data = await request.formData();
  console.log(request);
  const session = {
    email: data.get("email"),
    text: data.get("textarea"),
  };
  console.log(session);

  // send a post request
  if (session.text.length < 10) {
    return { error: "More than 10 characters are allowed" };
  }

  // redirect the user
  return redirect("/");
};
