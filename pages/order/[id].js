import { getDetailPayment } from "@/services/Payment";
import React from "react";
export async function getServerSideProps(context) {
  const reference = context.query.id;
  const data = await getDetailPayment(reference);
  return {
    props: { data },
  };
}
export default function CekoutMenu({ data }) {
  console.log(data);
  return (
    <div>
      <h1>HALLO </h1>
    </div>
  );
}
